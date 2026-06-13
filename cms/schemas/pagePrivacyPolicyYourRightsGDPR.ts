import { defineField, defineType } from 'sanity'

export const pagePrivacyPolicyYourRightsGDPRType = defineType({
  name: 'pagePrivacyPolicyYourRightsGDPR',
  title: 'Privacy Policy - 4. Your Rights (GDPR)',
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
