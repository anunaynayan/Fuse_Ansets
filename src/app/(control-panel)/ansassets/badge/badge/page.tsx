
"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Avatar,
  Button,
  Divider,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";


import Badge from "./badge";

export default function BadgeDemoPage() {
  const [count, setCount] = useState(5);

  const cards = [
    {
      title: "Standard Badge",
      content: (
        <Box className="flex justify-center gap-3">
          <Badge label={count}>
            <IconButton className="bg-gray-200 p-4 rounded-full">
              <NotificationsIcon fontSize="large" />
            </IconButton>
          </Badge>
          <Button
            variant="outlined"
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 text-sm"
          >
            Increase Count
          </Button>
        </Box>
      ),
    },
   
  
    
    {
      title: "Badge on Avatar",
      content: (
        <Box className="flex justify-center">
          <Badge label={3} size="small" backgroundColor="green">
            <Avatar
              src="https://i.pravatar.cc/120"
              className="w-20 h-20"
            />
          </Badge>
        </Box>
      ),
    },
    {
      title: "Badge Positions",
      content: (
        <Box className="flex justify-center flex-wrap gap-3">
          <Badge label={1} position="top-left">
            <Avatar className="w-16 h-16 bg-gray-400" />
          </Badge>
          <Badge label={1} position="top-right">
            <Avatar className="w-16 h-16 bg-gray-400" />
          </Badge>
          <Badge label={1} position="bottom-left">
            <Avatar className="w-16 h-16 bg-gray-400" />
          </Badge>
          <Badge label={1} position="bottom-right">
            <Avatar className="w-16 h-16 bg-gray-400" />
          </Badge>
        </Box>
      ),
    },
  ];

  return (
    <Box className="p-4 max-w-[1280px] mx-auto">
      <Typography
        variant="h4"
        className="font-bold mb-6 text-center tracking-wide"
      >
        Badge Showcase
      </Typography>

      <Grid container spacing={4} className="justify-center">
        {cards.map((card, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="flex"
          >
            <Paper className="p-3 rounded-lg flex flex-col justify-center min-h-[220px] shadow-md flex-1">
              <Typography
                variant="h6"
                className="mb-2 font-semibold text-center"
              >
                {card.title}
              </Typography>
              <Divider className="mb-3" />
              {card.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
