/* eslint-disable prettier/prettier */
"use client";
import  { useState } from "react";
import { Box, Typography } from "@mui/material";
import FileUploader from "./fileuploader";


function FileUploadPage() {
  const [, setFile] = useState<File | null>(null);






  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Typography variant="h5" mb={2}>
        File Uploader
      </Typography>

      <FileUploader
        onFileUpload={(uploadedFile) => setFile(uploadedFile)}     
        acceptType="both"
        label="Upload"
      />
    </Box>
  );
}





export default FileUploadPage;
