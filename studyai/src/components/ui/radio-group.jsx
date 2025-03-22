import React from "react";

export const RadioGroup = ({ children, className = "", ...props }) => (
  <div className={`space-y-2 ${className}`} {...props}>
    {children}
  </div>
);

export const RadioGroupItem = ({ id, value, name, ...props }) => (
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      {...props}
    />
    <label htmlFor={id} className="text-gray-700">
      {props.children}
    </label>
  </div>
);
