import { defineField, defineType } from 'sanity'

export const pageWhyNellaFinalCTAType = defineType({
  name: 'pageWhyNellaFinalCTA',
  title: 'Why Nella - Final CTA',
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
