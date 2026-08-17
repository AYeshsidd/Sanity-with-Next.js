import { defineField, defineType } from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',

  fields: [
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
    }),

    defineField({
      name: 'product',
      title: 'Bed Sheet',
      type: 'reference',
      to: [{ type: 'product' }],
    }),

    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1),
    }),

    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
    }),
  ],
})