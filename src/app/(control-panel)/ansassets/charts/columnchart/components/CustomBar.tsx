// CustomBar.tsx
import React, { useState } from "react";

export const CustomBar = (props: any) => {
  const { fill, x, y, width, height, radius } = props;

  const [hover, setHover] = useState(false);

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "all 0.25s ease",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transformOrigin: `${x + width / 2}px ${y + height}px`,
        filter: hover ? "brightness(1.2)" : "brightness(1)",
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius ? radius[0] : 6}
        ry={radius ? radius[1] : 6}
        fill={fill}
      />
    </g>
  );
};
