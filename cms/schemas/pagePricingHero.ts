import { defineField, defineType } from 'sanity'

export const pagePricingHeroType = defineType({
  name: 'pagePricingHero',
  title: 'Pricing - Hero',
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
