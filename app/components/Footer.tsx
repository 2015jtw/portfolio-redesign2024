"use client";

import React from "react";
import Link from "next/link";
import { SocialIcons } from "./ui/SocialIcons";
import type { SocialMediaItem } from "@/sanity/lib/types";

interface FooterProps {
  socialMedia: SocialMediaItem[];
}

const footerLinks = [
  { href: "/work", label: "Freelance" },
  { href: "/agency-work", label: "Agency Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
]

const Footer = ({ socialMedia }: FooterProps) => {
  return (
    <footer className="w-full relative bg-white dark:bg-black-100 border-t">
      <div className="flex flex-col items-center space-y-6 py-10 relative z-10">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        {socialMedia && socialMedia.length > 0 && (
          <div className="flex flex-col items-center space-y-3">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Connect with me</p>
            <SocialIcons
              items={socialMedia}
              className="flex gap-6"
              iconSize={24}
            />
          </div>
        )}

        <p className="md:text-base text-sm md:font-normal font-light text-gray-600 dark:text-gray-300">
          Copyright &copy; 2025 JTW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
