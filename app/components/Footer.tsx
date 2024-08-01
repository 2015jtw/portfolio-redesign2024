import React from "react";
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full py-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-40"
        />
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your next project</span>{" "}
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
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
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 JTW. All rights reserved.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={item.img} alt={`${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
