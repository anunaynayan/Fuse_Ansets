// "use client";
// import React from "react";
// import { Box, Typography } from "@mui/material";
// import Appbar from "../layout/components/appbar";
// import { Sidebar } from "../layout/components/sidebar";
// import { Footer } from "../layout/components/footer";
// import DocsLayout from "@/components/documetation/DocsLayout";
// import CodeBlock from "@/components/documetation/CodeBlock";


// export default function LayoutsDocs() {
  
//   return (
//     <DocsLayout
//       title="Layout Documentation"
//       backLink="/ansassets/layouts/layout"
//       backText="Back to Layout"   
//     >
//       <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
//       Layouts are the building blocks of Fuse applications. They provide a consistent and predictable structure for your application's user interface. Layouts can be used to create a variety of user interfaces, such as dashboards, forms, and settings pages.
//       </Typography>

//       {/* ------------------------ DEPENDENCIES ------------------------ */}
//       <section id="dependencies" className="mb-16">
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
//           Dependencies & Technologies
//         </Typography>

//         <Typography className="text-gray-600 dark:text-gray-100 mb-4">
//           These are the necessary dependencies and technologies for the Loader:
//         </Typography>

//         <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
//           Required Dependencies:
//         </Typography>

//         <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
//           <li>@mui/material</li>
//           <li>@mui/icons-material</li>
//           <li>framer-motion</li>
//           <li>react</li>
//           <li>next</li>
//         </ul>

//         <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
//           Install:
//         </Typography>

//         <CodeBlock 
//           filename="Install Command"
//           language="bash"
//           code={`npm install @mui/material @mui/icons-material framer-motion`}
//         />
//       </section>

//       {/* ------------------------ NAvabrar Section ------------------------ */}
//       <section id="navbar" className="mb-16">
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//           NavBar
//         </Typography>

//         <Typography className="text-gray-600 dark:text-gray-100 mb-4">
//          NavBar component is used to display the navigation menu and user profile information.
//         </Typography>

//       </section>


//       {/* ------------------------ Preview SECTION ------------------------ */}

//   <section id="preview" className="mb-16">
//  <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          Preview
//         </Typography>

//             <Box className="mb-4 max-w-sm mx-auto">
//           <Appbar/>
//         </Box>
//   </section>


//   {/* ------------------------ Uses SECTION ------------------------ */}

//   <section id="uses" className="mb-16">
//  <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          Uses Example
//         </Typography> 

//  <CodeBlock 
//           filename="App.tsx"
//           language="tsx"
//           code={`
//                 import Appbar from "@/components/appbar";               
//             export default function App() {
//               return (
//                 <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
//                  <Appbar headerData={headerData}/>
//                 </div>
//               );
//             }
//             `}
//         />
        

//         </section>
        
// {/* Props Section */}

//             <section id="props" className="mb-16">  
//             <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100"> 
//               Props 
//             </Typography>
// <Box className="overflow-x-auto mb-8">
//   <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
//     <thead className="bg-gray-100 dark:bg-gray-800">
//       <tr>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">headerData</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">HeaderDataType</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Main configuration object for Appbar including logo, company name, menu items, and user menu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">headerData.logo</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Image URL used to display company logo.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">headerData.companyName</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Company / brand name text displayed beside the logo.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">headerData.menuItems</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">MenuItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">List of navigation menu items with or without dropdown.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.label</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Display text of menu item.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.path</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Route URL for navigation when no dropdown exists.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.dropdown</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">DropdownItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of submenu items displayed on hover (desktop) / collapse (mobile).</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">dropdown.name</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Submenu text displayed inside dropdown.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">dropdown.path</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Route URL to navigate on clicking submenu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">headerData.userMenu</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">UserMenuType</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Configuration for avatar dropdown menu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">userMenu.avatar</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Avatar image URL displayed on the right side.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">userMenu.options</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">UserMenuOption[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of actions shown in the avatar dropdown menu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">options.label</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark	border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Menu text inside avatar menu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">options.icon</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string (Material Icon name)</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Icon displayed with the option inside avatar menu.</td>
//       </tr>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">options.action</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Identifier returned on click to handle custom actions.</td>
//       </tr>
//     </tbody>
//   </table>
// </Box>




//             </section>



// {/* ------------------------ Complete Code SECTION ------------------------ */}
//       <section id="completecode" className="mb-16"> 
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//           Complete Componnet 
//           </Typography>

