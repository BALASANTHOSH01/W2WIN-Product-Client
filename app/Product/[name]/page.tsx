'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import useProducts from '@/hooks/useProducts'; // Adjust import based on your setup
import Image from 'next/image';
import BreadCrumb from '@/components/ReusableComponent/BreadScrum';
import { TagIcon } from '@/components/ReusableComponent/Icons';
import { Product } from '@/types/types'; // Import the Product type

const ProductPage: React.FC = () => {
  const params = useParams();
  const name = params?.name;

  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl text-red-500 font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (!name) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl text-red-500 font-semibold">Product Not Found</p>
      </div>
    );
  }

  // Decode the name parameter from the URL
  const decodedName = decodeURIComponent(name as string);
  const product = products.find(product => product.name === decodedName) || null;

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl text-red-500 font-semibold">Product Not Found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-3 lg:p-12 bg-white px-[5%] rounded-lg h-screen">
      <BreadCrumb />

      <div className="flex flex-row items-start gap-5 w-full">
        {/* Left Section - Images */}
        <div className="w-full lg:w-[60%] mb-4">
          <div className="relative w-full h-[70vh] mb-4">
            {product.mainImage ? (
              <Image
                src={product.mainImage}
                alt={product.name}
                className="rounded-lg shadow-md object-cover"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">No Main Image Available</div>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.imageUrls && product.imageUrls.length > 0 && (
              product.imageUrls.slice(0, 4).map((imageUrl, index) => (
                <div key={index} className="w-24 h-24 relative cursor-pointer">
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover rounded-md shadow-md"
                    fill
                    sizes="(max-width: 600px) 25vw, (max-width: 1200px) 20vw, 10vw"
                  />
                </div>
              ))
            ) }
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="w-full lg:w-[40%] text-center p-4">
          <div className="mb-6">
            <h1 className="text-xl lg:text-2xl font-medium mt-6 text-gray-700 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-2">Price: ₹ {product.price}</p>
            <p className="text-lg text-gray-700 mb-2">Offer: {product.offer}</p>
          </div>
          <div className="mb-6">
            <p className="text-base text-gray-800 mb-4">{product.description}</p>
          </div>

          <div>
            <p>Available Offers</p>
            <div>
              <TagIcon />
              <p></p>
            </div>
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
