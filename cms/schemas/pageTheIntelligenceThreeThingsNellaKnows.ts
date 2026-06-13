import { defineField, defineType } from 'sanity'

export const pageTheIntelligenceThreeThingsNellaKnowsType = defineType({
  name: 'pageTheIntelligenceThreeThingsNellaKnows',
  title: 'The Intelligence - three things nella knows.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Field Label', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'link', title: 'Link URL', type: 'string' }),
            defineField({ name: 'colorMode', title: 'Color Mode', type: 'string', options: { list: ['blush', 'espresso', 'cream'] } })
          ]
        }
      ]
    }),
  ]
})
