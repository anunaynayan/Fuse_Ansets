"use client";

import React from "react";
import { BaseBanner } from "./BaseBanner";
import { GlassBanner } from "./GlassBanner";
import { GradientBanner } from "./GradientBanner";
import { BorderedBanner } from "./BorderedBanner";
import { ShadowBanner } from "./ShadowBanner";

type Variant =
  | "base"
  | "glass"
  | "gradient"
  | "bordered"
  | "shadow";

interface BannerBoxProps {
  title: string;
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  variant?: Variant;
}

export const BannerBox = ({
  title,
  message,
  severity = "info",
  variant = "base",
}: BannerBoxProps) => {
  const banners: Record<Variant, JSX.Element> = {
    base: (
      <BaseBanner title={title} message={message} severity={severity} />
    ),
    glass: (
      <GlassBanner title={title} message={message} severity={severity} />
    ),
    gradient: (
      <GradientBanner
        title={title}
        message={message}
        severity={severity}
      />
    ),
    bordered: (
      <BorderedBanner
        title={title}
        message={message}
        severity={severity}
      />
    ),
    shadow: (
      <ShadowBanner title={title} message={message} severity={severity} />
    ),
  };

  return banners[variant];
};
