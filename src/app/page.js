"use client";

import React from "react";
import Products from "../component/Products";

export default function HomePage() {
  return (
    <div className="hero">
      <div className="card text-black bg-dark border-0 ">
        <img src="/assets/bg.jpg" className="card-img" alt="Background  " />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            {" "}
            <h5 className="card-title display-4 fw-bold mb-0">
              UPCOMING SEASON COLLECTION
            </h5>
            <p className="card-text lead fs-2 mb-0">
              CHECK OUT OUR NEW ARRIVALS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
