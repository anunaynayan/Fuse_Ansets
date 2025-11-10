"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AuthLayout from "./AuthCard";
import InputField from "../InputField";
import { resetSchema, ResetForm } from "../../lib/validation";

export default function ResetPassword() {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetForm>({ resolver: zodResolver(resetSchema) });

  const onSubmit = async (data: ResetForm) => {
    console.log("[RESET PASSWORD]", {
      token: data.token,
      password: data.password,
    });
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your reset token and new password."
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full"
      >
        <Stack spacing={3}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <InputField
                          label="Reset Token/OTP"
                          // icon={User}
                          type="text"
                          {...register("token", { required: "Please enter Token/OTP" })}
                          error={errors.token?.message}
                        />
            {/* <TextField
              label="Reset Token"
              {...register("token")}
              error={!!errors.token}
              helperText={errors.token?.message}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <TextField
              label="New Password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              type="password"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TextField
              label="Confirm New Password"
              {...register("passwordConfirm")}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              fullWidth
              type="password"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
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
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-neutral-600 text-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Back to{" "}
            <a href="/login" className="text-primary underline font-medium">
              Sign in
            </a>
          </motion.p>
        </Stack>
      </motion.form>
    </AuthLayout>
  );
}
