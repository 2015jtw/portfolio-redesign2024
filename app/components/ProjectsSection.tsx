import { getProjectsData, getFeaturedProjectsData } from '@/sanity/lib/data'
import { IconRow } from './ui/BrandIcon'
import type { ProjectsQueryResult } from '@/sanity/lib/types'

interface ProjectsSectionProps {
  data: ProjectsQueryResult
  featured?: boolean
}

export default function ProjectsSection({ data, featured = false }: ProjectsSectionProps) {
  if (!data || data.length === 0) {
    return <div>No projects found</div>
  }

  return (
    <section className="projects-section">
      <h2>{featured ? 'Featured Projects' : 'Recent Projects'}</h2>
      <div className="projects-grid">
        {data.map((project) => (
          <div key={project._id} className="project-card">
            <div className="project-image">
              <img 
                src={project.img.asset.url} 
                alt={project.title}
                width={project.img.asset.metadata.dimensions.width}
                height={project.img.asset.metadata.dimensions.height}
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.des}</p>
              
              <div className="project-technologies">
                <IconRow 
                  slugs={project.iconSlugs.map(tech => tech.iconSlug)}
                  size={20}
                  className="tech-icons"
                />
              </div>
              
              <div className="project-links">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Server Component usage examples
export async function ProjectsSectionServer() {
  const projectsData = await getProjectsData()
  return <ProjectsSection data={projectsData} />
}

export async function FeaturedProjectsSectionServer() {
  const featuredProjectsData = await getFeaturedProjectsData()
  return <ProjectsSection data={featuredProjectsData} featured={true} />
}
