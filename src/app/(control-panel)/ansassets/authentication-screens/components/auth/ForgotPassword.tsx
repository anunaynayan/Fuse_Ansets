"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { forgotSchema, ForgotForm } from "../../lib/validation";
import AuthLayout from "./AuthCard";
import InputField from "../InputField";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotForm>({ resolver: zodResolver(forgotSchema) });

  const onSubmit = async (data: ForgotForm) => {
    console.log("[FORGOT] Request reset for:", data.email);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to reset your password."
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby="forgot-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full"
      >
        <h1 id="forgot-heading" className="sr-only">
          Forgot password
        </h1>

        <Stack spacing={3}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <InputField
              label="Email"
              icon={Mail}
              type="email"
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              size="large"
              fullWidth
              sx={{
                borderRadius: "10px",
                py: 1.3,
                fontWeight: 600,
                textTransform: "none",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #2196f3, #21cbf3)"
                    : "linear-gradient(90deg, #1976d2, #42a5f5)",
                "&:hover": {
                  opacity: 0.95,
                },
              }}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-neutral-600 text-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Remembered your password?{" "}
            <a href="/login" className="text-primary underline font-medium">
              Sign in
            </a>
          </motion.p>
        </Stack>
      </motion.form>
    </AuthLayout>
  );
}
