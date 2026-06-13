import { defineField, defineType } from 'sanity'

export const waitlistSignupType = defineType({
  name: 'waitlistSignup',
  title: 'Waitlist Signup',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email()
    }),
    defineField({
      name: 'firstName',
      title: 'First Name (Optional)',
      type: 'string'
    }),
    defineField({
      name: 'source',
      title: 'Source Page / Campaign',
      type: 'string'
    }),
    defineField({
      name: 'timestamp',
      title: 'Signup Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ]
})
