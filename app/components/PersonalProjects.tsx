"use client";
// React/Next
import Image from "next/image";
import Link from "next/link";

// UI
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import { IconRow } from "./ui/BrandIcon";

// Data
import { getProjectsData } from "@/sanity/lib/data";
import { urlForOptimized } from "@/sanity/lib/image";
import type { ProjectsQueryResult } from "@/sanity/lib/types";

interface PersonalProjectsProps {
  data: ProjectsQueryResult;
}

const PersonalProjects = ({ data }: PersonalProjectsProps) => {

  if (!data || data.length === 0) {
    return (
      <div className="py-20" id="projects">
        <h2 className="heading pb-6">
          A small selection of{" "}
          <span className="dark:text-purple text-blue-500">Recent Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="py-20" id="projects">
      <h2 className="heading pb-6">
        A small selection of{" "}
        <span className="dark:text-purple text-blue-500">Recent Projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 ">
        {data.map((item, index) => (
          <div
            className="lg:min-h-[40rem] h-[25rem] flex items-center justify-center sm:w-[28rem] w-[80vw]"
            key={item._id}
          >
            <PinContainer
              title={item.pinTitle}
              href={item.link}
            >
              <Link href={item.link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-[28rem] w-[80vw] h-[20vh] lg:h-[35vh] mb-10">
                  <Image
                    src={urlForOptimized(item.img, { width: 400, height: 300, quality: 85 }).url()}
                    alt="cover"
                    className="rounded-md object-cover"
                    fill
                    priority={index < 3}
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 dark:text-gray-400 text-black"
                  style={{
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    <IconRow 
                      slugs={item.iconSlugs.map(tech => tech.iconSlug)}
                      size={32}
                      className="flex gap-2"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm dark:text-purple text-blue-500">
                      Check Live Site
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

export default PersonalProjects;
