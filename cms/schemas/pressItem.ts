import { defineField, defineType } from 'sanity'

export const pressItemType = defineType({
  name: 'pressItem',
  title: 'Press Item',
  type: 'document',
  fields: [
    defineField({
      name: 'outletName',
      title: 'Outlet Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'articleUrl',
      title: 'Article URL',
      type: 'url'
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date'
    })
  ]
})
