import { defineField, defineType } from 'sanity'

export const audienceType = defineType({
  name: 'audience',
  title: 'Audience Persona',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Persona Name',
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
      name: 'benefit1Title',
      title: 'Benefit 1 Title',
      type: 'string'
    }),
    defineField({
      name: 'benefit1Body',
      title: 'Benefit 1 Body',
      type: 'text'
    }),
    defineField({
      name: 'benefit2Title',
      title: 'Benefit 2 Title',
      type: 'string'
    }),
    defineField({
      name: 'benefit2Body',
      title: 'Benefit 2 Body',
      type: 'text'
    }),
    defineField({
      name: 'benefit3Title',
      title: 'Benefit 3 Title',
      type: 'string'
    }),
    defineField({
      name: 'benefit3Body',
      title: 'Benefit 3 Body',
      type: 'text'
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Testimonial Quote',
      type: 'text'
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial Author',
      type: 'string'
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
