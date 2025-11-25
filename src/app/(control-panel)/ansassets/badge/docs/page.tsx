"use client";

import { Avatar, Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import ResponsiveBadge from "../badge/badge";


export default function BadgeDocs() {


  return (
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
       Badge component is used to display small count or status information, often overlaid on another element such as an icon or button. It provides a visual cue to users about notifications, messages, or other important information that requires their attention.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Rating Star:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next</li>
          
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock 
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material`}
        />
      </section>

      {/* ------------------------ RATING STAR SECTION ------------------------ */}
      <section id="ratingstar" className="mb-16">
     

 <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
         Preview 
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <ResponsiveBadge label={1} position="top-right">
                         <Avatar sx={{ width: 60, height: 60 }} />
                       </ResponsiveBadge>
        </Box>


 <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
         Example Uses
        </Typography>


        <CodeBlock 
          filename="app.tsx"
          language="bash"
          code={`
            
                  "use client";     
            import Avatar from "@mui/material/Avatar";
            import Badge from "./badge";           
            export default function App() {                                  
              return (
                <Badge label={1} position="top-left">
                        <Avatar className="w-16 h-16 bg-gray-400" />
                </Badge>
              );
            }
            
                   
            `}
        />

        {/* ----------Props Section----------- */}

 {/* ----------Props Section----------- */}
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
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">label</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number | string | null</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">null</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge me display hone wali value. Null ya 0 (agar hideZero true ho) to badge hide ho jayega.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">max</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">99</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Maximum number to display. Agar number max se bada ho to "max+" show karega.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">variant</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"standard" | "dot"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"standard"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge ka type. "dot" sirf ek dot show karega, "standard" number/text show karega.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">position</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"top-right" | "top-left" | "bottom-right" | "bottom-left"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"top-right"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge ka position relative child element ke upar.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">color</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">#fff</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge text/dot color.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">backgroundColor</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">theme.palette.primary.main</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge background color.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">hideZero</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">true</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Agar true ho aur label 0 ya null ho to badge hide ho jayega.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">size</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"small" | "medium"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"medium"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge ka size. Small aur medium options available hain.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">children</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">React.ReactNode</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Badge ke under jo bhi component wrap karna ho (Icon, Avatar, etc.).</td>
      </tr>
    </tbody>
  </table>
</Box>






        {/* COMPLETE CODE SECTION */}

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
Complete Component Code
</Typography>


       <CodeBlock
  filename="badge.tsx"
  language="tsx"
  code={String.raw`
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Zoom, useMediaQuery, useTheme } from "@mui/material";

export interface ResponsiveBadgeProps {
  label?: number | string | null;
  max?: number;
  variant?: "standard" | "dot";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  color?: string;
  backgroundColor?: string;
  hideZero?: boolean;
  size?: "small" | "medium";
  children?: React.ReactNode;
}

export default function Badge({
  label = null,
  max = 99,
  variant = "standard",
  position = "top-right",
  color,
  backgroundColor,
  hideZero = true,
  size = "medium",
  children,
}: ResponsiveBadgeProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery("(max-width:600px)");
  const [animate, setAnimate] = useState(false);

  const badgeColor = color || "#fff";
  const bgColor = backgroundColor || theme.palette.primary.main;

  const displayLabel =
    typeof label === "number" && label > max ? \`\${max}+\` : label;

  const shouldHide =
    (hideZero && (label === 0 || label === "0")) || label === null;

  useEffect(() => {
    if (!shouldHide) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 350);
      return () => clearTimeout(timer);
    }
  }, [label]);

  const getPosition = () => {
    const offset = size === "small" ? "30%" : "35%";

    switch (position) {
      case "top-left":
        return { top: 0, left: 0, transform: \`translate(-\${offset}, -\${offset})\` };
      case "top-right":
        return { top: 0, right: 0, transform: \`translate(\${offset}, -\${offset})\` };
      case "bottom-left":
        return { bottom: 0, left: 0, transform: \`translate(-\${offset}, \${offset})\` };
      case "bottom-right":
        return { bottom: 0, right: 0, transform: \`translate(\${offset}, \${offset})\` };
      default:
        return { top: 0, right: 0 };
    }
  };

  const badgeSize = {
    width: size === "small" ? (isSmall ? 12 : 14) : isSmall ? 16 : 20,
    height: size === "small" ? (isSmall ? 12 : 14) : isSmall ? 16 : 20,
    fontSize: size === "small" ? (isSmall ? "8px" : "9px") : isSmall ? "10px" : "11px",
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      {children}

      <Zoom in={!shouldHide}>
        <Box
          aria-label={\`badge-count-\${displayLabel}\`}
          sx={{
            position: "absolute",
            pointerEvents: "none",
            ...getPosition(),
            backgroundColor: bgColor,
            color: badgeColor,
            borderRadius: "999px",
            minWidth: variant === "dot" ? badgeSize.width / 1.4 : badgeSize.width,
            height: badgeSize.height,
            px: variant === "dot" ? 0 : 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: badgeSize.fontSize,
            fontWeight: 700,
            border: "2px solid white",
            transition: "transform 0.25s ease-in-out",
            transform: animate ? "scale(1.3)" : "scale(1)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          }}
        >
          {variant === "standard" && displayLabel}
        </Box>
      </Zoom>
    </Box>
  );
}
`}
/>

      </section>

 
    </DocsLayout>
  );
}
