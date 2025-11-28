"use client";

import { Box, Typography } from "@mui/material";

import Accordion from "../accordian/accordian";
import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";


export default function AccordiansDocs() {
  
  const accordionData = [
    {
      id: 1,
      title: "What is an Accordion?",
      content: "An accordion displays collapsible content sections."
    },
    {
      id: 2,
      title: "Why use an Accordion?",
      content: "It organizes content neatly and reduces clutter."
    },
    {
      id: 3,
      title: "Where is it used?",
      content: "FAQs, documentation, settings, dashboards, etc."
    }
  ];

  return (
    <DocsLayout
    title="Accordian Documentation  "
      backLink="/ansassets/accordians/accordian"
      backText="Back to Accordians"
    
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        <strong>Accordion</strong> is a reusable UI component built using <strong>Material-UI</strong> and <strong>Framer Motion</strong> that allows users to expand and collapse panels to show or hide content.
        It supports a <strong>loading skeleton state</strong>, <strong>smooth animation</strong>, and manages expansion via internal state.
      </Typography>

      {/* DEPENDENCIES */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for Accordions:
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>react-dom</li>
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
          code={`npm install @mui/material @mui/icons-material`}
        />
      </section>

      {/* Preview Section */}

      <section id="preview" className="mb-16">
 
         <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Preview 
        </Typography>

<Box className="mb-4 max-w-sm mx-auto">
          <Accordion data={accordionData} />
        </Box>

      </section>


      {/* Example Uses Section */}
      <section id="example-uses" className="mb-16">
 
         <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Example Uses 
        </Typography>

    <CodeBlock
          filename="App.tsx"
          language="txs"
          code={`          
           export default function App  () {            
              return (               
                  <Accordion data={data}  />             
              );
            };
                       
            `}
        />

        

</section>


{/*-------------------------- Props SECTION ------------------------ */}

<section id="props" className="mb-16">
       
<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
           Props
        </Typography>




<Box className="overflow-x-auto mb-8">
  <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name / Key</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default / Required</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      {/* Props */}
      <tr className="bg-gray-50 dark:bg-gray-900 font-semibold">
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700" colSpan={4}>Component Props</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">data</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">AccordionItem[]</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Required</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Array of accordion items containing id, title and content.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">loading</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">False</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Displays skeleton loader while content is being fetched.
        </td>
      </tr>

      {/* AccordionItem Type Structure */}
      <tr className="bg-gray-50 dark:bg-gray-900 font-semibold">
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700" colSpan={4}>AccordionItem Type Structure</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">id</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700"> Required</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Unique identifier for each accordion item.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">title</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700"> Required</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Text displayed inside the accordion header.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">content</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700"> Required</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
          Content displayed when the accordion is expanded.
        </td>
      </tr>
    </tbody>
  </table>
</Box>







</section>


      {/* COmplete component code */}


      <section id="accordions" className="mb-16">
       

     <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Complete Component Code
        </Typography>

        <CodeBlock
          filename="Accordion.tsx"
          language="tsx"
          code={`import { Box, IconButton, Skeleton, Typography } from "@mui/material";    
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  data: AccordionItem[];
  loading?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ data, loading }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <Box maxWidth={600} mx="auto" mt={5}>
        {[1, 2, 3].map((n) => (
          <Skeleton key={n} height={90} sx={{ mb: 2, borderRadius: 2 }} />
        ))}
      </Box>
    );
  }

  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      {data.map((item) => (
        <Box
          key={item.id}
          border={1}
          borderColor="grey.300"
          borderRadius={2}
          mb={2}
        >
          <Box
            px={2}
            py={1.5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bgcolor="grey.100"
            onClick={() => toggleAccordion(item.id)}
            sx={{ cursor: "pointer" }}
          >
            <Typography>{item.title}</Typography>

            <IconButton
              size="small"
              sx={{
                transform: openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          <AnimatePresence>
            {openId === item.id && (
              <MotionBox
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                px={2}
                py={2}
              >
                <Typography>{item.content}</Typography>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;`}
        />
      </section>









    </DocsLayout>
  );
}
