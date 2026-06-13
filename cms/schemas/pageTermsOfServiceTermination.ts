import { defineField, defineType } from 'sanity'

export const pageTermsOfServiceTerminationType = defineType({
  name: 'pageTermsOfServiceTermination',
  title: 'Terms of Service - 4. Termination',
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
