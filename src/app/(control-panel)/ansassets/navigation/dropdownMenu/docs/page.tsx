"use client";

import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import { Box, Typography } from "@mui/material";
import DropDownDemoApp from "../dropDown/page";



export default function DropDownMenuDocs() {
  return (
    <DocsLayout
       title="DropDown Menu Documentation"
        backLink="/ansassets/navigation/dropdownMenu/dropdownmenu"
        backText="Back to DropDown Menu"
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        A Dropdown Menu is a UI component used to display a list of selectable options when the user clicks or hovers over a trigger element (such as a button, icon, or text). It helps organize multiple actions or navigation items without taking too much space on the screen.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Loader:
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>next</li>
        </ul>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material`}
        />
      </section>

      {/* ------------------------ Floating Toolbar SECTION ------------------------ */}
      <section id="spinnerloader" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="h-48">
          <DropDownDemoApp/>
        </Box>

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Uses
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`
           import DropdownMenu from "./DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function App() {
  const items = [
    { label: "Edit", onClick: () => console.log("Edit") },
    { label: "Delete", onClick: () => console.log("Delete") }
  ];

  return (
    <DropdownMenu
      trigger={<MoreVertIcon />}
      items={items}
    />
  );
}

            

            `}
        />
        {/* --------------Props Sections-------------- */}
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Props
        </Typography>

        <Box className="overflow-auto">
  <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800">
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Name
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Type
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Default
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Description
        </th>
      </tr>
    </thead>

    <tbody className="text-gray-700 dark:text-gray-200">
      {/* trigger */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          trigger
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          ReactNode
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Element that opens the dropdown when clicked.
        </td>
      </tr>

      {/* items */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          items
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          MenuItemType[]
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Array of dropdown menu items supporting label, icon, divider, disabled, onClick, and nested children.
        </td>
      </tr>

      {/* size */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          size
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          "normal" | "dense"
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          "normal"
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Controls spacing inside menu items. "dense" shows compact menu.
        </td>
      </tr>
    </tbody>
  </table>
</Box>

        {/* -Complete code section */}

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Complete Component Code
        </Typography>

        <CodeBlock
          filename="breadcrumb.tsx"
          language="tsx"
          code= { `
          
           
           
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
           
          
            
          `}
        />
      </section>
    </DocsLayout>
  );
}
