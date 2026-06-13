import { defineField, defineType } from 'sanity'

export const pageWhatItDoesThisIsNellaType = defineType({
  name: 'pageWhatItDoesThisIsNella',
  title: 'What It Does - this is nella',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'ID', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'image', title: 'Image', type: 'image' })
          ]
        }
      ]
    }),
  ]
})