//            <CodeBlock
//           filename="app.tsx"
//           language="tsx"
//           code={`"use client";
// import React, { useRef, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   IconButton,
//   Button,
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   InputBase,
//   Menu,
//   MenuItem,
//   Avatar,
//   Collapse,
//   Divider,
//   useTheme,
//   useMediaQuery,
//   Typography,
//   ListItemIcon,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import SearchIcon from "@mui/icons-material/Search";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import * as Icons from "@mui/icons-material";

// const MotionDiv = motion(Box);

// const Appbar = ({ headerData }) => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdownAnchor, setDropdownAnchor] = useState({ name: null, anchor: null });
//   const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
//   const [mobileOpenMap, setMobileOpenMap] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");

//   const searchRef = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  
//   React.useEffect(() => {
//     const map = {};
//     headerData?.menuItems?.forEach((item) => {
//       if (item.dropdown) map[item.label] = false;
//     });
//     setMobileOpenMap(map);
//   }, [headerData]);

//   if (!headerData) return null;

//   // Handlers
//   const toggleDrawer = () => setMobileOpen((s) => !s);

//   const handleOpenDropdown = (event, name) =>
//     setDropdownAnchor((prev) =>
//       prev.name === name ? { name: null, anchor: null } : { name, anchor: event.currentTarget }
//     );

//   const handleCloseDropdown = () => setDropdownAnchor({ name: null, anchor: null });

//   const handleOpenAvatar = (e) => setAvatarAnchorEl(e.currentTarget);
//   const handleCloseAvatar = () => setAvatarAnchorEl(null);

//   const handleUserAction = (action) => {
//     handleCloseAvatar();
//     console.log("User action:", action);
//   };

//   const toggleMobileDropdown = (label) =>
//     setMobileOpenMap((prev) => ({ ...prev, [label]: !prev[label] }));

//   const underlineVariant = {
//     rest: { scaleX: 0, transformOrigin: "left" },
//     hover: { scaleX: 1 },
//   };

//   const textVariant = {
//     rest: { color: "#222" },
//     hover: { color: "#d32f2f" },
//   };

//   return (
//     <>
      
//       <AppBar
//         position="sticky"
//         sx={{
//           backgroundColor: "#f5f5f5",
//           color: "#222",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
//         }}
//         elevation={0}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
//           {/* Logo */}
//           <Box display="flex" alignItems="center" gap={1}>
//             <MotionDiv
//               component="img"
//               src={headerData.logo}
//               alt="logo"
//               sx={{ width: 44, height: 44, borderRadius: "8px" }}
//               whileHover={{ rotate: 6, scale: 1.03 }}
//             />
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               {headerData.companyName}
//             </Typography>
//           </Box>

//           {!isMobile && (
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 background: "#fff",
//                 borderRadius: "20px",
//                 px: 2,
//                 py: 0.5,
//                 boxShadow: "inset 0 0 6px rgba(0,0,0,0.04)",
//                 minWidth: 260,
//                 maxWidth: 420,
//               }}
//             >
//               <SearchIcon sx={{ color: "gray" }} />
//               <InputBase
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 sx={{ ml: 1, width: "100%" }}
//               />
//             </Box>
//           )}

          
//           {!isMobile ? (
//             <Box display="flex" alignItems="center" gap={3}>
//               {headerData.menuItems?.map((item) => {
//                 const hasDropdown = Boolean(item.dropdown);

//                 return (
//                   <Box key={item.label} sx={{ position: "relative" }}>
//                     <MotionDiv
//                       role="button"
//                       initial="rest"
//                       whileHover="hover"
//                       animate="rest"
//                       onClick={hasDropdown ? (e) => handleOpenDropdown(e, item.label) : undefined}
//                       sx={{ display: "inline-flex", alignItems: "center", px: 0.5 }}
//                     >
//                       <motion.span variants={textVariant}>
//                         <Button
//                           href={!hasDropdown ? item.path : undefined}
//                           endIcon={hasDropdown ? <ArrowDropDownIcon /> : null}
//                         >
//                           {item.label}
//                         </Button>
//                       </motion.span>

//                       <motion.div
//                         variants={underlineVariant}
//                         style={{
//                           position: "absolute",
//                           bottom: 4,
//                           left: 0,
//                           height: 3,
//                           width: "100%",
//                           background: "#d32f2f",
//                         }}
//                       />
//                     </MotionDiv>

