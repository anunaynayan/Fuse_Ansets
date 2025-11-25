"use client";

import DocsLayout from "@/app/(control-panel)/ansassets/documetation/DocsLayout";
import CodeBlock from "@/app/(control-panel)/ansassets/documetation/CodeBlock";
import BarChartComponent from "@/app/(control-panel)/ansassets/charts/barchart/components/barChart";
import Playground from "./Playground";

import { Box, Typography } from "@mui/material";

export default function BarChartDocs() {
  return (
    <DocsLayout
      title="Bar Chart Documentation"
      backLink="/ansassets/charts/barchart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The <strong>BarChartComponent</strong> is a customizable, responsive,
        and data-driven bar chart built using <strong>Recharts</strong>. It
        supports vertical & horizontal orientation, dynamic file-based data
        loading, label toggling, custom colors, and full responsiveness — making
        it ideal for dashboards, analytics pages, and visual reports.
      </Typography>

      {/* DEPENDENCIES */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the required dependencies to use the BarChart component:
        </Typography>

        {/* Required Dependencies */}
        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>
            <strong>recharts</strong> — Charting library used for the bar chart
          </li>
          <li>
            <strong>@mui/material</strong> — Used for card & loader UI
          </li>
          <li>
            <strong>react</strong> — Core React library
          </li>
          <li>
            <strong>next</strong> — If used within Next.js
          </li>
        </ul>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100"
        >
          Optional Dependencies:
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>
            <strong>axios</strong> — If you want to fetch data using Axios
          </li>
        </ul>

        {/* INSTALLATION */}
        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install the required libraries:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install recharts @mui/material`}
        />
      </section>

      {/* DEMO */}
      <section id="demo" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Usage
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Below is an example of the BarChartComponent rendered inside a styled
          container with default settings.
        </Typography>

        <Box className="mb-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-2xl mx-auto">
          <BarChartComponent
            title="Example Bar Chart"
            orientation="vertical"
            barColor="#1976d2"
            dataUrl="/assets/trafficPage.json"
          />
        </Box>

        <CodeBlock
          filename="Example Usage"
          language="tsx"
          code={`<BarChartComponent
  title="Example Bar Chart"
  orientation="vertical"
  barColor="#1976d2"
  barSize={40}
  showLabels={true}
  dataUrl="/assets/trafficPage.json"
/>`}
        />
      </section>

      {/* PROPS SECTION */}
      <section id="props" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-6 text-gray-900 dark:text-gray-100"
        >
          Props Documentation
        </Typography>

        <table className="w-full border-collapse text-sm bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Default</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 font-semibold">title</td>
              <td className="p-3">string</td>
              <td className="p-3">"Bar Chart"</td>
              <td className="p-3">Title displayed above the chart.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">orientation</td>
              <td className="p-3">"vertical" | "horizontal"</td>
              <td className="p-3">"vertical"</td>
              <td className="p-3">Sets the chart orientation.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">barColor</td>
              <td className="p-3">string</td>
              <td className="p-3">"#1976d2"</td>
              <td className="p-3">Changes bar color.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">barSize</td>
              <td className="p-3">number</td>
              <td className="p-3">40</td>
              <td className="p-3">Sets the bar thickness.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">showLabels</td>
              <td className="p-3">boolean</td>
              <td className="p-3">false</td>
              <td className="p-3">Shows numeric labels on each bar.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">dataUrl</td>
              <td className="p-3">string</td>
              <td className="p-3">"/data/barData.json"</td>
              <td className="p-3">
                File path or API endpoint from where chart reads data.
              </td>
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
          Customize the chart using the controls below and see live updates.
          This helps you experiment with different orientations, colors, sizes,
          and label visibility.
        </Typography>

        {/* REACT STATE FOR PLAYGROUND */}
        <Playground />
      </section>

      {/* FULL COMPONENT CODE */}
      <section id="source-code" className="mb-20">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Full Component Source Code
        </Typography>

        <CodeBlock
          filename="BarChartComponent.tsx"
          language="tsx"
          code={`"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, LabelList
} from "recharts";
import { Card, Typography, CircularProgress } from "@mui/material";

interface ChartData { name: string; value: number; }

interface BarChartComponentProps {
  title?: string;
  orientation?: "vertical" | "horizontal";
  barColor?: string;
  barSize?: number;
  showLabels?: boolean;
  dataUrl?: string;
}

export default function BarChartComponent({
  title = "Bar Chart",
  orientation = "vertical",
  barColor = "#1976d2",
  barSize = 40,
  showLabels = false,
  dataUrl = "/data/barData.json",
}: BarChartComponentProps) {
  const [data, setData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading chart data:", err));
  }, [dataUrl]);

  const isVertical = orientation === "vertical";

  if (!data)
    return (
      <Card sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading data...</Typography>
      </Card>
    );

  return (
    <div className="p-2">
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout={isVertical ? "horizontal" : "vertical"}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={barSize}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {isVertical ? (
            <>
              <XAxis dataKey="name" />
              <YAxis />
            </>
          ) : (
            <>
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
            </>
          )}
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={barColor} animationDuration={800}>
            {showLabels && <LabelList dataKey="value" position="top" />}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}`}
        />
      </section>
    </DocsLayout>
  );
}
