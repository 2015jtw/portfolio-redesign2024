'use client'
import { Icon } from '@iconify/react'

interface SocialItem {
  service: string
  url: string
  iconSlug: string
  external: boolean
}

interface SocialIconsProps {
  items: SocialItem[]
  className?: string
  iconSize?: number
}

export function SocialIcons({ 
  items, 
  className = "flex gap-4", 
  iconSize = 24 
}: SocialIconsProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <a 
          key={`${item.service}-${index}`}
          href={item.url} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.service} profile`}
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Icon 
            icon={`simple-icons:${item.iconSlug}`} 
            width={iconSize} 
            height={iconSize}
            className="text-current"
          />
        </a>
      ))}
    </div>
  )
}