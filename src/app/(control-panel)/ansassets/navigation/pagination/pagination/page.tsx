"use client";

import { useEffect, useState } from "react";
import { PaginationWrapper } from "./pagination";


interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 🔵 Fetch dummy products
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const json = await res.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Product List with Pagination</h1>

      <PaginationWrapper<Product>
        data={products}
        page={page}
        itemsPerPage={itemsPerPage}
        onPageChange={(p) => setPage(p)}
        onPageSizeChange={(size) => {
          setItemsPerPage(size);
          setPage(1); 
        }}
        renderItem={(item) => (
          <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
            <p className="text-green-600 font-semibold mt-1">₹ {item.price}</p>
          </div>
        )}
      />
    </div>
  );
}
