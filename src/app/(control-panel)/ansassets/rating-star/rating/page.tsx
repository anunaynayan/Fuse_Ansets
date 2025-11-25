
/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import RatingStars from "./rating";


const RatingPage = () => {
  const [rating, setRating] = useState(3.5);

  return (
    <Box p={3}> 
      <Typography variant="h6" mb={2}>
        Rate this product:
      </Typography>

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

export default RatingPage;
