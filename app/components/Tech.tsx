"use client";
import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "@/data";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  console.log(technologies);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <h1>Tech Stack</h1>
      {technologies.map((tech, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
