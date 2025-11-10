"use client";

import React from "react";
import { Box, Typography, useTheme, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, subtitle, children }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        // minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Left Side — Image + Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative hidden md:flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="/assets/images/logo/anslogo.jpg"
          alt="Authentication background"
          fill
          className="object-fill z-0"
          priority
        />

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-25 left-10 text-white max-w-md"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            “Security meets simplicity.”
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.85,
              textShadow: "0 1px 5px rgba(0,0,0,0.4)",
            }}
          >
            Manage your account confidently — wherever you are.
          </Typography>
        </motion.div>
      </motion.div>

      {/* Right Side — Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-10 bg-white dark:bg-gray-900"
      >
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: "left",
              color: theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, textAlign: "left" }}
            >
              {subtitle}
            </Typography>
          )}

          <Box>{children}</Box>
        </Box>
      </motion.div>
    </Box>
  );
}
