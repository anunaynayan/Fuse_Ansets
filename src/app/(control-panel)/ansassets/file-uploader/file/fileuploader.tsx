
"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Paper,
  Stack,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";

interface FileUploaderProps {
  onFileUpload: (file: File | null) => void;
  label?: string;
  acceptType?: "image" | "file" | "both";
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileUpload,
  label = "Upload",
  acceptType = "both",
}) => {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) handleFileSelect(droppedFile);
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    onFileUpload(selectedFile);

    if (selectedFile.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFileSelect(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    onFileUpload(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const acceptedTypes =
    acceptType === "image"
      ? "image/*"
      : acceptType === "file"
      ? "application/*,text/*"
      : "*/*";

  if (file) {
    return (
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: theme.palette.divider,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {preview ? (
            <Avatar
              src={preview}
              variant="rounded"
              sx={{ width: 64, height: 64, borderRadius: 2 }}
            />
          ) : (
            <InsertDriveFileIcon
              sx={{ fontSize: 48, color: theme.palette.text.secondary }}
            />
          )}
          <Box>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {file.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {(file.size / 1024 / 1024).toFixed(2)} MB •{" "}
              {file.type.split("/")[1]?.toUpperCase() || "FILE"}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<UploadFileIcon />}
            onClick={() => fileInputRef.current?.click()}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            Replace
          </Button>
          <Tooltip title="Remove">
            <IconButton onClick={handleRemove} color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        <input
          type="file"
          ref={fileInputRef}
          accept={acceptedTypes}
          onChange={handleInputChange}
          hidden
        />
      </Paper>
    );
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        borderStyle: "dashed",
        borderColor: dragActive
          ? theme.palette.primary.main
          : theme.palette.divider,
        bgcolor: dragActive
          ? theme.palette.action.hover
          : theme.palette.background.paper,
        p: 5,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 2,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          borderColor: theme.palette.primary.main,
          bgcolor: theme.palette.action.hover,
        },
      }}
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CloudUploadIcon
        sx={{ fontSize: 48, color: theme.palette.text.disabled, mb: 1 }}
      />
      <Typography variant="h6" color="text.primary">
        {dragActive ? "Drop your file here" : `${label} an image or file`}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Drag & drop or click to browse
      </Typography>
      <Typography variant="caption" color="text.disabled" sx={{ mt: 1 }}>
        Supported: PNG, JPG, GIF, PDF, DOCX, TXT, etc.
      </Typography>

      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        onChange={handleInputChange}
        hidden
      />
    </Paper>
  );
};

export default FileUploader;
