// React/Next
import Image from "next/image";

// UI
import Hero from "./components/hero";
import { FixedNavbar } from "./components/FixedNavbar";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import Tech from "./components/Tech";
import PersonalProjects from "./components/PersonalProjects";
import { FaHome } from "react-icons/fa";
import Grid from "./components/grid";
import { navItems } from "@/data";
import Approach from "./components/Approach";
import FreelanceProjects from "./components/FreelanceProjects";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FixedNavbar />
        <Hero />
        <Grid />
        <FreelanceProjects />
        <PersonalProjects />
        <WorkExperience />
        <Tech />
        <Footer />
      </div>
    </main>
  );
}
