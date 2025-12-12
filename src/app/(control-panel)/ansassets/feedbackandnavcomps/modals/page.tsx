"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { GlassModal } from "./components/GlassModal";
import { GradientModal } from "./components/GradientModal";
import { BorderedModal } from "./components/BorderedModal";
import { ElevatedModal } from "./components/ElevatedModal";
import { AnimatedModal } from "./components/AnimatedModal";

export default function ModalShowcasePage() {
  const [modal, setModal] = useState("");

  const open = (id: string) => setModal(id);
  const close = () => setModal("");

  const variants = [
    {
      id: "glass",
      title: "Glass Modal",
      desc: "Frosted translucent modal with soft edges.",
      component: GlassModal,
    },
    {
      id: "gradient",
      title: "Gradient Modal",
      desc: "Beautiful gradient UI for modern dashboards.",
      component: GradientModal,
    },
    {
      id: "bordered",
      title: "Bordered Modal",
      desc: "Clean professional borders with high contrast.",
      component: BorderedModal,
    },
    {
      id: "elevated",
      title: "Elevated Modal",
      desc: "Dark theme modal with aggressive shadow depth.",
      component: ElevatedModal,
    },
    {
      id: "animated",
      title: "Animated Modal",
      desc: "Slide-up animation using Framer Motion.",
      component: AnimatedModal,
    },
  ];

  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-bold mb-8">Modal Variants Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.map(({ id, title, desc, component: Component }) => (
          <div
            key={id}
            className="rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-400 mb-5">{desc}</p>

            <Button variant="contained" onClick={() => open(id)}>
              Preview
            </Button>

            <Component open={modal === id} onClose={close} title={title}>
              {desc}
            </Component>
          </div>
        ))}
      </div>
    </div>
  );
}
