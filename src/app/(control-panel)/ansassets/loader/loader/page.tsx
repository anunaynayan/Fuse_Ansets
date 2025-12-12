"use client";

import React, { useState } from "react";
import { Box } from "@mui/system";
import SpinnerLoader from "./component/spinnerloader";
import LinearLoader from "./component/linearloader";
import DotBounceLoader from "./component/dotBounceLoader";
import SkeletonLoader from "./component/skeletonloader";


export default function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">
       Loader Types 
      </h1>

      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        {/* Date Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Spinner Loader
          </h2>
         <SpinnerLoader />
        </Box>

        {/* Linear Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Linear Loader
          </h2>
          <LinearLoader />
        </Box>

        {/* dot bounce Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Dot Bounce Loader
          </h2>
          <DotBounceLoader />
        </Box>

        {/* Markdown Editor */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Skeleton Loader
          </h2>
       <SkeletonLoader variant="card" rows={1} lines={1} />
        </Box>

       
      </div>
    </div>
  );
}
