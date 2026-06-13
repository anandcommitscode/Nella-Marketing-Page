import { defineField, defineType } from 'sanity'

export const pageAboutNellaHeroType = defineType({
  name: 'pageAboutNellaHero',
  title: 'About Nella - Hero',
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
