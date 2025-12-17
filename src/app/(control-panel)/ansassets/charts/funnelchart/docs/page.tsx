"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";

import FunnelBase from "@/app/(control-panel)/ansassets/charts/funnelchart/components/FunnelBase";
import { FunnelComparative } from "@/app/(control-panel)/ansassets/charts/funnelchart/components/FunnelComparative";
import FunnelGradient from "@/app/(control-panel)/ansassets/charts/funnelchart/components/FunnelGradient";

import { Box, Typography } from "@mui/material";

const sampleData = [
  { name: "Visitors", value: 1200, label: "Visitors", stage: "Visitors", current: 1200, previous: 1000 },
  { name: "Signups", value: 800, label: "Signups", stage: "Signups", current: 800, previous: 650 },
  { name: "Trials", value: 400, label: "Trials", stage: "Trials", current: 400, previous: 350 },
  { name: "Paid Users", value: 180, label: "Paid", stage: "Paid", current: 180, previous: 150 },
];

export default function FunnelChartDocs() {
  return (
    <DocsLayout
      title="Funnel Chart Documentation"
      backLink="/ansassets/charts/funnelchart"
      backText="Back to Charts"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Funnel Charts are used to visualize <strong>step-by-step conversion flows</strong>,
        such as user journeys, sales pipelines, or drop-off analysis.
        These components are built with <strong>Recharts</strong> and are fully responsive.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies & Technologies
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li><strong>recharts</strong> — Funnel chart rendering</li>
          <li><strong>react</strong> — Core React library</li>
          <li><strong>next</strong> — If used inside Next.js</li>
        </ul>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install recharts`}
        />
      </section>

      {/* BASE FUNNEL */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Basic Funnel Chart
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-3xl mx-auto mb-4">
          <FunnelBase data={sampleData} />
        </Box>

        <CodeBlock
          filename="FunnelBase.tsx"
          language="tsx"
          code={`"use client";
          
          
          import React from "react";
          import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from "recharts";
          
          
          type Props = {
          data: any[];
          height?: number;
          };
          
          
          export default function FunnelBase({ data, height = 320 }: Props) {
          if (!data || data.length === 0) return <div className="p-4">No data found</div>;
          
          
          return (
          <div style={{ width: "100%", height: 450 }}>
          <ResponsiveContainer>
          <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={data} isAnimationActive label>
          <LabelList
            dataKey="name"
            position="right"
            offset={25}
            fill="#111"
            style={{ fontSize: 14, fontWeight: 500 }}
          />
          
          </Funnel>
          </FunnelChart>
          </ResponsiveContainer>
          </div>
          );
          }`}
        />
      </section>

      {/* COMPARATIVE FUNNEL */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Comparative Funnel Chart
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Compares two datasets (e.g. current vs previous period) within the same funnel.
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-3xl mx-auto mb-4">
          <FunnelComparative data={sampleData} />
        </Box>

        <CodeBlock
          filename="FunnelComparative.tsx"
          language="tsx"
          code={`"use client";
          
          
          import React from "react";
          import { ResponsiveContainer, FunnelChart, Funnel, Tooltip, LabelList } from "recharts";
          
          
          type Props = {
          data: any[];
          height?: number;
          };
          
          
          export function FunnelComparative({ data, height = 360 }: Props) {
          if (!data || data.length === 0) return <div className="p-4">No data found</div>;
          
          
          return (
          <div style={{ width: "100%", height: 450 }}>
          <ResponsiveContainer>
          <FunnelChart>
          <Tooltip />
          
          
          {/* Current Period */}
          <Funnel dataKey="current" data={data} name="Current" fill="#8884d8">
          <LabelList
            dataKey="stage"
            position="right"
            offset={25}
            fill="#111"
            style={{ fontSize: 14, fontWeight: 500 }}
          />
          </Funnel>
          
          
          {/* Previous Period */}
          <Funnel dataKey="previous" data={data} name="Previous" fill="#82ca9d" />
          </FunnelChart>
          </ResponsiveContainer>
          </div>
          );
          }`}
        />
      </section>

      {/* GRADIENT FUNNEL */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Gradient Funnel Chart
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Uses SVG gradients to create a modern, visually rich funnel representation.
        </Typography>

        <Box className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow max-w-3xl mx-auto mb-4">
          <FunnelGradient data={sampleData} />
        </Box>

        <CodeBlock
          filename="FunnelGradient.tsx"
          language="tsx"
          code={`"use client";
          
          import React from "react";
          import {
            FunnelChart,
            Funnel,
            LabelList,
            ResponsiveContainer,
            Tooltip,
          } from "recharts";
          
          export default function FunnelGradient({ data }) {
            if (!data || data.length === 0) return null;
          
            return (
              <div className="w-full h-80">
                <ResponsiveContainer>
                  <FunnelChart>
                    <Tooltip />
          
                    <defs>
                      <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
          
                    <Funnel dataKey="value" data={data} fill="url(#funnelGradient)">
                      <LabelList position="right" dataKey="label" fill="#111" />
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            );
          }
          `}
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
              <td className="p-3">Funnel data source (required).</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">height</td>
              <td className="p-3">number</td>
              <td className="p-3">320 / 360</td>
              <td className="p-3">Chart height in pixels.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SOURCE */}
      <section className="mb-20">
        <Typography variant="h4" className="font-semibold mb-4">
          Notes
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100">
          Each Funnel variant is intentionally kept separate for clarity,
          reuse, and easier customization across dashboards and analytics pages.
        </Typography>
      </section>
    </DocsLayout>
  );
}
