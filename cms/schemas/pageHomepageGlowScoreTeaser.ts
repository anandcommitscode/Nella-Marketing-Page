import { defineField, defineType } from 'sanity'

export const pageHomepageGlowScoreTeaserType = defineType({
  name: 'pageHomepageGlowScoreTeaser',
  title: 'Homepage - Glow Score Teaser',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Body Paragraphs',
      type: 'array',
      of: [{ type: 'text' }]
    }),
    defineField({
      name: 'wrapCardMonth',
      title: 'Wrap Card Month (e.g., "may.")',
      type: 'string',
    }),
    defineField({
      name: 'wrapCardScore',
      title: 'Wrap Card Score (e.g., "84")',
      type: 'string',
    }),
    defineField({
      name: 'wrapCardSubtitle',
      title: 'Wrap Card Subtitle (e.g., "CONSISTENCY RATING")',
      type: 'string',
    }),
    defineField({
      name: 'wrapCardDescription',
      title: 'Wrap Card Description',
      type: 'text',
    })
  ]
})
