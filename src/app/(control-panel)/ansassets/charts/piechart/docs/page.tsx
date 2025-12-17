"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import PieChartComponent from "@/app/(control-panel)/ansassets/charts/piechart/components/PieChart";
import TwoLevelPieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/TwoLevelPieChart";
import CustomActivePieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/CustomActivePieChart";
import Playground from "./Playground";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PieChartDocs() {
  const [snippet, setSnippet] = useState<string>("");

  useEffect(() => {
    // fetch the full components source from a static snippet to avoid template literal parsing issues
    fetch("/snippets/pie-charts-full.txt")
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
      title="Pie Charts Documentation"
      backLink="/ansassets/charts/piechart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        A collection of pie chart components built with{" "}
        <strong>Recharts</strong>: a basic slice-based pie, a two-level (donut
        with inner/outer) chart, and a custom-active-shape pie with connectors
        and detailed labels. Use these components for breakdowns, funnels,
        category shares, and multi-level composition views.
      </Typography>

      {/* DEPENDENCIES */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>
            <strong>recharts</strong> — chart rendering
          </li>
          <li>
            <strong>@mui/material</strong> — docs controls and layout
          </li>
          <li>
            <strong>react</strong> / <strong>next</strong>
          </li>
        </ul>

        <Typography className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock
          filename="Install"
          language="bash"
          code={`npm install recharts @mui/material`}
        />
      </section>

      {/* DEMOS */}
      <section id="demos" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Usage — Demos
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Rendered examples using sample JSON from <code>/assets/*.json</code>.
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-xl">
            <PieChartComponent
              title="Basic Pie"
              dataUrl="/assets/pieData.json"
              colors={["#1976d2", "#ef5350", "#66bb6a", "#ffa726", "#ab47bc"]}
            />
          </div>

          <div className=" p-6 rounded-xl">
            <TwoLevelPieChart
              title="Two-Level Pie"
              outerDataUrl="/assets/pieOuter.json"
              innerDataUrl="/assets/pieInner.json"
            />
          </div>

          <div className=" p-6 rounded-xl">
            <CustomActivePieChart
              title="Custom Active Pie"
              dataUrl="/assets/pieData.json"
            />
          </div>
        </Box>

        <CodeBlock
          filename="Example Usage (Basic)"
          language="tsx"
          code={`<PieChartComponent 
            title="Basic Pie" 
            dataUrl="/assets/pieData.json" 
            colors={["#1976d2","#ef5350","#66bb6a"]} />`}
        />
      </section>

      {/* PROPS */}
      <section id="props" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Props Summary
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Below is a combined, high-level props summary for the three pie
          components.
        </Typography>

        <table className="w-full border-collapse text-sm bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Applies to</th>
              <th className="p-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">title</td>
              <td className="p-3">string</td>
              <td className="p-3">all</td>
              <td className="p-3">Optional title text</td>
            </tr>
            <tr>
              <td className="p-3">dataUrl / outerDataUrl / innerDataUrl</td>
              <td className="p-3">string</td>
              <td className="p-3">basic / two-level / two-level</td>
              <td className="p-3">JSON path for chart data</td>
            </tr>
            <tr>
              <td className="p-3">dataKey</td>
              <td className="p-3">string</td>
              <td className="p-3">all</td>
              <td className="p-3">
                Key holding numeric values (default "value")
              </td>
            </tr>
            <tr>
              <td className="p-3">nameKey</td>
              <td className="p-3">string</td>
              <td className="p-3">all</td>
              <td className="p-3">Key holding label (default "name")</td>
            </tr>
            <tr>
              <td className="p-3">colors / colorsOuter / colorsInner</td>
              <td className="p-3">string[]</td>
              <td className="p-3">basic / two-level</td>
              <td className="p-3">Slice colors</td>
            </tr>
            <tr>
              <td className="p-3">innerRadius / outerRadius</td>
              <td className="p-3">number</td>
              <td className="p-3">basic / two-level / custom</td>
              <td className="p-3">Radii in px</td>
            </tr>
            <tr>
              <td className="p-3">startAngle / endAngle</td>
              <td className="p-3">number</td>
              <td className="p-3">basic / custom</td>
              <td className="p-3">Angles in degrees</td>
            </tr>
            <tr>
              <td className="p-3">paddingAngle</td>
              <td className="p-3">number</td>
              <td className="p-3">basic</td>
              <td className="p-3">Gap between slices</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* PLAYGROUND */}
      <section id="playground" className="mb-20">
        <Typography
          variant="h4"
          className="font-semibold mb-6 text-gray-900 dark:text-gray-100"
        >
          Playground
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Switch between chart types and adjust every style & data control
          (inner/outer radius, angles, colors, add/remove slices, donut toggle,
          tooltip, animation, etc.).
        </Typography>

        <Playground />
      </section>

      {/* FULL SOURCE CODE (loaded from public/snippets/pie-charts-full.txt) */}
      <section id="source-code" className="mb-20">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Full Component Source (all pie components)
        </Typography>

        <Typography className="text-sm text-gray-600 dark:text-gray-100 mb-4">
          Below is code examples of all types of pie charts.
        </Typography>

        <CodeBlock
          filename="All Pie Charts.tsx"
          language="tsx"
          code={snippet || "// snippet loading..."}
        />
      </section>
    </DocsLayout>
  );
}
