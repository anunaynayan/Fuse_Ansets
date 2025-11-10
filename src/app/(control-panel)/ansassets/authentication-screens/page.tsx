"use client";

import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState<
    "login" | "register" | "forgot" | "reset"
  >("login");

  const renderScreen = () => {
    switch (activeScreen) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "forgot":
        return <ForgotPassword />;
      case "reset":
        return <ResetPassword />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-7xl ">
      <Header activeScreen={activeScreen} onNavigate={setActiveScreen} />
      <div className="border rounded-2xl shadow-md p-6 max-w-6xl mx-auto">{renderScreen()}</div>
    </div>
  );
}
