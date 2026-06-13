import { defineField, defineType } from 'sanity'

export const pageHomepageFinalCTAType = defineType({
  name: 'pageHomepageFinalCTA',
  title: 'Homepage - Final CTA',
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
      type: 'text',
    })
  ]
})
