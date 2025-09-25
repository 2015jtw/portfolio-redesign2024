import { defineType, defineField } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the about section',
      validation: (Rule) => Rule.required().max(100)
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or tagline for the about section',
      validation: (Rule) => Rule.required().max(200)
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      description: 'Personal introduction and about me content',
      validation: (Rule) => Rule.required().max(2000)
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'text',
      description: 'Information about upbringing, travel, and personal background',
      validation: (Rule) => Rule.required().max(1500)
    }),
    defineField({
      name: 'interests',
      title: 'Interests & Hobbies',
      type: 'text',
      description: 'Personal interests, hobbies, and activities outside of work',
      validation: (Rule) => Rule.required().max(1500)
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
      description: 'Closing statement that summarizes who you are',
      validation: (Rule) => Rule.required().max(500)
    }),
    defineField({
      name: 'photos',
      title: 'Photos Grid',
      type: 'array',
      description: 'Collection of personal photos to display in a grid',
      of: [
        {
          type: 'object',
          name: 'photo',
          title: 'Photo',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility'
                }
              ]
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the photo'
            })
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image'
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(1).max(35)
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which the about section should be displayed',
      validation: (Rule) => Rule.min(0)
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
})
