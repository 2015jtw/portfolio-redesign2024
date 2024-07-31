"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./ui/Button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Sun className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <Moon className="h-[1.2rem] w-[1.2rem] cursor-pointer" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  );
}
