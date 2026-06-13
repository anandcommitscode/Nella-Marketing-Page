import { defineField, defineType } from 'sanity'

export const pageWhyNellaOpeningClaimType = defineType({
  name: 'pageWhyNellaOpeningClaim',
  title: 'Why Nella - Opening Claim',
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
