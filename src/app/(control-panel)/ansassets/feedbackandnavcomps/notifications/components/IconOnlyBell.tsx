"use client";

import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface IconOnlyBellProps {
  onClick?: () => void;
}

export function IconOnlyBell({ onClick }: IconOnlyBellProps) {
  return (
    <IconButton onClick={onClick}>
      <NotificationsIcon fontSize="large" />
    </IconButton>
  );
}
