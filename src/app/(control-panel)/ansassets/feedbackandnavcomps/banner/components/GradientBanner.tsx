import React from "react";
import { BaseBanner } from "./BaseBanner";

export const GradientBanner = (props: any) => {
  return (
    <BaseBanner
      {...props}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    />
  );
};
