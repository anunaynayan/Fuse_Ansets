"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import ErrorPages from "../error/error4";

export default function ErrorPageDocs() {
  return (
    <DocsLayout>
      {/* ---------------------------------- INTRO ---------------------------------- */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        <b>Error Page</b> is a customizable UI component used to display meaningful
        error screens such as <b>404 – Page Not Found</b>, <b>500 – Server Error</b>,
        or any custom error scenario.  
        It supports animated digits, emojis, messages, gradients, optional video,
        and decorative particles for a modern, interactive feel.
      </Typography>

      {/* ---------------------------------- DEPENDENCIES ---------------------------------- */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          This component uses the following libraries:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next/link</li>
          <li>framer-motion</li>
          <li>tailwindcss (for styling)</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install required packages:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material framer-motion`}
        />
      </section>

      {/* ---------------------------------- PREVIEW ---------------------------------- */}
      <section id="preview" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Below is the default preview of the Error Page:
        </Typography>

        <Box className="mb-6 max-w-md mx-auto border rounded-xl overflow-hidden shadow-lg">
          <ErrorPages />
        </Box>
      </section>

      {/* ---------------------------------- USAGE ---------------------------------- */}
      <section id="usage" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Example
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Import and use the component in any route such as custom 404 or error pages:
        </Typography>

        <CodeBlock
          filename="app/not-found.tsx"
          language="tsx"
          code={`import ErrorPage from "@/components/error/error";

export default function NotFound() {
  return <ErrorPage />;
}`}
        />
      </section>

      {/* ---------------------------------- PROPS TABLE ---------------------------------- */}
      <section id="props" className="mb-16">
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
              <td className="p-2">code</td>
              <td className="p-2">string</td>
              <td className="p-2">"404"</td>
              <td className="p-2">Error code displayed as large animated text.</td>
            </tr>

            <tr>
              <td className="p-2">emoji</td>
              <td className="p-2">string</td>
              <td className="p-2">"🤖"</td>
              <td className="p-2">Emoji displayed inside the error code.</td>
            </tr>

            <tr>
              <td className="p-2">title</td>
              <td className="p-2">string</td>
              <td className="p-2">"Page Not Found"</td>
              <td className="p-2">Heading shown below the error code.</td>
            </tr>

            <tr>
              <td className="p-2">message</td>
              <td className="p-2">string</td>
              <td className="p-2">
                "The page you're looking for doesn't exist..."
              </td>
              <td className="p-2">Description message below the title.</td>
            </tr>

            <tr>
              <td className="p-2">buttonText</td>
              <td className="p-2">string</td>
              <td className="p-2">"Go Home"</td>
              <td className="p-2">CTA button label.</td>
            </tr>

            <tr>
              <td className="p-2">redirectTo</td>
              <td className="p-2">string</td>
              <td className="p-2">"/"</td>
              <td className="p-2">URL to navigate when clicking the button.</td>
            </tr>

            <tr>
              <td className="p-2">videoSrc</td>
              <td className="p-2">string</td>
              <td className="p-2">""</td>
              <td className="p-2">Optional looping video shown beside content.</td>
            </tr>

            <tr>
              <td className="p-2">gradient</td>
              <td className="p-2">string</td>
              <td className="p-2">Dark blue gradient</td>
              <td className="p-2">Background gradient of the entire page.</td>
            </tr>

            <tr>
              <td className="p-2">particleCount</td>
              <td className="p-2">number</td>
              <td className="p-2">15</td>
              <td className="p-2">Number of floating particles in background.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------------------------- FULL CODE ---------------------------------- */}
      <section id="full-code" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Component Code
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          This is the complete implementation of the <b>ErrorPage</b> component:
        </Typography>

        {/* SAFE VERSION – NO RED LINE ERRORS */}
      <CodeBlock
  filename="ErrorPage.tsx"
  language="tsx"
  code={String.raw`
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface ErrorPageProps {
  code?: string;
  emoji?: string;
  title?: string;
  message?: string;
  buttonText?: string;
  redirectTo?: string;
  videoSrc?: string;
  gradient?: string;
  particleCount?: number;
}

const MotionBox = motion(Box);

export default function ErrorPage({
  code = "404",
  emoji = "🤖",
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or might have been removed.",
  buttonText = "Go Home",
  redirectTo = "/",
  videoSrc = "",
  gradient = "linear-gradient(135deg, #0b1124 0%, #1e3a8a 100%)",
  particleCount = 15,
}: ErrorPageProps) {
  return (
    <Box
      className="w-full h-screen flex items-center justify-center p-4 text-white relative overflow-hidden"
      sx={{
        background: gradient,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[500px] z-10 text-center md:text-left"
      >
        <Typography
          variant="h1"
          className="font-bold flex items-center justify-center md:justify-start gap-3 select-none"
          sx={{ fontSize: { xs: "80px", md: "120px" } }}
        >
          <motion.span
            animate={{ x: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            {code[0]}
          </motion.span>

          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            {emoji}
          </motion.span>

          <motion.span
            animate={{ x: [0, 15, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.4 }}
          >
            {code[1] ?? code[0]}
          </motion.span>
        </Typography>

        <Typography variant="h5" className="mt-4 opacity-90">
          {title}
        </Typography>

        <Typography variant="body1" className="mt-2 opacity-80 text-[16px] md:text-[18px]">
          {message}
        </Typography>

        <Link href={redirectTo}>
          <Button
            variant="contained"
            className="mt-6 font-semibold px-6 py-2 rounded-xl"
            sx={{
              backgroundColor: "#facc15",
              color: "#000",
              "&:hover": {
                backgroundColor: "#fde047",
                transform: "scale(1.05)",
              },
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </MotionBox>

      {videoSrc && (
        <MotionBox
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[85%] md:w-[40%] mt-8 md:mt-0 flex justify-center"
        >
          <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-auto object-contain" />
        </MotionBox>
      )}

      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 8,
            height: 8,
            top: "50%",
            left: "50%",
          }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}
    </Box>
  );
}
  `}
/>

      </section>
    </DocsLayout>
  );
}
