import { defineField, defineType } from 'sanity'

export const pagePrivacyPolicyHowWeUseYourInformationType = defineType({
  name: 'pagePrivacyPolicyHowWeUseYourInformation',
  title: 'Privacy Policy - 2. How We Use Your Information',
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
