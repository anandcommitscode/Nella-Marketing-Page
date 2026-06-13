import { defineField, defineType } from 'sanity'

export const pageCookiesPolicyWhatAreCookiesType = defineType({
  name: 'pageCookiesPolicyWhatAreCookies',
  title: 'Cookies Policy - 1. What Are Cookies?',
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
