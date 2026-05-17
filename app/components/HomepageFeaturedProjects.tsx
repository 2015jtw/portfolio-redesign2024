'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { IconRow } from './ui/BrandIcon'
import { urlForOptimized } from '@/sanity/lib/image'
import type { FeaturedProjectsQueryResult } from '@/sanity/lib/types'

export default function HomepageFeaturedProjects({ data }: { data: FeaturedProjectsQueryResult }) {
  if (!data || data.length === 0) return null

  return (
    <section className="py-20 border-t border-gray-100 dark:border-white/[0.05]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Side Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Things I&apos;ve built on my own</p>
        </div>
        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 text-blue-500 dark:text-purple font-medium hover:underline underline-offset-4 text-sm shrink-0 mb-1"
        >
          View all <FaArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 3).map((item, index) => (
          <motion.a
            key={item._id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col rounded-xl border border-gray-200 dark:border-white/[0.08] overflow-hidden hover:border-blue-400 dark:hover:border-purple/50 transition-colors duration-300"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <Image
                src={urlForOptimized(item.img, { width: 600, height: 338, quality: 85 }).url()}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ opacity: 0 }}
                onLoad={(e) => { e.currentTarget.style.opacity = '1' }}
              />
            </div>
            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg text-black dark:text-white leading-tight line-clamp-1">
                  {item.title}
                </h3>
                <FaArrowUpRightFromSquare className="h-4 w-4 text-gray-400 shrink-0 mt-0.5 group-hover:text-blue-500 dark:group-hover:text-purple transition-colors duration-200" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.des}</p>
              <div className="mt-auto pt-2">
                <IconRow
                  slugs={item.iconSlugs.slice(0, 5).map((t) => t.iconSlug)}
                  size={20}
                  className="flex gap-2"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-500 dark:text-purple font-medium hover:underline underline-offset-4 text-sm"
        >
          View all projects <FaArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
