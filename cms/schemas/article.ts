import { defineField, defineType } from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Blog Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      description: 'The body content of the article (plain text for simplicity, or markdown fallback)'
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text'
    })
  ]
})
