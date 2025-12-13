"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import Playground from "./components/Playground";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function SnackbarDocsPage() {
  const [fullSource, setFullSource] = useState<string>("");

  useEffect(() => {
    fetch("/snippets/snackbars-full.txt")
      .then((r) => r.text())
      .then(setFullSource)
      .catch(() => setFullSource("// Failed to load full source snippet."));
  }, []);

  return (
    <DocsLayout
      title="Snackbar Documentation"
      backLink="/ansassets/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        A complete suite of snackbar / toast components built using
        <strong> Tailwind</strong>, <strong>Framer Motion</strong>, and
        <strong> MUI Icons</strong>. Variants include basic, animated, glow,
        pulse, floating, and sliding effects.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies
        </Typography>

        <Typography className="mb-2">Required:</Typography>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>@mui/icons-material</strong></li>
          <li><strong>@mui/material</strong></li>
          <li><strong>framer-motion</strong></li>
          <li><strong>react</strong></li>
          <li><strong>next</strong></li>
        </ul>

        <CodeBlock
          filename="Install"
          language="bash"
          code={`npm install @mui/material @mui/icons-material framer-motion`}
        />
      </section>

      {/* DEMO EXAMPLES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-6">
          Example Usage
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-xl mx-auto mb-6">
          <Typography className="mb-4 font-medium">Quick Demo</Typography>
          <DemoShowcase />
        </Box>

        <CodeBlock
          filename="Example Usage"
          language="tsx"
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Show Snackbar</button>

{open && (
  <SuccessSnackbar onClose={() => setOpen(false)} />
)}`}
        />
      </section>

      {/* PROPS TABLE */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-6">
          Base Props
        </Typography>

        <table className="w-full border-collapse bg-gray-100 dark:bg-gray-800 text-sm rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Default</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3">onClose</td><td className="p-3"> void</td><td className="p-3">required</td><td className="p-3">Closes the snackbar</td></tr>
            <tr><td className="p-3">message</td><td className="p-3">string</td><td className="p-3">""</td><td className="p-3">Text displayed in snackbar</td></tr>
            <tr><td className="p-3">duration</td><td className="p-3">number</td><td className="p-3">3000</td><td className="p-3">Auto-hide timeout</td></tr>
          </tbody>
        </table>
      </section>

      {/* PLAYGROUND */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-6">
          Playground
        </Typography>
        <Typography className="mb-4">
          Test all variants, positions, colors, durations, and behavior.
        </Typography>

        <Playground />
      </section>

      {/* FULL SOURCE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Component Source Code
        </Typography>

        <CodeBlock
          filename="snackbars-full.tsx"
          language="tsx"
          code={fullSource}
        />
      </section>
    </DocsLayout>
  );
}

/* ------------------------------------------------------------
   Inline Demo Showcase Component
------------------------------------------------------------- */

function DemoShowcase() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string>("success");

  const components: Record<string, any> = {
    success: require("./components/SuccessSnackbar").default,
    error: require("./components/ErrorSnackbar").default,
    warning: require("./components/WarningSnackbar").default,
    info: require("./components/InfoSnackbar").default,
    glow: require("./components/GlowSnackbar").GlowSnackbar,
    pulse: require("./components/BorderPulseSnackbar").BorderPulseSnackbar,
    floating: require("./components/FloatingSnackbar").FloatingSnackbar,
    slide: require("./components/SlideSnackbar").SlideSnackbar,
  };

  const ActiveComponent = components[type];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {Object.keys(components).map((key) => (
          <button
            key={key}
            onClick={() => {
              setType(key);
              setOpen(true);
            }}
            className="px-3 py-1 bg-neutral-800 text-white rounded text-sm capitalize"
          >
            {key}
          </button>
        ))}
      </div>

      {open && ActiveComponent && (
        <ActiveComponent onClose={() => setOpen(false)} />
      )}
    </div>
  );
}