import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ErrorPages = ({
  code = "404",
  title = "Sorry, Page Not Found",
  description = "The page you requested could not be found",
  buttonText = "GO BACK HOME",
  onButtonClick,
  background = "#e0e0e0",
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: background,
        textAlign: "center",
        px: 2,
      }}
    >
      {/* ERROR CODE */}
      <Typography
        sx={{
          fontSize: { xs: "120px", sm: "160px", md: "220px" },
          fontWeight: 700,
          color: "rgba(0,0,0,0.15)",
          lineHeight: 1,
        }}
      >
        {code}
      </Typography>

      {/* CONTENT BOX */}
      <Box sx={{ mt: -2 }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "28px" },
            fontWeight: 500,
            color: "#555",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: "14px",
            color: "#777",
          }}
        >
          {description}
        </Typography>

        {/* BUTTON */}
        <Button
          onClick={onButtonClick}
          sx={{
            mt: 4,
            px: 4,
            py: 1.2,
            borderRadius: "24px",
            bgcolor: "#4a4a4a",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "1px",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPages;
