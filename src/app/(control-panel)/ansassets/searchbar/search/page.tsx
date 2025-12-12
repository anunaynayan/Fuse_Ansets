"use client";

import React from "react";


import { SearchBar } from "./search";
import { Box } from "@mui/system";

 export default function App() {
  return (
    <div>
   

 <Box className="mb-6 max-w-md mx-auto border rounded-xl shadow-lg p-4">
             <SearchBar
  apiUrl="https://jsonplaceholder.typicode.com/users"
  debounceMs={300}
  onSelect={(user) => console.log("Selected user:", user)}
/>




        </Box>








    </div>







  );
}