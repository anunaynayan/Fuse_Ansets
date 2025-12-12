/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { Box } from "@mui/material";

// Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";

// SuccessBox Component
import SuccessBox from "./successpage";

export default function AppPage() {
  return (
    <Box sx={{ p: 5 }}>
      <h1 style={{ marginBottom: 30 }}>Success Pages </h1>

      <Box
        sx={{
          display: "grid",
          gap: 7,
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        }}
      >
        {/* 1️⃣ Basic success */}
        <SuccessBox
          title="Profile Updated"
          message="Your profile information has been successfully saved."
          icon={<CheckCircleOutlineIcon />}
          variant="success"
          confirmLabel="OK"
          onConfirm={() => alert("Profile OK")}
        />

        {/* 2️⃣ E-Mail Verified */}
        <SuccessBox
          title="Email Verified"
          message="Your email has been successfully verified."
          icon={<VerifiedIcon />}
          iconColor="blue"
          iconSize={80}
          variant="info"
          confirmLabel="Continue"
        />

        {/* 3️⃣ Payment Completed (Styled Icon) */}
        <SuccessBox
          title="Payment Completed"
          message="Your payment was processed successfully."
          icon={<TaskAltIcon />}
          variant="success"
          confirmLabel="Done"
          cancelLabel="View Invoice"
          onCancel={() => alert("Opening Invoice...")}
        />

        {/* 4️⃣ Account Created with Auto Close */}
        <SuccessBox
          title="Account Created"
          message="Welcome! Your account is ready to use."
          icon={<ThumbUpAltIcon />}
          variant="primary"
          autoClose={3000}
          confirmLabel="Start"
          onConfirm={() => console.log("Auto closed")}
        />

        {/* 5️⃣ Order Placed */}
        <SuccessBox
          title="Order Placed Successfully"
          message="Your order has been received. We'll deliver soon."
          icon={<DoneAllIcon />}
          iconColor="green"
          variant="success"
          confirmLabel="Track Order"
        />
      </Box>
    </Box>
  );
}
