"use client";
import React, { useEffect, useState } from "react";
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full py-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className={`w-full h-full opacity-40 ${
            mounted && theme === "light" && "filter-light-mode"
          }`}
        />
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-blue-500 dark:text-purple">
            your next project
          </span>{" "}
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
          Copyright © 2024 JTW. All rights reserved.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <Link
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={item.link}
              target="_blank"
            >
              <img src={item.img} alt={`${item.id}`} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
