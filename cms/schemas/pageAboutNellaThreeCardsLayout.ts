import { defineField, defineType } from 'sanity'

export const pageAboutNellaThreeCardsLayoutType = defineType({
  name: 'pageAboutNellaThreeCardsLayout',
  title: 'About Nella - Three cards layout',
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
