
"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";


import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

import Badge from "./badge";

/* ---------------------------------------------
   Preview Card
--------------------------------------------- */
function PreviewCard({
  title,
  description,
  preview,
  controls,
}: {
  title: string;
  description?: string;
  preview: React.ReactNode;
  controls?: React.ReactNode;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box>
        <Typography fontWeight={600}>{title}</Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          border: "1px dashed #d1d5db",
          borderRadius: 2,
          p: 3,
          minHeight: 110,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafafa",
        }}
      >
        {preview}
      </Box>

      {controls && (
        <>
          <Divider />
          <Box className="flex justify-center gap-2">{controls}</Box>
        </>
      )}
    </Paper>
  );
}

/* ---------------------------------------------
   Demo Page
--------------------------------------------- */
export default function BadgeDemoPage() {
  const [count, setCount] = useState(5);

  return (
    <Box className="p-6 max-w-[1280px] mx-auto space-y-10">
      {/* Header */}
      <Box className="text-center space-y-2">
        <Chip label="UI Component" size="small" />
        <Typography variant="h4" fontWeight={700}>
          Badge
        </Typography>
        <Typography color="text.secondary">
          Badge variants, sizes and text labels – production ready UI.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Numeric Badge */}
        <Grid xs={12} md={4}>
          <PreviewCard
            title="Numeric Badge"
            description="Dynamic numeric badge."
            preview={
              <Badge label={count}>
                <IconButton sx={{ p: 2, bgcolor: "#e5e7eb" }}>
                  <NotificationsIcon fontSize="large" />
                </IconButton>
              </Badge>
            }
            controls={
              <>
                <Button size="small" onClick={() => setCount((c) => c + 1)}>
                  + Increase
                </Button>
                <Button size="small" color="error" onClick={() => setCount(0)}>
                  Reset
                </Button>
              </>
            }
          />
        </Grid>

        {/* Dot */}
        <Grid xs={12} md={4}>
          <PreviewCard
            title="Dot Variant"
            description="Unread / online indicator."
            preview={
              <Badge variant="dot">
                <IconButton sx={{ p: 2, bgcolor: "#e5e7eb" }}>
                  <MailIcon fontSize="large" />
                </IconButton>
              </Badge>
            }
          />
        </Grid>

        {/* Avatar */}
        <Grid xs={12} md={4}>
          <PreviewCard
            title="Avatar Badge"
            description="Small badge on large avatar."
            preview={
              <Badge label={3} size="small" backgroundColor="#16a34a">
                <Avatar
                  src="https://i.pravatar.cc/150"
                  sx={{ width: 72, height: 72 }}
                />
              </Badge>
            }
          />
        </Grid>

        {/* Text Badges */}
        <Grid xs={12} md={6}>
          <PreviewCard
            title="Text Badges"
            description="Labels like NEW, SALE, BETA."
            preview={
              <Box className="flex gap-6 flex-wrap justify-center">
                <Badge label="NEW">
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <StarIcon fontSize="large" />
                  </Avatar>
                </Badge>

                <Badge label="SALE" backgroundColor="#dc2626">
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <ShoppingCartIcon fontSize="large" />
                  </Avatar>
                </Badge>

                <Badge label="BETA" backgroundColor="#facc15" color="#000">
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <StarIcon fontSize="large" />
                  </Avatar>
                </Badge>
              </Box>
            }
          />
        </Grid>

        {/* Semantic Variants */}
        <Grid xs={12} md={6}>
          <PreviewCard
            title="Semantic Variants"
            description="default, success, warning, destructive."
            preview={
              <Box className="flex gap-6 flex-wrap justify-center">
                <Badge label={2}>
                  <Avatar sx={{ width: 56, height: 56 }} />
                </Badge>

                <Badge label={2} backgroundColor="#16a34a">
                  <Avatar sx={{ width: 56, height: 56 }} />
                </Badge>

                <Badge label={2} backgroundColor="#facc15" color="#000">
                  <Avatar sx={{ width: 56, height: 56 }} />
                </Badge>

                <Badge label={2} backgroundColor="#dc2626">
                  <Avatar sx={{ width: 56, height: 56 }} />
                </Badge>
              </Box>
            }
          />
        </Grid>

        {/* Positions */}
        <Grid xs={12}>
          <PreviewCard
            title="Badge Positions"
            description="Top / bottom – left / right."
            preview={
              <Box className="flex gap-6 flex-wrap justify-center">
                {[
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right",
                ].map((pos) => (
                  <Badge key={pos} label="1" position={pos as any}>
                    <Avatar sx={{ width: 56, height: 56 }} />
                  </Badge>
                ))}
              </Box>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
