"use client";

import React from "react";
import { BannerBox } from "./components/BannerBox";

const variants = [
  {
    title: "Glass Banner",
    desc: "A translucent, modern glassmorphism banner.",
    severity: "info",
    variant: "glass",
  },
  {
    title: "Gradient Banner",
    desc: "High-impact gradient banner used for promotions.",
    severity: "success",
    variant: "gradient",
  },
  {
    title: "Bordered Banner",
    desc: "Minimal and structured banner with accessible contrast.",
    severity: "warning",
    variant: "bordered",
  },
  {
    title: "Shadow Banner",
    desc: "Deep shadow banner for strong emphasis and alerts.",
    severity: "error",
    variant: "shadow",
  },
];

export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Banner Variants Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {variants.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-400 mb-5">{item.desc}</p>

            <BannerBox
              title={item.title}
              message={item.desc}
              severity={item.severity as any}
              variant={item.variant as any}
              demo
            />
          </div>
        ))}
      </div>
    </div>
  );
}
