"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/action";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

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
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    if (id) getProduct();
  }, [id]);

  if (loading)
    return (
      <div className="container my-5 py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6">
            <Skeleton height={40} width={200} />
            <Skeleton height={50} />
            <Skeleton height={30} width={150} />
            <Skeleton count={5} />
            <Skeleton height={50} width={200} />
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
    <>
      {/* ✅ Toast Notification */}
      {showToast && (
        <>
          {/* Page Blur Background */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backdropFilter: "blur(3px)",
              zIndex: 1040,
            }}
          ></div>

          {/* Toast on Top */}
          <div
            className="position-fixed top-0 start-50 translate-middle-x mt-3"
            style={{ zIndex: 1055 }}
          >
            <div className="toast show text-white bg-success shadow border-0">
              <div className="toast-body fw-bold">
                ✅ {product.title} added to cart!
              </div>
            </div>
          </div>
        </>
      )}

      {/* 🛒 Main Product Display */}
      <div className={`container my-5 py-5 ${showToast ? "pe-none" : ""}`}>
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
              <i className="fas fa-star mx-1" style={{ color: "#FFD43B" }}></i>(
              {product.rating?.count})
            </p>
            <h3 className="display-6 fw-bold my-4">RM{product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link href="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
