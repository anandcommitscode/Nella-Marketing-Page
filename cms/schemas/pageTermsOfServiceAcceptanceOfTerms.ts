import { defineField, defineType } from 'sanity'

export const pageTermsOfServiceAcceptanceOfTermsType = defineType({
  name: 'pageTermsOfServiceAcceptanceOfTerms',
  title: 'Terms of Service - 1. Acceptance of Terms',
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
