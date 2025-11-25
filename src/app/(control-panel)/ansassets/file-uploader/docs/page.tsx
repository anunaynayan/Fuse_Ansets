/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import DocsLayout from "./docslayout";
import FileUploader from "../file/fileuploader";
import CodeBlock from "./codeblock";

import FILE_UPLOADER_FULL_CODE from "../file/fileuploader.tsx?raw";

export default function FileUploaderDocs() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const codeExample = `
import FileUploader from "@/components/fileuploader/fileuploader";

export default function App() {
  const handleFileUpload = (file) => {
    console.log("Uploaded:", file);
  };

  return (
    <div style={{ padding: 20 }}>
      <FileUploader 
        onFileUpload={handleFileUpload}
        label="Upload File"
        acceptType="both"
      />
    </div>
  );
}
`;
  return (
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        <strong className="text-xl"> File Uploader Component</strong>
        <br />
        This component allows users to upload files by clicking or dragging & dropping.
        It supports images, documents, and preview thumbnails for images.  
        It is fully reusable across the project.
      </Typography>

      <Box className="mb-10">
        <Typography className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
            Preview
        </Typography>
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl">
          <FileUploader
            onFileUpload={setUploadedFile}
            label="Upload"
            acceptType="both"
          />
        </div>

        {uploadedFile && (
          <Typography className="mt-4 text-sm text-green-600 dark:text-green-400">
            Uploaded: {uploadedFile.name}
          </Typography>
        )}
      </Box>

      <Box className="mb-10">
        <Typography className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
          Usage Example
        </Typography>
        <CodeBlock code={codeExample} />
      </Box>

      <Box className="mb-10">
        <Typography className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
          Complete Component Code
        </Typography>
        <CodeBlock code={FILE_UPLOADER_FULL_CODE} />
      </Box>
    </DocsLayout>
  );
}
