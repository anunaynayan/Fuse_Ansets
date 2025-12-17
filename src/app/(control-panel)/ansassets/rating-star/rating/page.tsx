
/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import RatingStars from "./rating";
import Header from "@/components/Header";


const RatingPage = () => {
  const [rating, setRating] = useState(3.5);

  return (

<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      
      
      <Header
        title="Rating Star Component"
        description="A rating star is a user interface (UI) element that allows users to rate items by selecting stars. It is commonly used in forms, settings, and other user interfaces to provide a convenient way for users to rate products, services, or content."
      />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
           Rate this product:
          </h2>
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


      </div>
    </div>
  );
};

export default RatingPage;
