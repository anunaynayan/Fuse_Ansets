

/* eslint-disable prettier/prettier */
"use client";

import * as React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Box,
  ListItemIcon,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as MuiIcons from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export interface DrawerItem {
  label: string;
  path?: string;
  icon?: string;
  children?: DrawerItem[];
}

export interface DrawerProps {
  title?: string;
  anchor?: "bottom" | "top" | "left" | "right";   // <— UPDATED
  items: DrawerItem[];
}

const MotionIconButton = motion(IconButton);

const collapseVariants = {
  open: { height: "auto", opacity: 1 },
  closed: { height: 0, opacity: 0 },
};

const DrawerComponent: React.FC<DrawerProps> = ({
  title = "Menu",
  anchor = "bottom",
  items = [],
}) => {
  const [open, setOpen] = React.useState(false);
  const [expandedLevels, setExpandedLevels] = React.useState<Record<number, string | null>>(
    {}
  );

  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuBg =
    theme.palette.mode === "dark"
      ? "rgba(24,24,24,0.95)"
      : "rgba(255,255,255,0.95)";

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const toggleExpand = (key: string, level: number) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [level]: prev[level] === key ? null : key,
      [level + 1]: null,
    }));
  };

  const renderIcon = (name?: string) => {
    if (!name) return null;
    const IconComponent = (MuiIcons as any)[name];
    return IconComponent ? <IconComponent fontSize="small" /> : null;
  };

  const handleNavigate = (item: DrawerItem) => {
    if (item.path) {
      router.push(item.path);
      setOpen(false);
    }
  };

  const renderMenu = (menuItems: DrawerItem[], level = 0, parentKey = "") => (
    <List disablePadding>
      {menuItems.map((item) => {
        const key = parentKey ? `${parentKey}.${item.label}` : item.label;
        const hasChildren = !!item.children?.length;
        const isOpen = expandedLevels[level] === key;

        return (
          <Box key={key}>
            <ListItemButton
              onClick={() => {
                if (hasChildren) toggleExpand(key, level);
                else handleNavigate(item);
              }}
              sx={{
                pl: 2 + level * 2,
                py: isMobile ? 1 : 1.2,
                mx: 1,
                my: 0.4,
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "#f3f4f6",
                },
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ minWidth: 34 }}>
                  {renderIcon(item.icon)}
                </ListItemIcon>
              )}

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                }}
              />

              {hasChildren && (
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowDropDownIcon />
                </motion.div>
              )}
            </ListItemButton>

            <AnimatePresence initial={false}>
              {hasChildren && isOpen && (
                <motion.div
                  variants={collapseVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ duration: 0.25 }}
                >
                  {renderMenu(item.children!, level + 1, key)}
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        );
      })}
    </List>
  );

  // ⭐ DYNAMIC WIDTH + HEIGHT BASED ON ANCHOR
  const paperStyles = {
    background: menuBg,
    backdropFilter: "blur(14px)",
    borderRadius: 0,
    overflow: "hidden",

    ...(anchor === "left" || anchor === "right"
      ? {
          width: 350,
          height: "100vh",
        }
      : {}),

   ...(anchor === "bottom" || anchor === "top" ?{
    width: "100%",
    height: "auto",
    maxHeight: "90vh",
   } : {
   })
  };

  return (
    <Box>
      <MotionIconButton color="primary" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </MotionIconButton>

      <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)} PaperProps={{ sx: paperStyles }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #d1d5db",
          }}
        >
          <Typography>{title}</Typography>

          <MotionIconButton whileHover={{ rotate: 90 }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </MotionIconButton>
        </Box>

        {/* Scroll Content */}
       <Box
  sx={{
    overflowY: "auto",
    maxHeight: anchor === "top" || anchor === "bottom"
      ? "70vh"    // content max space
      : "calc(100vh - 60px)", 
    pb: 3,
  }}
>
          {renderMenu(items)}
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
