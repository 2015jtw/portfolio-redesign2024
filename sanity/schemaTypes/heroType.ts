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
      validation: (Rule) => Rule.required().max(2000),
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
    defineField({
      name: 'resume',
      title: 'Resume PDF',
      type: 'file',
      description: 'Upload your resume as a PDF file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      description: 'List of social media links using Simple Icons',
      of: [
        defineField({
          name: 'socialItem',
          title: 'Social Media Item',
          type: 'object',
          fields: [
            defineField({
              name: 'service',
              title: 'Platform Name',
              type: 'string',
              description: 'Name of the social media platform (e.g., LinkedIn, GitHub, Twitter)',
              validation: (Rule) => Rule.required().max(50),
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              description: 'The URL to the social media profile',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconSlug',
              title: 'Icon Slug',
              type: 'string',
              description: 'Simple Icons slug (e.g., "github", "linkedin", "twitter")',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Discord', value: 'discord' },
                  { title: 'Twitch', value: 'twitch' },
                  { title: 'Reddit', value: 'reddit' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Dev.to', value: 'devdotto' },
                  { title: 'Stack Overflow', value: 'stackoverflow' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'service',
              subtitle: 'url',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(10),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'greeting',
    },
  },
})
