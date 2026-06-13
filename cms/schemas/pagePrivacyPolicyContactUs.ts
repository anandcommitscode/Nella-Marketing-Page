import { defineField, defineType } from 'sanity'

export const pagePrivacyPolicyContactUsType = defineType({
  name: 'pagePrivacyPolicyContactUs',
  title: 'Privacy Policy - 5. Contact Us',
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
