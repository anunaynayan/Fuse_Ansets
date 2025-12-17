"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

import { SimpleModal } from "../components/SimpleModal";
import { AnimatedModal } from "../components/AnimatedModal";
import { SoftGradientModal } from "../components/GradientModal";
import { BorderedModal } from "../components/BorderedModal";
import { ImageModal } from "../components/ImageModal";

export default function ModalDocsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DocsLayout
      title="Modal Components"
      backLink="/ansassets/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A collection of production-ready modal components built on top of
        <strong> MUI Dialog</strong>, styled with
        <strong> Tailwind CSS</strong>, and enhanced with
        <strong> Framer Motion</strong> where needed.
        <br />
        <br />
        Each modal is <strong>fully independent</strong> and can be copied
        directly into your project without shared dependencies.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Required Dependencies
        </Typography>

        <CodeBlock
          filename="terminal"
          language="bash"
          code={`npm install @mui/material @mui/icons-material framer-motion`}
        />
      </section>

      {/* BASIC USAGE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-6">
          Basic Usage Pattern
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { SimpleModal } from "@/components/modals/SimpleModal";
import { Button } from "@mui/material";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <SimpleModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`}
        />
      </section>

      {/* VARIANTS */}
      <section className="space-y-20">

        <ModalSection
          title="Simple Modal"
          description="Minimal, no-animation modal for confirmations and basic content."
          buttonLabel="Open Simple Modal"
          open={open === "simple"}
          onOpen={() => setOpen("simple")}
          onClose={() => setOpen(null)}
          Component={SimpleModal}
          code={`export function SimpleModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Simple Modal</DialogTitle>
      <DialogContent>
        Clean and minimal modal content.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}`}
        />

        <ModalSection
          title="Animated Modal"
          description="Framer Motion powered entrance animation."
          buttonLabel="Open Animated Modal"
          open={open === "animated"}
          onOpen={() => setOpen("animated")}
          onClose={() => setOpen(null)}
          Component={AnimatedModal}
          code={`export function AnimatedModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 0.25 },
      }}
    >
      <DialogTitle>Animated Modal</DialogTitle>
      <DialogContent>
        Smooth animated entrance.
      </DialogContent>
    </Dialog>
  );
}`}
        />

        <ModalSection
          title="Soft Gradient Modal"
          description="High-impact gradient modal for important flows."
          buttonLabel="Open Gradient Modal"
          open={open === "gradient"}
          onOpen={() => setOpen("gradient")}
          onClose={() => setOpen(null)}
          Component={SoftGradientModal}
          code={`export function SoftGradientModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className:
          "bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl",
      }}
    >
      <DialogTitle>Gradient Modal</DialogTitle>
      <DialogContent>
        High-impact modal content.
      </DialogContent>
    </Dialog>
  );
}`}
        />

        <ModalSection
          title="Bordered Modal"
          description="Subtle bordered modal for dashboards and forms."
          buttonLabel="Open Bordered Modal"
          open={open === "bordered"}
          onOpen={() => setOpen("bordered")}
          onClose={() => setOpen(null)}
          Component={BorderedModal}
          code={`export function BorderedModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "border-2 border-gray-300 rounded-2xl",
      }}
    >
      <DialogTitle>Bordered Modal</DialogTitle>
      <DialogContent>
        Structured, professional modal.
      </DialogContent>
    </Dialog>
  );
}`}
        />

        <ModalSection
          title="Image Modal"
          description="Hero image modal for promotions and onboarding."
          buttonLabel="Open Image Modal"
          open={open === "image"}
          onOpen={() => setOpen("image")}
          onClose={() => setOpen(null)}
          Component={ImageModal}
          code={`export function ImageModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        className="w-full h-64 object-cover"
      />
      <DialogContent>
        Image-based modal content.
      </DialogContent>
    </Dialog>
  );
}`}
        />

      </section>
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Helper Component                   */
/* ---------------------------------- */

function ModalSection({
  title,
  description,
  buttonLabel,
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
          {buttonLabel}
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
