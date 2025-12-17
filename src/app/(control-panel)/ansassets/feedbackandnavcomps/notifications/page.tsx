"use client";

import { useState } from "react";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Typography, Box, Button } from "@mui/material";

import { SimpleBell } from "./components/SimpleBell";
import { BadgeBell } from "./components/BadgeBell";
import { AnimatedBell } from "./components/AnimatedBell";
import { IconOnlyBell } from "./components/IconOnlyBell";
import { GradientBell } from "./components/GradietBell";
import { SoundBell } from "./components/SoundBell";

export default function NotificationBellsDocsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DocsLayout
      title="Notification Bell Components"
      backLink="/feedbackandnavcomps"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A collection of professional, reusable notification bell components built on top of
        <strong> MUI IconButton</strong> and
        <strong> Badge</strong>.  
        <br />
        <br />
        Designed for alerts, notifications, and interactive UI elements.
      </Typography>

      {/* DEPENDENCIES */}
      <section className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4">
          Dependencies
        </Typography>

        <CodeBlock
          filename="terminal"
          language="bash"
          code={`npm install @mui/material @mui/icons-material framer-motion`}
        />
      </section>

      {/* BASIC USAGE */}
      <section className="mb-24">
        <Typography variant="h4" className="font-semibold mb-6">
          Basic Usage
        </Typography>

        <Typography className="text-gray-500 mb-4">
          All notification bells follow a controlled pattern using props such as
          <code className="px-1">count</code> and
          <code className="px-1">onClick</code>.
        </Typography>

        <CodeBlock
          filename="usage.tsx"
          language="tsx"
          code={`import { SimpleBell } from "@/components/notifications/components/SimpleBell";

export default function Example() {
  return <SimpleBell count={3} onClick={() => console.log("Clicked")} />;
}`}
        />
      </section>

      {/* NOTIFICATION BELL VARIANTS */}
      <section className="space-y-24">

        <BellSection
          title="Simple Bell"
          description="Minimal bell with count badge."
          open={open === "simple"}
          onOpen={() => setOpen("simple")}
          onClose={() => setOpen(null)}
          Component={SimpleBell}
          code={`import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export function SimpleBell({ count = 0, onClick }) {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={count} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}`}
        />

        <BellSection
          title="Badge Bell"
          description="Bell with max count badge display."
          open={open === "badge"}
          onOpen={() => setOpen("badge")}
          onClose={() => setOpen(null)}
          Component={() => <BadgeBell count={12} maxCount={9} />}
          code={`import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export function BadgeBell({ count = 0, maxCount = 99, onClick }) {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={count > maxCount ? \`\${maxCount}+\` : count} color="primary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}`}
        />

        <BellSection
          title="Animated Bell"
          description="Bell with hover and tap animation using Framer Motion."
          open={open === "animated"}
          onOpen={() => setOpen("animated")}
          onClose={() => setOpen(null)}
          Component={AnimatedBell}
          code={`import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { motion } from "framer-motion";

export function AnimatedBell({ onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <IconButton onClick={onClick}>
        <NotificationsIcon />
      </IconButton>
    </motion.div>
  );
}`}
        />

        <BellSection
          title="Icon Only Bell"
          description="Large notification icon without badge."
          open={open === "icononly"}
          onOpen={() => setOpen("icononly")}
          onClose={() => setOpen(null)}
          Component={IconOnlyBell}
          code={`import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export function IconOnlyBell({ onClick }) {
  return (
    <IconButton onClick={onClick}>
      <NotificationsIcon fontSize="large" />
    </IconButton>
  );
}`}
        />

        <BellSection
          title="Gradient Bell"
          description="Bell with gradient background style."
          open={open === "gradient"}
          onOpen={() => setOpen("gradient")}
          onClose={() => setOpen(null)}
          Component={GradientBell}
          code={`import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export function GradientBell({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        color: "white",
        "&:hover": { background: "linear-gradient(45deg, #FF8E53, #FE6B8B)" },
      }}
    >
      <NotificationsIcon />
    </IconButton>
  );
}`}
        />

        <BellSection
          title="Sound Bell"
          description="Bell that plays a sound on click."
          open={open === "sound"}
          onOpen={() => setOpen("sound")}
          onClose={() => setOpen(null)}
          Component={() => <SoundBell soundUrl="/sounds/notification.mp3" />}
          code={`import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export function SoundBell({ onClick, soundUrl }) {
  const handleClick = () => {
    if (soundUrl) new Audio(soundUrl).play();
    onClick?.();
  };

  return (
    <IconButton onClick={handleClick}>
      <NotificationsIcon />
    </IconButton>
  );
}`}
        />
      </section>
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Bell Section Helper                */
/* ---------------------------------- */
function BellSection({
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

      <Typography className="text-gray-500 mb-4">{description}</Typography>

      <Box className="mb-6">
        <Component />
      </Box>

      <CodeBlock
        filename={`${title.replace(/\s/g, "")}.tsx`}
        language="tsx"
        code={code}
      />
    </section>
  );
}
