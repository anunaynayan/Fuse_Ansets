import React from "react";
import { Box, Typography, Button } from "@mui/material";

const OopsErrorPage = ({
  code = "404",
  heading = "PAGE NOT FOUND",
  description = "The page you are looking for might have been removed, had its name changed or is temporarily unavailable.",
  buttonText = "GO TO HOMEPAGE",
  onButtonClick,
  backgroundColor = "#ffffff",
  galaxyImage = "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 720 }}>
        {/* OOPS TEXT */}
        <Typography
          sx={{
            fontSize: { xs: "64px", sm: "96px", md: "130px" },
            fontWeight: 900,
            letterSpacing: "2px",
            backgroundImage: `url(${galaxyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Oops!
        </Typography>

        {/* ERROR CODE */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#111",
          }}
        >
          {code} - {heading}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 1.5,
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.6,
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
            py: 1.4,
            borderRadius: "28px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#fff",
            background:
              "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
            boxShadow: "0px 8px 20px rgba(37,99,235,0.35)",
            "&:hover": {
              background:
                "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default OopsErrorPage;
