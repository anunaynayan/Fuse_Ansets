"use client";


import { Box} from "@mui/material";
import DatePicker from "./datepicker";


export default function App() {

  return (
    
     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      
      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        {/* Date Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Date Picker
          </h2>
         <DatePicker/>
        </Box>
       
      </div>
    </div>
  );
}
