"use client"; // ✅ Makes this also a Client Component

import { useParams } from "next/navigation";
import Product from "./Product";

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  return <Product id={id} />;
}
