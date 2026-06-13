import { defineField, defineType } from 'sanity'

export const pageCookiesPolicyYourChoicesType = defineType({
  name: 'pageCookiesPolicyYourChoices',
  title: 'Cookies Policy - 3. Your Choices',
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
