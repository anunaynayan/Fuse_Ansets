"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Stack,
  Skeleton,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { registerSchema, RegisterForm } from "../../lib/validation";
import AuthLayout from "./AuthCard";
import InputField from "../InputField";
import { Mail, Lock, User, Phone } from "lucide-react";

export default function Register({
  initialLoading = false,
}: {
  initialLoading?: boolean;
}) {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterForm) => {
    console.log("[REGISTER]", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
    });
  };

  if (initialLoading) return <Skeleton variant="rectangular" height={300} />;

  return (
    <AuthLayout title="Create Account" subtitle="Join us and get started!">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby="register-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 id="register-heading" className="sr-only">
          Create account
        </h1>

        <Stack spacing={2}>
          {/* First/Last Name */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <InputField
              label="First Name"
              icon={User}
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              error={errors.firstName?.message}
            />
            {/* <TextField
              label="First name"
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              fullWidth
              variant="outlined"
              inputProps={{
                "aria-label": "First name",
                autoComplete: "given-name",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
            <InputField
              label="Last Name"
              icon={User}
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              error={errors.lastName?.message}
            />
            {/* <TextField
              label="Last name"
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              fullWidth
              variant="outlined"
              inputProps={{
                "aria-label": "Last name",
                autoComplete: "family-name",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <InputField
              label="Email"
              icon={Mail}
              type="email"
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
            {/* <TextField
              label="Email Address"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              type="email"
              variant="outlined"
              inputProps={{
                "aria-label": "Email address",
                autoComplete: "email",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
          </motion.div>

          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <InputField
              label="Mobile Number"
              icon={Phone}
              type="email"
              {...register("mobile", { required: "Mobile Number is required" })}
              error={errors.mobile?.message}
            />
            {/* <TextField
              label="Mobile number"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={
                errors.mobile?.message ??
                "Include country code if outside your region"
              }
              fullWidth
              type="tel"
              variant="outlined"
              inputProps={{
                "aria-label": "Mobile number",
                inputMode: "tel",
                autoComplete: "tel",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <InputField
              label="Password"
              icon={Lock}
              type="password"
              {...register("password", { required: "Password is required" })}
              error={errors.password?.message}
            />
            {/* <TextField
              label="Password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              type="password"
              variant="outlined"
              inputProps={{
                "aria-label": "Password",
                autoComplete: "new-password",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
          </motion.div>

          {/* Confirm Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <InputField
              label="Confirm Password"
              icon={Lock}
              type="password"
              {...register("passwordConfirm")}
              // error={errors.email?.message}
              // error={!!errors.passwordConfirm}
              error={errors.passwordConfirm?.message}
            />
            {/* <TextField
              label="Confirm Password"
              {...register("passwordConfirm")}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              fullWidth
              type="password"
              variant="outlined"
              inputProps={{
                "aria-label": "Confirm password",
                autoComplete: "new-password",
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            /> */}
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
              {isSubmitting ? "Creating..." : "Create account"}
            </Button>
          </motion.div>

          {/* Divider */}
          <Divider sx={{ my: 3, color: "text.secondary" }}>
            or continue with
          </Divider>

          {/* Social Auth */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
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

          {/* Bottom link */}
          <motion.p
            className="text-sm text-center text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary underline underline-offset-2 hover:opacity-80"
            >
              Sign in
            </a>
          </motion.p>
        </Stack>
      </motion.form>
    </AuthLayout>
  );
}
