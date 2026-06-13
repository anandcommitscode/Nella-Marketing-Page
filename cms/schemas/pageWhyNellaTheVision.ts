import { defineField, defineType } from 'sanity'

export const pageWhyNellaTheVisionType = defineType({
  name: 'pageWhyNellaTheVision',
  title: 'Why Nella - The Vision',
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
  ]
})
