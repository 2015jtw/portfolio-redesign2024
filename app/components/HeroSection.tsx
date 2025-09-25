import { getHeroData } from '@/sanity/lib/data'
import {SocialIcons} from './ui/SocialIcons'
import type { HeroQueryResult } from '@/sanity/lib/types'

interface HeroSectionProps {
  data: HeroQueryResult
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) {
    return <div>Loading hero data...</div>
  }

  const { greeting, name, intro, ctaButton, socialMedia } = data

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="greeting">{greeting}</h1>
        <h2 className="name">{name}</h2>
        <p className="intro">{intro}</p>
        
        <div className="cta-buttons flex gap-4">
          {ctaButton && (
            <a 
              href={ctaButton.url}
              target={ctaButton.external ? '_blank' : '_self'}
              rel={ctaButton.external ? 'noopener noreferrer' : undefined}
              className="cta-button"
            >
              {ctaButton.text}
            </a>
          )}
          
          {data.resume && (
            <a 
              href={data.resume.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume
            </a>
          )}
        </div>
        
        {socialMedia && socialMedia.length > 0 && (
          <SocialIcons 
            items={socialMedia}
            className="social-icons"
            iconSize={24}
          />
        )}
      </div>
    </section>
  )
}

// Server Component usage example
export async function HeroSectionServer() {
  const heroData = await getHeroData()
  
  return <HeroSection data={heroData} />
}
