"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import Playground from "./components/Playground";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function SnackbarDocsPage() {
  const [fullSource, setFullSource] = useState("");

  useEffect(() => {
    fetch("/snippets/snackbars-full.txt")
      .then((r) => r.text())
      .then(setFullSource)
      .catch(() => setFullSource("// Failed to load full source snippet."));
  }, []);

  return (
    <DocsLayout
      title="Snackbar Components"
      backLink="/ansassets/feedbackandnavcomps/snackbar"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A production-ready collection of snackbar / toast components built with
        <strong> Tailwind CSS</strong>, <strong>Framer Motion</strong>, and
        <strong> MUI Icons</strong>.
        <br />
        <br />
        These snackbars are **self-contained**, require **minimal setup**, and
        can be copied directly into any React or Next.js project.
      </Typography>

      {/* INSTALLATION */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Installation
        </Typography>

        <Typography className="mb-3">
          Install the required dependencies:
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

        <Typography className="mb-4 text-gray-600 dark:text-gray-300">
          All snackbars follow the same usage pattern:
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { SuccessSnackbar } from "./SuccessSnackbar";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Show Snackbar
      </button>

      {open && (
        <SuccessSnackbar
          message="Operation completed successfully"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}`}
        />
      </section>

      {/* INDIVIDUAL SNACKBARS */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-8">
          Snackbar Variants
        </Typography>

        {/* SUCCESS */}
        <Typography variant="h6" className="mb-3">
          Success Snackbar
        </Typography>
        <CodeBlock
          filename="SuccessSnackbar.tsx"
          language="tsx"
          code={`import { SuccessSnackbar } from "@/components/snackbars/SuccessSnackbar";

{open && (
  <SuccessSnackbar
    message="Saved successfully"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* ERROR */}
        <Typography variant="h6" className="mt-10 mb-3">
          Error Snackbar
        </Typography>
        <CodeBlock
          filename="ErrorSnackbar.tsx"
          language="tsx"
          code={`import { ErrorSnackbar } from "@/components/snackbars/ErrorSnackbar";

{open && (
  <ErrorSnackbar
    message="Something went wrong"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* WARNING */}
        <Typography variant="h6" className="mt-10 mb-3">
          Warning Snackbar
        </Typography>
        <CodeBlock
          filename="WarningSnackbar.tsx"
          language="tsx"
          code={`import { WarningSnackbar } from "@/components/snackbars/WarningSnackbar";

{open && (
  <WarningSnackbar
    message="Check your inputs"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* INFO */}
        <Typography variant="h6" className="mt-10 mb-3">
          Info Snackbar
        </Typography>
        <CodeBlock
          filename="InfoSnackbar.tsx"
          language="tsx"
          code={`import { InfoSnackbar } from "@/components/snackbars/InfoSnackbar";

{open && (
  <InfoSnackbar
    message="New update available"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* GLOW */}
        <Typography variant="h6" className="mt-10 mb-3">
          Glow Snackbar
        </Typography>
        <CodeBlock
          filename="GlowSnackbar.tsx"
          language="tsx"
          code={`import { GlowSnackbar } from "@/components/snackbars/GlowSnackbar";

{open && (
  <GlowSnackbar
    message="Premium feature unlocked"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* PULSE */}
        <Typography variant="h6" className="mt-10 mb-3">
          Border Pulse Snackbar
        </Typography>
        <CodeBlock
          filename="BorderPulseSnackbar.tsx"
          language="tsx"
          code={`import { BorderPulseSnackbar } from "@/components/snackbars/BorderPulseSnackbar";

{open && (
  <BorderPulseSnackbar
    message="Action required"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* FLOATING */}
        <Typography variant="h6" className="mt-10 mb-3">
          Floating Snackbar
        </Typography>
        <CodeBlock
          filename="FloatingSnackbar.tsx"
          language="tsx"
          code={`import { FloatingSnackbar } from "@/components/snackbars/FloatingSnackbar";

{open && (
  <FloatingSnackbar
    message="Message sent"
    onClose={() => setOpen(false)}
  />
)}`}
        />

        {/* SLIDE */}
        <Typography variant="h6" className="mt-10 mb-3">
          Slide Snackbar
        </Typography>
        <CodeBlock
          filename="SlideSnackbar.tsx"
          language="tsx"
          code={`import { SlideSnackbar } from "@/components/snackbars/SlideSnackbar";

{open && (
  <SlideSnackbar
    message="Logged in successfully"
    onClose={() => setOpen(false)}
  />
)}`}
        />
      </section>

      {/* PROPS */}
      <section className="mb-20">
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
              <td className="p-3">onClose</td>
              <td className="p-3">() =&gt; void</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Callback to close the snackbar</td>
            </tr>
            <tr>
              <td className="p-3">message</td>
              <td className="p-3">string</td>
              <td className="p-3">No</td>
              <td className="p-3">Text shown inside the snackbar</td>
            </tr>
            <tr>
              <td className="p-3">duration</td>
              <td className="p-3">number</td>
              <td className="p-3">No</td>
              <td className="p-3">Auto dismiss timeout (default: 3000ms)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* PLAYGROUND */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-6">
          Live Playground
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <Playground />
        </Box>
      </section>

      {/* FULL SOURCE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Source Code
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