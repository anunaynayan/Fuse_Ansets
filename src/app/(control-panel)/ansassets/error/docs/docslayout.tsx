"use client";

import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto bg-white dark:bg-neutral-900 shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
             Error Page
          </h1>

          {/* Use Button as Link directly (focus + semantics) */}
          <Button
            component={Link}
            href="../../../ansassets/error/error"
            startIcon={<ArrowBack />}
            variant="outlined"
          >
            Back to Error Page
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}
