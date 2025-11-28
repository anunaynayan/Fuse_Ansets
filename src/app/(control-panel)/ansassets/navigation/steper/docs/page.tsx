"use client";

import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CheckoutStepper from "../steperbar/steper";
import SteperDemoApp from "../steperbar/page";

export default function StperDocs() {


const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/steper.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);





  return (
    <DocsLayout
      title="Steperbar"
       backLink="/ansassets/navigation/steper/steperbar"
      backText="Back to SteperBar" 
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
                SteperBar is a reusable stepper component built with Material UI (MUI).
It provides a horizontal or vertical stepper with customizable step icons, labels, and colors.
It supports linear and non-linear navigation, validation, and custom step rendering.
      </Typography>
      

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
          code={`npm install @mui/material`}
        />
      </section>

      {/* ------------------------ Floating Toolbar SECTION ------------------------ */}
      <section id="stepperr" className="mb-16">


        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <SteperDemoApp/>
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
          code={`
            
            function App() {
  const steps: StepConfig[] = [
    { name: "Account", Component: AccountForm },
    { name: "Profile", Component: ProfileForm },
    { name: "Summary", Component: SummaryPage },
  ];

  return (
    <div className="p-8">
      <CheckoutStepper
        stepsConfig={steps}
        linear={false}
        circleSize={30}
        activeColor="#6366f1"
        completedColor="#22c55e"
        errorColor="#f87171"
      />
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
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">stepsConfig</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">StepConfig[]</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of step objects with name, optional flag, and Component.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">orientation</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"horizontal" | "vertical"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"horizontal"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Orientation of the stepper.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">linear</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">true</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Restrict navigation to linear flow.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onStepChange</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(step: number) </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Callback fired when the active step changes.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">validateStep</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(step: number) </td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Function to validate the current step before moving next.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">activeColor</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#2563eb"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Background color of the active step circle.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">completedColor</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#22c55e"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Background color of completed step circle.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">errorColor</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#ef4444"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Background color of step circle when validation fails.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">defaultColor</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#cbd5e1"</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Background color of default/inactive step circle.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">circleSize</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">28</td>
            <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Diameter of the step circle in pixels.</td>
          </tr>
        </tbody>
      </table>
    </Box>




        </section>


{/* complete code */}

<section id="complete" className="mb-16">

        <CodeBlock
          filename="steper.tsx"
          language="tsx"
          code={code}
        />
      </section>
    </DocsLayout>
  );
}
