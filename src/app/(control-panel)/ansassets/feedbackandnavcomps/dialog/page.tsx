"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { GlassDialog } from "./components/GlassDialog";
import { GradientDialog } from "./components/GradientDialog";
import { MinimalDialog } from "./components/MinimalDialog";
import { ElevatedDialog } from "./components/ElevatedDialog";
import { AnimatedDialog } from "./components/AnimatedDialog";

const variants = [
  {
    id: "glass",
    title: "Glass Dialog",
    desc: "Modern translucent dialog with frosted blur.",
    Component: GlassDialog,
  },
  {
    id: "gradient",
    title: "Gradient Dialog",
    desc: "Smooth gradient header with soft UI.",
    Component: GradientDialog,
  },
  {
    id: "minimal",
    title: "Minimal Dialog",
    desc: "Clean, simple, typography-focused dialog.",
    Component: MinimalDialog,
  },
  {
    id: "elevated",
    title: "Elevated Dialog",
    desc: "Deep shadow, raised layered dialog.",
    Component: ElevatedDialog,
  },
  {
    id: "animated",
    title: "Animated Dialog",
    desc: "Framer Motion powered entrance animation.",
    Component: AnimatedDialog,
  },
];

export default function DialogDemoPage() {
  const [active, setActive] = useState<any>(null);

  const close = () => setActive(null);

  return (
    <div className="p-10">
      <div className="mb-8">
        <Header />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {item.title}
            </h2>

            <p className="text-gray-400 mb-5">
              {item.desc}
            </p>

            <Button
              variant="contained"
              onClick={() => setActive(item)}
            >
              Preview
            </Button>
          </div>
        ))}
      </div>

      {/* Dialog render (single, global) */}
      <AnimatePresence>
        {active && (
          <active.Component
            open
            onClose={close}
            title={active.title}
          >
            {active.desc}
          </active.Component>
        )}
      </AnimatePresence>
    </div>
  );
}
