import { defineField, defineType, defineArrayMember } from 'sanity'

export const pageHomepageWhatNellaDoesType = defineType({
  name: 'pageHomepageWhatNellaDoes',
  title: 'Homepage - What Nella Does',
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
      name: 'features',
      title: 'Features (Interactive Tabs)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'tabName',
              title: 'Tab Name (Short)',
              description: 'The short label for the navigation pill (e.g. "Routines")',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Feature Image',
              type: 'image',
              options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'tabName',
              subtitle: 'title',
              media: 'image'
            }
          }
        })
      ]
    }),
  ]
})
