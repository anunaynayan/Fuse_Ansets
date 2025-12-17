
"use client";
import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialProps, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SxProps, Theme } from "@mui/system";

 type ActionItem = {
  icon: React.ReactNode; 
  name: string;
  onClick: () => void;
  color?: string; // optional: custom color for each action
};

interface CustomSpeedDialProps {
  actions: ActionItem[];
  position?: {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
  };
  mainIcon?: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  fabColor?: "primary" | "secondary" | "default";
  sx?: SxProps<Theme>;
}


const CustomSpeedDial: React.FC<CustomSpeedDialProps> = ({
  actions,
  position = { bottom: 20, right: 20},
  mainIcon = <AddIcon />,
  direction = "up",
  fabColor = "primary",
  sx,
}) => {
  return (
    <SpeedDial
      ariaLabel="Custom SpeedDial"
      sx={{
        position: "absolute",
        ...position,
        ...sx,
        zIndex: 1300, // ensures it stays on top
      }}
      icon={mainIcon}
      direction={direction}
      FabProps={{ color: fabColor }}
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          key={index}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
          sx={{
            bgcolor: action.color || "transparent",
            "&:hover": {
              bgcolor: action.color ? action.color + "80" : undefined,
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default CustomSpeedDial;
