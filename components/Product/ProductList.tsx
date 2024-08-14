import { Product } from '@/types/types';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Initialize the liked state with an empty Map
  const [likedProducts, setLikedProducts] = useState<Map<string, boolean>>(new Map());

  const handleProductLiked = (productId: string) => {
    setLikedProducts(prevLikedProducts => {
      const newLikedProducts = new Map(prevLikedProducts);
      newLikedProducts.set(productId, !newLikedProducts.get(productId));
      return newLikedProducts;
    });
  };

  return (
    <div className='w-[70%]'>
      <div className="grid grid-cols-3 md:grid-cols-1  gap-6 mx-auto">
        {products.map((productData) => (
          <ProductCard
            key={productData.id}
            product={productData}
            isLiked={!!likedProducts.get(productData.id)}
            onLikeClick={() => handleProductLiked(productData.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
