// "use client";

// import React, { useState, useRef } from "react";
// import {
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   PopoverPosition,
//   Popover,
// } from "@mui/material";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// export interface MenuItemType {
//   label: string;
//   icon?: React.ReactNode;
//   onClick?: () => void;
//   divider?: boolean;
//   disabled?: boolean;
//   children?: MenuItemType[]; // unlimited nested items
// }

// interface DropdownMenuProps {
//   trigger: React.ReactNode;
//   items: MenuItemType[];
//   placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
//   size?: "normal" | "dense";
// }

// export default function DropdownMenu({
//   trigger,
//   items,
//   placement = "bottom-end",
//   size = "normal",
// }: DropdownMenuProps) {
//   const [menuStack, setMenuStack] = useState<
//     { anchorEl: HTMLElement; items: MenuItemType[] }[]
//   >([]);

//   const rootRef = useRef<HTMLDivElement | null>(null);

//   const openMenu = (event: any, menuItems: MenuItemType[]) => {
//     setMenuStack((prev) => [
//       ...prev,
//       { anchorEl: event.currentTarget, items: menuItems },
//     ]);
//   };

//   const closeMenu = () => {
//     setMenuStack([]);
//   };

//   const closeLast = () => {
//     setMenuStack((prev) => prev.slice(0, prev.length - 1));
//   };

//   const lastMenu = menuStack[menuStack.length - 1];

//   // placement mapping
//   const anchorOriginMap: any = {
//     "bottom-start": { vertical: "bottom", horizontal: "left" },
//     "bottom-end": { vertical: "bottom", horizontal: "right" },
//     "top-start": { vertical: "top", horizontal: "left" },
//     "top-end": { vertical: "top", horizontal: "right" },
//   };

//   const transformOriginMap: any = {
//     "bottom-start": { vertical: "top", horizontal: "left" },
//     "bottom-end": { vertical: "top", horizontal: "right" },
//     "top-start": { vertical: "bottom", horizontal: "left" },
//     "top-end": { vertical: "bottom", horizontal: "right" },
//   };

//   return (
//     <div ref={rootRef} className="inline-block">
//       <span onClick={(e) => openMenu(e, items)}>{trigger}</span>

//       {menuStack.map((level, index) => (
//         <Menu
//           key={index}
//           anchorEl={level.anchorEl}
//           open
//           onClose={closeMenu}
//           anchorOrigin={
//             index === 0
//               ? anchorOriginMap[placement]
//               : { vertical: "top", horizontal: "right" }
//           }
//           transformOrigin={
//             index === 0
//               ? transformOriginMap[placement]
//               : { vertical: "top", horizontal: "left" }
//           }
//           MenuListProps={{
//             autoFocus: true,
//             onKeyDown: (e) => {
//               if (e.key === "Escape") closeMenu();

//               if (e.key === "ArrowLeft" && index > 0) closeLast();

//               // right arrow opens submenu
//               if (e.key === "ArrowRight") {
//                 const focusItem = document.activeElement as HTMLElement;
//                 const submenuIndex = Array.from(
//                   focusItem.parentElement?.children || []
//                 ).indexOf(focusItem);
//                 const item = level.items[submenuIndex];
//                 if (item?.children) {
//                   openMenu({ currentTarget: focusItem }, item.children);
//                 }
//               }
//             },
//           }}
//           className="z-[9999]"
//         >
//           {level.items.map((item, i) =>
//             item.divider ? (
//               <Divider key={i} />
//             ) : (
//               <MenuItem
//                 key={i}
//                 disabled={item.disabled}
//                 onClick={(e) => {
//                   if (item.children) {
//                     openMenu(e, item.children);
//                   } else {
//                     item.onClick?.();
//                     closeMenu();
//                   }
//                 }}
//                 onMouseEnter={(e) => {
//                   if (item.children) {
//                     // close deeper levels
//                     setMenuStack((prev) => prev.slice(0, index + 1));
//                     openMenu(e, item.children);
//                   }
//                 }}
//                 className={`!px-4 hover:bg-gray-200 ${
//                   size === "dense" ? "!py-1" : "!py-2"
//                 }`}
//               >
//                 {item.icon && (
//                   <ListItemIcon className="min-w-0 mr-3">
//                     {item.icon}
//                   </ListItemIcon>
//                 )}

//                 <ListItemText primary={item.label} />

//                 {item.children && <KeyboardArrowRight className="opacity-70" />}
//               </MenuItem>
//             )
//           )}
//         </Menu>
//       ))}
//     </div>
//   );
// }





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
