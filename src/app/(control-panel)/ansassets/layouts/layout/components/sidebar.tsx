"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import * as Icons from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

type MenuItem = {
  title: string;
  path?: string;
  icon: string;
  children?: MenuItem[];
};

type SidebarProps = {
  menuItems: MenuItem[];
  onNavigate: (path: string) => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  drawerWidth?: number;
  background?: string;
  color?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  onNavigate,
  logo,
  footer,
  drawerWidth = 260,
  background = "linear-gradient(180deg, #0a192f, #020c1b)",
  color = "#fff",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const toggleSubmenu = (index: number) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderMenu = (items: MenuItem[], level = 0) =>
    items.map((item, index) => {
      const IconComponent = Icons[item.icon] || Icons.HelpOutline;
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={index}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ListItemButton
              onClick={() =>
                hasChildren
                  ? toggleSubmenu(index)
                  : item.path && onNavigate(item.path)
              }
              sx={{
                pl: level * 3,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                transition: "0.2s ease",
              }}
            >
              <ListItemIcon sx={{ color }}>
                <IconComponent />
              </ListItemIcon>

              <ListItemText primary={item.title} />

              {hasChildren &&
                (openMenus[index] ? (
                  <Icons.ExpandLess sx={{ color }} />
                ) : (
                  <Icons.ExpandMore sx={{ color }} />
                ))}
            </ListItemButton>
          </motion.div>

          {/* Submenu */}
          {hasChildren && (
            <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
              {renderMenu(item.children!, level + 1)}
            </Collapse>
          )}
        </div>
      );
    });

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background,
        color,
      }}
      className="shadow-xl"
    >
      {logo && <div className="p-4 text-center">{logo}</div>}

      <List sx={{ flexGrow: 1 }}>{renderMenu(menuItems)}</List>

      {footer && <div className="p-4 mt-auto">{footer}</div>}
    </Box>
  );

  return (
    <>
      {isMobile && (
        <div className="fixed top-4 left-4 z-[1300] p-2 bg-[#0a192f]/80 rounded-full">
          <IconButton onClick={toggleDrawer} sx={{ color }}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background,
            color,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
