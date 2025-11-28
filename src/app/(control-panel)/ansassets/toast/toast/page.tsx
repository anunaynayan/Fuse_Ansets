/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Toast } from "./toast";


export default function App() {
  return (
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
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Toast Component Demo
      </Typography>

      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
        Click any button to test the Toast System
      </Typography>

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
  );
}
