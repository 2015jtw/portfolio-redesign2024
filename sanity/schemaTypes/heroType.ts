import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'The greeting text (e.g., "Hello, I\'m")',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your name or the main name to display',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      description: 'A brief introduction or tagline',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'The text displayed on the button',
          validation: (Rule) => Rule.required().max(30),
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'string',
          description: 'The URL the button should link to',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'external',
          title: 'External Link',
          type: 'boolean',
          description: 'Check if this is an external link',
          initialValue: false,
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'greeting',
    },
  },
})
