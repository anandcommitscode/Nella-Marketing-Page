import { defineField, defineType } from 'sanity'

export const pagePricingFAQsType = defineType({
  name: 'pagePricingFAQs',
  title: 'Pricing - FAQs',
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
