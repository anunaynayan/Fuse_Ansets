"use client";

import { Box, Typography } from "@mui/material";

import SuccessBox from "../successpage/successpage";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";

export default function TooltipDocs() {
  return (
    <DocsLayout
      title="Success Page Component"
        backLink="/ansassets/successpage/successpage"
        backText="Back to Success Page"
    
    >
      {/* ------------------------ DESCRIPTION ------------------------ */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Successpage component is used to display a success message or confirmation to users after they have completed a specific action or process within an application. It typically includes visual cues such as icons, colors, and text to convey a positive outcome, enhancing the user experience by providing clear feedback on their actions.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Tooltip component:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>next</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material react next`}
        />
      </section>

      {/* ------------------------ TOOLTIP SECTION ------------------------ */}
      <section id="tooltip" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
            SuccessPage
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
           SuccessPage shows a success message after completion of an action. It can be used to inform users about the successful completion of a process or to provide feedback on their actions.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <SuccessBox
            title="Success!"
            message="Your payment has successfully completed!!."
            
          />
        </Box>

        <CodeBlock
          filename="tooltip.tsx"
          language="tsx"
          code={String.raw`
            
"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface ActionButton {
  label: string;
  onClick: () => void;
  color?: "primary" | "success" | "info" | "warning" | "error";
}

interface SuccessBoxProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  actions?: ActionButton[];
  children?: React.ReactNode;
}

const SuccessBox: React.FC<SuccessBoxProps> = ({
  title = "Success!",
  message = "Operation completed successfully!",
  icon = <CheckCircleOutlineIcon sx={{ fontSize: 70, color: "success.main", mb: 2 }} />,
  actions = [],
  children,
}) => {
  return (
    <Box
      role="alert"
      sx={{
        textAlign: "center",
        p: 4,
        borderRadius: 4,
        boxShadow: 5,
        width: { xs: "90%", sm: 420 },
        mx: "auto",
        backgroundColor: "background.paper",
      }}
    >
      {icon}

      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>

      <Typography variant="body1" sx={{ mt: 1, mb: 3, color: "text.secondary" }}>
        {message}
      </Typography>

      {children}

      {actions.length > 0 && (
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="contained"
              color={action.color ?? "success"}
              onClick={action.onClick}
              sx={{ borderRadius: 3, px: 3 }}
            >
              {action.label}
            </Button>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SuccessBox;
            

`}
        />
      </section>
    </DocsLayout>
  );
}
