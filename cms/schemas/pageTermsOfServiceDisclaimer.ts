import { defineField, defineType } from 'sanity'

export const pageTermsOfServiceDisclaimerType = defineType({
  name: 'pageTermsOfServiceDisclaimer',
  title: 'Terms of Service - 3. Disclaimer',
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
