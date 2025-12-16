"use client";

import { motion } from "framer-motion";

export const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: 40, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 40, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
  bounce: {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    transition: { type: "spring", stiffness: 300 },
  },
};

export function Animated({
  variant,
  children,
}: {
  variant: keyof typeof animations;
  children: React.ReactNode;
}) {
  return (
    <motion.div {...animations[variant]}>
      {children}
    </motion.div>
  );
}
