'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlForOptimized } from '@/sanity/lib/image'
import type { AboutQueryResult } from '@/sanity/lib/types'

interface AboutSectionProps {
  data: AboutQueryResult
}

export default function AboutSection({ data }: AboutSectionProps) {
  if (!data) {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">No about information found.</p>
        </div>
      </section>
    )
  }

  const { title, subtitle, intro, background, conclusion, photos } = data

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-4 text-black dark:text-white"
          >
            {title}
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-center mb-8 text-gray-600 dark:text-gray-400 font-medium"
          >
            {subtitle}
          </motion.h3>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Introduction</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{intro}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Background</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{background}</p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">{conclusion}</p>
          </div>

          {photos && photos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={urlForOptimized(photo.image, { width: 400, height: 400, quality: 85 }).url()}
                      alt={photo.image.alt || `Photo ${index + 1}`}
                      width={400}
                      height={400}
                      priority={index < 3}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {photo.caption && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                      {photo.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
