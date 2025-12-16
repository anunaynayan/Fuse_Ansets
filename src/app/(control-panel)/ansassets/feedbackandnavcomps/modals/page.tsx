"use client";

import { useState } from "react";
import { Button } from "@mui/material";

import { SimpleModal } from "./components/SimpleModal";
import { AnimatedModal } from "./components/AnimatedModal";
import { SoftGradientModal } from "./components/GradientModal";
import { BorderedModal } from "./components/BorderedModal";
import { ImageModal } from "./components/ImageModal";
import Header from "./components/Header";

export default function ModalsShowcasePage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="p-10 space-y-8">
      <Header/>

      <p className="text-gray-500 max-w-xl">
        A collection of reusable, production-ready modal variants.
        Each modal is independent and copy-paste friendly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Button variant="contained" onClick={() => setOpen("simple")}>
          Simple Modal
        </Button>

        <Button variant="contained" onClick={() => setOpen("animated")}>
          Animated Modal
        </Button>

        <Button variant="contained" onClick={() => setOpen("gradient")}>
          Soft Gradient Modal
        </Button>

        <Button variant="contained" onClick={() => setOpen("bordered")}>
          Bordered Modal
        </Button>

        <Button variant="contained" onClick={() => setOpen("image")}>
          Image Modal
        </Button>
      </div>

      {/* Modals */}
      <SimpleModal open={open === "simple"} onClose={() => setOpen(null)} />
      <AnimatedModal open={open === "animated"} onClose={() => setOpen(null)} />
      <SoftGradientModal open={open === "gradient"} onClose={() => setOpen(null)} />
      <BorderedModal open={open === "bordered"} onClose={() => setOpen(null)} />
      <ImageModal open={open === "image"} onClose={() => setOpen(null)} />
    </div>
  );
}
