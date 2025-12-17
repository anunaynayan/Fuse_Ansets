/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Toast } from "./toast";
import Header from "@/components/Header";


export default function App() {
  return (


<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">

       <Header
        title="Toast Component"
        description="A toast is a small, non-intrusive notification that appears on the screen to provide feedback or information to users. It typically appears for a short duration and then disappears automatically."
      />  

    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
   
        p: 3,
      }}
    >
     

      {/* All Toast Buttons */}
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
        <Button
          variant="contained"
          color="success"
          onClick={() => Toast.success("Success! Everything looks good.")}
        >
          Success
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => Toast.error("Something went wrong!")}
        >
          Error
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => Toast.warning("This is your warning message!")}
        >
          Warning
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={() => Toast.info("Some useful information for you!")}
        >
          Info
        </Button>
      </Stack>

      
    </Box>
    </div>
  );
}
