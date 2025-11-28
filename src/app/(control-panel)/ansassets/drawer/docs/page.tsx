"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import DrawerPage from "../drawer/page";


export default function DrawerDocs() {

  
  

  return (
    <DocsLayout
        title="Drawer Documentation"
        backLink="/ansassets/drawer/drawer"
        backText="Back to Drawer"
    
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Drawer is a component that provides a way to navigate through different
        sections of a website or application.
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
          These are the necessary dependencies and technologies for the Drawer:
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
          <li>framer-motion</li>
          <li>react-dom</li>
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
          code={`npm install @mui/material @mui/icons-material framer-motion`}
        />
      </section>

      {/* ------------------------ Preview SECTION ------------------------ */}
      <section id="drawer" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        

        <Box className=" h-80  ">
              <DrawerPage/>
        </Box>

        
      </section>

        
        {/* ------------------------ Uses SECTION ------------------------ */}
      
      <section id="uses" className="mb-16">
 <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
         Uses Example
        </Typography> 

        <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`
            
                import Drawer from "@/components/drawer";               
                export default function App() {
                  return (                   
                      <CustomDrawer
                        title="Main Menu"
                        anchor="left"
                        items={menuItems}
                      />
                    
                  );
                }
            
            `}
        />

        </section>

{/* ------------------------ Props Section ------------------------ */}

      <section id="props" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Props
        </Typography>

<Box className="overflow-x-auto mb-8">
  <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      {/* CustomDrawer Props */}
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">title</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"Menu"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">The header title displayed on the drawer.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">anchor</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"top" | "bottom" | "left" | "right"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"bottom"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Specifies which side of the screen the drawer opens from.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">items</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">DrawerItem[]</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">[]</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of menu items to display inside the drawer.</td>
      </tr>

      {/* DrawerItem Props */}
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">label</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Text label for the menu item (required).</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">path</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Optional path for navigation using Next.js router.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">icon</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Name of MUI icon to display next to the label.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">children</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">DrawerItem[]</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Nested submenu items (optional).</td>
      </tr>
    </tbody>
  </table>
</Box>




        </section>



{/* ------------------------ Complete Code SECTION ------------------------ */}
      <section id="completecode" className="mb-16" > 
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Componnet  Code
          </Typography>

         {/* FIXED — PROPERLY CLOSED TEMPLATE STRING */}
        <CodeBlock
          filename="Drawer.tsx"
          language="tsx"
          code={`
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
  anchor?: "bottom" | "top" | "left" | "right";
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
  const [expandedLevels, setExpandedLevels] = React.useState<Record<number, string | null>>({});

  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuBg =
    theme.palette.mode === "dark" ? "rgba(24,24,24,0.95)" : "rgba(255,255,255,0.95)";

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
        const key = parentKey ? \`\${parentKey}.\${item.label}\` : item.label;
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
                    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#f3f4f6",
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
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
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

  const paperStyles = {
    background: menuBg,
    backdropFilter: "blur(14px)",
    borderRadius: 0,
    overflow: "hidden",

    ...(anchor === "left" || anchor === "right"
      ? { width: 350, height: "100vh" }
      : {}),

    ...(anchor === "bottom" || anchor === "top"
      ? { width: "100%", height: "auto", maxHeight: "90vh" }
      : {}),
  };

  return (
    <Box>
      <MotionIconButton color="primary" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </MotionIconButton>

      <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)} PaperProps={{ sx: paperStyles }}>
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

        <Box
          sx={{
            overflowY: "auto",
            maxHeight: anchor === "top" || anchor === "bottom" ? "70vh" : "calc(100vh - 60px)",
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
`}
        />

          </section>




    </DocsLayout>
  );
}
