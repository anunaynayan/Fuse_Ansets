"use client";

import { Box, Typography } from "@mui/material";

import RatingStars from "../rating/rating";
import { useState } from "react";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";

export default function DrawerDocs() {
  const [rating, setRating] = useState(3.5);

  return (
    <DocsLayout

        title="Rating Star Documentation"
        backLink="/ansassets/rating-star/rating"
        backText="Back to Rating Star" 
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
       Rating Star is a UI component used to visually represent user feedback or product quality using star icons. It allows users to select or view a rating on a scale . This component is often used in reviews, surveys, and e-commerce interfaces to make feedback quick, intuitive, and easy to understand.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Rating Star:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock 
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material`}
        />
      </section>

      {/* ------------------------ RATING STAR SECTION ------------------------ */}
      <section id="ratingstar" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Rating Star
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The Rating Star component allows users to provide feedback using star ratings.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <RatingStars
            value={rating}
            max={5}
            size={50}
            onChange={(val) => setRating(val)}
          />
        </Box>

    
      </section>

  {/* Rating Star Use Section  */}

      <section id="ratingstar" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Example Usage
        </Typography>

        {/* <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The Rating Star component allows users to provide feedback using star ratings.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <RatingStars
            value={rating}
            max={5}
            size={50}
            onChange={(val) => setRating(val)}
          />
        </Box> */}

        <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import RatingStars from "./rating";


const App = () => {
  const [rating, setRating] = useState(3.5);

  return (
    <Box p={3}> 
      
      <RatingStars
        value={rating}
        max={5}
        size={50}
        onChange={(val) => setRating(val)}
      />
      <Typography mt={2}>
        Your rating: {rating}
      </Typography>
    </Box>
  );
};

export default App;`}
        />
      </section>



      <section id="props" className="mb-16">

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Complete Code
        </Typography>
        
    <CodeBlock
          filename="Rating.tsx"
          language="tsx"
          code={`"use client";
import React, { useState } from "react";
import { useTheme, Box } from "@mui/material";

interface RatingStarsProps {
  value?: number;
  max?: number;
  size?: number;
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
            sx={{ cursor: readOnly ? "default" : "pointer", transition: "fill 0.2s" }}
          >
            <defs>
              <linearGradient id={"grad-" + index} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={fillPercentage + "%"} stopColor={filledColor} />
                <stop offset={fillPercentage + "%"} stopColor={emptyColor} />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
              fill={"url(#grad-" + index + ")"}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default RatingStars;`}
        />
        </section>






    </DocsLayout>
  );
}
