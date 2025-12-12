"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomDrawer, { DrawerItem } from "./drawer";
import { Box } from "@mui/system";



export default function DrawerPage() {
  const [menuItems, setMenuItems] = useState<DrawerItem[]>([]);

  useEffect(() => {
    axios.get("/data/menu.json").then((res) => setMenuItems(res.data));
  }, []);

  return (


 <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      
      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
          {/* Left Drawer */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Left Drawer
          </h2>
         <CustomDrawer title="Main Menu" anchor="left" items={menuItems} />
        </Box>

        {/* Linear Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Right Drawer
          </h2>
          <CustomDrawer title="Main Menu" anchor="right" items={menuItems} />
        </Box>

        {/* dot bounce Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Top Drawer
          </h2>
          <CustomDrawer title="Main Menu" anchor="top" items={menuItems} />
        </Box>

        {/* Markdown Editor */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Bottom Drawer
          </h2>
          <CustomDrawer title="Main Menu" anchor="bottom" items={menuItems} />
        </Box>

       
      </div>
    </div>

  );
}
