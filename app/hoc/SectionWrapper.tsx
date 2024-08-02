"use client";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../../lib/motion";

const SectionWrapper = (Component: any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
