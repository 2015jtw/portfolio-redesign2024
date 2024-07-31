import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { workExperience } from "@/data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../../lib/motion";

const WorkExperience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work-experience");
