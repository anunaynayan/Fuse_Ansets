"use client";

import React from "react";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";

export const MinimalDialog = (props: BaseDialogProps) => {
  return (
    <BaseDialog
      {...props}
      showClose={false}
      className="bg-white border border-gray-200"
    />
  );
};
