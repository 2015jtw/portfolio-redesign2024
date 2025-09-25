"use client";
// React/NextJS
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full relative bg-white dark:bg-black-100">
      <div className="w-full absolute left-0 -bottom-12 min-h-20 bg-white dark:bg-black-100">
        <Image
          src="/footer-grid.svg"
          alt="footer-grid"
          fill
          className="opacity-40 object-cover"
        />
      </div>
     
      <div className="flex justify-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light py-4 md:py-0 text-gray-600 dark:text-gray-300">
          Copyright © 2025 JTW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
