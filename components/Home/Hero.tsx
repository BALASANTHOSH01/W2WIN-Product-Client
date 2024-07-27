'use client'

import React from 'react';
import { HouseInteriorTwo } from '@/assets/Hero/index';
import { ExploreArrowIcon } from '../ReusableComponent/Icons';

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${HouseInteriorTwo.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}
            className='flex justify-center items-center p-3'
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="flex flex-col gap-2 text-white items-center mt-[3%] relative z-10">
                <div className="text-[80px] md:text-[40px] font-sans font-medium text-center">
                    <p>You buy a house,</p>
                    <p>we make it home.</p>
                </div>
                <p className="my-[2%] font-medium text-center">Design and furniture are not just what it looks like and feels like; it is how it works.</p>
                <div className="flex flex-row items-center gap-2 text-[25px] md:text-[20px] backdrop-blur-lg w-[150px] bg-white text-black justify-center rounded-[25px] cursor-pointer p-[1%] hover:shadow-2xl">
                    <p>Explore</p>
                    <ExploreArrowIcon />
                </div>
            </div>

        </div>
    );
};

export default Hero;
