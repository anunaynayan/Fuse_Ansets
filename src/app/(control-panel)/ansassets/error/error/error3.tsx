"use client";


import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Error500 = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2f2f2f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
      }}
    >
      <Box>
        {/* 500 with eyes */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: { xs: "100px", sm: "140px", md: "180px" },
            fontWeight: 800,
            letterSpacing: "8px",
          }}
        >
          <span>5</span>

          {/* Eye 1 */}
          <Box sx={eyeWrapper}>
            <Box sx={{ ...eyeBall, animationDelay: "0s" }} />
          </Box>

          {/* Eye 2 */}
          <Box sx={eyeWrapper}>
            <Box sx={{ ...eyeBall, animationDelay: "0.2s" }} />
          </Box>
        </Box>

        {/* Text */}
        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "16px", sm: "18px" },
            fontWeight: 500,
          }}
        >
          <strong>Oh eyeballs!</strong> Something went wrong. We&apos;re{" "}
          <em>looking</em> to see what happened.
        </Typography>

        {/* Button */}
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{
            mt: 4,
            color: "#fff",
            borderColor: "#fff",
            px: 4,
            py: 1.2,
            fontWeight: 600,
            letterSpacing: "1px",
            "&:hover": {
              bgcolor: "#fff",
              color: "#2f2f2f",
            },
          }}
          onClick={() => window.history.back()}
        >
          GO BACK
        </Button>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes lookAround {
            0% { transform: translate(0, 0); }
            25% { transform: translate(6px, 2px); }
            50% { transform: translate(-6px, 2px); }
            75% { transform: translate(2px, -4px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </Box>
  );
};

const eyeWrapper = {
  width: { xs: 50, sm: 65, md: 80 },
  height: { xs: 50, sm: 65, md: 80 },
  bgcolor: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: { xs: 1, sm: 1.5 },
};

const eyeBall = {
  width: "22%",
  height: "22%",
  bgcolor: "#000",
  borderRadius: "50%",
  animation: "lookAround 3s infinite ease-in-out",
};

export default Error500;
