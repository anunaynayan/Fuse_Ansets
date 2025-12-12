import React from "react";
import { BaseBanner } from "./BaseBanner";

export const BorderedBanner = (props: any) => {
  return (
    <BaseBanner
      {...props}
      className="border-2 border-gray-400 bg-gray-100"
    />
  );
};
