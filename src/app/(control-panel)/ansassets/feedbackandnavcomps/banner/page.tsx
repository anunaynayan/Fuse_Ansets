"use client";

import React from "react";

// Banners
import SimpleBanner from "./components/SimpleBanner";
import BorderedBanner from "./components/BorderedBanner";
import SoftGradientBanner from "./components/GradientBanner";
import AnimatedBanner from "./components/AnimatedBanner";
import ActionBanner from "./components/ActionBanner";
import DismissibleBanner from "./components/DismissibleBanner";
import ImageBanner from "./components/ImageBanner";
import StatusBanner from "./components/StatusBanner";
import Header from "./components/Header";

type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function BannerSection({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
          {description}
        </p>
      </div>

      <div className="pt-2">{children}</div>
    </section>
  );
}

export default function BannersShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-10">
      {/* Page Header */}
      <Header/>

      {/* Content */}
      <div className="space-y-10 max-w-5xl">
        <BannerSection
          title="Simple Banner"
          description="Lightweight informational banner for non-intrusive announcements."
        >
          <SimpleBanner />
        </BannerSection>

        <BannerSection
          title="Bordered Banner"
          description="Enterprise-style banner for warnings, maintenance notices, or system messages."
        >
          <BorderedBanner />
        </BannerSection>

        <BannerSection
          title="Soft Gradient Banner"
          description="Premium looking banner suited for promotions, upgrades, or feature highlights."
        >
          <SoftGradientBanner />
        </BannerSection>

        <BannerSection
          title="Animated Banner"
          description="Animated feedback banner using Framer Motion to draw attention."
        >
          <AnimatedBanner />
        </BannerSection>

        <BannerSection
          title="Action Banner"
          description="Call-to-action banner with primary button, ideal for onboarding and upsells."
        >
          <ActionBanner />
        </BannerSection>

        <BannerSection
          title="Dismissible Banner"
          description="User-dismissible banner for temporary announcements."
        >
          <DismissibleBanner />
        </BannerSection>

        <BannerSection
          title="Image Banner"
          description="Hero-style banner with background image, suitable for landing pages."
        >
          <ImageBanner />
        </BannerSection>

        <BannerSection
          title="Status Banner"
          description="Compact status indicator banner for dashboards and admin panels."
        >
          <StatusBanner />
        </BannerSection>
      </div>
    </div>
  );
}
