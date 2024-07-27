'use client'

import NavItem from "./NavItem";
import {  MenuIcon } from '../ReusableComponent/Icons';

const NavBar = () => {
    return (
        <div className="absolute w-full">
        <div className="relative w-full mx-auto z-50 text-white">

            <div className="absolute inset-0 bg-white/20  backdrop-blur-2xl"></div>

            <div className="relative flex flex-row items-center justify-between md:px-[5%] md:py-[1%]">
                <div className="cursor-pointer px-[2%] py-[1%]">
                    <p>Logo</p>
                </div>

                <div className="flex flex-row justify-around w-[50%] md:hidden ">
                    <NavItem to="/" text="Buy Products" className=" hover:text-woodColor " />
                    <NavItem to="/" text="Service" className=" hover:text-woodColor " />
                    <NavItem to="/About" text="About" className=" hover:text-woodColor " />

                    <div className="bg-woodColor text-center  flex items-center justify-center rounded-[25px]" >
                        <NavItem to="/" text="Contact" className="w-[100px]" />
                    </div>
                </div>

                <div className="text-[22px] font-semibold cursor-pointer md:block hidden">
                    <MenuIcon/>
                </div>

            </div>
        </div>
        </div>
    );
};

export default NavBar;
