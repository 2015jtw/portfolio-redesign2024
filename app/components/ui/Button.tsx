// components/ui/Button.tsx
import React from "react";
import classNames from "classnames";

interface ButtonProps {
  variant?: "outline" | "solid";
  size?: "icon" | "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "medium",
  children,
  onClick,
  className,
}) => {
  const buttonClasses = classNames(
    "flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "solid",
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white":
        variant === "outline",
      "p-2": size === "icon",
      "px-4 py-2 text-sm": size === "small",
      "px-6 py-3 text-base": size === "medium",
      "px-8 py-4 text-lg": size === "large",
    },
    className // Add the className here
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
