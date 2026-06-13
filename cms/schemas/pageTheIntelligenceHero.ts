import { defineField, defineType } from 'sanity'

export const pageTheIntelligenceHeroType = defineType({
  name: 'pageTheIntelligenceHero',
  title: 'The Intelligence - Hero',
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
