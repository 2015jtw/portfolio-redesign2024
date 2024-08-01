"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./ui/Button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
