import { defineField, defineType } from 'sanity'

export const pagePricingTiersType = defineType({
  name: 'pagePricingTiers',
  title: 'Pricing - Tiers',
  type: 'document',
  fields: [
    defineField({
      name: 'coreTier',
      title: 'Core Tier',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'price', title: 'Price', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'string' }]
        })
      ]
    }),
    defineField({
      name: 'proTier',
      title: 'Pro Tier',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'price', title: 'Price', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'string' }]
        })
      ]
    })
  ]
})
