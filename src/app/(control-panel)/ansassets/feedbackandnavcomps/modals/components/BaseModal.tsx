"use client";

import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { motion } from "framer-motion";
import { modalVariants } from "./variants";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  animation?: keyof typeof modalVariants;
  className?: string;
}

export const BaseModal = ({
  open,
  onClose,
  title,
  children,
  animation = "fade",
  className = "",
}: Props) => {
  const MotionDiv = motion.div;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent className="p-0">
        <MotionDiv
          {...modalVariants[animation]}
          className={`rounded-xl p-6 ${className}`}
        >
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <div>{children}</div>
        </MotionDiv>
      </DialogContent>
    </Dialog>
  );
};
