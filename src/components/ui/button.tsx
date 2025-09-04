import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "green"; // ✅ added green
}

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-xl font-medium transition focus:outline-none";

  const variantStyles =
    variant === "default"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : variant === "outline"
      ? "border border-purple-600 text-purple-600 hover:bg-purple-50"
      : "bg-green-500 text-white hover:bg-green-700"; // ✅ green

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
