import { defineField, defineType } from 'sanity'

export const salonPartnerType = defineType({
  name: 'salonPartner',
  title: 'Salon Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'salonName',
      title: 'Salon Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'salonName' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'coBrandedCopy',
      title: 'Co-Branded Copy',
      type: 'text',
      description: 'Custom message displayed to clients scanning your QR code'
    }),
    defineField({
      name: 'salonCode',
      title: 'Salon Code',
      type: 'string',
      description: 'Code printed on leaflets for a longer free trial'
    })
  ]
})
