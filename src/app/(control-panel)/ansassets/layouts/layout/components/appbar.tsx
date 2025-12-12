"use client";
import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  InputBase,
  Menu,
  MenuItem,
  Avatar,
  Collapse,
  Divider,
  useTheme,
  useMediaQuery,
  Typography,
  ListItemIcon,
  BoxProps,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as Icons from "@mui/icons-material";

const MotionDiv = motion<BoxProps>(Box);

const Appbar = ({ headerData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState({ name: null, anchor: null });
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [mobileOpenMap, setMobileOpenMap] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  // Create dropdown state map
  
  React.useEffect(() => {
    const map = {};
    headerData?.menuItems?.forEach((item) => {
      if (item.dropdown) map[item.label] = false;
    });
    setMobileOpenMap(map);
  }, [headerData]);

  if (!headerData) return null;

  // Handlers
  const toggleDrawer = () => setMobileOpen((s) => !s);

  const handleOpenDropdown = (event, name) =>
    setDropdownAnchor((prev) =>
      prev.name === name ? { name: null, anchor: null } : { name, anchor: event.currentTarget }
    );

  const handleCloseDropdown = () => setDropdownAnchor({ name: null, anchor: null });

  const handleOpenAvatar = (e) => setAvatarAnchorEl(e.currentTarget);
  const handleCloseAvatar = () => setAvatarAnchorEl(null);

  const handleUserAction = (action) => {
    handleCloseAvatar();
    console.log("User action:", action);
  };

  const toggleMobileDropdown = (label) =>
    setMobileOpenMap((prev) => ({ ...prev, [label]: !prev[label] }));

  const underlineVariant = {
    rest: { scaleX: 0, transformOrigin: "left" },
    hover: { scaleX: 1 },
  };

  const textVariant = {
    rest: { color: "#222" },
    hover: { color: "#d32f2f" },
  };

  return (
    <>
      
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#222",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <MotionDiv
                    component="img"
              src={headerData.logo}
              alt="logo"
              sx={{ width: 44, height: 44, borderRadius: "8px" }}
              whileHover={{ rotate: 6, scale: 1.03 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {headerData.companyName}
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.04)",
                minWidth: 260,
                maxWidth: 420,
              }}
            >
              <SearchIcon sx={{ color: "gray" }} />
              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ ml: 1, width: "100%" }}
              />
            </Box>
          )}

          
          {!isMobile ? (
            <Box display="flex" alignItems="center" gap={3}>
              {headerData.menuItems?.map((item) => {
                const hasDropdown = Boolean(item.dropdown);

                return (
                  <Box key={item.label} sx={{ position: "relative" }}>
                    <MotionDiv
                      role="button"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={hasDropdown ? (e) => handleOpenDropdown(e, item.label) : undefined}
                      sx={{ display: "inline-flex", alignItems: "center", px: 0.5 }}
                    >
                      <motion.span variants={textVariant}>
                        <Button
                          href={!hasDropdown ? item.path : undefined}
                          endIcon={hasDropdown ? <ArrowDropDownIcon /> : null}
                        >
                          {item.label}
                        </Button>
                      </motion.span>

                      <motion.div
                        variants={underlineVariant}
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: 0,
                          height: 3,
                          width: "100%",
                          background: "#d32f2f",
                        }}
                      />
                    </MotionDiv>

                    {hasDropdown && (
                      <Menu
                        anchorEl={dropdownAnchor.anchor}
                        open={dropdownAnchor.name === item.label}
                        onClose={handleCloseDropdown}
                      >
                        {item.dropdown.map((sub) => (
                          <MenuItem key={sub.name} component="a" href={sub.path}>
                            {sub.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Box>
                );
              })}

              {/* Avatar */}
              <IconButton onClick={handleOpenAvatar}>
                <Avatar src={headerData.userMenu?.avatar} sx={{ width: 42, height: 42 }} />
              </IconButton>

              <Menu
                anchorEl={avatarAnchorEl}
                open={Boolean(avatarAnchorEl)}
                onClose={handleCloseAvatar}
              >
                {headerData.userMenu?.options?.map((opt) => {
                  const IconComp = Icons[opt.icon];
                  return (
                    <MenuItem key={opt.label} onClick={() => handleUserAction(opt.action)}>
                      {IconComp && (
                        <ListItemIcon>
                          <IconComp fontSize="small" />
                        </ListItemIcon>
                      )}
                      {opt.label}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          ) : (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: "#d32f2f" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer} PaperProps={{ sx: { width: 300 } }}>
        <List sx={{ mt: 1 }}>
          {headerData.menuItems?.map((item) => {
            const hasDropdown = Boolean(item.dropdown);

            return (
              <Box key={item.label}>
                <ListItemButton
                  onClick={() => (hasDropdown ? toggleMobileDropdown(item.label) : toggleDrawer())}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
                  {hasDropdown && <ArrowDropDownIcon />}
                </ListItemButton>

                {hasDropdown && (
                  <Collapse in={mobileOpenMap[item.label]}>
                    <Box sx={{ pl: 4 }}>
                      {item.dropdown.map((sub) => (
                        <ListItemButton key={sub.name} component="a" href={sub.path}>
                          <ListItemText primary={sub.name} />
                        </ListItemButton>
                      ))}
                    </Box>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Appbar;
