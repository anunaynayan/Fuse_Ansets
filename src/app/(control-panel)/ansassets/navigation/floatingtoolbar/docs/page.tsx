"use client";

import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import { Box, Typography } from "@mui/material";
import FloatingToolbarEditor from "../floating/floatingToolbar";
import { useEffect, useState } from "react";

export default function FloatingToolbarDocs() {


const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/floatingtoolbar.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);

  return (
    <DocsLayout
      title="Floating Toolbar"
       backLink="/ansassets/navigation/floatingtoolbar/floating"
      backText="Back to FloatingBar" 
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        FloatingToolbarEditor is a React content-editable text editor component
        which has included  floating, draggable toolbar . Toolbar selection
         automatically appear upper side & Provide basic text formatting tools
        like :           
      </Typography>

       <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 ">
    <li><strong>Bold</strong></li>
    <li><strong>Italic</strong></li>
    <li><strong>Heading (H1–H6 dropdown)</strong></li>
    <li><strong>Text Color</strong></li>
    <li><strong>Bullet List</strong></li>
  </ul>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Loader:
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next</li>
          <li>react-draggable</li>
        </ul>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material react-draggable`}
        />
      </section>

      {/* ------------------------ Floating Toolbar SECTION ------------------------ */}
      <section id="spinnerloader" className="mb-16">


        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
           <FloatingToolbarEditor/>
        </Box>


        </section>

{/* ----------------Example section --------*/}

<section id="exmple" className="mb-16">


        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Uses
        </Typography>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`"use client";

           import React from "react";
            import FloatingToolbarEditor from "@component/FloatingToolbarEditor";

export default function App() {
  return (
        <div className="w-full">
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Select text in the editor below to see the floating toolbar.
        </p>
        
        <FloatingToolbarEditor />
      </div>
    
  );
}

            `}
        />


        </section>


        {/* Props */}
<section id="" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
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
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">initialContent</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">""</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Initial content displayed in the editor.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">tools</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">array</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Default toolbar buttons</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Customizable toolbar tools (e.g., Bold, Italic, Heading, Color, Bullet List).</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onChange</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(content: string) = void</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Callback invoked when the content of the editor changes.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">theme</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"light" | "dark"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"light"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Optional theme override for the editor.</td>
          </tr>
        </tbody>
      </table>
    </Box>




        </section>


{/* complete code */}

<section id="floatingtool" className="mb-16">

        <CodeBlock
          filename="floatingtoolbar.tsx"
          language="tsx"
          code={code}
        />
      </section>
    </DocsLayout>
  );
}
