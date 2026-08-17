import { defineField, defineType } from 'sanity'
export const customerType = defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Delivery Address',
      type: 'text',
    }),

    defineField({
      name: 'cart',
      title: 'cart',
      type: 'array',
      of:[
        {type:'reference',
        to:[{type:'product'}]
        }

      ]
    }),
  ],
})