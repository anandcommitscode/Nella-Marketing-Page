import { defineField, defineType } from 'sanity'

export const pageStoriesBlogByCategoryType = defineType({
  name: 'pageStoriesBlogByCategory',
  title: 'Stories / Blog - by category.',
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
