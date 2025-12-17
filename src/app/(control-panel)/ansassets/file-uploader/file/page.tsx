// /* eslint-disable prettier/prettier */
// "use client";
// import  { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import FileUploader from "./fileuploader";


// function FileUploadPage() {
//   const [, setFile] = useState<File | null>(null);

//   return (
//     <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
//       <Typography variant="h5" mb={2}>
//         File Uploader
//       </Typography>

//       <FileUploader
//         onFileUpload={(uploadedFile) => setFile(uploadedFile)}     
//         acceptType="both"
//         label="Upload"
//       />
//     </Box>
//   );
// }





// export default FileUploadPage;







"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import FileUploader from "./fileuploader";

export default function FileUploadPage() {
  const [, setFile] = useState<File | null>(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #e4ecf7 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 520,
          width: "100%",
          p: 4,
          borderRadius: 3,
        }}
      >
        {/* Main Header */}
        <Stack spacing={1} alignItems="center" textAlign="center">
         
          <Typography variant="h4" fontWeight={700}>
            File Upload
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Easily upload your documents or images. Supported formats include
            PDF, images, and other common file types.
          </Typography>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Upload Section */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            mb={1}
          >
            Select a file to upload
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={2}
          >
            Choose a file from your system. Once uploaded, it will be ready for
            further processing.
          </Typography>

          <FileUploader
            onFileUpload={(uploadedFile) => setFile(uploadedFile)}
            acceptType="both"
            label="Upload File"
          />
        </Box>

        {/* Footer Info */}
        <Typography
          variant="caption"
          display="block"
          textAlign="center"
          color="text.secondary"
          mt={3}
        >
          Maximum file size and supported formats depend on system settings.
        </Typography>
      </Paper>
    </Box>
  );
}
