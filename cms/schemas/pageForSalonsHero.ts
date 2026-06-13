import { defineField, defineType } from 'sanity'

export const pageForSalonsHeroType = defineType({
  name: 'pageForSalonsHero',
  title: 'For Salons - Hero',
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
