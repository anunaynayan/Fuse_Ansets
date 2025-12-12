"use client";

import React, { useState } from "react";
import { GlassDialog } from "./components/GlassDialog";
import { GradientDialog } from "./components/GradientDialog";
import { MinimalDialog } from "./components/MinimalDialog";
import { ElevatedDialog } from "./components/ElevatedDialog";
import { AnimatedDialog } from "./components/AnimatedDialog";
import { Button } from "@mui/material";

export default function DialogDemoPage() {
  const [dialog, setDialog] = useState("");

  const open = (type: string) => setDialog(type);
  const close = () => setDialog("");

  const variants = [
    {
      id: "glass",
      title: "Glass Dialog",
      desc: "Modern translucent dialog with frosted blur.",
      component: GlassDialog,
    },
    {
      id: "gradient",
      title: "Gradient Dialog",
      desc: "Smooth gradient header with soft UI.",
      component: GradientDialog,
    },
    {
      id: "minimal",
      title: "Minimal Dialog",
      desc: "Clean, simple, typography-focused dialog.",
      component: MinimalDialog,
    },
    {
      id: "elevated",
      title: "Elevated Dialog",
      desc: "Deep shadow, raised layered dialog.",
      component: ElevatedDialog,
    },
    {
      id: "animated",
      title: "Animated Dialog",
      desc: "Framer Motion powered entrance animation.",
      component: AnimatedDialog,
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Dialog Variants Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {variants.map(({ id, title, desc, component: Component }) => (
          <div
            key={id}
            className="rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-400 mb-5">{desc}</p>

            <Button
              variant="contained"
              onClick={() => open(id)}
            >
              Preview
            </Button>

            {/* Dialog */}
            <Component open={dialog === id} onClose={close} title={title}>
              {desc}
            </Component>
          </div>
        ))}
      </div>
    </div>
  );
}
