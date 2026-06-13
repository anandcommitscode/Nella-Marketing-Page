import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'authorAge',
      title: 'Author Age',
      type: 'number'
    }),
    defineField({
      name: 'personaType',
      title: 'Persona / Target Audience',
      type: 'string',
      options: {
        list: [
          { title: 'Organiser (The Tracker)', value: 'organiser' },
          { title: 'Ritualist (The Skincare Refiner)', value: 'ritualist' },
          { title: 'Explorer (The Aesthetic Adventurer)', value: 'explorer' }
        ]
      }
    })
  ]
})
