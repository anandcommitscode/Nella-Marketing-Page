import { defineField, defineType } from 'sanity'

export const salonEnquiryType = defineType({
  name: 'salonEnquiry',
  title: 'Salon Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'salonName',
      title: 'Salon/Clinic Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'contactName',
      title: 'Contact Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email()
    }),
    defineField({
      name: 'location',
      title: 'Location (Town/City)',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'treatments',
      title: 'Treatments Offered',
      type: 'text'
    }),
    defineField({
      name: 'clientsPerWeek',
      title: 'Average Clients per Week',
      type: 'string'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ]
})
