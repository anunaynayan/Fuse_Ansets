"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Typography, Box } from "@mui/material";

// Banner imports
import SimpleBanner from "../components/SimpleBanner";
import BorderedBanner from "../components/BorderedBanner";
import SoftGradientBanner from "../components/GradientBanner";
import AnimatedBanner from "../components/AnimatedBanner";
import ActionBanner from "../components/ActionBanner";
import DismissibleBanner from "../components/DismissibleBanner";
import ImageBanner from "../components/ImageBanner";
import StatusBanner from "../components/StatusBanner";

export default function BannerDocsPage() {
  return (
    <DocsLayout
      title="Banner Components"
      backLink="/ansassets/feedbackandnavcomps/banner"
      backText="Back to Components"
    >
      {/* INTRO */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-12 leading-relaxed">
        A set of reusable, production-ready banner components built with
        <strong> Tailwind CSS</strong> and optional
        <strong> Framer Motion</strong> animations.
        <br />
        <br />
        Banners are designed for announcements, promotions, system status,
        onboarding messages, and contextual call-to-actions.
        Each banner is fully independent and can be copy-pasted as needed.
      </Typography>

      {/* DEPENDENCIES */}
<section className="mb-16">
  <Typography variant="h4" className="font-semibold mb-4">
    Dependencies Required
  </Typography>

  <Typography className="mb-3 text-gray-600 dark:text-gray-300">
    These banner components are built using Tailwind CSS for styling.
    Animated variants additionally require Framer Motion.
  </Typography>

  <CodeBlock
    filename="terminal"
    language="bash"
    code={`# Tailwind CSS (required)
npm install -D tailwindcss postcss autoprefixer

# Framer Motion (optional – only for animated banners)
npm install framer-motion`}
  />
</section>

      {/* SIMPLE */}
      <BannerSection
        title="Simple Banner"
        description="Lightweight informational banner for low-priority announcements."
        preview={<SimpleBanner />}
        code={`export default function SimpleBanner() {
  return (
    <div className="rounded-xl bg-blue-50 border border-blue-200 px-4 py-3 text-blue-900">
      <strong>Info:</strong> Your profile was updated successfully.
    </div>
  );
}`}
      />

      {/* BORDERED */}
      <BannerSection
        title="Bordered Banner"
        description="Enterprise-style banner suitable for system notices or warnings."
        preview={<BorderedBanner />}
        code={`export default function BorderedBanner() {
  return (
    <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-4">
      <strong>Maintenance:</strong> Scheduled downtime tonight at 11 PM.
    </div>
  );
}`}
      />

      {/* SOFT GRADIENT */}
      <BannerSection
        title="Soft Gradient Banner"
        description="Premium gradient banner ideal for feature highlights or promotions."
        preview={<SoftGradientBanner />}
        code={`export default function SoftGradientBanner() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-5 text-white">
      <strong>New Feature:</strong> Try the redesigned dashboard experience.
    </div>
  );
}`}
      />

      {/* ANIMATED */}
      <BannerSection
        title="Animated Banner"
        description="Animated banner that draws attention using Framer Motion."
        preview={<AnimatedBanner />}
        code={`import { motion } from "framer-motion";

export default function AnimatedBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-green-50 border border-green-200 p-4"
    >
      <strong>Success:</strong> Payment completed successfully.
    </motion.div>
  );
}`}
      />

      {/* ACTION */}
      <BannerSection
        title="Action Banner"
        description="Call-to-action banner with primary button."
        preview={<ActionBanner />}
        code={`export default function ActionBanner() {
  return (
    <div className="flex items-center justify-between rounded-xl bg-blue-600 p-5 text-white">
      <span>
        <strong>Upgrade now</strong> to unlock premium features.
      </span>
      <button className="rounded-lg bg-white px-4 py-2 text-blue-600 font-medium">
        Upgrade
      </button>
    </div>
  );
}`}
      />

      {/* DISMISSIBLE */}
      <BannerSection
        title="Dismissible Banner"
        description="User-dismissible banner for temporary messages."
        preview={<DismissibleBanner />}
        code={`import { useState } from "react";

export default function DismissibleBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="flex justify-between rounded-xl bg-gray-100 p-4">
      <span>We use cookies to improve your experience.</span>
      <button onClick={() => setVisible(false)}>✕</button>
    </div>
  );
}`}
      />

      {/* IMAGE */}
      <BannerSection
        title="Image Banner"
        description="Hero-style banner with background image."
        preview={<ImageBanner />}
        code={`export default function ImageBanner() {
  return (
    <div
      className="rounded-2xl bg-cover bg-center p-8 text-white"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <h3 className="text-2xl font-bold">Welcome Back</h3>
      <p className="opacity-90">Check out what’s new today.</p>
    </div>
  );
}`}
      />

      {/* STATUS */}
      <BannerSection
        title="Status Banner"
        description="Compact status indicator for dashboards and admin panels."
        preview={<StatusBanner />}
        code={`export default function StatusBanner() {
  return (
    <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm">
      🟢 All systems operational
    </div>
  );
}`}
      />
    </DocsLayout>
  );
}

/* ---------------------------------- */
/* Helper Section                     */
/* ---------------------------------- */

function BannerSection({
  title,
  description,
  preview,
  code,
}: {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}) {
  return (
    <section className="mb-24">
      <Typography variant="h4" className="font-semibold mb-2">
        {title}
      </Typography>

      <Typography className="text-gray-500 mb-6">
        {description}
      </Typography>

      <Box className="mb-6">{preview}</Box>

      <CodeBlock
        filename={`${title.replace(/\s/g, "")}.tsx`}
        language="tsx"
        code={code}
      />
    </section>
  );
}
