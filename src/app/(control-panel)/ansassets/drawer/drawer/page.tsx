"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DrawerComponent, { DrawerItem } from "./drawer";
import { Box } from "@mui/system";



export default function Page() {
  const [menuItems, setMenuItems] = useState<DrawerItem[]>([]);

  useEffect(() => {
    axios.get("/data/menu.json").then((res) => setMenuItems(res.data));
  }, []);

  return (
//     <div>
    


//  <div>
//   <h1> Bottom Drawer </h1>
//   <DrawerComponent title="Main Menu" anchor="bottom" items={menuItems} />
//   </div>
 
//  <div>
//   <h1> Left Drawer </h1>
//  <DrawerComponent title="Main Menu" anchor="left" items={menuItems} />
//  </div>
 
//  <div>
//   <h1> Right Drawer </h1>
//    <DrawerComponent title="Main Menu" anchor="right" items={menuItems} />
//  </div>
//   <div> 
//     <h1>Top Draer</h1>
//   <DrawerComponent title="Main Menu" anchor="top" items={menuItems} />

// </div>

//     </div>
 <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">
         Drawer Types
      </h1>

      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
          {/* Left Drawer */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Left Drawer
          </h2>
         <DrawerComponent title="Main Menu" anchor="left" items={menuItems} />
        </Box>

        {/* Linear Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Right Drawer
          </h2>
          <DrawerComponent title="Main Menu" anchor="right" items={menuItems} />
        </Box>

        {/* dot bounce Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Top Drawer
          </h2>
          <DrawerComponent title="Main Menu" anchor="top" items={menuItems} />
        </Box>

        {/* Markdown Editor */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Bottom Drawer
          </h2>
          <DrawerComponent title="Main Menu" anchor="bottom" items={menuItems} />
        </Box>

       
      </div>
    </div>

  );
}
