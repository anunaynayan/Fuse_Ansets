
"use client";


import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const MotionBox = motion(Box);

const Error404 = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0B1120",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          textAlign: "center",
          maxWidth: 500,
          color: "#fff",
        }}
      >
        {/* Icon Animation */}
        <MotionBox
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ErrorOutlineIcon sx={{ fontSize: 90, color: "#38BDF8" }} />
        </MotionBox>

        {/* 404 Text */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mt: 2,
            fontSize: { xs: "4rem", sm: "5rem" },
          }}
        >
          404
        </Typography>

        <Typography variant="h5" sx={{ mt: 1, fontWeight: 600 }}>
          Page Not Found
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px",
          }}
        >
          The page you are looking for doesn’t exist or has been moved.
        </Typography>

        {/* Button */}
        <MotionBox
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ marginTop: 28 }}
        >
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              bgcolor: "#38BDF8",
              color: "#020617",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#0EA5E9",
              },
            }}
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </Button>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Error404;
