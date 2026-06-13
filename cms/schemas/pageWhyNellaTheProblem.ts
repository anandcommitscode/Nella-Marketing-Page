import { defineField, defineType } from 'sanity'

export const pageWhyNellaTheProblemType = defineType({
  name: 'pageWhyNellaTheProblem',
  title: 'Why Nella - The Problem',
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
