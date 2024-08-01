import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "@/data";

const Tech = () => {
  console.log(technologies);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <h1>Tech Stack</h1>
    </div>
  );
};

export default SectionWrapper(Tech);
