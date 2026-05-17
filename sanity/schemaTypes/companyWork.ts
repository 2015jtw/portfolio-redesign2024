import {BriefcaseIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const companyWorkType = defineType({
  name: 'companyWork',
  title: 'Agency Work',
  type: 'document',
  icon: BriefcaseIcon,
  fields: [
    defineField({
      name: 'employer',
      title: 'Employer',
      type: 'string',
      description: 'Agency where this work was completed',
      options: {
        list: [
          { title: 'MageMontreal', value: 'MageMontreal' },
          { title: 'Arctic Leaf', value: 'Arctic Leaf' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Client or project name',
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
      description: 'What was built and your role',
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
      description: 'Technology stack used on this project',
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconSlug',
              title: 'Iconify Icon Slug',
              type: 'string',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Magento', value: 'simple-icons:magento' },
                  { title: 'Shopify', value: 'simple-icons:shopify' },
                  { title: 'BigCommerce', value: 'simple-icons:bigcommerce' },
                  { title: 'PHP', value: 'simple-icons:php' },
                  { title: 'Vue.js', value: 'simple-icons:vuedotjs' },
                  { title: 'Alpine.js', value: 'simple-icons:alpinedotjs' },
                  { title: 'Next.js', value: 'simple-icons:nextdotjs' },
                  { title: 'TypeScript', value: 'simple-icons:typescript' },
                  { title: 'JavaScript', value: 'simple-icons:javascript' },
                  { title: 'React', value: 'simple-icons:react' },
                  { title: 'Tailwind CSS', value: 'simple-icons:tailwindcss' },
                  { title: 'Sass/SCSS', value: 'simple-icons:sass' },
                  { title: 'CSS3', value: 'simple-icons:css3' },
                  { title: 'WordPress', value: 'simple-icons:wordpress' },
                  { title: 'Node.js', value: 'simple-icons:nodedotjs' },
                  { title: 'MySQL', value: 'simple-icons:mysql' },
                  { title: 'Redis', value: 'simple-icons:redis' },
                  { title: 'Elasticsearch', value: 'simple-icons:elasticsearch' },
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
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
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
      description: 'Lower numbers display first',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'employer',
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
      title: 'Employer A-Z',
      name: 'employerAsc',
      by: [{ field: 'employer', direction: 'asc' }],
    },
    {
      title: 'Project Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
