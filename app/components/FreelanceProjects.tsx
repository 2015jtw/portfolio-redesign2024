"use client";

// React/NextJS
import Link from "next/link";
import Image from "next/image";

// UI
import { FaLocationArrow } from "react-icons/fa6";
import Tech from "./Tech";
import { PinContainer } from "./ui/3d-pin";

// Data
import { freelanceProjects, projects } from "@/data";

const FreelanceProjects = () => {
  return (
    <div className="py-20" id="freelance">
      <h2 className="heading pb-6">
        From Concept to Code:{" "}
        <span className="dark:text-purple text-blue-500">
          Recent Client Work
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 ">
        {freelanceProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.pinTitle}
              href="https://twitter.com/mannupaaji"
            >
              <Link href={item.link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10">
                  <Image
                    src={item.img}
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
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
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

export default FreelanceProjects;
