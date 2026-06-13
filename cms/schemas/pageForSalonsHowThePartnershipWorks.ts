import { defineField, defineType } from 'sanity'

export const pageForSalonsHowThePartnershipWorksType = defineType({
  name: 'pageForSalonsHowThePartnershipWorks',
  title: 'For Salons - how the partnership works.',
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
