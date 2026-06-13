import { defineField, defineType } from 'sanity'

export const pagePricingWhatYouGetForType = defineType({
  name: 'pagePricingWhatYouGetFor',
  title: 'Pricing - what you get for £4.99.',
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
