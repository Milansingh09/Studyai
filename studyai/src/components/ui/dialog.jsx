import React from "react";

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => (
  <div>{children}</div>
);

export const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold text-gray-800">{children}</h2>
);
