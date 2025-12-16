"use client";

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ColorPicker from "./colorpicker";


export default function App() {
  const [color, setColor] = useState(null);

  return (
    <Container sx={{ py: 5, textAlign: "center",justifyContent:"center" }}>
      <Typography variant="h4" mb={3}>
        Color Picker
      </Typography>
  <Typography variant="h6" mb={3}> 
         Color Picker with Palette and Alpha Slider  to select multiple type of colors.
      </Typography>

      <Box maxWidth={500} textAlign={"center"}>
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



// "use client";

// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Divider,
//   Grid,
//   Paper,
// } from "@mui/material";
// import ColorPicker from "./colorpicker";

// export default function App() {
//   const [color, setColor] = useState<any>(null);

//   const palette = [
//     "#4D96FF",
//     "#9D4EDD",
//     "#6BCB77",
//     "#FFD93D",
//     "#FF6B6B",
//     "#000000",
//     "#FFFFFF",
//   ];

//   return (
//     <Container sx={{ py: 5 }}>
//       <Typography variant="h4" mb={1}>
//         Color Picker Variants
//       </Typography>
//       <Typography variant="body2" color="text.secondary" mb={4}>
//         Custom reusable color picker with multiple UI variants
//       </Typography>

//       {/* ---------------- GRID ---------------- */}
//       <Grid container spacing={3}>
//         {/* Default */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
//             <Typography variant="h6" mb={1}>
//               Default
//             </Typography>
//             <ColorPicker
//               value="#4D96FF"
//               palette={palette}
//               label="Primary Color"
//               showAlpha
//               fullWidth
//               variant="default"
//               onChange={setColor}
//             />
//           </Paper>
//         </Grid>

//         {/* Compact */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
//             <Typography variant="h6" mb={1}>
//               Compact
//             </Typography>
//             <ColorPicker
//               value="#9D4EDD"
//               palette={palette}
//               variant="compact"
//               onChange={setColor}
//             />
//           </Paper>
//         </Grid>

//         {/* Minimal */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
//             <Typography variant="h6" mb={1}>
//               Minimal
//             </Typography>
//             <Typography variant="body2" mb={1}>
//               Click color box
//             </Typography>
//             <ColorPicker
//               value="#6BCB77"
//               variant="minimal"
//               onChange={setColor}
//             />
//           </Paper>
//         </Grid>

//         {/* Popover */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
//             <Typography variant="h6" mb={1}>
//               Popover
//             </Typography>
//             <ColorPicker
//               value="#FFD93D"
//               variant="popover"
//               onChange={setColor}
//             />
//           </Paper>
//         </Grid>

//         {/* Palette Only */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
//             <Typography variant="h6" mb={1}>
//               Palette Only
//             </Typography>
//             <ColorPicker
//               palette={palette}
//               variant="palette-only"
//               onChange={setColor}
//             />
//           </Paper>
//         </Grid>

//         {/* Output */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper
//             sx={{
//               p: 2,
//               height: "100%",
//               background: color?.hex || "#f5f5f5",
//             }}
//             elevation={3}
//           >
//             <Typography variant="h6" mb={1}>
//               Output
//             </Typography>
//             <Typography variant="body2">
//               HEX: {color?.hex || "-"}
//             </Typography>
//             <Typography variant="body2">
//               RGBA: {color?.rgba || "-"}
//             </Typography>
//             <Typography variant="body2">
//               HSL:{" "}
//               {color
//                 ? `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`
//                 : "-"}
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
