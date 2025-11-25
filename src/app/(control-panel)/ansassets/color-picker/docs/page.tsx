"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import ColorPicker from "../colorpicker/colorpicker";

export default function ColorPickerDocs() {
  const colorPickerSource = `...your full colorpicker code here...`;

 

  return (
    <DocsLayout>
      {/* ------------------------ DESCRIPTION ------------------------ */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        ColorPicker is a customizable React color picker component built using MUI and react-color. It allows users to select colors in multiple formats (HEX, RGB, RGBA, HSL) and provides a palette of predefined colors for quick selection. The component supports alpha transparency, copy-to-clipboard functionality, and optional input fields for manual color entry.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2 mb-4">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react-color</li>
          <li>react</li>
          <li>next</li>
        </ul>
        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>
        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material react-color`}
        />
      </section>

      {/* ------------------------ PREVIEW ------------------------ */}
      <section id="preview" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>
        <Box className="mb-4 max-w-sm mx-auto">
          <ColorPicker />
        </Box>
      </section>

      {/* ------------------------ EXAMPLE ------------------------ */}
      <section id="example" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Example Uses
        </Typography>
        <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`
"use client";

import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ColorPicker from "./colorpicker";

export default function App() {
  const [color, setColor] = useState("#4D96FF");

  return (
    <Container sx={{ py: 5 }}>
      <Box maxWidth={500}>
        <ColorPicker
          value="#4D96FF"
          palette={["#4D96FF", "#9D4EDD", "#6BCB77", "#FFD93D", "#FF6B6B", "#000", "#FFF"]}
          showAlpha
          label="Color"
          fullWidth
          onChange={(c) => setColor(c.hex)}
        />
      </Box>
    </Container>
  );
}
          `}
        />
      </section>

      {/* ------------------------ PROPS TABLE ------------------------ */}
      <section id="props" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Props
        </Typography>

<Box className="overflow-x-auto mb-8">
  <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">value</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">#0099FF</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Initial color value in HEX format.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onChange</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">function</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Callback fired whenever the color changes. Returns hex, rgba, rgb, and hsl values.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">palette</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string[]</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">DEFAULT_PALETTE</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of predefined HEX colors displayed in the palette section.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">showAlpha</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">true</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Whether to allow alpha (opacity) selection.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">label</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Color</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Label displayed at the top of the color picker.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">disableCopy</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">false</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Disables the copy-to-clipboard button if true.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">disableInput</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">false</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Disables HEX/RGBA input field if true.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">fullWidth</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">false</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">If true, the component will take the full width of its parent container.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">size</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"small" | "medium"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">medium</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Determines size of label and input fields.</td>
      </tr>
    </tbody>
  </table>
</Box>







       
      </section>

      {/* ------------------------ COMPLETE CODE ------------------------ */}
      <section id="code" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Component Code
        </Typography>
        <CodeBlock
          filename="colorpicker.tsx"
          language="tsx"
          code={colorPickerSource}
        />
      </section>
    </DocsLayout>
  );
}
