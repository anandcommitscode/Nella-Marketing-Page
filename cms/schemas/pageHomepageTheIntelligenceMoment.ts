import { defineField, defineType, defineArrayMember } from 'sanity'

export const pageHomepageTheIntelligenceMomentType = defineType({
  name: 'pageHomepageTheIntelligenceMoment',
  title: 'Homepage - The Intelligence Moment (Smart Shelf)',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'shelfItems',
      title: 'Smart Shelf Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'productName',
              title: 'Product Name',
              type: 'string',
            }),
            defineField({
              name: 'productCategory',
              title: 'Category (e.g., Active, Barrier)',
              type: 'string',
            }),
            defineField({
              name: 'insightMessage',
              title: 'Insight Message (Tooltip text)',
              type: 'string',
            }),
            defineField({
              name: 'insightType',
              title: 'Insight Type',
              description: 'Determines the background color of the tooltip and card glow.',
              type: 'string',
              options: {
                list: [
                  { title: 'Conflict (Dark Alert)', value: 'conflict' },
                  { title: 'Warning (Gold Alert)', value: 'warning' },
                  { title: 'Info (Neutral)', value: 'info' }
                ]
              },
              initialValue: 'info'
            })
          ],
          preview: {
            select: {
              title: 'productName',
              subtitle: 'insightMessage'
            }
          }
        })
      ]
    }),
  ]
})
