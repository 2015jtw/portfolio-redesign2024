import { SanityDocument, ImageMetadata } from 'sanity'

// Base types for common fields
export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata: ImageMetadata
  }
}

export interface Technology {
  name: string
  iconSlug: string
}

export interface SocialMediaItem {
  service: string
  url: string
  iconSlug: string
  external: boolean
}

export interface CTAButton {
  text: string
  url: string
  external: boolean
}

export interface SanityFile {
  asset: {
    _id: string
    url: string
    originalFilename?: string
    size?: number
  }
}

// Hero Schema Types
export interface Hero extends SanityDocument {
  _type: 'hero'
  greeting: string
  name: string
  intro: string
  ctaButton: CTAButton
  resume: SanityFile
  socialMedia: SocialMediaItem[]
}

// Client Work Schema Types
export interface ClientWork extends SanityDocument {
  _type: 'clientWork'
  title: string
  pinTitle: string
  desc: string
  img: SanityImage
  iconSlugs: Technology[]
  link: string
  clientName: string
  projectType: 'website' | 'ecommerce' | 'webapp' | 'mobile' | 'dashboard' | 'landing'
  featured: boolean
  order: number
}

// Projects Schema Types
export interface Projects extends SanityDocument {
  _type: 'projects'
  title: string
  pinTitle: string
  des: string
  img: SanityImage
  iconSlugs: Technology[]
  link: string
  projectType: 'website' | 'ecommerce' | 'webapp' | 'mobile' | 'dashboard' | 'landing'
  featured: boolean
  order: number
}

// About Schema Types
export interface About extends SanityDocument {
  _type: 'about'
  title: string
  subtitle: string
  intro: string
  background: string
  interests: string
  conclusion: string
  photos: Array<{
    image: SanityImage & { alt?: string }
    caption?: string
  }>
  order: number
}

// Query Result Types
export type HeroQueryResult = Hero | null
export type ClientWorkQueryResult = ClientWork[]
export type ProjectsQueryResult = Projects[]
export type FeaturedProjectsQueryResult = Projects[]
export type FeaturedClientWorkQueryResult = ClientWork[]
export type ProjectBySlugQueryResult = Projects | null
export type ClientWorkBySlugQueryResult = ClientWork | null
export type AboutQueryResult = About | null