//                     {hasDropdown && (
//                       <Menu
//                         anchorEl={dropdownAnchor.anchor}
//                         open={dropdownAnchor.name === item.label}
//                         onClose={handleCloseDropdown}
//                       >
//                         {item.dropdown.map((sub) => (
//                           <MenuItem key={sub.name} component="a" href={sub.path}>
//                             {sub.name}
//                           </MenuItem>
//                         ))}
//                       </Menu>
//                     )}
//                   </Box>
//                 );
//               })}

             
//               <IconButton onClick={handleOpenAvatar}>
//                 <Avatar src={headerData.userMenu?.avatar} sx={{ width: 42, height: 42 }} />
//               </IconButton>

//               <Menu
//                 anchorEl={avatarAnchorEl}
//                 open={Boolean(avatarAnchorEl)}
//                 onClose={handleCloseAvatar}
//               >
//                 {headerData.userMenu?.options?.map((opt) => {
//                   const IconComp = Icons[opt.icon];
//                   return (
//                     <MenuItem key={opt.label} onClick={() => handleUserAction(opt.action)}>
//                       {IconComp && (
//                         <ListItemIcon>
//                           <IconComp fontSize="small" />
//                         </ListItemIcon>
//                       )}
//                       {opt.label}
//                     </MenuItem>
//                   );
//                 })}
//               </Menu>
//             </Box>
//           ) : (
//             <IconButton onClick={toggleDrawer}>
//               <MenuIcon sx={{ color: "#d32f2f" }} />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

      
//       <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer} PaperProps={{ sx: { width: 300 } }}>
//         <List sx={{ mt: 1 }}>
//           {headerData.menuItems?.map((item) => {
//             const hasDropdown = Boolean(item.dropdown);

//             return (
//               <Box key={item.label}>
//                 <ListItemButton
//                   onClick={() => (hasDropdown ? toggleMobileDropdown(item.label) : toggleDrawer())}
//                 >
//                   <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
//                   {hasDropdown && <ArrowDropDownIcon />}
//                 </ListItemButton>

//                 {hasDropdown && (
//                   <Collapse in={mobileOpenMap[item.label]}>
//                     <Box sx={{ pl: 4 }}>
//                       {item.dropdown.map((sub) => (
//                         <ListItemButton key={sub.name} component="a" href={sub.path}>
//                           <ListItemText primary={sub.name} />
//                         </ListItemButton>
//                       ))}
//                     </Box>
//                   </Collapse>
//                 )}
//               </Box>
//             );
//           })}
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Appbar;
// `}
//         />
//      </section>

// {/* ------------------------ Side Bar ------------------------ */}  
//  <section id="sidebar" className="mb-16">
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          SideBar
//         </Typography>

//         <Typography className="text-gray-600 dark:text-gray-100 mb-4">
//          SideBar component is used to display the navigation menu and user profile information.
//         </Typography>

//       </section>


//       {/* ------------------------ Preview SECTION ------------------------ */}

//   <section id="preview" className="mb-16">
//     <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          Preview
//         </Typography>

//             <Box className="mb-4 max-w-sm mx-auto">
//           <Sidebar/>
//         </Box>
//   </section>

// {/* ------------------------ Uses SECTION ------------------------ */}

//   <section id="uses" className="mb-16">
//  <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          Uses Example
//         </Typography> 

//  <CodeBlock 
//           filename="App.tsx"
//           language="tsx"
//           code={`
//                 import Sidebar from "@/components/sidebar";               
//             export default function App() {
//               return (
//                  <Sidebar menuItems={menuData} />
//                 `}
//         />
//         </section>

//         {/* ------------------------ Props Section ------------------------ */}

//       <section id="props" className="mb-16">
//             <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//               Props 
//             </Typography> 

// <Box className="overflow-x-auto mb-8">
//   <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
//     <thead className="bg-gray-100 dark:bg-gray-800">
//       <tr>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
//       </tr>
//     </thead>

