// types/product.ts
export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  offer:string,
  imageUrls?: string[];
}
