"use client";

import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { motion } from "framer-motion";

interface AnimatedBellProps {
  onClick?: () => void;
}

export function AnimatedBell({ onClick }: AnimatedBellProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconButton onClick={onClick}>
        <NotificationsIcon />
      </IconButton>
    </motion.div>
  );
}
