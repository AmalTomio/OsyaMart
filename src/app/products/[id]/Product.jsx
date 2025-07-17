"use client";
import React, { useState, useEffect } from "react";

// props.id comes from the page.jsx below
const Product = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    if (id) getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating?.rate}⭐ ({product.rating?.count})
          </p>
          <h3 className="display-6 fw-bold my-4">RM{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
