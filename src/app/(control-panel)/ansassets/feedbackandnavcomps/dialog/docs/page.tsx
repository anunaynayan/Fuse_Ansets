"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

import { AnimatedDialog } from "../components/AnimatedDialog";
import { MinimalDialog } from "../components/MinimalDialog";
import { GradientDialog } from "../components/GradientDialog";
import { ElevatedDialog } from "../components/ElevatedDialog";
import { GlassDialog } from "../components/GlassDialog";

export default function DialogDocsPage() {
  const [fullSource, setFullSource] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    fetch("/snippets/dialogs-full.txt")
      .then((r) => r.text())
      .then(setFullSource)
      .catch(() =>
        setFullSource("// Failed to load dialog source")
      );
  }, []);

  return (
    <DocsLayout
      title="Dialog Components"
      backLink="/ansassets/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A composable dialog system built on top of
        <strong> MUI Dialog</strong> with
        <strong> Tailwind CSS</strong> styling and
        <strong> Framer Motion</strong> animations.
        <br />
        <br />
        Designed for confirmations, forms, destructive actions,
        and attention-critical workflows.
      </Typography>

      {/* INSTALLATION */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Installation
        </Typography>

        <CodeBlock
          filename="terminal"
          language="bash"
          code={`npm install @mui/material @mui/icons-material framer-motion`}
        />
      </section>

      {/* BASE USAGE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-6">
          Basic Usage Pattern
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { BaseDialog } from "@/components/dialogs/BaseDialog";
import { Button } from "@mui/material";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <BaseDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
      >
        This action cannot be undone.
      </BaseDialog>
    </>
  );
}`}
        />
      </section>

      {/* VARIANTS */}
      <section className="space-y-20">

        {/* ANIMATED */}
        <DialogSection
          title="Animated Dialog"
          description="Smooth Framer Motion powered entrance animation."
          buttonLabel="Open Animated Dialog"
          open={open === "animated"}
          onOpen={() => setOpen("animated")}
          onClose={() => setOpen(null)}
          Component={AnimatedDialog}
          code={`<AnimatedDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Animated Dialog"
>
  Smooth entrance animation
</AnimatedDialog>`}
        />

        {/* ELEVATED */}
        <DialogSection
          title="Elevated Dialog"
          description="Strong visual emphasis with deep shadow and elevation."
          buttonLabel="Open Elevated Dialog"
          open={open === "elevated"}
          onOpen={() => setOpen("elevated")}
          onClose={() => setOpen(null)}
          Component={ElevatedDialog}
          code={`<ElevatedDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Elevated Dialog"
>
  Strong visual emphasis
</ElevatedDialog>`}
        />

        {/* GLASS */}
        <DialogSection
          title="Glass Dialog"
          description="Frosted glass dialog with blur and translucency."
          buttonLabel="Open Glass Dialog"
          open={open === "glass"}
          onOpen={() => setOpen("glass")}
          onClose={() => setOpen(null)}
          Component={GlassDialog}
          code={`<GlassDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Glass Dialog"
>
  Frosted glass style
</GlassDialog>`}
        />

        {/* GRADIENT */}
        <DialogSection
          title="Gradient Dialog"
          description="High-impact gradient UI for important flows."
          buttonLabel="Open Gradient Dialog"
          open={open === "gradient"}
          onOpen={() => setOpen("gradient")}
          onClose={() => setOpen(null)}
          Component={GradientDialog}
          code={`<GradientDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Gradient Dialog"
>
  High-impact gradient UI
</GradientDialog>`}
        />

        {/* MINIMAL */}
        <DialogSection
          title="Minimal Dialog"
          description="Clean, distraction-free dialog without close icon."
          buttonLabel="Open Minimal Dialog"
          open={open === "minimal"}
          onOpen={() => setOpen("minimal")}
          onClose={() => setOpen(null)}
          Component={MinimalDialog}
          code={`<MinimalDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Minimal Dialog"
>
  Minimal UI, no close icon
</MinimalDialog>`}
        />
      </section>

      {/* PROPS */}
      <section className="mb-24 mt-24">
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
              <td className="p-3">Controls dialog visibility</td>
            </tr>
            <tr>
              <td className="p-3">onClose</td>
              <td className="p-3">() =&gt; void</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Close handler</td>
            </tr>
            <tr>
              <td className="p-3">title</td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Dialog heading</td>
            </tr>
            <tr>
              <td className="p-3">actions</td>
              <td className="p-3">ReactNode</td>
              <td className="p-3">No</td>
              <td className="p-3">Footer actions</td>
            </tr>
            <tr>
              <td className="p-3">showClose</td>
              <td className="p-3">boolean</td>
              <td className="p-3">No</td>
              <td className="p-3">Toggle close icon</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FULL SOURCE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Source Code
        </Typography>

        <CodeBlock
          filename="dialogs-full.tsx"
          language="tsx"
          code={fullSource}
        />
      </section>
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Helper Section Component           */
/* ---------------------------------- */

function DialogSection({
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

        <Component
          open={open}
          onClose={onClose}
          title={title}
        >
          {description}
        </Component>
      </Box>

      <CodeBlock
        filename={`${title.replace(" ", "")}.tsx`}
        language="tsx"
        code={code}
      />
    </section>
  );
}
