import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackgroundDemo } from "./ui/gridBackground";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="font-alegreya" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackgroundDemo className="absolute top-0 left-0" />
      <div className="flex flex-col justify-center relative my-10 z-10 h-screen">
        <div className="max-w-[89vw] md:max-w-2xl w-full lg:max-w-[50vw] flex flex-col items-center justify-center order-2 mx-auto pt-4 md:pt-0 space-y-6">
          <h2 className="heading text-black dark:text-white">Hi there 👋</h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl py-2"
            words="I am Joshua Worden"
          />

          <p className="text-center text-black dark:text-white font-normal">
            I am a web developer who specializes in building high-performance,
            SEO-optimized user interfaces that combine exceptional functionality
            with compelling design. With extensive experience in Next.js
            ecosystem, I have delivered successful projects on major e-commerce
            platforms including Shopify and BigCommerce.
          </p>
          <a href="#freelance" className="py-4 md:py-0">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2 bg-blue-500 font-semibold"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
