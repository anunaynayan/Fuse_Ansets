"use client";

import React from "react";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";

export const ElevatedDialog = (props: BaseDialogProps) => {
  return (
    <BaseDialog
      {...props}
      className="bg-white shadow-2xl shadow-black/40"
    />
  );
};
