

"use client";

import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  MenuList,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

 export interface MenuItemType {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  disabled?: boolean;
  children?: MenuItemType[];
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: MenuItemType[];
  size?: "normal" | "dense";
}

export default function DropdownMenu({
  trigger,
  items,
  size = "normal",
}: DropdownMenuProps) {
  const [menus, setMenus] = useState<
    { anchorEl: HTMLElement; items: MenuItemType[]; level: number }[]
  >([]);

  const openMenu = (anchor: HTMLElement, newItems: MenuItemType[], level: number) => {
    setMenus((prev) => [...prev.slice(0, level), { anchorEl: anchor, items: newItems, level }]);
  };

  const closeAll = () => setMenus([]);

  const closeLevel = (level: number) => {
    setMenus((prev) => prev.slice(0, level));
  };

  return (
    <div className="inline-block">
      <span
        onClick={(e) =>
          openMenu(e.currentTarget as HTMLElement, items, 0)
        }
        style={{ cursor: "pointer" }}
      >
        {trigger}
      </span>

      {menus.map((level, index) => (
        <Menu
          key={index}
          open
          anchorEl={level.anchorEl}
          onClose={closeAll}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          MenuListProps={{
            dense: size === "dense",

            onKeyDown: (e: any) => {
              const list = level.items.filter((item) => !item.divider && !item.disabled);
              const currentIndex = list.findIndex((it, i) => {
                const element = e.currentTarget.children[i];
                return element === document.activeElement;
              });

              // Custom keyboard navigation
              switch (e.key) {
                case "ArrowDown":
                  e.preventDefault();
                  const next = (currentIndex + 1) % list.length;
                  e.currentTarget.children[next]?.focus();
                  break;

                case "ArrowUp":
                  e.preventDefault();
                  const prev = (currentIndex - 1 + list.length) % list.length;
                  e.currentTarget.children[prev]?.focus();
                  break;

                case "ArrowRight":
                  e.preventDefault();
                  const activeItem = list[currentIndex];
                  if (activeItem?.children) {
                    const target = e.currentTarget.children[currentIndex];
                    openMenu(target, activeItem.children, index + 1);
                  }
                  break;

                case "ArrowLeft":
                  e.preventDefault();
                  if (index > 0) closeLevel(index);
                  break;

                case "Escape":
                  e.preventDefault();
                  if (index === 0) closeAll();
                  else closeLevel(index);
                  break;
              }
            },
            sx: {
              "& .MuiMenuItem-root": {
                outline: "none !important",
              },
            },
          }}
        >
          <MenuList>
            {level.items.map((item, i) =>
              item.divider ? (
                <Divider key={i} />
              ) : (
                <MenuItem
                  key={i}
                  disabled={item.disabled}
                  onClick={(e) => {
                    if (item.children) {
                      openMenu(e.currentTarget as HTMLElement, item.children, index + 1);
                    } else {
                      item.onClick?.();
                      closeAll();
                    }
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      {item.icon}
                    </ListItemIcon>
                  )}

                  <ListItemText>{item.label}</ListItemText>

                  {item.children && <KeyboardArrowRight fontSize="small" />}
                </MenuItem>
              )
            )}
          </MenuList>
        </Menu>
      ))}
    </div>
  );
}
