import { defineField, defineType } from 'sanity'

export const pageWhatItDoesHeroType = defineType({
  name: 'pageWhatItDoesHero',
  title: 'What It Does - Hero',
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
