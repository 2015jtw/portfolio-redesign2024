import Image from 'next/image'
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

  const { title, subtitle, intro, background, interests, conclusion, photos } = data

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">
            {title}
          </h2>
          
          {/* Subtitle */}
          <h3 className="text-xl text-center mb-8 text-gray-600 dark:text-gray-400 font-medium">
            {subtitle}
          </h3>
          
          {/* Introduction */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Introduction</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {intro}
            </p>
          </div>
          
          {/* Background */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Background</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {background}
            </p>
          </div>
          
          {/* Interests */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Interests & Hobbies</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {interests}
            </p>
          </div>
          
          {/* Conclusion */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Conclusion</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {conclusion}
            </p>
          </div>
          
          {/* Photos Grid */}
          {photos && photos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
