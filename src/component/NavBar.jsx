"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import useIsClient from "@/utils/useIsClient";


const Navbar = () => {
const cartState = useSelector((state) => state.cart); 
  const isClient = useIsClient();

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" href="/">
            OSYA COLLECTION{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="buttons">
              <Link href="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in-alt me-1"></i> Login
              </Link>
              <Link href="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-id-card me-1"></i> Register
              </Link>
              <Link href="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-shopping me-1"></i> Cart  (
                {isClient ? cartState?.length || 0 : 0})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
