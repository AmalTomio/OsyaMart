"use client";
import Product from "./Product";

export default function ProductPage({ params }) {
  return <Product id={params.id} />;
}
