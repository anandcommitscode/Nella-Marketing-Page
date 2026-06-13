import { defineField, defineType } from 'sanity'

export const pageStoriesBlogTheLatestType = defineType({
  name: 'pageStoriesBlogTheLatest',
  title: 'Stories / Blog - the latest.',
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
