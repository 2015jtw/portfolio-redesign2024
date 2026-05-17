'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { urlForOptimized } from '@/sanity/lib/image'
import type { AboutQueryResult } from '@/sanity/lib/types'

export default function HomepageAbout({ data }: { data: AboutQueryResult }) {
  if (!data) return null

  const { title, subtitle, intro, photos } = data
  const photo = photos?.[0]

  return (
    <section className="py-20 border-t border-gray-100 dark:border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">{title}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">{subtitle}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{intro}</p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-blue-500 dark:text-purple font-medium hover:underline underline-offset-4"
          >
            Learn more about me
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        {photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="aspect-square overflow-hidden rounded-2xl shadow-xl max-w-sm mx-auto lg:mx-0 lg:ml-auto"
          >
            <Image
              src={urlForOptimized(photo.image, { width: 500, height: 500, quality: 85 }).url()}
              alt={photo.image.alt || title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
