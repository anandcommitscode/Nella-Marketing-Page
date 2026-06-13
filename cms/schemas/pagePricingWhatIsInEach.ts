import { defineField, defineType } from 'sanity'

export const pagePricingWhatIsInEachType = defineType({
  name: 'pagePricingWhatIsInEach',
  title: 'Pricing - what is in each.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features Matrix',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Feature Name', type: 'string' }),
            defineField({ name: 'core', title: 'Core Value', type: 'string' }),
            defineField({ name: 'pro', title: 'Pro Value', type: 'string' })
          ]
        }
      ]
    }),
  ]
})
