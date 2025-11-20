"use client";

import DocsLayout from "@/app/(control-panel)/ansassets/documetation/DocsLayout";
import CodeBlock from "@/app/(control-panel)/ansassets/documetation/CodeBlock";
import ColumnChartComponent from "@/app/(control-panel)/ansassets/charts/columnchart/components/ColumnChart";
import Playground from "./Playground";

import { Box, Typography } from "@mui/material";

export default function ColumnChartDocs() {
  return (
    <DocsLayout
      title="Column Chart Documentation"
      backLink="/ansassets/charts/columnchart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The <strong>ColumnChartComponent</strong> is a highly customizable and
        animated vertical bar/column chart component built using{" "}
        <strong>Recharts</strong>. It supports multiple data series, gradients,
        stacked bars, dynamic shaping, custom bar hover animation, label
        rendering, and full responsiveness — making it ideal for dashboards,
        comparisons, and analytics.
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
          These are the required dependencies to use the Column Chart component:
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
            <strong>recharts</strong> — Charting library used for rendering
          </li>
          <li>
            <strong>@mui/material</strong> — UI elements (cards, loaders)
          </li>
          <li>
            <strong>react</strong> — Core library
          </li>
          <li>
            <strong>next</strong> — If used within Next.js
          </li>
        </ul>

        {/* Installation */}
        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install required libraries:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install recharts @mui/material`}
        />
      </section>

      {/* DEMO PREVIEW */}
      <section id="demo" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Usage
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Below is a rendered Column Chart with sample multi-series data:
        </Typography>

        <Box className="mb-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-3xl mx-auto">
          <ColumnChartComponent
            title="Traffic Comparison"
            dataUrl="/assets/columnData.json"
            series={[
              { name: "Home", dataKey: "home", color: "#1976d2" },
              { name: "Blog", dataKey: "blog", color: "#ef5350" },
              { name: "Pricing", dataKey: "pricing", color: "#66bb6a" },
            ]}
            stacked={false}
            barSize={35}
            showGrid
          />
        </Box>

        <CodeBlock
          filename="Example Usage"
          language="tsx"
          code={`<ColumnChartComponent
  title="Traffic Comparison"
  dataUrl="/assets/columnData.json"
  series={[
    { name: "Home", dataKey: "home", color: "#1976d2" },
    { name: "Blog", dataKey: "blog", color: "#ef5350" },
    { name: "Pricing", dataKey: "pricing", color: "#66bb6a" },
  ]}
  barSize={35}
  showGrid={true}
  stacked={false}
/>`}
        />
      </section>

      {/* PROPS DOCUMENTATION */}
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
              <td className="p-3">undefined</td>
              <td className="p-3">Chart title displayed at the top.</td>
            </tr>

            <tr>
              <td className="p-3 font-semibold">dataUrl</td>
              <td className="p-3">string</td>
              <td className="p-3">—</td>
              <td className="p-3">
                Path to JSON file or API endpoint for chart data.
              </td>
            </tr>

            <tr>
              <td className="p-3 font-semibold">series</td>
              <td className="p-3">Series[]</td>
              <td className="p-3">—</td>
              <td className="p-3">
                Array of objects defining each bar series, label, data key, &
                color.
              </td>
            </tr>

            <tr>
              <td className="p-3 font-semibold">barSize</td>
              <td className="p-3">number</td>
              <td className="p-3">35</td>
              <td className="p-3">Specifies the thickness of each bar.</td>
            </tr>

            <tr>
              <td className="p-3 font-semibold">showGrid</td>
              <td className="p-3">boolean</td>
              <td className="p-3">true</td>
              <td className="p-3">Shows light grid lines behind the chart.</td>
            </tr>

            <tr>
              <td className="p-3 font-semibold">stacked</td>
              <td className="p-3">boolean</td>
              <td className="p-3">false</td>
              <td className="p-3">
                Merges all series into a single stacked bar group.
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
          Adjust the chart settings using the controls below and watch the
          changes update in real time.
        </Typography>

        <Playground />
      </section>

      {/* FULL SOURCE CODE */}
      <section id="source-code" className="mb-20">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Full Component Source Code
        </Typography>

        <CodeBlock
          filename="ColumnChart.tsx"
          language="tsx"
          code={`"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, LabelList,
} from "recharts";
import { CustomBar } from "./CustomBar";

type Series = {
  name: string;
  dataKey: string;
  color: string;
  stacked?: boolean;
};

type Props = {
  title?: string;
  dataUrl: string;
  series: Series[];
  barSize?: number;
  showGrid?: boolean;
  stacked?: boolean;
};

export default function ColumnChartComponent({
  title,
  dataUrl,
  series,
  barSize = 35,
  showGrid = true,
  stacked = false,
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [dataUrl]);

  return (
    <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 ">
      {title && (
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
          {title}
        </h2>
      )}

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" opacity={0.4} />}

            <XAxis dataKey="category" />
            <YAxis />

            <Tooltip contentStyle={{ background: "#fff", borderRadius: 5 }} />
            <Legend />

            <defs>
              {series.map((s) => (
                <linearGradient
                  key={s.dataKey}
                  id={\`grad-\${s.dataKey}\`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={s.color} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={s.color} stopOpacity={0.4} />
                </linearGradient>
              ))}
            </defs>

            {series.map((s) => (
              <Bar
                key={s.dataKey}
                dataKey={s.dataKey}
                name={s.name}
                stackId={stacked ? "stack" : undefined}
                fill={\`url(#grad-\${s.dataKey})\`}
                barSize={barSize}
                radius={[6, 6, 0, 0]}
                animationDuration={900}
                shape={<CustomBar radius={[6, 6, 0, 0]} />}
              >
                <LabelList
                  dataKey={s.dataKey}
                  position="top"
                  offset={10}
                  style={{
                    fill: "#444",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}`}
        />

        {/* CUSTOM BAR CODE */}
        <CodeBlock
          filename="CustomBar.tsx"
          language="tsx"
          code={`import React, { useState } from "react";

export const CustomBar = (props: any) => {
  const { fill, x, y, width, height, radius } = props;

  const [hover, setHover] = useState(false);

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "all 0.25s ease",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transformOrigin: \`\${x + width / 2}px \${y + height}px\`,
        filter: hover ? "brightness(1.2)" : "brightness(1)",
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius ? radius[0] : 6}
        ry={radius ? radius[1] : 6}
        fill={fill}
      />
    </g>
  );
};`}
        />
      </section>
    </DocsLayout>
  );
}
