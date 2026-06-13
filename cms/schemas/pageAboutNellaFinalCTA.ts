import { defineField, defineType } from 'sanity'

export const pageAboutNellaFinalCTAType = defineType({
  name: 'pageAboutNellaFinalCTA',
  title: 'About Nella - Final CTA',
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
