"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import Accordion from "../accordian/accordian";


export default function AccordiansDocs() {
  // ⭐ STORED ACCORDION DATA (ISI PAGE ME)
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
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Accordions are interactive UI components that allow users to expand and
        collapse sections of content.
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

      {/* ACCORDIONS */}
      <section id="accordions" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Accordions
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          A collapsible UI component to organize structured content.
        </Typography>

        {/* DEMO — USING STORED DATA */}

        <Box className="mb-4 max-w-sm mx-auto">
          <Accordion data={accordionData} />
        </Box>

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

 <section id=" reuse" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          As a component 
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Accordions can be reused as component  in various contexts via  managing states , such as FAQs, documentation, settings, dashboards, etc.
        </Typography>

    <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`import React, { useEffect, useState } from "react";
          import axios from "axios";
          import Accordion from "./components/accordians";
                   
          const App = () => {
            const [data, setData] = useState([]);
            const [loading, setLoading] = useState(true);
                    
            useEffect(() => {
              axios
                .get("your api")
                .then((res) => setData(res.data))
                .catch(() => setData([]))
                .finally(() => setLoading(false));
            }, []);
          
            return (
          
              <div  className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold ">Accordion</h1>
                <Accordion data={data} loading={loading}  />
              </div>
            );
          };
          
          export default App;
          `}
        />

 </section>

    </DocsLayout>
  );
}