//     <tbody>
//       {/* ────── Sidebar Props ────── */}
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">MenuItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Array of menu items rendered in the sidebar (supports nested children).
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onNavigate</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(path: string) ⇒ void</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Callback fired when a menu item without children is clicked.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">logo</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">React.ReactNode</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Custom JSX displayed at the top of the sidebar.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">footer</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">React.ReactNode</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Footer content displayed at the bottom of the sidebar.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">drawerWidth</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">260</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Width of the sidebar in pixels.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">background</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"linear-gradient(180deg, #0a192f, #020c1b)"</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Background color / gradient of the sidebar.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">color</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#fff"</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Default text and icon color inside the sidebar.
//         </td>
//       </tr>

//       {/* ────── Nested MenuItem props ────── */}
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.title</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Display text of the menu item.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.path</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Navigation route (only works if item has no children).
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.icon</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string (Material Icon name)</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Name of Material Icon imported dynamically and rendered inside the item.
//         </td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.children</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">MenuItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
//           Nested submenu items displayed inside Collapsible content.
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </Box>



//             </section>

    
//       {/* ------------------------ Complete Code SECTION ------------------------ */}
//       <section id="completecode" className="mb-16" > 
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//           Complete Componnet 
//           </Typography>

// <CodeBlock 
//           filename="Sidebar.tsx"
//           language="tsx"
//           code={`
//                 "use client";
//                 import React, { useState } from "react";
//                 import {
//                   Drawer,
//                   List,
//                   ListItemButton,
//                   ListItemIcon,
//                   ListItemText,
//                   Collapse,
//                   Box,
//                   IconButton,
//                   useMediaQuery,
//                 } from "@mui/material";
                
//                 import * as Icons from "@mui/icons-material";
//                 import MenuIcon from "@mui/icons-material/Menu";
//                 import CloseIcon from "@mui/icons-material/Close";
//                 import { motion } from "framer-motion";
                
//                 type MenuItem = {
//                   title: string;
//                   path?: string;
//                   icon: string;
//                   children?: MenuItem[];
//                 };
                
//                 type SidebarProps = {
//                   menuItems: MenuItem[];
//                   onNavigate: (path: string) => void;
//                   logo?: React.ReactNode;
//                   footer?: React.ReactNode;
//                   drawerWidth?: number;
//                   background?: string;
//                   color?: string;
//                 };
                
//                 export const Sidebar: React.FC<SidebarProps> = ({
//                   menuItems,
//                   onNavigate,
//                   logo,
//                   footer,
//                   drawerWidth = 260,
//                   background = "linear-gradient(180deg, #0a192f, #020c1b)",
//                   color = "#fff",
//                 }) => {
//                   const [mobileOpen, setMobileOpen] = useState(false);
//                   const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
//                   const isMobile = useMediaQuery("(max-width:768px)");
                
//                   const toggleDrawer = () => setMobileOpen(!mobileOpen);
                
//                   const toggleSubmenu = (index: number) => {
//                     setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
//                   };
                
//                   const renderMenu = (items: MenuItem[], level = 0) =>
//                     items.map((item, index) => {
//                       const IconComponent = Icons[item.icon] || Icons.HelpOutline;
//                       const hasChildren = item.children && item.children.length > 0;
                
//                       return (
//                         <div key={index}>
//                           <motion.div
//                             initial={{ opacity: 0, x: -15 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.05 }}
//                           >
//                             <ListItemButton
//                               onClick={() =>
//                                 hasChildren
//                                   ? toggleSubmenu(index)
//                                   : item.path && onNavigate(item.path)
//                               }
//                               sx={{
//                                 pl: level * 3,
//                                 "&:hover": {
//                                   backgroundColor: "rgba(255,255,255,0.1)",
//                                 },
//                                 transition: "0.2s ease",
//                               }}
//                             >
//                               <ListItemIcon sx={{ color }}>
//                                 <IconComponent />
//                               </ListItemIcon>
                
//                               <ListItemText primary={item.title} />
                
//                               {hasChildren &&
//                                 (openMenus[index] ? (
//                                   <Icons.ExpandLess sx={{ color }} />
//                                 ) : (
//                                   <Icons.ExpandMore sx={{ color }} />
//                                 ))}
//                             </ListItemButton>
//                           </motion.div>
                
//                           {/* Submenu */}
//                           {hasChildren && (
//                             <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
//                               {renderMenu(item.children!, level + 1)}
//                             </Collapse>
//                           )}
//                         </div>
//                       );
//                     });
                
//                   const drawerContent = (
//                     <Box
//                       sx={{
//                         height: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         background,
//                         color,
//                       }}
//                       className="shadow-xl"
//                     >
//                       {logo && <div className="p-4 text-center">{logo}</div>}
                
//                       <List sx={{ flexGrow: 1 }}>{renderMenu(menuItems)}</List>
                
//                       {footer && <div className="p-4 mt-auto">{footer}</div>}
//                     </Box>
//                   );
                
//                   return (
//                     <>
//                       {isMobile && (
//                         <div className="fixed top-4 left-4 z-[1300] p-2 bg-[#0a192f]/80 rounded-full">
//                           <IconButton onClick={toggleDrawer} sx={{ color }}>
//                             {mobileOpen ? <CloseIcon /> : <MenuIcon />}
//                           </IconButton>
//                         </div>
//                       )}
                
//                       <Drawer
//                         variant={isMobile ? "temporary" : "permanent"}
//                         open={isMobile ? mobileOpen : true}
//                         onClose={toggleDrawer}
//                         ModalProps={{ keepMounted: true }}
//                         sx={{
//                           width: drawerWidth,
//                           flexShrink: 0,
//                           "& .MuiDrawer-paper": {
//                             width: drawerWidth,
//                             boxSizing: "border-box",
//                             background,
//                             color,
//                           },
//                         }}
//                       >
//                         {drawerContent}
//                       </Drawer>
//                     </>
//                   );
//                 };
                
//                 `}
//         />
          
// </section>
 

// {/* Footer */}

// <section id="footer" className="mb-16">
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//          Footer
//         </Typography>

//         <Typography className="text-gray-600 dark:text-gray-100 mb-4">
//          Footer component is used to display footer information.
//         </Typography>

//       </section>

// {/* ------------------------ Preview SECTION ------------------------ */}
//       <section id="preview" className="mb-16" >  
//         <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//           Preview
//           </Typography>

//             <Box className="mb-4 max-w-sm mx-auto">
//           <Footer/>
//           </Box>

//   </section>

// {/* ------------------------ Uses SECTION ------------------------ */}

//   <section id="uses" className="mb-16"> 
//             <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100"> 
//               Uses Example
//             </Typography>

//         <CodeBlock 
//           filename="App.tsx"
//           language="tsx"
//           code={`
//                 import Footer from "@/components/footer";               
//             export default function App() {
//               return (
//                  <Footer data={footerData} />
//                 `}  
//         />


//   </section>

//             {/* ------------------------ Props Section ------------------------ */}

//       <section id="props" className="mb-16">  
//             <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100"> 
//               Props 
//             </Typography> 

// <Box className="overflow-x-auto mb-8">
//   <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
//     <thead className="bg-gray-100 dark:bg-gray-800">
//       <tr>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
//         <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">MenuItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Array of menu items rendered in sidebar (supports nested children).</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onNavigate</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(path: string) ⇒ void</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Callback fired when a menu item without children is clicked.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">logo</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">React.ReactNode</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Custom JSX displayed on the top of sidebar.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">footer</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">React.ReactNode</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Footer section displayed at the bottom of sidebar.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">drawerWidth</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">260</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Width of the sidebar in pixels.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">background</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"linear-gradient(180deg, #0a192f, #020c1b)"</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Background color / gradient of the sidebar.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">color</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"#fff"</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Default text and icon color inside sidebar.</td>
//       </tr>

//       <!-- Nested MenuItem props (same structure like your table frontend) -->
//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.title</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Display text of menu item.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.path</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Route URL for navigation (only if item has no children).</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.icon</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string (Material Icon name)</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Name of Material Icon component rendered with menu item.</td>
//       </tr>

//       <tr>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">menuItems.children</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">MenuItem[]</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
//         <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Nested submenu items displayed inside collapse.</td>
//       </tr>
//     </tbody>
//   </table>
// </Box>


//                 </section>


// {/* Complete Code */}

//             <section id="completecode" className="mb-16" > 
//                 <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
//                   Complete Componnet  Code
//                   </Typography>

// <CodeBlock 
//           filename="App.tsx"
//           language="tsx"
//           code={`
//                 "use client";
//                 import React from "react";
//                 import { motion } from "framer-motion";
//                 import { Box, Typography, IconButton, Divider, Link as MuiLink } from "@mui/material";
                           
//                 import XIcon from "@mui/icons-material/X";
//                 import InstagramIcon from "@mui/icons-material/Instagram";
//                 import LinkedInIcon from "@mui/icons-material/LinkedIn";
//                 import GitHubIcon from "@mui/icons-material/GitHub";
                
//                 const iconMap = {
//                   X: XIcon,
//                   Instagram: InstagramIcon,
//                   LinkedIn: LinkedInIcon,
//                   GitHub: GitHubIcon,
//                 };
                
//                 const iconColors = {
//                   X: "#1DA1F2",
//                   Instagram: "#E1306C",
//                   LinkedIn: "#0077B5",
//                   GitHub: "#333333",
//                 };
                
//                 export function Footer({ data }) {
//                   if (!data) return null;
                
//                   return (
//                     <Box
//                       component="footer"
//                       className="
//                         w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-10 md:pt-16 pb-6 md:pb-10
//                         bg-gradient-to-br from-blue-50 to-sky-100 
//                         dark:from-[#0a2540] dark:to-[#111827]
//                         text-gray-800 dark:text-gray-200 transition-all duration-500
//                       "
//                     >
//                       {/* Top Grid */}
//                       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        
//                         {/* Brand Section */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 30 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.7 }}
//                           className="col-span-2 sm:col-span-1 lg:col-span-2"
//                         >
//                           <Typography
//                             variant="h6"
//                             fontWeight="bold"
//                             className="text-blue-900 dark:text-white mb-2"
//                           >
//                             {data.brand?.name}
//                           </Typography>
                
//                           <Typography
//                             variant="body2"
//                             className="text-slate-600 dark:text-gray-400 mb-3 leading-relaxed"
//                           >
//                             {data.brand?.description}
//                           </Typography>
                
//                           {/* Social Icons */}
//                           <div className="flex flex-wrap gap-3 pt-1">
//                             {data.socialLinks?.map((social, i) => {
//                               const Icon = iconMap[social.icon];
//                               const color = iconColors[social.icon];
                
//                               if (!Icon) return null;
                
//                               return (
//                                 <motion.div
//                                   key={i}
//                                   whileHover={{ scale: 1.2, rotate: 8 }}
//                                   transition={{ type: "spring", stiffness: 250 }}
//                                 >
//                                   <IconButton
//                                     href={social.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     sx={{ "&:hover": { color } }}
//                                     className="text-gray-700 dark:text-gray-200"
//                                   >
//                                     <Icon fontSize="medium" />
//                                   </IconButton>
//                                 </motion.div>
//                               );
//                             })}
//                           </div>
//                         </motion.div>
                
//                         {/* Dynamic Sections */}
//                         {data.sections?.map((section, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.1 }}
//                             className="space-y-2"
//                           >
//                             <Typography
//                               variant="subtitle1"
//                               fontWeight="bold"
//                               className="text-gray-800 dark:text-white mb-2"
//                             >
//                               {section.title}
//                             </Typography>
                
//                             <div className="flex flex-col space-y-2">
//                               {section.links?.map((link, j) => (
//                                 <MuiLink
//                                   key={j}
//                                   href={link.url}
//                                   underline="none"
//                                   className="
//                                     text-md font-semibold text-slate-600 dark:text-gray-400 
//                                     hover:text-blue-600 dark:hover:text-blue-400
//                                     transition-all duration-300
//                                   "
//                                 >
//                                   {link.label}
//                                 </MuiLink>
//                               ))}
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
                
//                       {/* Divider */}
//                       <Divider className="my-10 h-[2px] rounded-md w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                
//                       {/* Bottom Section */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="flex flex-col md:flex-row items-center justify-between gap-4"
//                       >
//                         <Typography variant="body2" className="text-md font-bold">
//                           © {data.brand?.year} {data.brand?.name}. All rights reserved.
//                         </Typography>
                
//                         <div className="flex flex-wrap justify-center md:justify-end gap-4">
//                           {data.policies?.map((policy, i) => (
//                             <MuiLink
//                               key={i}
//                               href={policy.url}
//                               underline="none"
//                               className="
//                                 relative text-md font-semibold text-gray-900 dark:text-gray-400
//                                 hover:text-black dark:hover:text-white
//                                 after:absolute after:bottom-[-3px] after:left-0 
//                                 after:w-0 after:h-[2px]
//                                 after:bg-red-500 dark:after:bg-red-400
//                                 hover:after:w-full after:transition-all after:duration-300
//                               "
//                             >
//                               {policy.label}
//                             </MuiLink>
//                           ))}
//                         </div>
//                       </motion.div>
//                     </Box>
//                   );
//                 }
                
//                 `}
//         />



//                   </section>






      
//     </ DocsLayout>

//           )
//         }