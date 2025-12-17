"use client";

import React from "react";

interface FormHeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-12 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>

      {description && (
        <p className="mt-4 text-2xl text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
