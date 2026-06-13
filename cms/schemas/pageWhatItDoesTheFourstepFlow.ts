import { defineField, defineType } from 'sanity'

export const pageWhatItDoesTheFourstepFlowType = defineType({
  name: 'pageWhatItDoesTheFourstepFlow',
  title: 'What It Does - The four-step flow',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'image', title: 'Image (Optional)', type: 'image' })
          ]
        }
      ]
    }),
  ]
})
