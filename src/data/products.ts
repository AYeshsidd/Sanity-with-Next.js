export interface Product {
  _id: string
  slug:string
  productName: string
  price: number
  stockAvailable: number
  images: string[]
  categoryName: string[]
}