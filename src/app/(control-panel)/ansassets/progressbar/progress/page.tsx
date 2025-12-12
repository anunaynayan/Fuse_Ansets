"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
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
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
        Reusable Progress Bars
      </Typography>

      {/* Linear Determinate */}
      <LinearDeterminate value={progress} label="File Upload Progress" />

      {/* Linear Indeterminate */}
      <LinearIndeterminate label="Loading Data..." />

      {/* Circular / Radial */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgressBar value={progress} label="Profile Completion" size={120} />
      </Box>
    </Container>
  );
}
