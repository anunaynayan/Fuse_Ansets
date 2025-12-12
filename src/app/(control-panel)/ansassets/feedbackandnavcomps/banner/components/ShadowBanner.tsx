import React from "react";
import { BaseBanner } from "./BaseBanner";

export const ShadowBanner = (props: any) => {
  return (
    <BaseBanner
      {...props}
      className="shadow-2xl bg-white"
    />
  );
};
