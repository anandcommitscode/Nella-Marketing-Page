import { defineField, defineType } from 'sanity'

export const pageMadeForHerWhichOneOfTheseIsYouType = defineType({
  name: 'pageMadeForHerWhichOneOfTheseIsYou',
  title: 'Made For Her - which one of these is you?',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'subtitle', title: 'Subtitle (e.g. 01 · TRACKING)', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'link', title: 'Link (Optional)', type: 'string' }),
            defineField({ name: 'linkText', title: 'Link Text (Optional)', type: 'string' }),
            defineField({ name: 'image', title: 'Image (Optional)', type: 'image' })
          ]
        }
      ]
    }),
  ]
})
