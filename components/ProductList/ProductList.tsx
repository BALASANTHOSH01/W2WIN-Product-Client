'use client';

import Image from 'next/image';
import Link from "next/link";
import { BsStarFill as StarIcon } from 'react-icons/bs';
import ProductData from './ProductData';
import { CardIcon, RightArrowIcon } from '../ReusableComponent/Icons';


const ProductList: React.FC = () => {
  return (
    <div className="py-6">
     
      <div className="grid grid-cols-3 mx-auto lg:grid-cols-2  2xl:grid-cols-3 gap-4 px-5">
        {ProductData.map((data) => (
          <Link href={`/Product/${data.name}`} key={data.id}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[80%] lg:w-[100%] p-3 border">
              <div className="relative w-full h-56 ">
                <Image
                  src={data.thumbnail}
                  alt={`${data.name} Image`}
                  className="w-full h-full object-cover rounded-t-2xl"
                  layout="fill"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <CardIcon />
                  </button>
                </div>


              </div>
              <div className="p-1">
                <p className=' text-gray-500 text-[14px]'>{data.category}</p>
                <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
                <div className=" bottom-2 space-x-2 w-full flex flex-row items-center justify-between  text-[13px]">
                  <button className="bg-black text-white py-[6px] px-4 rounded-full flex items-center space-x-2 w-[70%] lg:w-[100%] justify-between backdrop-blur-3xl backdrop-opacity-60">
                    <span className=''>Buy now</span>
                    <div className='bg-white rounded-full p-1 text-black'>
                      <RightArrowIcon />
                    </div>
                  </button>
                  <span className="lg:hidden font-bold text-black py-[6px] px-4 rounded-full">₹ {data.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
