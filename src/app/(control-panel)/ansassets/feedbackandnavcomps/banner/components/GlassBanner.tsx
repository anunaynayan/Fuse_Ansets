import React from "react";
import { BaseBanner } from "./BaseBanner";

export const GlassBanner = (props: any) => {
  return (
    <BaseBanner
      {...props}
      className="backdrop-blur-xl bg-white/20 border border-white/30"
    />
  );
};
