"use client";

import React from "react";

export default function ImageBanner() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative bg-black/50 p-8">
        <h2 className="text-white text-xl font-semibold">
          Design faster with our UI Kit
        </h2>
        <p className="text-white/80 text-sm mt-2 max-w-md">
          Pre-built components, animations, and layouts ready for production.
        </p>
      </div>
    </div>
  );
}
