"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart, removeItemFromCart } from "@/redux/action"; // update paths if needed
import Swal from "sweetalert2";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product) => {
    dispatch(delCart(product));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart(productId));
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

            <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
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

              <button
                className="btn btn-danger"
                onClick={() => handleRemoveItem(product.id)}
              >
                <i className="fa-solid fa-trash me-2"></i>
                Remove Item
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
