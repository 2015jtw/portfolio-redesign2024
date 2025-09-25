'use client'
import { Icon } from '@iconify/react'

interface BrandIconProps {
  name: string
  size?: number
  className?: string
}

export function BrandIcon({ name, size = 20, className }: BrandIconProps) {
  return (
    <Icon 
      icon={name} 
      width={size} 
      height={size} 
      className={className}
    />
  )
}

interface IconRowProps {
  slugs: string[]
  size?: number
  className?: string
}

export function IconRow({ slugs, size = 22, className = "flex flex-wrap gap-2" }: IconRowProps) {
  return (
    <div className={className}>
      {slugs.map((slug) => (
        <BrandIcon 
          key={slug} 
          name={slug} 
          size={size}
          className="hover:opacity-80 transition-opacity duration-200"
        />
      ))}
    </div>
  )
}
