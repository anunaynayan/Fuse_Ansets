"use client";

import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import { Box, Typography } from "@mui/material";
import TabDemoApp from "../tab/page";
import { useEffect, useState } from "react";



export default function TabDocs() {


 const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/tabs.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);





  return (
    <DocsLayout>
      {/* ---------------------------------- INTRO ---------------------------------- */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The Tabs component provides a simple and efficient way to switch between different sections or views within the application without navigating to a new page. It allows users to access multiple screens or features through a horizontal tab menu, improving UI organization and user experience.
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

        <Box className="mb-6">
          <TabDemoApp/>
        </Box>
       
      </section>

      {/* ---------------------------------- USAGE ---------------------------------- */}
      <section id="usage" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Example
        </Typography>


        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={`
            import Tabs from "./components/tabs";
            const tabItems = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Analytics", value: "analytics" },
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
];

export default function App(){

 const [active, setActive] = useState("dashboard");
  return (
<Tabs
  tabs={tabItems}
  value={active}
  onChange={setActive}
/>;
 
  )
}          
            `}
        />
      </section>
{/* ---------------------------------- PROPS TABLE ---------------------------------- */}
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
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">tabs</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          {`{ label: string; content: ReactNode; }[]`}
        </td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Array of tab items containing label and content to render.
        </td>
      </tr>

      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">orientation</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          "horizontal" | "vertical"
        </td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"horizontal"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Layout direction of tabs.
        </td>
      </tr>

      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">lazy</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">false</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          If enabled, loads tab content only after selected.
        </td>
      </tr>

      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">scrollable</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">true</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Allows horizontal or vertical scrolling when tab list overflows.
        </td>
      </tr>

      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">className</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">""</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Custom Tailwind / CSS classes for overriding styles.
        </td>
      </tr>

    </tbody>
  </table>
</Box>
        </section>

   {/* ---------------------------------- FULL CODE ---------------------------------- */}
   <section id="full-code" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Component Code
        </Typography>

<CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={code}
            
 
/>

        </section>
            
     
    </DocsLayout>
  );
}
