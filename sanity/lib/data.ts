import { client } from './client'
import {
  HERO_QUERY,
  CLIENT_WORK_QUERY,
  PROJECTS_QUERY,
  FEATURED_PROJECTS_QUERY,
  FEATURED_CLIENT_WORK_QUERY,
  PROJECT_BY_SLUG_QUERY,
  CLIENT_WORK_BY_SLUG_QUERY
} from './queries'
import type {
  HeroQueryResult,
  ClientWorkQueryResult,
  ProjectsQueryResult,
  FeaturedProjectsQueryResult,
  FeaturedClientWorkQueryResult,
  ProjectBySlugQueryResult,
  ClientWorkBySlugQueryResult
} from './types'

// Hero data fetching
export async function getHeroData(): Promise<HeroQueryResult> {
  try {
    const data = await client.fetch(HERO_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

// Client work data fetching
export async function getClientWorkData(): Promise<ClientWorkQueryResult> {
  try {
    const data = await client.fetch(CLIENT_WORK_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching client work data:', error)
    return []
  }
}

// Projects data fetching
export async function getProjectsData(): Promise<ProjectsQueryResult> {
  try {
    const data = await client.fetch(PROJECTS_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching projects data:', error)
    return []
  }
}

// Featured projects data fetching
export async function getFeaturedProjectsData(): Promise<FeaturedProjectsQueryResult> {
  try {
    const data = await client.fetch(FEATURED_PROJECTS_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching featured projects data:', error)
    return []
  }
}

// Featured client work data fetching
export async function getFeaturedClientWorkData(): Promise<FeaturedClientWorkQueryResult> {
  try {
    const data = await client.fetch(FEATURED_CLIENT_WORK_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching featured client work data:', error)
    return []
  }
}

// Single project by slug
export async function getProjectBySlug(slug: string): Promise<ProjectBySlugQueryResult> {
  try {
    const data = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug })
    return data
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

// Single client work by slug
export async function getClientWorkBySlug(slug: string): Promise<ClientWorkBySlugQueryResult> {
  try {
    const data = await client.fetch(CLIENT_WORK_BY_SLUG_QUERY, { slug })
    return data
  } catch (error) {
    console.error('Error fetching client work by slug:', error)
    return null
  }
}

// Combined data fetching for pages
export async function getHomePageData() {
  try {
    const [heroData, clientWorkData, projectsData] = await Promise.all([
      getHeroData(),
      getClientWorkData(),
      getProjectsData()
    ])

    return {
      hero: heroData,
      clientWork: clientWorkData,
      projects: projectsData
    }
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return {
      hero: null,
      clientWork: [],
      projects: []
    }
  }
}
