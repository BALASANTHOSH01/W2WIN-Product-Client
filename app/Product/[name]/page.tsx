'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductData from '@/components/ProductList/ProductData';
import Image from 'next/image';
import BreadCrumb from '@/components/ReusableComponent/BreadScrum'; // Corrected typo

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
        <p className="text-center text-xl text-red-500 font-semibold">Product Not Found</p>
      </div>
    );
  }

  // Decode the name parameter from the URL
  const decodedName = decodeURIComponent(name as string);
  const product = ProductData.find(product => product.name === decodedName) || null;

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl text-red-500 font-semibold">Product Not Found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-3 lg:p-12 bg-white px-[5%] rounded-lg ">

      <BreadCrumb />

      <div className="flex flex-row items-center gap-5 w-[100%] ">

        {/* Left Section - Images */}
          <div className="relative w-[45%] h-80 lg:h-96 mb-4">
            <Image
              src={product.thumbnail}
              alt={product.name}
              className="rounded-lg shadow-md h-[80vh]"
            />
          </div>

        {/* Right Section - Details */}
        <div className="w-[45%] border text-center h-80 bg-gray-200 p-4">
          <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-semibold mt-6 text-gray-700 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-2"> {product.category}</p>
            <p className="text-lg text-gray-700 mb-2"> {product.rating} ★</p>
            <p className="text-xl text-gray-900 mb-4">₹ {product.price}</p>
          </div>
          <div className="mb-6">
            <p className="text-base text-gray-800 mb-4">{product.desc}</p>
            <p className="text-base text-gray-800 mb-4">{product.aboutOne}</p>
            <p className="text-base text-gray-800 mb-4">{product.aboutTwo}</p>
          </div>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
