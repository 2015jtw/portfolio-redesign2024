// components/ui/Button.tsx
import React from "react";
import classNames from "classnames";

interface ButtonProps {
  variant?: "outline" | "solid";
  size?: "icon" | "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "medium",
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  const buttonClasses = classNames(
    "flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      // Solid variant with proper dark mode support
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700": variant === "solid",
      // Outline variant with proper dark mode support
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white":
        variant === "outline",
      "p-2": size === "icon",
      "px-4 py-2 text-sm": size === "small",
      "px-6 py-3 text-base": size === "medium",
      "px-8 py-4 text-lg": size === "large",
    },
    className // Add the className here
  );

  return (
    <button 
      type={type}
      disabled={disabled}
      className={buttonClasses} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
