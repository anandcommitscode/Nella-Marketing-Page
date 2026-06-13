import { defineField, defineType } from 'sanity'

export const intelligenceType = defineType({
  name: 'intelligence',
  title: 'Intelligence Story',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Story Name',
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
      name: 'title',
      title: 'Headline Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text'
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string'
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text Content',
      type: 'text'
    }),
    defineField({
      name: 'cardBg',
      title: 'Card Background Style',
      type: 'string',
      options: {
        list: [
          { title: 'Cream', value: 'cream' },
          { title: 'Blush', value: 'blush' },
          { title: 'Espresso', value: 'espresso' }
        ]
      },
      initialValue: 'cream'
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text'
    })
  ]
})
