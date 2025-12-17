"use client";

import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface SoundBellProps {
  onClick?: () => void;
  soundUrl?: string;
}

export function SoundBell({ onClick, soundUrl }: SoundBellProps) {
  const handleClick = () => {
    if (soundUrl) new Audio(soundUrl).play();
    onClick?.();
  };

  return (
    <IconButton onClick={handleClick}>
      <NotificationsIcon />
    </IconButton>
  );
}
