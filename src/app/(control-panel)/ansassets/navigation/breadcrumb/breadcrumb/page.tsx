"use client";



import React, { useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import BreadcrumbNav from "./breadcrumbs";

export default function BreadcrumbDemo() {
  const [page, setPage] = useState("dashboard");

  const breadcrumbMap: any = {
    dashboard: [
      { label: "Dashboard" },
    ],
    projects: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Projects" },
    ],
    projectDetails: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Projects", href: "/dashboard/projects" },
      { label: "Website Redesign" },
    ],
    settings: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings" },
    ]
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: "auto" }}>
      
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Breadcrumb Status
      </Typography>

      {/* Breadcrumb */}
      <Box
        sx={{
          p: 2,
          background: "#fff",
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          mb: 4,
        }}
      >
        <BreadcrumbNav
          items={breadcrumbMap[page]}
          activeColor="red"
        />
      </Box>

      {/* Page Simulation Buttons */}
      <Typography sx={{ mb: 2, fontWeight: 600 }}>
        Click a section to  navigation:
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button variant="outlined" onClick={() => setPage("dashboard")}>
          Dashboard
        </Button>
        <Button variant="outlined" onClick={() => setPage("projects")}>
          Projects
        </Button>
        <Button variant="outlined" onClick={() => setPage("projectDetails")}>
          Project Details
        </Button>
        <Button variant="outlined" onClick={() => setPage("settings")}>
          Settings
        </Button>
      </Box>

      {/* Content Demo */}
      <Box sx={{ mt: 4, p: 3, background: "#fff", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Current Page: {page.charAt(0).toUpperCase() + page.slice(1)}
        </Typography>
        <Typography sx={{ mt: 1, color: "#555" }}>
          Breadcrumbs above are updating based on your selection.
        </Typography>
      </Box>
    </Box>
  );
}