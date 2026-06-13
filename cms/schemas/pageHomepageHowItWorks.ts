import { defineField, defineType, defineArrayMember } from 'sanity'

export const pageHomepageHowItWorksType = defineType({
  name: 'pageHomepageHowItWorks',
  title: 'Homepage - How it Works',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Steps (Alternating Rows)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number (e.g. "01")',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Step Image',
              type: 'image',
              options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'stepNumber',
              subtitle: 'title',
              media: 'image'
            }
          }
        })
      ]
    }),
  ]
})
