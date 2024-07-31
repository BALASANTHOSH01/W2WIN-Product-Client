// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { Product } from '../../types/types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4  bg-white">
      <div className="relative ">
        <Image
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white p-2 rounded-full shadow-md">
            <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base">{product.desc}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Buy now</span>
          <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
        </button>
        <span className="text-lg font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
