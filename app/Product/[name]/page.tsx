'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductData from '@/components/ProductList/ProductData';
import Image from 'next/image';

// Define the TypeScript interface for the Product
interface Product {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  image: string[];
  desc: string;
  rating: string;
  aboutOne: string;
  aboutTwo: string;
  price: string;
}

const ProductPage: React.FC = () => {
  const params = useParams();
  const name = params?.name;

  if (!name) {
    return (
      <div className="container mx-auto p-4">
        <p>Product Not Found</p>
      </div>
    );
  }

  // Decode the name parameter from the URL
  const decodedName = decodeURIComponent(name as string);
  const product = ProductData.find(product => product.name === decodedName) || null;

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p>Product Not Found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full h-96 mb-4">
            <Image 
              src={product.thumbnail} 
              alt={product.name} 
              layout="fill" 
              objectFit="contain" 
              className="rounded-lg" 
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {product.image.map((img, index) => (
              <div key={index} className="relative w-24 h-24">
                <Image 
                  src={img} 
                  alt={`${product.name} ${index + 1}`} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-xl mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-xl mb-2"><strong>Rating:</strong> {product.rating}</p>
          <p className="text-xl mb-2"><strong>Price:</strong> ${product.price}</p>
          <p className="text-lg mb-2"><strong>Description:</strong> {product.desc}</p>
          <p className="text-lg mb-2"><strong>About:</strong> {product.aboutOne}</p>
          <p className="text-lg mb-4">{product.aboutTwo}</p>
          {/* Add more product details here as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
