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
import { ModeToggle } from "./darkMode";

export const FixedNavbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    let direction = current - scrollY.getPrevious()!;
    if (current < 5) {
      setVisible(true); // Always show the navbar at the top
    } else {
      setVisible(direction < 0); // Show navbar when scrolling up, hide when scrolling down
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <Navbar scrollToTop={scrollToTop} />
      </motion.div>
    </AnimatePresence>
  );
};

function Navbar({
  className,
  scrollToTop,
}: {
  className?: string;
  scrollToTop: () => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <HoveredLink key={item.name} href={item.link} onClick={scrollToTop}>
            {item.name}
          </HoveredLink>
        ))}
        <ModeToggle />
      </Menu>
    </div>
  );
}

export default FixedNavbar;
