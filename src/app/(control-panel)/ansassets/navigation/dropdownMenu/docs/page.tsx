"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import BreadcrumbDemo from "../breadcrumb/page";

export default function FloatingToolbarDocs() {
  return (
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        BreadcrumbNav is a professional, customizable, and SEO‑enhanced
        breadcrumb navigation component built using Material UI (MUI) for
        React/Next.js applications. It provides users with a clear understanding
        of their current location within the application hierarchy by displaying
        a structured navigation path.
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

        <Box className="mb-4 max-w-sm mx-auto">
          <BreadcrumbDemo />
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
           
            import BreadcrumbNav from "@/components/BreadcrumbNav";
            
            export default function App() {
              return (
               <BreadcrumbNav
                 items={[
                { label: "Home", href: "/" },
                { label: "Dashboard", href: "/dashboard" },
                { label: "Projects", href: "/dashboard/projects" },
                { label: "Current Project" },
                                         ]}
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
              {/* items */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  items
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  CrumbItem[]
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  required
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  Array of breadcrumb items containing label and optional href.
                </td>
              </tr>

              {/* separator */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  separator
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  ReactNode
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {"<NavigateNextIcon />"}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  Custom separator element between breadcrumb items.
                </td>
              </tr>

              {/* truncate */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  truncate
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  boolean
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  true
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  Truncates long breadcrumb labels on small screens.
                </td>
              </tr>

              {/* schema */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  schema
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  boolean
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  true
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  Enables Schema.org BreadcrumbList for SEO.
                </td>
              </tr>

              {/* activeColor */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  activeColor
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  string
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  #e63946
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  Highlight color applied to the active breadcrumb item.
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
           
           import React from "react";
           import {
             Breadcrumbs,
             Link,
             Typography,
             Box,
             useMediaQuery,
             useTheme,
           } from "@mui/material";
           import NavigateNextIcon from "@mui/icons-material/NavigateNext";
           import { usePathname } from "next/navigation";
           
           export interface CrumbItem {
             label: string;
             href?: string;
           }
           
           interface BreadcrumbNavProps {
             items: CrumbItem[];
             separator?: React.ReactNode;
             truncate?: boolean;
             schema?: boolean;
              activeColor?: string; 
           }
           
           export default function BreadcrumbNav({
             items,
             separator = <NavigateNextIcon fontSize="small" />,
             truncate = true,
             schema = true,
             activeColor = "#e63946",
           }: BreadcrumbNavProps) {
             const theme = useTheme();
             const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
             const currentPath = usePathname();
           
             // SEO Schema (JSON-LD)
             const schemaData = schema
               ? {
                   "@context": "https://schema.org",
                   "@type": "BreadcrumbList",
                   itemListElement: items.map((item, index) => ({
                     "@type": "ListItem",
                     position: index + 1,
                     name: item.label,
                     item: item.href || undefined,
                   })),
                 }
               : null;
           
             return (
               <>
                 {schema && (
                   <script type="application/ld+json">
                     {JSON.stringify(schemaData)}
                   </script>
                 )}
           
                 <Box
                   sx={{
                     width: "100%",
                     overflowX: "auto",
                     whiteSpace: "nowrap",
                     py: 1,
                   }}
                 >
                   <Breadcrumbs
                     aria-label="breadcrumb navigation"
                     separator={separator}
                   >
                     {items.map((item, index) => {
                       const isLast = index === items.length - 1;
                       const isActive=item.href=== currentPath;
           
                       const label = truncate
                         ? item.label.length > 18 && isSmall
                           ? item.label.slice(0, 15) + "..."
                           : item.label
                         : item.label;
           
                       if (!isLast && item.href) {
                         return (
                           <Link
                             key={index}
                             underline="hover"
                             color="inherit"
                             href={item.href}
                             sx={{
                               fontSize: isSmall ? "0.85rem" : "1rem",
                               maxWidth: 150,
                               overflow: "hidden",
                               color: isActive ? activeColor : "inherit",
                               textOverflow: "ellipsis",
                               fontWeight: isActive ?"700":"400",
                             }}
                           >
                             {label}
                           </Link>
                         );
                       }
           
                       return (
                         <Typography
                           key={index}
                           color="text.primary"
                           sx={{
                              color: activeColor, 
                             fontSize: isSmall ? "0.9rem" : "1rem",
                             maxWidth: 180,
                             overflow: "hidden",
                             textOverflow: "ellipsis",               
                             fontWeight: isActive ? "700" : "500",
                           }}
                         >
                           {label}
                         </Typography>
                       );
                     })}
                   </Breadcrumbs>
                 </Box>
               </>
             );
           }
           
            
          `}
        />
      </section>
    </DocsLayout>
  );
}
