"use client";

import { useParams } from "next/navigation";
import Product from "./Product";

export default function ProductPage() {
  const params = useParams(); // works in client components
  const { id } = params;

  return <Product id={id} />;
}
