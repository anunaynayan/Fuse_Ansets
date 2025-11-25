"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import { FloatingToolbar } from "../floating/floatingToolbar";




export default function FloatingToolbarDocs() {
  
  return (
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
      Navigation components are essential UI elements that indicate ongoing processes, enhancing user experience by providing visual feedback during data fetching or processing tasks. This documentation covers various navigation types, including Breadcrumbs, Tabs, and Drawer, detailing their implementation and usage within applications.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Loader:
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

      {/* ------------------------ Floating Toolbar SECTION ------------------------ */}
      <section id="spinnerloader" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Floating Toolbar
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
         A floating tooltip is a lightweight UI element that appears when a user hovers, clicks, or selects an element. It provides quick contextual information or actions without disrupting the layout. The tooltip “floats” near the target element and disappears automatically when the interaction ends, making it ideal for showing hints, labels, and quick formatting actions.
        </Typography>

        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <FloatingToolbar/>
        </Box>

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Example Uses
        </Typography> 


         <CodeBlock 
          filename="Install Command"
          language="bash"
          code={`
            
            "uses example code here will be written
            `}
        />

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Props 
        </Typography> 



        <CodeBlock
          filename="floatingtoolbar.tsx"
          language="tsx"
          code={`
          
           "flaoting toolbar complete code
            
          `}
        />
      </section>



      
    </DocsLayout>
  );
}
