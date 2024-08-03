import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-blue-500 dark:text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center p-4 gap-x-24 gap-y-24 lg:gap-y-8 mt-10">
        {projects.map(({ title, des, img, id, link, iconLists }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[41rem] "
          >
            <PinContainer title={title} href={link}>
              <Link href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#2c2f44]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold md:text-xl text-base line-clamp-1 lg:text-2xl">
                  {title}
                </h1>
                <p className="lg:font-normal font-light text-sm line-clamp-2 lg:text-xl">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-blue-500 dark:text-purple">
                      View Project
                    </p>
                    <FaLocationArrow className="ms-3 text-blue-500 dark:text-purple" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
