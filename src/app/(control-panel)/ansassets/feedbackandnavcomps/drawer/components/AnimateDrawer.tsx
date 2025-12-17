"use client";

import { Drawer, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function AnimatedDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        component: motion.div,
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 100, opacity: 0 },
        transition: { duration: 0.3 },
      }}
    >
      <Box className="w-80 p-6">
        <Typography variant="h6">Animated Drawer</Typography>
        <Typography className="text-gray-600 mt-2">
          Smooth animated entrance.
        </Typography>
      </Box>
    </Drawer>
  );
}
