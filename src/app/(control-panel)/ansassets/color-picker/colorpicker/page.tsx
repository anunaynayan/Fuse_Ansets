"use client";

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ColorPicker from "./colorpicker";


export default function App() {
  const [color, setColor] = useState(null);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" mb={3}>
        Color Picker
      </Typography>
      <Box maxWidth={500}>
        <ColorPicker
          value="#4D96FF"
          palette={["#4D96FF", "#9D4EDD", "#6BCB77", "#FFD93D", "#FF6B6B", "#000", "#FFF"]}
          showAlpha
          label=" Color"
          fullWidth
          onChange={(c) => setColor(c)}
        />
       </Box>


     </Container>
  );
}
