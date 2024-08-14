import React from "react";
import Image from "next/image";
import { Product } from "../../types/types";
import { EmptyHeartIcon, FilledHeartIcon } from "../ReusableComponent/Icons";

type ProductCardProps = {
  product: Product;
  isLiked: boolean;
  onLikeClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLiked,
  onLikeClick,
}) => {
  return (
    <div className="w-full max-w-xs rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 border">
      <div className="relative w-full h-[250px] cursor-pointer">
        <Image
          src={product.mainImage || '/default-image.jpg'}
          alt={product.title}
          layout="fill"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <button
            className="bg-white p-2 rounded-full shadow-md"
            onClick={onLikeClick}
          >
            {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        <button className="w-full bg-black hover:bg-transparent hover:border-[2px] duration-200 hover:text-black text-white font-medium py-2 px-4 rounded-full inline-flex items-center justify-center">
          <span>Add to Cart</span>
          <svg
            className="fill-current w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
