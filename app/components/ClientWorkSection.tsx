import { IconRow } from './ui/BrandIcon'
import type { ClientWorkQueryResult } from '@/sanity/lib/types'

interface ClientWorkSectionProps {
  data: ClientWorkQueryResult
}

export default function ClientWorkSection({ data }: ClientWorkSectionProps) {
  if (!data || data.length === 0) {
    return (
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Client Work</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">No client work found.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Client Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((work) => (
            <div key={work._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={work.img.asset.url} 
                  alt={work.title}
                  className="w-full h-full object-cover"
                  width={work.img.asset.metadata.dimensions.width}
                  height={work.img.asset.metadata.dimensions.height}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {work.projectType}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  <strong>Client:</strong> {work.clientName}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {work.desc}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                  <IconRow 
                    slugs={work.iconSlugs.map(tech => tech.iconSlug)}
                    size={20}
                    className="flex flex-wrap gap-2"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    View Live Site
                  </a>
                  {work.featured && (
                    <span className="text-yellow-500 text-sm font-semibold">⭐ Featured</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
