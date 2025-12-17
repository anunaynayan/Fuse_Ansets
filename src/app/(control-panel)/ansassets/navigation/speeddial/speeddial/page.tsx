

"use client";
import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CustomSpeedDial from "./speeddail";
import { Box } from "@mui/system";
// Add this at the top of your file
type ActionItem = {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
  color?: string;
};

export default function App() {
  const actions: ActionItem[] = [
    {
      icon: <EditIcon />,
      name: "Edit",
      onClick: () => alert("Edit clicked"),
      color: "#f59e0b", // amber-500
    },
    {
      icon: <FileCopyIcon />,
      name: "Copy",
      onClick: () => alert("Copy clicked"),
      color: "#10b981", // emerald-500
    },
    {
      icon: <ShareIcon />,
      name: "Share",
      onClick: () => alert("Share clicked"),
      color: "#3b82f6", // blue-500
    },
  ];

  return (

<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto"
      
      
      >
        
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full "
        sx={{ position: "relative" }}
        
        
        >
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Speed Dial
          </h2>

         <CustomSpeedDial
        actions={actions}
        position={{ bottom: 24, right: 24 }}
        mainIcon={<EditIcon />}
        direction="right"
        fabColor="secondary"
      />       
        </Box>

        </div>

</div>

  );
}
