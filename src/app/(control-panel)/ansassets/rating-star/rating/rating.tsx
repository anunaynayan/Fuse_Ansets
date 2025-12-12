
"use client";
import React, { useState } from "react";
import { useTheme, Box } from "@mui/material";

interface RatingStarsProps {
  value?: number; // current rating value
  max?: number; // total stars
  size?: number; // star size in px
  colorFilled?: string;
  colorEmpty?: string;
  readOnly?: boolean;
  onChange?: (value: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  value = 0,
  max = 5,
  size = 30,
  colorFilled,
  colorEmpty,
  readOnly = false,
  onChange,
}) => {
  const theme = useTheme();
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const filledColor = colorFilled || "#FFD700";
  const emptyColor = colorEmpty || theme.palette.action.disabled;

  const handleClick = (index: number, half: boolean) => {
    if (!readOnly && onChange) {
      const newValue = half ? index + 0.5 : index + 1;
      onChange(newValue);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>, index: number) => {
    if (readOnly) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const newHoverValue = mouseX < width / 2 ? index + 0.5 : index + 1;
    setHoverValue(newHoverValue);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <Box display="flex" gap={1} alignItems="center">
      {Array.from({ length: max }).map((_, index) => {
        const fillPercentage = Math.min(Math.max(displayValue - index, 0), 1) * 100;

        return (
          <Box
            key={index}
            component="svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            onClick={() => handleClick(index, fillPercentage <= 50)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => !readOnly && setHoverValue(null)}
            sx={{
              cursor: readOnly ? "default" : "pointer",
              transition: "fill 0.2s",
            }}
          >
            <defs>
              <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercentage}%`} stopColor={filledColor} />
                <stop offset={`${fillPercentage}%`} stopColor={emptyColor} />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
              fill={`url(#grad-${index})`}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default RatingStars;
