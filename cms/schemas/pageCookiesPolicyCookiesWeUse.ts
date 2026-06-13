import { defineField, defineType } from 'sanity'

export const pageCookiesPolicyCookiesWeUseType = defineType({
  name: 'pageCookiesPolicyCookiesWeUse',
  title: 'Cookies Policy - 2. Cookies We Use',
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
