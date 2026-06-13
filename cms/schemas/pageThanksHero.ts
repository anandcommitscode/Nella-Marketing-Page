import { defineField, defineType } from 'sanity'

export const pageThanksHeroType = defineType({
  name: 'pageThanksHero',
  title: 'Thanks - Hero',
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
