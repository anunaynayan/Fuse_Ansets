"use client";

import React from "react";


import { SearchBar } from "./search";
import { Box } from "@mui/system";
import Header from "@/components/Header";

 export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">

       <Header
        title="Search Bar Component"
        description="A search bar is a user interface (UI) element that allows users to input keywords or phrases to find specific information within a website, application, or database. It typically consists of a text input field and a search button, enabling users to quickly locate relevant content."
      />  
   

 <Box className="mb-6 max-w-md mx-auto border border-gray-200 rounded-2xl shadow-md p-8 bg-white">
             <SearchBar 
             
  apiUrl="https://jsonplaceholder.typicode.com/users"
  debounceMs={300}
  onSelect={(user) => console.log("Selected user:", user)}
/>




        </Box>








    </div>







  );
}