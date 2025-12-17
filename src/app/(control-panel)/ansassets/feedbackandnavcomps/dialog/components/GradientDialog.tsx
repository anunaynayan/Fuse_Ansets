"use client";

import React from "react";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";

export const GradientDialog = (props: BaseDialogProps) => {
  return (
    <BaseDialog
      {...props}
      className="bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-2xl"
    />
  );
};
