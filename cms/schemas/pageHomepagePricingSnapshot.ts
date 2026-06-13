import { defineField, defineType } from 'sanity'

export const pageHomepagePricingSnapshotType = defineType({
  name: 'pageHomepagePricingSnapshot',
  title: 'Homepage - Pricing Snapshot',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'corePlanName',
      title: 'Core Plan Name (e.g., "nella Core")',
      type: 'string',
    }),
    defineField({
      name: 'corePlanFeatures',
      title: 'Core Plan Features',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'proPlanName',
      title: 'Pro Plan Name (e.g., "nella Pro")',
      type: 'string',
    }),
    defineField({
      name: 'proPlanPrice',
      title: 'Pro Plan Price (e.g., "£4.99/mo")',
      type: 'string',
    }),
    defineField({
      name: 'proPlanFeatures',
      title: 'Pro Plan Features',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})
