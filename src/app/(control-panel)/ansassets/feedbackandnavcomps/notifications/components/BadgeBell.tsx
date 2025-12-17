"use client";

import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface BadgeBellProps {
  count?: number;
  maxCount?: number;
  onClick?: () => void;
}

export function BadgeBell({ count = 0, maxCount = 99, onClick }: BadgeBellProps) {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={count > maxCount ? `${maxCount}+` : count} color="primary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
