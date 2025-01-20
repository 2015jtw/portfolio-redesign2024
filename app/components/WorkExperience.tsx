"use client";

// React/NextJS
import React from "react";
import Image from "next/image";

// UI
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

// Data
import { experiences } from "@/data";

// Styles
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "../../lib/motion";

export interface Experience {
  id: number;
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative w-[60%] h-[60%]">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              width={60} // Provide a width value
              height={60} // Provide a height value
              className="object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="dark:text-purple text-[24px] text-blue-500 font-bold">
          {experience.title}
        </h3>
        <p
          className="text-black dark:text-white text-[16px] font-bold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-black dark:text-white text-[14px] pl-1 tracking-wider font-medium"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <div className="py-10" id="resume">
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center text-black dark:text-white`}
        >
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-black dark:text-white`}
        >
          Work{" "}
          <span className="text-blue-500 dark:text-purple ">Experience</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: any) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(WorkExperience);
