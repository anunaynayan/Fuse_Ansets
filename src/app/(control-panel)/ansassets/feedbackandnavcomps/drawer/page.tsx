"use client";

import { useState } from "react";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Typography, Box, Button } from "@mui/material";

import { RightDrawer } from "./components/RightDrawer";
import { LeftDrawer } from "./components/LeftDrawer";
import { BottomDrawer } from "./components/BottomDrawer";
import { TopDrawer } from "./components/TopDrawer";
import { DrawerWithTabs } from "./components/TabsDrawer";

export default function DrawerDocsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DocsLayout
      title="Drawer Components"
      backLink="/ansassets/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A collection of reusable drawer components built on top of
        <strong> MUI Drawer</strong>.
        <br />
        <br />
        Designed for navigation, settings panels, filters, inspectors,
        and secondary workflows.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies
        </Typography>

        <CodeBlock
          filename="terminal"
          language="bash"
          code={`npm install @mui/material @mui/icons-material`}
        />
      </section>

      {/* BASIC USAGE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-6">
          Basic Usage
        </Typography>

        <Typography className="text-gray-500 mb-4">
          All drawers follow the same controlled pattern using
          <code className="px-1">open</code> and
          <code className="px-1">onClose</code>.
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { useState } from "react";
import { Drawer } from "@mui/material";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Drawer
      </button>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        Drawer content
      </Drawer>
    </>
  );
}`}
        />
      </section>

      {/* DRAWER VARIANTS */}
      <section className="space-y-24">

        <DrawerSection
          title="Right Drawer"
          description="Standard right-anchored drawer for settings and inspectors."
          open={open === "right"}
          onOpen={() => setOpen("right")}
          onClose={() => setOpen(null)}
          Component={RightDrawer}
          code={`"use client";
          
          import { Drawer, Box, Typography } from "@mui/material";
          
          export function RightDrawer({ open, onClose }) {
            return (
              <Drawer anchor="right" open={open} onClose={onClose}>
                <Box className="w-80 p-6">
                  <Typography variant="h6">Details Panel</Typography>
                  <Typography className="text-gray-600 mt-2">
                    Selected item details appear here.
                  </Typography>
                </Box>
              </Drawer>
            );
          }
          `}
        />

        <DrawerSection
          title="Left Drawer"
          description="Left-side navigation drawer."
          open={open === "left"}
          onOpen={() => setOpen("left")}
          onClose={() => setOpen(null)}
          Component={LeftDrawer}
          code={`"use client";
          
          import { Drawer, Box, Typography, Button } from "@mui/material";
          
          export function LeftDrawer({ open, onClose }) {
            return (
              <Drawer anchor="left" open={open} onClose={onClose}>
                <Box className="w-72 p-6">
                  <Typography variant="h6">Navigation</Typography>
                  <Typography className="text-gray-600 mt-2">
                    Dashboard · Projects · Settings
                  </Typography>
          
                  <Button
                    variant="contained"
                    fullWidth
                    className="mt-6"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </Box>
              </Drawer>
            );
          }
          `}
        />

        <DrawerSection
          title="Bottom Drawer"
          description="Bottom sheet style drawer, ideal for mobile."
          open={open === "bottom"}
          onOpen={() => setOpen("bottom")}
          onClose={() => setOpen(null)}
          Component={BottomDrawer}
          code={`"use client";
          
          import { Drawer, Box, Typography, Button } from "@mui/material";
          
          export function BottomDrawer({ open, onClose }) {
            return (
              <Drawer
                anchor="bottom"
                open={open}
                onClose={onClose}
                PaperProps={{
                  className: "rounded-t-2xl",
                }}
              >
                <Box className="p-6">
                  <Typography variant="h6">Quick Actions</Typography>
          
                  <div className="mt-4 space-y-2">
                    <Button fullWidth variant="outlined">
                      Share
                    </Button>
                    <Button fullWidth variant="outlined">
                      Duplicate
                    </Button>
                    <Button fullWidth color="error" variant="contained">
                      Delete
                    </Button>
                  </div>
                </Box>
              </Drawer>
            );
          }
          `}
        />

        <DrawerSection
          title="Top Drawer"
          description="Top-anchored drawer for announcements and filters."
          open={open === "top"}
          onOpen={() => setOpen("top")}
          onClose={() => setOpen(null)}
          Component={TopDrawer}
          code={`"use client";
          
          import { Drawer, Box, Typography, Alert } from "@mui/material";
          
          export function TopDrawer({ open, onClose }) {
            return (
              <Drawer anchor="top" open={open} onClose={onClose}>
                <Box className="p-6">
                  <Alert severity="info">
                    Scheduled maintenance tonight at 11 PM.
                  </Alert>
                </Box>
              </Drawer>
            );
          }
          `}
        />

        <DrawerSection
          title="Drawer with Tabs"
          description="Advanced drawer with internal tab navigation."
          open={open === "tabs"}
          onOpen={() => setOpen("tabs")}
          onClose={() => setOpen(null)}
          Component={DrawerWithTabs}
          code={`"use client";

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
`}
        />
      </section>

      {/* PROPS */}
      <section className="mt-24 mb-24">
        <Typography variant="h4" className="font-semibold mb-6">
          Common Props
        </Typography>

        <table className="w-full border-collapse bg-gray-100 dark:bg-gray-800 text-sm rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Required</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">open</td>
              <td className="p-3">boolean</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Controls visibility</td>
            </tr>
            <tr>
              <td className="p-3">onClose</td>
              <td className="p-3">() =&gt; void</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Close handler</td>
            </tr>
            <tr>
              <td className="p-3">anchor</td>
              <td className="p-3">"left" | "right" | "top" | "bottom"</td>
              <td className="p-3">No</td>
              <td className="p-3">Drawer position</td>
            </tr>
          </tbody>
        </table>
      </section>
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Drawer Section Helper              */
/* ---------------------------------- */

function DrawerSection({
  title,
  description,
  open,
  onOpen,
  onClose,
  Component,
  code,
}: any) {
  return (
    <section>
      <Typography variant="h4" className="font-semibold mb-2">
        {title}
      </Typography>

      <Typography className="text-gray-500 mb-4">
        {description}
      </Typography>

      <Box className="mb-6">
        <Button variant="contained" onClick={onOpen}>
          Open {title}
        </Button>

        <Component open={open} onClose={onClose} />
      </Box>

      <CodeBlock
        filename={`${title.replace(/\s/g, "")}.tsx`}
        language="tsx"
        code={code}
      />
    </section>
  );
}
