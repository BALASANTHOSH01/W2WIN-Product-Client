// types/product.ts
export interface Product {
  id?: string,
  title: string,
  description: string,
  category:string,
  price: number,
  offer:string,
  mainImage:string,
  imageUrls?: string[];
}
