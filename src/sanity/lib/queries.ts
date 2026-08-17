import { defineQuery } from 'next-sanity'

// export const PRODUCTS_QUERY = defineQuery(`
//   *[_type == "product" && stockAvailable > 0] {
//     _id,
//     productName,
//     price,
//     category
//     stockAvailable,
//     category,
//      "images": images[].asset->url
//   }
// `)

// PAGINATION
// export const PRODUCTS_QUERY = defineQuery(`
//   *[_type == "product"]
//   | order(_price desc)
//   [$start...$end] {
//     _id,
//     productName,
//     price,
//     stockAvailable,
//     "images": images[].asset->url
//   }
// `);

// PRICE FILTERING

// export const PRODUCTS_QUERY = defineQuery(`
//   *[_type == "product"]
//   | order(price desc)
// {
//   _id,
//   productName,
//   price,
//   stockAvailable,
//   "images": images[].asset->url
//   }
// `);


export const PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product" ] {
    _id,
    productName,
    price,
    stockAvailable,
    size,
    color,
    tags,
    "images": images[].asset->url,
    "category": category->{
      title,
      "slug": slug.current
    }
  }
`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "product" &&
    slug.current == $slug
  ][0] {
    _id,
    productName,
    price,
    stockAvailable,
    size,
    color,
    tags,
    "images": images[].asset->url,
    "category": category->{
      title,
      "slug": slug.current
    }
  }
`);