import { defineField, defineType } from 'sanity'

export const pageWhyNellaWhoItIsForType = defineType({
  name: 'pageWhyNellaWhoItIsFor',
  title: 'Why Nella - Who it is for',
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
