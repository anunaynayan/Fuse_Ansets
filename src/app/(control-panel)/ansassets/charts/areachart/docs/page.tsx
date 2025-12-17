"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";

import AreaBase from "@/app/(control-panel)/ansassets/charts/areachart/components/AreaBase";
import { AreaGradient } from "../components/AreaGradiant";
import { AreaSmooth } from "@/app/(control-panel)/ansassets/charts/areachart/components/AreaSmooth";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const sampleData = [
  { month: "Jan", uv: 400, pv: 240 },
  { month: "Feb", uv: 300, pv: 139 },
  { month: "Mar", uv: 200, pv: 980 },
  { month: "Apr", uv: 278, pv: 390 },
  { month: "May", uv: 189, pv: 480 },
];

export default function AreaChartDocs() {
    const [snippet, setSnippet] = useState<string>("");
    
      useEffect(() => {
        // fetch the full components source from a static snippet to avoid template literal parsing issues
        fetch("/snippets/areachart.txt")
          .then((r) => r.text())
          .then(setSnippet)
          .catch(() =>
            setSnippet(
              "// Could not load snippet. Make sure /public/snippets/pie-charts-full.txt exists."
            )
          );
      }, []);
  return (
    <DocsLayout
      title="Area Chart Documentation"
      backLink="/ansassets/charts/areachart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Area Charts are ideal for showing <strong>trends over time</strong> and
        <strong> volume-based metrics</strong>. These components are built using
        <strong> Recharts</strong> and are fully responsive, lightweight, and
        optimized for dashboards and analytics views.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies & Technologies
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li><strong>recharts</strong> — Area chart rendering</li>
          <li><strong>react</strong> — Core React library</li>
          <li><strong>next</strong> — If used inside Next.js</li>
        </ul>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install recharts`}
        />
      </section>

      {/* DEMO */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Basic Area Chart
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-2xl mx-auto mb-4">
          <AreaBase data={sampleData} />
        </Box>

        <CodeBlock
          filename="AreaBase Usage"
          language="tsx"
          code={`<AreaBase
  data={data}
  dataKey="uv"
  nameKey="month"
  height={240}
/>`}
        />
      </section>

      {/* VARIANTS */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-6">
          Area Chart Variants
        </Typography>

        {/* Gradient */}
        <Typography variant="h6" className="mb-2">Gradient Area Chart</Typography>
        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-4">
          <AreaGradient data={sampleData} />
        </Box>

        <CodeBlock
          filename="AreaGradient.tsx"
          language="tsx"
          code={`<AreaGradient data={data} nameKey="month" />`}
        />

        {/* Smooth */}
        <Typography variant="h6" className="mt-10 mb-2">Smooth Area Chart</Typography>
        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-4">
          <AreaSmooth data={sampleData} />
        </Box>

        <CodeBlock
          filename="AreaSmooth.tsx"
          language="tsx"
          code={`<AreaSmooth data={data} nameKey="month" />`}
        />
      </section>

      {/* PROPS */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-6">
          Props Documentation
        </Typography>

        <table className="w-full border-collapse text-sm bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Default</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 font-semibold">data</td>
              <td className="p-3">Array&lt;object&gt;</td>
              <td className="p-3">—</td>
              <td className="p-3">Chart data source (required).</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">dataKey</td>
              <td className="p-3">string</td>
              <td className="p-3">"uv"</td>
              <td className="p-3">Primary metric key.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">nameKey</td>
              <td className="p-3">string</td>
              <td className="p-3">"month"</td>
              <td className="p-3">X-axis label key.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">height</td>
              <td className="p-3">number</td>
              <td className="p-3">240</td>
              <td className="p-3">Chart height in pixels.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SOURCE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Source Code
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Each Area Chart variant is isolated, reusable, and optimized for
          dashboards. Refer to your components folder for individual
          implementations.
        </Typography>
        <CodeBlock
          filename="AreaSmooth.tsx"
          language="tsx"
          code={snippet || "// snippet loading..."}
        />
      </section>
    </DocsLayout>
  );
}
