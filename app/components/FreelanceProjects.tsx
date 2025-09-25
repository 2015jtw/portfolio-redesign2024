"use client";

// React/NextJS
import Link from "next/link";
import Image from "next/image";

// UI
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import { IconRow } from "./ui/BrandIcon";

// Data
import { getClientWorkData } from "@/sanity/lib/data";
import type { ClientWorkQueryResult } from "@/sanity/lib/types";

interface FreelanceProjectsProps {
  data: ClientWorkQueryResult;
}

const FreelanceProjects = ({ data }: FreelanceProjectsProps) => {

  if (!data || data.length === 0) {
    return (
      <div className="py-20" id="freelance">
        <h2 className="heading pb-7">
          From Concept to Code:{" "}
          <span className="dark:text-purple text-blue-500">
            Recent Client Work
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">No client work found.</p>
      </div>
    );
  }

  return (
    <div className="py-20" id="freelance">
      <h2 className="heading pb-7">
        From Concept to Code:{" "}
        <span className="dark:text-purple text-blue-500">
          Recent Client Work
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 ">
        {data.map((item) => (
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
                  {item.desc}
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

export default FreelanceProjects;
