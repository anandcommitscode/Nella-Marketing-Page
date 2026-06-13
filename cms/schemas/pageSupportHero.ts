import { defineField, defineType } from 'sanity'

export const pageSupportHeroType = defineType({
  name: 'pageSupportHero',
  title: 'Support - Hero',
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
