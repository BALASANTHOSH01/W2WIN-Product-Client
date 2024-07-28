'use client';

import Image from 'next/image';
import Link from "next/link";
import ProductData from './ProductData';
import { BsStarFill as StarIcon } from 'react-icons/bs';

const ProductList: React.FC = () => {
  return (
    <div className="py-[3%]">
      <p className="text-[45px] md:text-[30px] text-center my-[5%]">Top Sale Products</p>
      <div className="grid grid-cols-3 md:grid-cols-2 px-[4%]">
        {ProductData.map((data) => (
          <Link
            href={`/Product/${data.name}`}
            key={data.id}
            legacyBehavior
          >
            <div className="my-[3%] hover:shadow-xl mx-auto cursor-pointer duration-100 hover:bg-gray-200 p-3 md:p-2 rounded-[10px]">
              <Image
                src={data.thumbnail}
                alt={`${data.name} Image`}
                className="w-[250px] mx-auto rounded-[10px]"
                width={250} // Provide width for better performance
                height={250} // Provide height for better performance
              />
              <div className="px-[3%] md:p-[1%] py-[5%]">
                <p className="my-[1%] text-[20px] md:text-[12px]">{data.name}</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-woodColor font-semibold text-[14px] md:text-[10px]">₹ {data.price}</p>
                  <div className="text-yellow-500 flex flex-row items-center text-[12px] md:text-[10px]">
                    {[...Array(parseInt(data.rating))].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
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
