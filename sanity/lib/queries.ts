import type { 
  HeroQueryResult, 
  ClientWorkQueryResult, 
  ProjectsQueryResult,
  FeaturedProjectsQueryResult,
  FeaturedClientWorkQueryResult,
  ProjectBySlugQueryResult,
  ClientWorkBySlugQueryResult
} from './types'

// Hero Section Query
export const HERO_QUERY = `*[_type == "hero"][0]{
  _id,
  _type,
  greeting,
  name,
  intro,
  ctaButton{
    text,
    url,
    external
  },
  resume{
    asset->{
      _id,
      url,
      originalFilename,
      size
    }
  },
  socialMedia[]{
    service,
    url,
    iconSlug,
    external
  }
}` as const

// Client Work Query
export const CLIENT_WORK_QUERY = `*[_type == "clientWork"] | order(order asc, _createdAt desc){
  _id,
  _type,
  title,
  pinTitle,
  desc,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  clientName,
  projectType,
  featured,
  order
}` as const

// Recent Projects Query
export const PROJECTS_QUERY = `*[_type == "projects"] | order(order asc, _createdAt desc){
  _id,
  _type,
  title,
  pinTitle,
  des,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  projectType,
  featured,
  order
}` as const

// Featured Projects Query
export const FEATURED_PROJECTS_QUERY = `*[_type == "projects" && featured == true] | order(order asc, _createdAt desc){
  _id,
  _type,
  title,
  pinTitle,
  des,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  projectType,
  order
}` as const

// Featured Client Work Query
export const FEATURED_CLIENT_WORK_QUERY = `*[_type == "clientWork" && featured == true] | order(order asc, _createdAt desc){
  _id,
  _type,
  title,
  pinTitle,
  desc,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  clientName,
  projectType,
  order
}` as const

// Single Project Query (for dynamic routes)
export const PROJECT_BY_SLUG_QUERY = `*[_type == "projects" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  pinTitle,
  des,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  projectType,
  featured,
  order
}` as const

// Single Client Work Query (for dynamic routes)
export const CLIENT_WORK_BY_SLUG_QUERY = `*[_type == "clientWork" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  pinTitle,
  desc,
  img{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    }
  },
  iconSlugs[]{
    name,
    iconSlug
  },
  link,
  clientName,
  projectType,
  featured,
  order
}` as const