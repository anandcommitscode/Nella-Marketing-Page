import { defineField, defineType } from 'sanity'

export const benefitType = defineType({
  name: 'benefit',
  title: 'App Benefit',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Benefit Name',
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
      name: 'details',
      title: 'Details / Description Block',
      type: 'text'
    }),
    defineField({
      name: 'flowStep1Title',
      title: 'Flow Step 1 Title',
      type: 'string'
    }),
    defineField({
      name: 'flowStep1Body',
      title: 'Flow Step 1 Body',
      type: 'text'
    }),
    defineField({
      name: 'flowStep2Title',
      title: 'Flow Step 2 Title',
      type: 'string'
    }),
    defineField({
      name: 'flowStep2Body',
      title: 'Flow Step 2 Body',
      type: 'text'
    }),
    defineField({
      name: 'flowStep3Title',
      title: 'Flow Step 3 Title',
      type: 'string'
    }),
    defineField({
      name: 'flowStep3Body',
      title: 'Flow Step 3 Body',
      type: 'text'
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
