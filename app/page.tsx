// React/Next
import Image from "next/image";

// UI
import Hero from "./components/hero";
import { FixedNavbar } from "./components/FixedNavbar";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import PersonalProjects from "./components/PersonalProjects";
import Approach from "./components/Approach";
import FreelanceProjects from "./components/FreelanceProjects";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:text-white text-black">
      <div className="max-w-7xl w-full font-alegreya">
        <FixedNavbar />
        <Hero />
        <FreelanceProjects />
        <WorkExperience />
        <PersonalProjects />
        <Footer />
      </div>
    </main>
  );
}
