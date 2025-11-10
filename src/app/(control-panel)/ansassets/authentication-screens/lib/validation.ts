import { z } from "zod";

/* ----------------------------- LOGIN SCHEMA ----------------------------- */
export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export type LoginForm = z.infer<typeof loginSchema>;

/* ---------------------------- REGISTER SCHEMA --------------------------- */
export const registerSchema = z
  .object({
    firstName: z
      .string({ required_error: "First name is required" })
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .regex(
        /^[A-Za-z\s'-]+$/,
        "First name must not contain numbers or special characters"
      ),

    lastName: z
      .string({ required_error: "Last name is required" })
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .regex(
        /^[A-Za-z\s'-]+$/,
        "Last name must not contain numbers or special characters"
      ),

    mobile: z
      .string({ required_error: "Mobile number is required" })
      .min(7, "Mobile number seems too short")
      .max(15, "Mobile number seems too long")
      .regex(/^[0-9+\-\s()]*$/, "Only digits, spaces and + - ( ) are allowed"),

    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email address"),

    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),

    passwordConfirm: z
      .string({ required_error: "Confirm password is required" })
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((d) => d.password === d.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  })
  .transform((d) => ({
    ...d,
    name: `${d.firstName} ${d.lastName}`.trim(),
  }));

export type RegisterForm = z.infer<typeof registerSchema>;

/* ----------------------------- FORGOT SCHEMA ---------------------------- */
export const forgotSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email address"),
});

export type ForgotForm = z.infer<typeof forgotSchema>;

/* ------------------------------ RESET SCHEMA ---------------------------- */
export const resetSchema = z
  .object({
    token: z.string({ required_error: "Token is required" }).min(1),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    passwordConfirm: z
      .string({ required_error: "Confirm password is required" })
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((d) => d.password === d.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type ResetForm = z.infer<typeof resetSchema>;
