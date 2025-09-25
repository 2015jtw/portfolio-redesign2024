import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

// Optimized image helper with common sizes and quality settings
export const urlForOptimized = (source: SanityImageSource, options: {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png'
} = {}) => {
  const { width = 800, height, quality = 80, format = 'webp' } = options
  
  let imageBuilder = builder.image(source)
    .width(width)
    .quality(quality)
    .format(format)
  
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }
  
  return imageBuilder
}
