import React from "react";

export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-2xl shadow-lg ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-200">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold text-gray-800">{children}</h3>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
