import { defineField, defineType } from 'sanity'

export const faqCategoryType = defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number'
    })
  ]
})
