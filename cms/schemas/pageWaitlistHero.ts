import { defineField, defineType } from 'sanity'

export const pageWaitlistHeroType = defineType({
  name: 'pageWaitlistHero',
  title: 'Waitlist - Hero',
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
