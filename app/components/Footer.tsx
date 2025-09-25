"use client";
// React/NextJS
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

// UI
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
import { File } from "lucide-react";


const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full py-10" id="contact">
      <div className="w-full absolute left-0 -bottom-12 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="footer-grid"
          layout="fill"
          objectFit="cover"
          className={`opacity-40 ${
            mounted && theme === "light" && "filter-light-mode"
          }`}
        />
      </div>
      <div className="flex flex-col items-center py-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-blue-500 dark:text-purple">your project</span>{" "}
          to the next level?
        </h1>
        <p className="text-black dark:text-white md:mt-10 my-5 text-center">
          Reach out to me and let&apos;s discuss your project.
        </p>
        <a href="mailto:2015JTW@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center mt-20">
        <p className="md:text-base text-sm md:font-normal font-light py-4 md:py-0">
          Copyright © 2025 JTW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
