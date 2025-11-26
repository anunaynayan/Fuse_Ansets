"use client";

import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DocsLayout({
  children,
  title = "Documentation",
  backLink = "/components", 
  backText = "Back",
}: {
  children: React.ReactNode;
  title?: string;
  backLink?: string;
  backText?: string;
}) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto shadow-md rounded-xl p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {title}
          </h1>

          <Button
            component={Link}
            href={backLink}
            startIcon={<ArrowBack />}
            variant="outlined"
          >
            {backText}
          </Button>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
