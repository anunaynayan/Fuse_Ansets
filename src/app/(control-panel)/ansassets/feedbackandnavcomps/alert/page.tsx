"use client";

import React from "react";
import AlertBox from "./components/AlertBox";
import { AnimatePresence } from "framer-motion";

const variants = [
  {
    type: "success",
    variant: "fade",
    glass: false,
    title: "Success — Fade",
    desc: "Smooth fade-in success alert for confirmations.",
  },
  {
    type: "error",
    variant: "slide",
    glass: false,
    title: "Error — Slide",
    desc: "Sliding error alert for critical actions.",
  },
  {
    type: "warning",
    variant: "scale",
    glass: false,
    title: "Warning — Scale",
    desc: "Scaling warning alert that grabs attention.",
  },
  {
    type: "info",
    variant: "bounce",
    glass: false,
    title: "Info — Bounce",
    desc: "Bouncy informational alert with personality.",
  },
  {
    type: "info",
    variant: "fade",
    glass: true,
    title: "Glass — Fade",
    desc: "Glassmorphism alert with soft translucency.",
  },
];

export default function AlertsDemo() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">Alert Variants Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {variants.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-400 mb-5">{item.desc}</p>

            <AnimatePresence>
              <AlertBox
                type={item.type as any}
                variant={item.variant as any}
                glass={item.glass}
                message={`${item.title}`}
                onClose={() => {}}
                demo
              />
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
