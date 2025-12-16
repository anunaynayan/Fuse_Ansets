"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import AlertPlayground from "./Playground";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function AlertDocsPage() {
  const [fullSource, setFullSource] = useState("");

  useEffect(() => {
    fetch("/snippets/alerts-full.txt")
      .then((r) => r.text())
      .then(setFullSource)
      .catch(() => setFullSource("// Failed to load full source snippet."));
  }, []);

  return (
    <DocsLayout
      title="Alert Components"
      backLink="/ansassets/feedbackandnavcomps/alerts"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A flexible and animated alert system built with
        <strong> Tailwind CSS</strong>, <strong>Framer Motion</strong>, and
        <strong> MUI Icons</strong>.
        <br />
        <br />
        Alerts are designed for <strong>persistent, inline feedback</strong> —
        validation errors, warnings, confirmations, and system messages that
        should not disappear automatically.
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
          Alerts are controlled components and remain visible until dismissed.
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { SuccessAlert } from "@/components/alerts/SuccessAlert";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <SuccessAlert
          message="Profile updated successfully"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}`}
        />
      </section>

      {/* VARIANTS */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-8">
          Alert Variants
        </Typography>

        {/* SUCCESS */}
        <Typography variant="h6" className="mb-3">
          Success Alert
        </Typography>
        <CodeBlock
          filename="SuccessAlert.tsx"
          language="tsx"
          code={`import { SuccessAlert } from "@/components/alerts/SuccessAlert";

<SuccessAlert
  message="Changes saved successfully"
  onClose={() => {}}
/>`}
        />

        {/* ERROR */}
        <Typography variant="h6" className="mt-10 mb-3">
          Error Alert
        </Typography>
        <CodeBlock
          filename="ErrorAlert.tsx"
          language="tsx"
          code={`import { ErrorAlert } from "@/components/alerts/ErrorAlert";

<ErrorAlert
  message="Failed to submit form"
  onClose={() => {}}
/>`}
        />

        {/* WARNING */}
        <Typography variant="h6" className="mt-10 mb-3">
          Warning Alert
        </Typography>
        <CodeBlock
          filename="WarningAlert.tsx"
          language="tsx"
          code={`import { WarningAlert } from "@/components/alerts/WarningAlert";

<WarningAlert
  message="Unsaved changes detected"
  onClose={() => {}}
/>`}
        />

        {/* INFO */}
        <Typography variant="h6" className="mt-10 mb-3">
          Info Alert
        </Typography>
        <CodeBlock
          filename="InfoAlert.tsx"
          language="tsx"
          code={`import { InfoAlert } from "@/components/alerts/InfoAlert";

<InfoAlert
  message="New version available"
  onClose={() => {}}
/>`}
        />

        {/* GLASS */}
        <Typography variant="h6" className="mt-10 mb-3">
          Glass Alert
        </Typography>
        <CodeBlock
          filename="GlassAlert.tsx"
          language="tsx"
          code={`<InfoAlert
  glass
  variant="fade"
  message="This is a glass-style alert"
  onClose={() => {}}
/>`}
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
              <td className="p-3">message</td>
              <td className="p-3">string | ReactNode</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Alert content</td>
            </tr>
            <tr>
              <td className="p-3">type</td>
              <td className="p-3">"success" | "error" | "warning" | "info"</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Semantic alert type</td>
            </tr>
            <tr>
              <td className="p-3">variant</td>
              <td className="p-3">"fade" | "slide" | "scale" | "bounce"</td>
              <td className="p-3">No</td>
              <td className="p-3">Animation style</td>
            </tr>
            <tr>
              <td className="p-3">glass</td>
              <td className="p-3">boolean</td>
              <td className="p-3">No</td>
              <td className="p-3">Enable glassmorphism style</td>
            </tr>
            <tr>
              <td className="p-3">onClose</td>
              <td className="p-3">() =&gt; void</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Dismiss handler</td>
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
          <AlertPlayground />
        </Box>
      </section>

      {/* FULL SOURCE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Source Code
        </Typography>

        <CodeBlock
          filename="alerts-full.tsx"
          language="tsx"
          code={fullSource}
        />
      </section>
    </DocsLayout>
  );
}
