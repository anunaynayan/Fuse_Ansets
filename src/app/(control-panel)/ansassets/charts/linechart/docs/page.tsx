"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import LineChartComponent from "@/app/(control-panel)/ansassets/charts/linechart/components/lineChart";
import Playground from "./Playground";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";



export default function LineChartDocs() {
    const [code, setCode] = useState<string>("");

  useEffect(() => {
    fetch("/snippets/line-chart.txt")
      .then((r) => r.text())
      .then(setCode);
  }, []);

  return (
    <DocsLayout
      title="Line Chart Documentation"
      backLink="/ansassets/charts/linechart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The <strong>LineChartComponent</strong> is a smooth, animated, and
        responsive chart built using <strong>Recharts</strong>. It supports
        multiple datasets, grid toggling, color customization, and is fully
        responsive across all screen sizes.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies
        </Typography>

        <Typography className="mb-2">Required:</Typography>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>recharts</strong></li>
          <li><strong>@mui/material</strong></li>
          <li><strong>react</strong></li>
          <li><strong>next</strong></li>
        </ul>

        <CodeBlock
          filename="Install"
          language="bash"
          code={`npm install recharts @mui/material`}
        />
      </section>

      {/* DEMO */}
      <section className="mb-12">
        <Typography variant="h4" className="font-semibold mb-4">
          Example Usage
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-2xl mx-auto mb-6">
          <LineChartComponent
            title="Website Trends"
            dataUrl="/assets/trafficOverTime.json"
            showGrid={true}
            datasets={[
              { name: "Visits", dataKey: "visits", color: "#1976d2" },
              { name: "Signups", dataKey: "signups", color: "#ef5350" },
            ]}
          />
        </Box>

        <CodeBlock
          filename="Example Usage"
          language="tsx"
          code={`<LineChartComponent
  title="Website Trends"
  dataUrl="/assets/trafficOverTime.json"
  showGrid={true}
  datasets={[
    { name: "Visits", dataKey: "visits", color: "#1976d2" },
    { name: "Signups", dataKey: "signups", color: "#ef5350" }
  ]}
/>`}
        />
      </section>

      {/* PROPS */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-6">
          Props Documentation
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
            <tr><td className="p-3">title</td><td className="p-3">string</td><td className="p-3">"Line Chart"</td><td className="p-3">Chart Title</td></tr>
            <tr><td className="p-3">dataUrl</td><td className="p-3">string</td><td className="p-3">required</td><td className="p-3">Source of chart data</td></tr>
            <tr><td className="p-3">datasets</td><td className="p-3">LineDataset[]</td><td className="p-3">[]</td><td className="p-3">Lines to render</td></tr>
            <tr><td className="p-3">showGrid</td><td className="p-3">boolean</td><td className="p-3">true</td><td className="p-3">Toggle background grid</td></tr>
            <tr><td className="p-3">height</td><td className="p-3">number</td><td className="p-3">350</td><td className="p-3">Chart height</td></tr>
          </tbody>
        </table>
      </section>

      {/* PLAYGROUND */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-6">
          Playground
        </Typography>
        <Typography className="mb-4">Experiment with colors, datasets, and grid visibility.</Typography>

        <Playground />
      </section>

      {/* SOURCE CODE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-4">
          Full Component Source Code
        </Typography>

        <CodeBlock
          filename="LineChartComponent.tsx"
          language="tsx"
          code={code}
        />
      </section>
    </DocsLayout>
  );
}
