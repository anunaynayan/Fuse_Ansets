
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
