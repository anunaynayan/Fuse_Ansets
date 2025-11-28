"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Footer } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import Appbar from "./components/appbar";



export default function RootLayout({ children }) {
  const [headerData, setHeaderData] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    axios.get("/data/appbar.json").then((res) => setHeaderData(res.data));
    axios.get("/data/sidebar.json").then((res) => setMenuData(res.data));
    axios.get("/data/footer.json").then((res) => setFooterData(res.data));
  }, []);

  return (
    
<>
<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      
      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            SideBar
          </h2>
          <Sidebar data={menuData}/>

         
        </Box>

       
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Nav bar
          </h2>
          <Appbar data={headerData}/>
        </Box>

      
       

       
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Footer 
          </h2>
        
        <Footer data={footerData}/>

        </Box>

       
      </div>
    </div>



</>
    
  

  );
}




