"use client";

import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import { Box, Typography } from "@mui/material";
import CustomSpeedDial from "../speeddial/speeddail";
import EditIcon from "@mui/icons-material/Edit";

export default function SpeedDialDocs() {

const actions: ActionItem[] = [
    {
      icon: <EditIcon />,
      name: "Edit",
      onClick: () => alert("Edit clicked"),
      color: "#f59e0b", // amber-500
    }

  ];
  return (
    <DocsLayout

     title="Speed Dial Documentation"
      backLink="/ansassets/navigation/speeddial/speeddial"
      backText="Back to SpeedDail" 
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
       SpeedDial is a reusable floating action menu built with Material UI (MUI).
It provides a primary FAB button that expands into multiple quick-action buttons.
Suitable for dashboards, editors, forms, and mobile-friendly UI where quick actions are required
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
          <li>@mui/icons-material</li>
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
          code={`npm install @mui/material @mui/icons-material`}
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

        <Box className="mb-4 max-w-sm mx-auto"
        sx={{ position: "relative" }}
        
        >
          <CustomSpeedDial
            actions={actions}
            position={{ bottom: 24, right: 24 }}
            mainIcon={<EditIcon />}
            direction="right"
            fabColor="secondary"
          />
        </Box>

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Uses
        </Typography>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`    import CustomSpeedDial, { ActionItem } from "../speeddial/speeddail";
                     export default function App(){
                      return(                     
                        <CustomSpeedDial
                              actions={actions}
                              position={{ bottom: 24, right: 24 }}
                              mainIcon={<EditIcon />}
                              direction="right"
                              fabColor="secondary"
                            />   
                      
                      
                      
                      )
                     
                     
                     }

                   
            `}
        />
        {/* --------------Props Sections-------------- */}
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Props
        </Typography>

        <Box className="overflow-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                  Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                  Type
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                  Default
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
                  Description
                </th>
              </tr>
            </thead>

           <tbody className="text-gray-700 dark:text-gray-200">

  {/* actions */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      actions
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      ActionItem[]
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      required
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      List of action items. Each contains icon, name, onClick and optional color.
    </td>
  </tr>

  {/* position */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      position
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      {`{ bottom?: number; right?: number; left?: number; top?: number }`}
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      {`{ bottom: 20, right: 20 }`}
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Controls the placement of the SpeedDial on the screen.
    </td>
  </tr>

  {/* mainIcon */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      mainIcon
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      ReactNode
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      {"<AddIcon />"}
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Main FAB icon that toggles the SpeedDial.
    </td>
  </tr>

  {/* direction */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      direction
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      {"'up' | 'down' | 'left' | 'right'"}
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      up
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Direction in which action items expand.
    </td>
  </tr>

  {/* fabColor */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      fabColor
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      {"'primary' | 'secondary' | 'default'"}
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      primary
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      MUI color for the main FAB button.
    </td>
  </tr>

  {/* sx */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      sx
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      SxProps&lt;Theme&gt;
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      —
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Overrides and custom styling for the SpeedDial component.
    </td>
  </tr>

  {/* ---- ActionItem Props Section ---- */}
  <tr className="bg-gray-50 dark:bg-gray-900">
    <td
      colSpan={4}
      className="py-3 px-4 font-semibold border-b border-gray-300 dark:border-gray-700"
    >
      ActionItem Properties
    </td>
  </tr>

  {/* icon */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      icon
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      ReactNode
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      required
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Icon displayed for the action button.
    </td>
  </tr>

  {/* name */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      name
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      string
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      required
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Tooltip title displayed for the action.
    </td>
  </tr>

  {/* onClick */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      onClick
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      () =&gt; void
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      required
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Callback executed when the action is clicked.
    </td>
  </tr>

  {/* color */}
  <tr>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      color
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      string
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      optional
    </td>
    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
      Optional background color for each action button.
    </td>
  </tr>

</tbody>

          </table>
        </Box>

        {/* -Complete code section */}

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Complete Component Code
        </Typography>

        <CodeBlock
          filename="breadcrumb.tsx"
          language="tsx"
          code= { `
                     
                







"use client";
import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialProps, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SxProps, Theme } from "@mui/system";

 type ActionItem = {
  icon: React.ReactNode; 
  name: string;
  onClick: () => void;
  color?: string; // optional: custom color for each action
};

interface CustomSpeedDialProps {
  actions: ActionItem[];
  position?: {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
  };
  mainIcon?: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  fabColor?: "primary" | "secondary" | "default";
  sx?: SxProps<Theme>;
}


const CustomSpeedDial: React.FC<CustomSpeedDialProps> = ({
  actions,
  position = { bottom: 20, right: 20},
  mainIcon = <AddIcon />,
  direction = "up",
  fabColor = "primary",
  sx,
}) => {
  return (
    <SpeedDial
      ariaLabel="Custom SpeedDial"
      sx={{
        position: "absolute",
        ...position,
        ...sx,
        zIndex: 1300, // ensures it stays on top
      }}
      icon={mainIcon}
      direction={direction}
      FabProps={{ color: fabColor }}
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          key={index}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
          sx={{
            bgcolor: action.color || "transparent",
            "&:hover": {
              bgcolor: action.color ? action.color + "80" : undefined,
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default CustomSpeedDial;

          `}
        />
      </section>
    </DocsLayout>
  );
}
