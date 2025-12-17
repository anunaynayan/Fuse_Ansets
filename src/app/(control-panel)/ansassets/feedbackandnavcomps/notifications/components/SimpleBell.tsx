"use client";

import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface SimpleBellProps {
  count?: number;
  onClick?: () => void;
}

export function SimpleBell({ count = 0, onClick }: SimpleBellProps) {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={count} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
