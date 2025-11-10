"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Stack,
  Skeleton,
  Divider,
  useTheme,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { loginSchema, LoginForm } from "../../lib/validation";
import AuthLayout from "./AuthCard";
import InputField from "../InputField";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login({
  initialLoading = false,
}: {
  initialLoading?: boolean;
}) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    console.log("[LOGIN]", { ...data, rememberMe });
  };

  if (initialLoading) return <Skeleton variant="rectangular" height={220} />;

  return (
    <AuthLayout title="Welcome Back" subtitle="Login to your account">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby="login-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <Stack spacing={3}>
          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <InputField
              label="Email"
              icon={Mail}
              type="email"
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
          </motion.div>

          {/* Password Field with show/hide toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <InputField
                label="Password"
                icon={Lock}
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                error={errors.password?.message}
              />
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                size="small"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-10%)",
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(0,0,0,0.5)",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </IconButton>
            </div>
          </motion.div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#90caf9"
                        : theme.palette.primary.main,
                  }}
                />
              }
              label={
                <span
                  className={`text-sm ${
                    theme.palette.mode === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Remember me
                </span>
              }
            />
            <a
              href="/forgot"
              className="text-sm text-primary underline underline-offset-2 hover:opacity-80"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              size="large"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #2196f3, #21cbf3)"
                    : "linear-gradient(90deg, #1976d2, #42a5f5)",
                "&:hover": {
                  opacity: 0.95,
                },
              }}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </motion.div>

          {/* Divider */}
          <Divider sx={{ my: 3, color: "text.secondary" }}>
            or continue with
          </Divider>

          {/* Social Auth Buttons */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              {
                label: "Google",
                icon: "/assets/icons/google-color-svgrepo-com.svg",
              },
              {
                label: "GitHub",
                icon: "/assets/icons/github-color-svgrepo-com.svg",
              },
              {
                label: "Apple",
                icon: "/assets/icons/apple-color-svgrepo-com.svg",
              },
              {
                label: "Microsoft",
                icon: "/assets/icons/microsoft-svgrepo-com.svg",
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                aria-label={`Continue with ${label}`}
                onClick={() => console.log(`${label} login clicked`)}
                className={`flex items-center justify-center gap-2 py-2 border rounded-xl transition-all shadow-sm cursor-pointer hover:scale-[1.05] ${
                  theme.palette.mode === "dark"
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <Image src={icon} alt={label} width={20} height={20} />
                <span
                  className={`text-sm font-medium ${
                    theme.palette.mode === "dark"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Bottom Link */}
          <motion.p
            className={`text-sm text-center mt-4 ${
              theme.palette.mode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-primary underline underline-offset-2 hover:opacity-80"
            >
              Create one
            </a>
          </motion.p>
        </Stack>
      </motion.form>
    </AuthLayout>
  );
}
