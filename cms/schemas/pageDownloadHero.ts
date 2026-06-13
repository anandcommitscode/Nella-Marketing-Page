import { defineField, defineType } from 'sanity'

export const pageDownloadHeroType = defineType({
  name: 'pageDownloadHero',
  title: 'Download - Hero',
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
