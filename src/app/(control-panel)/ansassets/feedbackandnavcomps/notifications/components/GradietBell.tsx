"use client";

import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface GradientBellProps {
  onClick?: () => void;
}

export function GradientBell({ onClick }: GradientBellProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        color: "white",
        "&:hover": { background: "linear-gradient(45deg, #FF8E53, #FE6B8B)" },
      }}
    >
      <NotificationsIcon />
    </IconButton>
  );
}
