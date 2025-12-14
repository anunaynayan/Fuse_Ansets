"use client";
import { Box, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
  item: any;
  isOpen: boolean;
  onToggle: () => void;
  config: any;
  disableAnimation?: boolean;
}

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
  config,
  disableAnimation,
}: Props) {
  return (
    <Box
      sx={{
        border: config.bordered ? "1px solid #ddd" : "none",
        borderRadius: 2,
        mb: 2,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        sx={{
          px: 2,
          py: 1.5,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: config.headerBg,
          color: config.color || "inherit",
        }}
      >
        {config.iconPosition === "left" && (
          <ExpandMoreIcon
            sx={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
              mr: 1,
            }}
          />
        )}

        <Typography fontWeight={500}>{item.title}</Typography>

        {config.iconPosition === "right" && (
          <IconButton size="small">
            <ExpandMoreIcon
              sx={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
                color: config.color || "inherit",
              }}
            />
          </IconButton>
        )}
      </Box>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={disableAnimation ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={disableAnimation ? undefined : { height: 0, opacity: 0 }}
            px={2}
            py={2}
          >
            <Typography color="text.secondary">
              {item.content}
            </Typography>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
