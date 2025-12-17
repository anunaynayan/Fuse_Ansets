"use client";

import {
  Drawer,
  Box,
  Tabs,
  Tab,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export function DrawerWithTabs({ open, onClose }) {
  const [tab, setTab] = useState(0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="w-96 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <Typography variant="h6">Settings</Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <Divider />

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="fullWidth"
        >
          <Tab label="General" />
          <Tab label="Appearance" />
          <Tab label="Advanced" />
        </Tabs>

        <Divider />

        {/* Content */}
        <Box className="flex-1 overflow-auto p-5">
          {tab === 0 && <GeneralTab />}
          {tab === 1 && <AppearanceTab />}
          {tab === 2 && <AdvancedTab />}
        </Box>
      </Box>
    </Drawer>
  );
}

/* ---------------- Tabs ---------------- */

function GeneralTab() {
  return (
    <>
      <Typography variant="subtitle1" className="mb-2">
        General Settings
      </Typography>
      <Typography className="text-gray-600">
        Manage basic configuration and preferences.
      </Typography>
    </>
  );
}

function AppearanceTab() {
  return (
    <>
      <Typography variant="subtitle1" className="mb-2">
        Appearance
      </Typography>
      <Typography className="text-gray-600">
        Theme, colors, layout density.
      </Typography>
    </>
  );
}

function AdvancedTab() {
  return (
    <>
      <Typography variant="subtitle1" className="mb-2">
        Advanced
      </Typography>
      <Typography className="text-gray-600">
        Developer and experimental settings.
      </Typography>
    </>
  );
}
