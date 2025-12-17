// "use client";

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Container } from "@mui/material";
// import LinearDeterminate from "./components/linearDeterminate";
// import LinearIndeterminate from "./components/linearInDeterminate";
// import CircularProgressBar from "./components/circularProgresbar";


// export default function App() {
//   const [progress, setProgress] = useState(0);

//   // Simulate progress for demo
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
//     }, 800);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Container sx={{ mt: 8 }}>
//       <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
//         Reusable Progress Bars
//       </Typography>

//       {/* Linear Determinate */}
//       <LinearDeterminate value={progress} label="File Upload Progress" />

//       {/* Linear Indeterminate */}
//       <LinearIndeterminate label="Loading Data..." />

//       {/* Circular / Radial */}
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//         <CircularProgressBar value={progress} label="Profile Completion" size={120} />
//       </Box>
//     </Container>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Header from "@/components/Header";
import LinearDeterminate from "./components/linearDeterminate";
import LinearIndeterminate from "./components/linearInDeterminate";
import CircularProgressBar from "./components/circularProgresbar";


export default function App() {

    const [progress, setProgress] = useState(0);

  // Simulate progress for demo
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);


  return (

  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      
      
      <Header
        title="Progress Bar Components"
        description="A progress bar is a visual indicator that represents the current status of an ongoing process. It communicates how much of a task has been completed and how much is still in progress, helping users understand system activity in real time."
      />



    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
    
      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        {/* Date Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Linear Determinate
          </h2>
         <LinearDeterminate value={progress} label="File Upload Progress" />
        </Box>

        {/* Linear Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start pt-2  w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Linear Indeterminate
          </h2>
           <LinearIndeterminate label="Loading Data..." />
        </Box>

        {/* dot bounce Loader */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Circular ProgressBar
          </h2>
            <CircularProgressBar value={progress} label="Profile Completion" size={120} />
        </Box>

       
      </div>
    </div>
    </div>
  );
}
