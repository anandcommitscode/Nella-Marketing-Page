import { defineField, defineType } from 'sanity'

export const pagePrivacyPolicyPlainEnglishCommitmentsType = defineType({
  name: 'pagePrivacyPolicyPlainEnglishCommitments',
  title: 'Privacy Policy - 3. Plain-English Commitments',
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
