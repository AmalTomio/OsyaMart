"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // optional if you want styling

const Product = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null); // keep it null for fallback rendering
      } finally {
        setLoading(false);
      }
    };
    if (id) getProduct();
  }, [id]);

  // 🔵 Show loading skeleton
  if (loading)
    return (
      <div className="container my-5 py-5">
        <div className="row py-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6">
            <h4><Skeleton width={150} /></h4>
            <h1><Skeleton height={40} width="80%" /></h1>
            <p className="lead fw-bolder"><Skeleton width={120} /></p>
            <h3><Skeleton width={100} /></h3>
            <p><Skeleton count={5} /></p>
            <div className="d-flex">
              <Skeleton width={120} height={40} className="me-2" />
              <Skeleton width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="d-flex justify-content-center align-items-start min-vh-100 pt-5">
        <div className="alert alert-danger text-center" role="alert">
          Product not found.
        </div>
      </div>
    );

  return (
    <div className="container my-5 py-5">
      <div className="row py-5">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating?.rate}
            <i className="fas fa-star mx-1" style={{ color: "#FFD43B" }}></i>
            ({product.rating?.count})
          </p>
          <h3 className="display-6 fw-bold my-4">RM{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">
            Add to Cart
          </button>
          <Link href="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
