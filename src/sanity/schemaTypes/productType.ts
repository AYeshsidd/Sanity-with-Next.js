import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Bed Sheet Product',
  type: 'document',

  fields: [
    defineField({
      name: 'productName', // GROQ
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),

   defineField({
      name: 'stockAvailable',
      title: 'Stock Available',
      type: 'number',
      validation: (rule) => rule.required().integer().min(0),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),

    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Double', value: 'double' },
          { title: 'King', value: 'king' },
          { title: 'Queen', value: 'queen' },
        ],
      },
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),


defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'productName',
  },
  validation: (rule) => rule.required(),
}),

  ],
})