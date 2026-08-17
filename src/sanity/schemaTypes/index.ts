import { type SchemaTypeDefinition } from 'sanity'
import {productType,} from './productType'
import { categoryType } from './categoryType'
import { customerType } from './customerType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,categoryType , customerType,orderType,],
}
