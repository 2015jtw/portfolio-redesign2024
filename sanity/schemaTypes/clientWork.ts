import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const clientWorkType = defineType({
  name: 'clientWork',
  title: 'Client Work',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'The name/title of the project',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'pinTitle',
      title: 'Pin Title',
      type: 'string',
      description: 'Short title for the pin/display',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'desc',
      title: 'Project Description',
      type: 'text',
      description: 'Detailed description of the project',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'img',
      title: 'Project Image',
      type: 'image',
      description: 'Main project screenshot or image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconSlugs',
      title: 'Technologies Used',
      type: 'array',
      description: 'List of technology icons using Iconify slugs',
      of: [
        defineField({
          name: 'technology',
          title: 'Technology',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              description: 'Name of the technology (e.g., Next.js, React, TypeScript)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconSlug',
              title: 'Iconify Icon Slug',
              type: 'string',
              description: 'Iconify icon name (e.g., simple-icons:nextdotjs, skill-icons:convex-dark)',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Next.js', value: 'simple-icons:nextdotjs' },
                  { title: 'TypeScript', value: 'simple-icons:typescript' },
                  { title: 'Sanity', value: 'simple-icons:sanity' },
                  { title: 'Tailwind CSS', value: 'simple-icons:tailwindcss' },
                  { title: 'Shadcn/ui', value: 'simple-icons:shadcnui' },
                  { title: 'WordPress', value: 'simple-icons:wordpress' },
                  { title: 'Convex', value: 'skill-icons:convex-dark' },
                  { title: 'OpenAI', value: 'simple-icons:openai' },
                  { title: 'Clerk', value: 'simple-icons:clerk' },
                  { title: 'Drizzle', value: 'simple-icons:drizzle' },
                  { title: 'Styled Components', value: 'simple-icons:styledcomponents' },
                  { title: 'Node.js', value: 'simple-icons:nodedotjs' },
                  { title: 'Firebase', value: 'simple-icons:firebase' },
                  { title: 'CSS3', value: 'simple-icons:css3' },
                  { title: 'MongoDB', value: 'simple-icons:mongodb' },
                  { title: 'Express.js', value: 'simple-icons:express' },
                  { title: 'React', value: 'simple-icons:react' },
                  { title: 'Sass/SCSS', value: 'simple-icons:sass' },
                  { title: 'Redux', value: 'simple-icons:redux' },
                  { title: 'Stripe', value: 'simple-icons:stripe' },
                  { title: 'Figma', value: 'simple-icons:figma' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'iconSlug',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'link',
      title: 'Live Site URL',
      type: 'url',
      description: 'URL to the live project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the client or company',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      description: 'Type of project (e.g., Website, E-commerce, Web App)',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Web Application', value: 'webapp' },
          { title: 'Mobile App', value: 'mobile' },
          { title: 'Dashboard', value: 'dashboard' },
          { title: 'Landing Page', value: 'landing' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark this project as featured',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which projects should be displayed (lower numbers first)',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'img',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Project Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Client Name A-Z',
      name: 'clientAsc',
      by: [{ field: 'clientName', direction: 'asc' }],
    },
  ],
})
