import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'launchPhase',
      title: 'Launch Phase',
      type: 'string',
      options: {
        list: [
          { title: 'Pre-launch (Waitlist Mode)', value: 'prelaunch' },
          { title: 'Post-launch (App Store Mode)', value: 'launched' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'prelaunch'
    }),
    defineField({
      name: 'waitlistOpen',
      title: 'Waitlist Open',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'appStoreUrl',
      title: 'App Store Download URL',
      type: 'url'
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hello@mynella.app'
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Link',
      type: 'url'
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Link',
      type: 'url'
    })
  ]
})
