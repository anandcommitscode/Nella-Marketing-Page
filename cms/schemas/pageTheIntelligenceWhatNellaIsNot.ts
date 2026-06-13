import { defineField, defineType } from 'sanity'

export const pageTheIntelligenceWhatNellaIsNotType = defineType({
  name: 'pageTheIntelligenceWhatNellaIsNot',
  title: 'The Intelligence - what nella is not.',
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
