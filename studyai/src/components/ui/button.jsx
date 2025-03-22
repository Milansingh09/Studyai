import React from "react";

export const Button = ({ children, onClick, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    icon: "p-2 rounded-full"
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
