import { defineField, defineType } from 'sanity'

export const pageStoriesBlogHeroType = defineType({
  name: 'pageStoriesBlogHero',
  title: 'Stories / Blog - Hero',
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
