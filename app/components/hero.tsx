'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Spotlight } from "./ui/Spotlight"
import { GridBackgroundDemo } from "./ui/gridBackground"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButton from "./ui/magicButton"
import { FaLocationArrow } from "react-icons/fa"
import type { HeroQueryResult } from "@/sanity/lib/types"

interface HeroProps {
  data: HeroQueryResult
}

const Hero = ({ data }: HeroProps) => {
  if (!data) {
    return <div>Loading hero data...</div>
  }

  const { greeting, name, intro, ctaButton } = data

  return (
    <div className="font-alegreya" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackgroundDemo className="absolute top-0 left-0" />
      <div className="flex flex-col justify-center relative z-10 h-screen">
        <div className="max-w-[89vw] md:max-w-3xl w-full lg:max-w-[60vw] flex flex-col items-center justify-center order-2 mx-auto pt-4 md:pt-0 space-y-6">
          <h2 className="heading text-black dark:text-white">{greeting} 👋</h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl py-2"
            words={name}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-center text-black dark:text-white font-normal"
          >
            {intro}
          </motion.p>

          {ctaButton && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex justify-center"
            >
              <Link href="/work" className="py-4 md:py-0">
                <MagicButton
                  title={ctaButton.text}
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="gap-2 bg-blue-500 font-semibold"
                />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
