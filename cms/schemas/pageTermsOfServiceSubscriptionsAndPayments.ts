import { defineField, defineType } from 'sanity'

export const pageTermsOfServiceSubscriptionsAndPaymentsType = defineType({
  name: 'pageTermsOfServiceSubscriptionsAndPayments',
  title: 'Terms of Service - 2. Subscriptions and Payments',
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
