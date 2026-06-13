import { defineField, defineType } from 'sanity'

export const pageTermsOfServiceGoverningLawType = defineType({
  name: 'pageTermsOfServiceGoverningLaw',
  title: 'Terms of Service - 5. Governing Law',
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
