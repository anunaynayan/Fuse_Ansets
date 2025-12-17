"use client";

import { Box, Typography } from "@mui/material";

import DatePicker from "../datepicker/datepicker";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";

export default function DrawerDocs() {
  return (
    <DocsLayout
    title="Date Picker Documentation"
    backLink="/ansassets/date-picker/datepicker"
    backText="Back to Date Picker"
    
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The DatePicker component is a fully customizable, MUI-based date
        selection component featuring:
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li> Day, Month, Year, and Decade views</li>
          <li> Min/Max date restrictions</li>
          <li>Fully controlled or uncontrolled usage</li>
          <li>Clearable selection</li>
          <li>
            This component is ideal for forms, dashboards, scheduling systems,
            booking apps, or admin panels.
          </li>
        </ul>
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

      {/* ------------------------ PREVIEW ------------------------ */}

      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <DatePicker />
        </Box>
      </section>

      {/* Uses EXAMPLE */}

      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Example Uses
        </Typography>

        <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`
                "use client";
        import DatePicker from "./datepicker";
     export default function App() {
     return (
     const [date, setDate] = useState<Date | null>(null);
      return (
             <DatePicker
                label="Select Date"
                value={date}
                onChange={(val) => setDate(val)}
                                 />
                             );
                         );
                      }
                            `}
        />
      </section>

      {/* Props Section */}

      <section id="props" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Props
        </Typography>

        <Box className="overflow-x-auto mb-8">
          <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                  Name
                </th>
                <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                  Type
                </th>
                <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                  Default
                </th>
                <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  label
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  string
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  "Select Date"
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Label displayed above the input field.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  size
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  "small" | "medium"
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  "small"
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Size of the input and label.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  value
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Date | null
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  null
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Currently selected date (can be controlled externally).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  onChange
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  (date: Date | null){" "}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  undefined
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Callback fired when date is selected or cleared.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  sx
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  object
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  {}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Custom styles applied to the root container.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  minDate
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Date
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  undefined
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Minimum selectable date; earlier dates are disabled.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  maxDate
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Date
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  undefined
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Maximum selectable date; later dates are disabled.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  disabled
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  boolean
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  false
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Disables input and calendar popover.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  error
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  boolean
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  false
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Displays input in error state.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  helperText
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  string
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  ""
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Text shown below input (e.g., for validation messages).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  format
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  (date: Date){" "}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  undefined
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Custom function to format the displayed date.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  showClear
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  boolean
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  true
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  Whether to show the clear (✕) button to remove selected date.
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </section>

      {/* ------------------------ Complete Code Sections  ------------------------ */}
      <section id="" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Complete Code Component
        </Typography>

        {/* FIXED — PROPERLY CLOSED TEMPLATE STRING */}
        <CodeBlock
          filename="DatePicker.tsx"
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
