"use client";

import DocsLayout from "./DocsLayout";
import CodeBlock from "./CodeBlock";

import SimpleMetricCard from "../cards/components/SimpleMetricCard";
import GlassMetricCard from "../cards/components/GlassMetricCard";
import DropdownMetricCard from "../cards/components/DropdownMetricCard";
import MetricsHeader from "../cards/components/MetricsHeader";

import { Box, Typography } from "@mui/material";

export default function MetricCardsDocs() {
  const exampleMetric = {
    id: "revenue",
    title: "Revenue",
    value: 128000,
    unit: "₹",
    change: 6.2,
    icon: "MonetizationOn",
    color: "#34D399",
  };

  return (
    <DocsLayout>
      <Typography
        variant="h3"
        className="font-bold mb-6 text-gray-900 dark:text-gray-100"
      >
        Metric Cards Component Library
      </Typography>

      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        A set of responsive, reusable, and customizable metric cards designed
        for dashboards. They display KPIs such as revenue, orders, active users,
        and more with various presentation styles. You can use them in your
        analytics platforms or other areas where you need to display important
        statistics.
      </Typography>

      {/* DEPENDENCIES AND TECHNOLOGIES*/}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies to use the
          Metric Cards:
        </Typography>

        {/* Dependencies */}
        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>
            <strong>@mui/material</strong> — Material-UI components for UI
            design
          </li>
          <li>
            <strong>@mui/icons-material</strong> — Material-UI icons for dynamic
            icon support in the cards
          </li>
          <li>
            <strong>react</strong> — The core React library for building the
            components
          </li>
          <li>
            <strong>react-dom</strong> — React DOM for rendering components to
            the DOM
          </li>
          <li>
            <strong>next</strong> — Next.js framework for server-side rendering
            and routing
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
            <strong>@emotion/react</strong> — Optional, for custom theming with
            Material-UI
          </li>
          <li>
            <strong>axios</strong> — Optional, for making API requests (if you
            plan to fetch data dynamically)
          </li>
        </ul>

        {/* Installation Command */}
        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install the required dependencies with the following command:
        </Typography>
        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material react react-dom next`}
        />
      </section>

      {/* SIMPLE METRIC CARD */}
      <section id="simple-card" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          SimpleMetricCard
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          A simple, clean card designed for displaying single KPIs such as
          revenue, orders, and user metrics. It features the value, a change
          indicator, and an icon.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <SimpleMetricCard metric={exampleMetric} />
        </Box>

        <CodeBlock
          filename="SimpleMetricCard.tsx"
          language="tsx"
          code={`import { Card, CardContent, Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

export default function SimpleMetricCard({ metric }: { metric: Metric }) {
  const IconComp = Icons[metric.icon as keyof typeof Icons];
  const isPositive = metric.change >= 0;

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent className="flex justify-between items-center p-5">
        <div>
          <Typography variant="subtitle2">{metric.title}</Typography>
          <Typography variant="h5" className="font-bold">
            {metric.unit
              ? \`\${metric.unit}\${metric.value.toLocaleString()}\`
              : metric.value.toLocaleString()}
          </Typography>
          <Typography
            variant="body2"
            className={isPositive ? "text-green-500" : "text-red-500"}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(metric.change)}%
          </Typography>
        </div>
        {IconComp && <IconComp sx={{ fontSize: 40, color: metric.color }} />}
      </CardContent>
    </Card>
  );
}`}
        />
      </section>

      {/*GLASS METRIC CARD*/}
      <section id="glass-card" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          GlassMetricCard
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          A modern, frosted-glass style metric card with hover effects and a
          unique aesthetic for dynamic and stylish dashboards.
        </Typography>

        <Box
          className="mb-4 mx-auto flex justify-center items-center"
          style={{
            width: "800px", // Fixed width for the container
            height: "200px", // Fixed height for the container
            backgroundImage: "url('/assets/images/cards/metric.jpg')",
            // backgroundAttachment: "fixed",
            backgroundSize: "cover", // Ensures the image is properly scaled within the Box
            backgroundPosition: "center", // Centers the image
          }}
        >
          <GlassMetricCard metric={exampleMetric} />
        </Box>

        <CodeBlock
          filename="GlassMetricCard.tsx"
          language="tsx"
          code={`import { Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useState } from "react";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

export default function GlassMetricCard({ metric }: { metric: Metric }) {
  const IconComp = Icons[metric.icon as keyof typeof Icons];
  const isPositive = metric.change >= 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      className="
        relative rounded-2xl overflow-hidden shadow-xl border border-white/20 
        backdrop-blur-xl bg-white/10 transition-transform duration-500 
        hover:scale-[1.03] hover:shadow-2xl group
      "
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="relative z-10 p-5 flex justify-between items-center">
        <div>
          <Typography variant="subtitle2" className="text-gray-200">
            {metric.title}
          </Typography>
          <Typography variant="h5" className="font-bold text-white">
            {metric.unit
              ? \`\${metric.unit}\${metric.value}\`
              : metric.value.toLocaleString()}
          </Typography>
          <Typography
            variant="body2"
            className={isPositive ? "text-green-400" : "text-red-400"}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(metric.change)}%
          </Typography>
        </div>
        {IconComp && <IconComp sx={{ fontSize: 40, color: metric.color }} />}
      </div>
    </div>
  );
}`}
        />
      </section>

      {/* ===========================================================
        DROPDOWN METRIC CARD
      =========================================================== */}
      <section id="dropdown-card" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          DropdownMetricCard
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          A functional dropdown card that allows for additional actions such as
          viewing details, comparing, or removing the metric.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <DropdownMetricCard metric={exampleMetric} />
        </Box>

        <CodeBlock
          filename="DropdownMetricCard.tsx"
          language="tsx"
          code={`import {
  Card, CardContent, IconButton, Menu, MenuItem, Typography
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

export default function DropdownMetricCard({ metric }: { metric: Metric }) {
  const IconComp = Icons[metric.icon as keyof typeof Icons];
  const isPositive = metric.change >= 0;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent className="p-5 relative">
        <div className="flex justify-between items-start">
          <Typography variant="subtitle2" className="text-gray-500">
            {metric.title}
          </Typography>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>View Details</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Compare</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Remove</MenuItem>
          </Menu>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div>
            <Typography variant="h5" className="font-bold">
              {metric.unit
                ? \`\${metric.unit}\${metric.value}\`
                : metric.value.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              className={isPositive ? "text-green-500" : "text-red-500"}
            >
              {isPositive ? "▲" : "▼"} {Math.abs(metric.change)}%
            </Typography>
          </div>
          {IconComp && <IconComp sx={{ fontSize: 40, color: metric.color }} />}
        </div>
      </CardContent>
    </Card>
  );
}`}
        />
      </section>
    </DocsLayout>
  );
}
