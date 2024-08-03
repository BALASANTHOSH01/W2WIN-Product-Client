'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import ProductBG from "@/assets/Products/Productpage-BG.jpg";
import { Product } from '@/types/types';
import { CardIcon, RightArrowIcon } from '@/components/ReusableComponent/Icons';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList: Product[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, 'id'>), // Ensure types are correct
        }));
        console.log(productsList); // Log the products list
        setProducts(productsList);
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ProductBG.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '60vh',
          position: 'relative'
        }}
        className='flex justify-center items-center p-3'
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="flex flex-col gap-2 text-white items-center mt-[3%] relative z-10">
          <div className="text-[40px] md:text-[45px] font-sans font-medium text-center">
            <p>We2Win Products List</p>
            <p>Customizable home appliances</p>
          </div>
          <p className="my-[2%] font-medium md:text-[22px] text-center">
            Design and furniture are not just what it looks like and feels like; it is how it works.
          </p>
          <Link href={"/Products"} className="flex flex-row items-center gap-2 text-[18px] md:text-[16px] backdrop-blur-lg w-[200px] bg-white text-black justify-center rounded-[25px] cursor-pointer p-[1%] hover:shadow-2xl">
            <p>Buy our Products</p>
          </Link>
        </div>
      </div>

      <p className='text-center font-semibold text-[40px] my-[4%]'>Product List</p>

      <div className='py-6'>
        {loading ? (
          <p className='text-center'>Loading products...</p>
        ) : error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : (
          <div className="grid grid-cols-3 mx-auto lg:grid-cols-2 2xl:grid-cols-3 gap-4 px-5">
            {products.length > 0 ? (
              products.map((product) => (
                <Link href={`/Product/${product.name}`} key={product.id}>
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[80%] lg:w-[100%] p-3 border">
                    <div className="relative w-full h-56">
                      <Image
                        src={product.mainImage}
                        alt={`${product.name} Image`}
                        className="w-full h-full object-cover rounded-t-2xl"
                        fill
                         sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="bg-white p-2 rounded-full shadow-md">
                          <CardIcon />
                        </button>
                      </div>
                    </div>
                    <div className="p-1">
                      <p className=' text-gray-500 text-[14px]'>{product.category}</p>
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className=" bottom-2 space-x-2 w-full flex flex-row items-center justify-between text-[13px]">
                        <button className="bg-black text-white py-[6px] px-4 rounded-full flex items-center space-x-2 w-[70%] lg:w-[100%] justify-between backdrop-blur-3xl backdrop-opacity-60">
                          <span className=''>Buy now</span>
                          <div className='bg-white rounded-full p-1 text-black'>
                            <RightArrowIcon />
                          </div>
                        </button>
                        <span className="lg:hidden font-bold text-black py-[6px] px-4 rounded-full">₹ {product.price}</span>
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
  );
};

export default Products;
