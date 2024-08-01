import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackgroundDemo } from "./ui/gridBackground";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
import Avatar from "../avatar/avatar";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 " id="home">
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
      <div className="flex flex-col md:flex-row justify-around relative my-10 z-10 w-full min-h-[600px]">
        <div className="max-w-[89vw] md:max-w-2xl w-full lg:max-w-[50vw] flex flex-col items-center justify-center order-2 md:order-1">
          <h2 className="heading text-white">Hi there 👋</h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl py-2"
            words="I'm Josh Worden"
          />

          <p className="text-center">
            I am a web developer with a passion for creating interactive,
            performant and accessible user interfaces. Proven experience with
            the NextJS core technologies, as well as Shopfiy and BigCommerce
            E-Commerce Platforms.
          </p>
          <a href="#about" className="py-4 md:py-0">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2"
            />
          </a>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Hero;
