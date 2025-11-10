"use client";

import { Button, Typography } from "@mui/material";

type HeaderProps = {
  activeScreen: "login" | "register" | "forgot" | "reset";
  onNavigate: (screen: "login" | "register" | "forgot" | "reset") => void;
};

export default function Header({ activeScreen, onNavigate }: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Typography variant="h5" className="font-bold w-full">
        Auth Dashboard
      </Typography>

      <div className="flex items-center justify-end gap-4 w-full">
        <Button
          variant={activeScreen === "login" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => onNavigate("login")}
        >
          Login
        </Button>

        <Button
          variant={activeScreen === "register" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => onNavigate("register")}
        >
          Register
        </Button>

        <Button
          variant={activeScreen === "forgot" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => onNavigate("forgot")}
        >
          Forgot Password
        </Button>

        <Button
          variant={activeScreen === "reset" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => onNavigate("reset")}
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
}
