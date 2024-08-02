'use client'

import React from 'react';
import { HouseInteriorTwo } from '@/assets/Hero/index';
import ProductBG from "@/assets/Products/Productpage-BG.jpg";
import Link from 'next/link';
import ProductList from '@/components/ProductList/ProductList';

const Hero = () => {
    return (
       <div>
         <div
            style={{
                backgroundImage: `url(${ProductBG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}
            className='flex justify-center items-center p-3'
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="flex flex-col  gap-2 text-white items-center mt-[3%] relative z-10">
                <div className="text-[80px] md:text-[45px] font-sans font-medium text-center">
                    <p>We2Win Products List</p>
                    <p>Customizable home apliances</p>
                </div>
                <p className="my-[2%] font-medium  md:text-[22px] text-center">Design and furniture are not just what it looks like and feels like; it is how it works.</p>
                <Link href={"/Products"} className="flex flex-row items-center gap-2 text-[20px] md:text-[20px] backdrop-blur-lg w-[220px] bg-white text-black justify-center rounded-[25px] cursor-pointer p-[1%] hover:shadow-2xl">
                    <p>Buy our Products</p>
                
                </Link>
            </div>
        </div>

        <p className=' text-center font-semibold text-[40px] my-[4%]'>Product List</p>

        <div className=' mx-auto flex flex-col justify-center'>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        </div>
       </div>
    );
};

export default Hero;
