import { defineField, defineType, defineArrayMember } from 'sanity'

export const pageHomepageSocialProofType = defineType({
  name: 'pageHomepageSocialProof',
  title: 'Homepage - Social Proof',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
            }),
            defineField({
              name: 'author',
              title: 'Author & Age (e.g., "rachel, 32")',
              type: 'string',
            })
          ],
          preview: {
            select: {
              title: 'author',
              subtitle: 'quote'
            }
          }
        })
      ]
    })
  ]
})
