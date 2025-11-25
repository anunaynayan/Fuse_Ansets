"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import LinearDeterminate from "../progress/components/linearDeterminate";


export default function ProgressBarDocs() {
  return (
    <DocsLayout>
      {/* ---------------------------------- INTRO ---------------------------------- */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        <b>Progress Bars</b> are reusable UI components used to display task progress, loading states,
        or completion metrics. This documentation covers the three main types used in projects:  
        <b>Linear Determinate</b>, <b>Linear Indeterminate</b>, and <b>Circular / Radial</b>.
        They support gradients, animations, percentage labels, and are theme-aware.
      </Typography>

      {/* ---------------------------------- DEPENDENCIES ---------------------------------- */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These components use the following libraries:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next </li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install required packages:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material f`}
        />
      </section>

      {/* ---------------------------------- PREVIEW ---------------------------------- */}
      <section id="preview" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Below are live previews of the three Progress Bar types:
        </Typography>



        <Box className="mb-6">
          <Typography variant="subtitle1" className="mb-2">Linear Determinate</Typography>
          <LinearDeterminate value={60} label="File Upload Progress" />
        </Box>
       
      </section>

      {/* ---------------------------------- USAGE ---------------------------------- */}
      <section id="usage" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Example
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Import and use any Progress Bar component in your pages or routes:
        </Typography>

        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={`import { LinearDeterminate} from "@/components/ProgressBar";

export default function Page() {
  return (
    <div>
      <LinearDeterminate value={50} label="File Upload" />
      
    </div>
  );
}`}
        />
      </section>

      {/* ---------------------------------- PROPS TABLE ---------------------------------- */}
      {/* <section id="props" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Props
        </Typography>

        <table className="w-full text-left border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="p-2">Prop</th>
              <th className="p-2">Type</th>
              <th className="p-2">Default</th>
              <th className="p-2">Description</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 dark:text-gray-200">
            <tr>
              <td className="p-2">value</td>
              <td className="p-2">number</td>
              <td className="p-2">0</td>
              <td>Progress percentage (0–100). Required for determinate types.</td>
            </tr>
            <tr>
              <td className="p-2">label</td>
              <td className="p-2">string</td>
              <td className="p-2">""</td>
              <td>Optional text displayed above the progress bar.</td>
            </tr>
            <tr>
              <td className="p-2">size</td>
              <td className="p-2">number</td>
              <td className="p-2">80</td>
              <td>Size of the circular progress bar (diameter). Only for CircularProgressBar.</td>
            </tr>
          </tbody>
        </table>
      </section> */}

      {/* ---------------------------------- FULL CODE ---------------------------------- */}
      <section id="full-code" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Component Code
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          This is the full implementation of all three progress bar components:
        </Typography>
      

     <CodeBlock
  filename="LinearDeterminate.tsx"
  language="tsx"
  code={`
"use client";

import React from "react";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

interface LinearDeterminateProps {
  value: number;
  label?: string;
}

const LinearDeterminate: React.FC<LinearDeterminateProps> = ({ value, label }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      {label && (
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
      )}

      <Box sx={{ position: "relative" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 12,
            borderRadius: 20,
            backgroundColor: theme.palette.grey[300],
            "& .MuiLinearProgress-bar": {
              background: 'linear-gradient(90deg, ' + theme.palette.primary.main + ', ' + theme.palette.success.main + ')',
              borderRadius: 20,
              transition: "width 1s ease-in-out",
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: "-25px",
            right: 0,
            fontWeight: 500,
            color: theme.palette.text.secondary,
          }}
        >
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearDeterminate;
  `}
/>


            
      </section>
    </DocsLayout>
  );
}
