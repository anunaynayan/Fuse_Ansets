"use client";

import React from "react";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";

export const GlassDialog = (props: BaseDialogProps) => {
  return (
    <BaseDialog
      {...props}
      className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-xl"
    />
  );
};
