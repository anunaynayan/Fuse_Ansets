"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { Animated } from "./components/alertAnimations";

import {
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
  InfoAlert,
  GlowAlert,
} from "./components/alerts";
import Header from "./components/Header";

const variants = [
  {
    title: "Success — Fade",
    desc: "Smooth fade-in success alert for confirmations.",
    animation: "fade",
    Alert: SuccessAlert,
  },
  {
    title: "Error — Slide",
    desc: "Sliding error alert for critical actions.",
    animation: "slide",
    Alert: ErrorAlert,
  },
  {
    title: "Warning — Scale",
    desc: "Scaling warning alert that grabs attention.",
    animation: "scale",
    Alert: WarningAlert,
  },
  {
    title: "Info — Bounce",
    desc: "Bouncy informational alert with personality.",
    animation: "bounce",
    Alert: InfoAlert,
  },
  {
    title: "Glass — Fade",
    desc: "Glassmorphism alert with soft translucency.",
    animation: "fade",
    Alert: GlowAlert,
  },
];

export default function AlertsDemo() {
  return (
    <div className="min-h-screen p-10">
      <div className="mb-8">
        <Header/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {variants.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 shadow-xl border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-400 mb-5">
              {item.desc}
            </p>

            <AnimatePresence>
              <Animated variant={item.animation as any}>
                <item.Alert />
              </Animated>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
