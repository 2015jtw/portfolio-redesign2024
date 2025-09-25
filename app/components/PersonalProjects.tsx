"use client";
// React/Next
import Image from "next/image";
import Link from "next/link";

// UI
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

// Data
import { getProjectsData } from "@/sanity/lib/data";
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
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 ">
        {data.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item._id}
          >
            <PinContainer
              title={item.pinTitle}
              href="https://twitter.com/mannupaaji"
            >
              <Link href={item.link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10">
                  <Image
                    src={item.img.asset.url}
                    alt="cover"
                    className="rounded-md object-cover"
                    layout="fill"
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
                    {item.iconSlugs.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={`/technologies/${icon.iconSlug}.png`}
                          alt="icons"
                          className="p-2"
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
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
