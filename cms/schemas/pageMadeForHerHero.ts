import { defineField, defineType } from 'sanity'

export const pageMadeForHerHeroType = defineType({
  name: 'pageMadeForHerHero',
  title: 'Made For Her - Hero',
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
