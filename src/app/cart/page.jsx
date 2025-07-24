"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "@/redux/action"; // update paths if needed

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // replace with your reducer name
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product) => {
    dispatch(delCart(product));
  };

  if (!cartItems || cartItems.length === 0) {
    return <h3 className="text-center p-4">Your cart is empty</h3>;
  }

  return (
    <div className="container py-5">
      {cartItems.map((product) => (
        <div
          key={product.id}
          className="row py-4 mb-4 shadow"
          style={{
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase">{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X RM{product.price} = RM
              {product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handleRemove(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => handleAdd(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
