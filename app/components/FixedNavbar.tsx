"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

export const FixedNavbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Always show the navbar at the top
      } else {
        setVisible(direction < 0); // Show navbar when scrolling up, hide when scrolling down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300"
        )}
      >
        <Navbar />
      </motion.div>
    </AnimatePresence>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <HoveredLink key={item.name} href={item.link}>
            {item.name}
          </HoveredLink>
        ))}
      </Menu>
    </div>
  );
}
