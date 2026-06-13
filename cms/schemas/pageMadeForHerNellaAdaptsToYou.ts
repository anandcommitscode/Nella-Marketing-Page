import { defineField, defineType } from 'sanity'

export const pageMadeForHerNellaAdaptsToYouType = defineType({
  name: 'pageMadeForHerNellaAdaptsToYou',
  title: 'Made For Her - nella adapts to you.',
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
