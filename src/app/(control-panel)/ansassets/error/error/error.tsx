"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface ErrorPageProps {
  code?: string;
  emoji?: string;
  title?: string;
  message?: string;
  buttonText?: string;
  redirectTo?: string;
  videoSrc?: string;
  gradient?: string;
  particleCount?: number;
}

const MotionBox = motion(Box);

export default function ErrorPage({
  code = "404",
  emoji = "🤖",
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or might have been removed.",
  buttonText = "Go Home",
  redirectTo = "/",
  videoSrc = "",
  gradient = "linear-gradient(135deg, #0b1124 0%, #1e3a8a 100%)",
  particleCount = 15,
}: ErrorPageProps) {
  return (
    <Box
      className="w-full h-screen flex items-center justify-center p-4 text-white relative overflow-hidden"
      sx={{
        background: gradient,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* LEFT SECTION */}
      <MotionBox
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[500px] z-10 text-center md:text-left"
      >
        {/* CODE + EMOJI */}
        <Typography
          variant="h1"
          className="font-bold flex items-center justify-center md:justify-start gap-3 select-none"
          sx={{ fontSize: { xs: "80px", md: "120px" } }}
        >
          {/* Left digit */}
          <motion.span
            animate={{
              x: [0, -15, 0],
              rotate: [0, -5, 0],
              textShadow: [
                "0 0 10px #a855f7",
                "0 0 20px #9333ea",
                "0 0 10px #a855f7",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            {code[0]}
          </motion.span>

          {/* Emoji */}
          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            {emoji}
          </motion.span>

          {/* Right digit */}
          <motion.span
            animate={{
              x: [0, 15, 0],
              rotate: [0, 5, 0],
              textShadow: [
                "0 0 10px #a855f7",
                "0 0 20px #9333ea",
                "0 0 10px #a855f7",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: 0.4,
            }}
          >
            {code[1] ?? code[0]}
          </motion.span>
        </Typography>

        {/* Title */}
        <Typography
          variant="h5"
          className="mt-4 opacity-90"
        >
          {title}
        </Typography>

        {/* Message */}
        <Typography
          variant="body1"
          className="mt-2 opacity-80 text-[16px] md:text-[18px]"
        >
          {message}
        </Typography>

        {/* Button */}
        <Link href={redirectTo}>
          <Button
            variant="contained"
            className="mt-6 font-semibold px-6 py-2 rounded-xl"
            sx={{
              backgroundColor: "#facc15",
              color: "#000",
              "&:hover": {
                backgroundColor: "#fde047",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px #facc15",
              },
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </MotionBox>

      {/* RIGHT SIDE VIDEO / IMAGE */}
      {videoSrc && (
        <MotionBox
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[85%] md:w-[40%] mt-8 md:mt-0 flex justify-center"
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </MotionBox>
      )}

      {/* PARTICLES */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 8,
            height: 8,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </Box>
  );
}
