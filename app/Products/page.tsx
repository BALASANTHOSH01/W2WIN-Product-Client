"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import ProductBG from "@/assets/Products/Productpage-BG.jpg";
import { Product } from "@/types/types";
import {
  CardIcon,
  DownArrowIcon,
  RightArrowIcon,
  ShopCardIcon,
} from "@/components/ReusableComponent/Icons";
import BreadCrumb from "@/components/ReusableComponent/BreadScrum";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList: Product[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">), // Ensure types are correct
        }));
        console.log(productsList); // Log the products list
        setProducts(productsList);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-[5%] bg-gray-200 px-[1%] ">
      {/* <div className="relative">
  <div className="relative">
    <p
      className="text-[70px] text-transparent text-center blur-[1px] font-bold"
      style={{ WebkitTextStroke: "4px black" }}
    >
      Products
    </p>
  </div>
  <div className="absolute inset-0 top-[40%] flex items-center justify-center">
    <p className="text-center font-semibold text-[40px]">Product List</p>
  </div>
</div> */}

      <div className=" mt-[4px] bg-white rounded-[5px]">
        <div className=" flex flex-row items-center justify-between px-[2%] py-[2%]">
          <BreadCrumb />

          <div className=" flex flex-row bg-gray-100 cursor-pointer hover:shadow-lg items-center gap-2 rounded-[25px] px-[17px] py-[7px] ">
            <p>Category</p>
            <DownArrowIcon />
          </div>
        </div>

        <div className="py-6">
          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 mx-auto lg:grid-cols-2 2xl:grid-cols-3 gap-4 px-5">
              {products.length > 0 ? (
                products.map((product) => (
                  <Link href={`/Product/${product.name}`} key={product.id}>
                  <div className="bg-white flex flex-row items-start shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[80%] lg:w-[100%] p-3 rounded-[5px] border">
                
                    {/* Image Container */}
                    <div className="relative w-1/2 h-56">
                      <Image
                        src={product.mainImage}
                        alt={`${product.name} Image`}
                        className="w-full h-full object-cover rounded-sm"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="bg-white p-1 rounded-full shadow-md">
                          <CardIcon />
                        </button>
                      </div>
                    </div>
                
                    {/* Content Container */}
                    <div className="w-1/2 px-4 relative">
                      
                    <p className="text-woodColor absolute right-[1%]  font-semibold text-[14px] ">
                        {product.category}
                      </p>

                      <h3 className="text-lg font-semibold my-[5px]">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-500 py-[1px]">
                        {product.description}
                      </p>
                      
                      <div className="bottom-2 space-x-2 w-full flex flex-row items-center justify-between mt-4">
                        <button className="bg-woodColor hover:shadow-lg rounded-sm text-white py-[6px] px-4 flex items-center space-x-2 justify-center text-[14px] gap-2 w-full backdrop-blur-3xl backdrop-opacity-60">
                          <ShopCardIcon className="text-[17px]" />
                          <span className="text-center">Buy now</span>
                        </button>
                      </div>
                    </div>
                
                  </div>
                </Link>
                
                ))
              ) : (
                <p className="text-center">No products available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
