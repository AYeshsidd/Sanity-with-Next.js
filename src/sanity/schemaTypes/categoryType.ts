import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Bed Sheet Category',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
    }),
  ],
})