import { defineField, defineType } from 'sanity'

export const pageHomepageHeroType = defineType({
  name: 'pageHomepageHero',
  title: 'Homepage - Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'e.g., "your beauty life, remembered."',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      description: 'e.g., "every treatment, every routine, every insight. seamlessly tracked."',
      type: 'text',
    }),
    defineField({
      name: 'primaryImage',
      title: 'Primary Hero Image',
      type: 'image',
      options: { hotspot: true }
    })
  ]
})
