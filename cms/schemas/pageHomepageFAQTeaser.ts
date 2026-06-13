import { defineField, defineType, defineArrayMember } from 'sanity'

export const pageHomepageFAQTeaserType = defineType({
  name: 'pageHomepageFAQTeaser',
  title: 'Homepage - FAQ Teaser',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            })
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer'
            }
          }
        })
      ]
    })
  ]
})
