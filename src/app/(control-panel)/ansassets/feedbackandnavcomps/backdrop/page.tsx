"use client";

import { useState } from "react";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Typography, Box, Button } from "@mui/material";

import { AnimatedBackdrop } from "./components/AnimatedBackdrop";
import { BlurBackdrop } from "./components/BlurBackdrop";
import { GradientBackdrop } from "./components/GradientBackdrop";
import { ImageBackdrop } from "./components/ImageBackdrop";
import { ProgressBackdrop } from "./components/ProgressBackdrop";
import { SimpleBackdrop } from "./components/SimpleBackdrop";

export default function BackdropDocsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DocsLayout
      title="Backdrop Components"
      backLink="/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A collection of professional, reusable backdrop components built on top of
        <strong> MUI Backdrop</strong>.  
        <br />
        <br />
        Designed for loading states, blocking UI, attention-critical flows, and
        visual effects.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies
        </Typography>

        <CodeBlock
          filename="terminal"
          language="bash"
          code={`npm install @mui/material @mui/icons-material`}
        />
      </section>

      {/* BASIC USAGE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-6">
          Basic Usage
        </Typography>

        <Typography className="text-gray-500 mb-4">
          All backdrops follow a controlled pattern using
          <code className="px-1">open</code> and
          <code className="px-1">onClose</code>.
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Show Backdrop
      </button>

      <Backdrop open={open} onClick={() => setOpen(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}`}
        />
      </section>

      {/* BACKDROP VARIANTS */}
      <section className="space-y-24">

        <BackdropSection
          title="Simple Backdrop"
          description="Minimal backdrop for blocking UI."
          open={open === "simple"}
          onOpen={() => setOpen("simple")}
          onClose={() => setOpen(null)}
          Component={SimpleBackdrop}
          code={`"use client";

import { Backdrop } from "@mui/material";

export function SimpleBackdrop({ open, onClose }) {
  return <Backdrop open={open} onClick={onClose} />;
}`}
        />

        <BackdropSection
          title="Animated Backdrop"
          description="Subtle entrance animation with fade effect."
          open={open === "animated"}
          onOpen={() => setOpen("animated")}
          onClose={() => setOpen(null)}
          Component={AnimatedBackdrop}
          code={`"use client";

import { Backdrop, Box } from "@mui/material";
import { motion } from "framer-motion";

export function AnimatedBackdrop({ open, onClose }) {
  return (
    <Backdrop open={open} onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full"
      />
    </Backdrop>
  );
}`}
        />

        <BackdropSection
          title="Blur Backdrop"
          description="Frosted glass style backdrop with blur."
          open={open === "blur"}
          onOpen={() => setOpen("blur")}
          onClose={() => setOpen(null)}
          Component={BlurBackdrop}
          code={`"use client";

import { Backdrop, Box } from "@mui/material";

export function BlurBackdrop({ open, onClose }) {
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{ backdropFilter: "blur(12px)" }}
    />
  );
}`}
        />

        <BackdropSection
          title="Gradient Backdrop"
          description="High-impact gradient style overlay."
          open={open === "gradient"}
          onOpen={() => setOpen("gradient")}
          onClose={() => setOpen(null)}
          Component={GradientBackdrop}
          code={`"use client";

import { Backdrop, Box } from "@mui/material";

export function GradientBackdrop({ open, onClose }) {
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{ background: "linear-gradient(90deg, #4b6cb7, #182848)" }}
    />
  );
}`}
        />

        <BackdropSection
          title="Image Backdrop"
          description="Backdrop with full-size background image."
          open={open === "image"}
          onOpen={() => setOpen("image")}
          onClose={() => setOpen(null)}
          Component={ImageBackdrop}
          code={`"use client";

import { Backdrop, Box } from "@mui/material";

export function ImageBackdrop({ open, onClose }) {
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        backgroundImage: "url('/images/demo-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  );
}`}
        />

        <BackdropSection
          title="Progress Backdrop"
          description="Backdrop showing progress bar for ongoing tasks."
          open={open === "progress"}
          onOpen={() => setOpen("progress")}
          onClose={() => setOpen(null)}
          Component={ProgressBackdrop}
          code={`"use client";

import { Backdrop, Box, LinearProgress, Typography } from "@mui/material";

export function ProgressBackdrop({ open, onClose }) {
  return (
    <Backdrop open={open} onClick={onClose}>
      <Box className="bg-white rounded-xl p-6 w-80">
        <Typography variant="subtitle1" className="mb-2">
          Uploading files
        </Typography>
        <LinearProgress variant="determinate" value={65} />
      </Box>
    </Backdrop>
  );
}`}
        />
      </section>

      {/* PROPS */}
      <section className="mt-24 mb-24">
        <Typography variant="h4" className="font-semibold mb-6">
          Common Props
        </Typography>

        <table className="w-full border-collapse bg-gray-100 dark:bg-gray-800 text-sm rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Required</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">open</td>
              <td className="p-3">boolean</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Controls visibility</td>
            </tr>
            <tr>
              <td className="p-3">onClose</td>
              <td className="p-3">() =&gt; void</td>
              <td className="p-3">No</td>
              <td className="p-3">Triggered on backdrop click</td>
            </tr>
            <tr>
              <td className="p-3">sx</td>
              <td className="p-3">SxProps</td>
              <td className="p-3">No</td>
              <td className="p-3">Custom styling</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Backdrop Section Helper            */
/* ---------------------------------- */
function BackdropSection({
  title,
  description,
  open,
  onOpen,
  onClose,
  Component,
  code,
}: any) {
  return (
    <section>
      <Typography variant="h4" className="font-semibold mb-2">
        {title}
      </Typography>

      <Typography className="text-gray-500 mb-4">
        {description}
      </Typography>

      <Box className="mb-6">
        <Button variant="contained" onClick={onOpen}>
          Show {title}
        </Button>

        <Component open={open} onClose={onClose} />
      </Box>

      <CodeBlock
        filename={`${title.replace(/\s/g, "")}.tsx`}
        language="tsx"
        code={code}
      />
    </section>
  );
}
