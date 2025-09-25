"use client";
// React/NextJS
import React from "react";
import Image from "next/image";
import { SocialIcons } from "./ui/SocialIcons";
import type { SocialMediaItem } from "@/sanity/lib/types";

interface FooterProps {
  socialMedia: SocialMediaItem[];
}

const Footer = ({ socialMedia }: FooterProps) => {
  return (
    <footer className="w-full relative bg-white dark:bg-black-100">
     
      <div className="flex flex-col items-center space-y-4 py-8 relative z-10">
        {/* Social Media Icons with Labels */}
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
          Copyright © 2025 JTW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
