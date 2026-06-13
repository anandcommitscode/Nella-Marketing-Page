import { defineField, defineType } from 'sanity'

export const pagePrivacyPolicyInformationWeCollectType = defineType({
  name: 'pagePrivacyPolicyInformationWeCollect',
  title: 'Privacy Policy - 1. Information We Collect',
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
