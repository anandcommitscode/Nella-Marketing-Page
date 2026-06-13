import { defineField, defineType } from 'sanity'

export const pageHomepageTheProblemType = defineType({
  name: 'pageHomepageTheProblem',
  title: 'Homepage - The Problem (Chaos Slider)',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'sliderLeftLabel',
      title: 'Slider Left Label',
      description: 'e.g., "The Chaos"',
      type: 'string',
    }),
    defineField({
      name: 'sliderRightLabel',
      title: 'Slider Right Label',
      description: 'e.g., "The Clarity"',
      type: 'string',
    }),
    defineField({
      name: 'chaosText',
      title: 'Chaos Text (Left Side)',
      type: 'text',
    }),
    defineField({
      name: 'clarityText',
      title: 'Clarity Text (Right Side)',
      type: 'text',
    }),
  ]
})
