'use client'

import { useEffect, useLayoutEffect, useState } from 'react';
import NavItem from './NavItem';
import { MenuIcon } from '../ReusableComponent/Icons';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Logo from "@/assets/Logo/we2win_white_logo.png"
import { useParams } from 'next/navigation';

const NavBar = () => {

  const params = useParams();
  const name = params?.name;

  const [isNavNeed, setIsNavNeed] = useState(true);

  useEffect(() => {
    if (name) {
      setIsNavNeed(false);
    } else {
      setIsNavNeed(true);
    }
  }, [params]);

  const [isMobileNav, setIsMobileNav] = useState(false);
  const handleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <div>

      {
        isNavNeed ? (
          <div className={`absolute w-full ${isNavNeed ? 'block' : 'hidden'}`}>
            <div className="relative w-full mx-auto z-50 text-white">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>
              <div className="relative flex flex-row items-center justify-between md:px-[5%] ">

                <div className="cursor-pointer px-[2%] py-[1%]">
                  {/* <Image src={Logo} alt='logo' className='w-[20%]'/> */}
                  <p>Logo</p>
                </div>

                <div className="flex flex-row justify-around w-[50%] md:hidden">
                  <NavItem isMobileNav={false} to="/Products" text="Buy Products" className="hover:text-woodColor" />
                  <NavItem isMobileNav={false} to="/" text="Service" className="hover:text-woodColor" />
                  <NavItem isMobileNav={false} to="/About" text="About" className="hover:text-woodColor" />
                  <div className="bg-woodColor text-center flex items-center justify-center rounded-[25px]">
                    <NavItem isMobileNav={false} to="/" text="Contact" className="w-[100px]" />
                  </div>
                </div>

                <div className="text-[24px] font-semibold cursor-pointer md:block hidden" onClick={handleMobileNav}>
                  <MenuIcon />
                </div>
                {isMobileNav && <MobileNav handleMobileNav={handleMobileNav} />}

              </div>
            </div>
          </div>
        ) : (
          <div className={`absolute w-full ${isNavNeed ? 'hidden' : 'block'}`}>
            <div className="relative w-full mx-auto z-50 text-white bg-gray-400">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>
              <div className="relative flex flex-row items-center justify-between md:px-[5%] ">

                <div className="cursor-pointer px-[2%] py-[1%]">
                  {/* <Image src={Logo} alt='logo' className='w-[20%]'/> */}
                  <p>Logo</p>
                </div>

                <div className="flex flex-row justify-around w-[50%] md:hidden">
                  <NavItem isMobileNav={false} to="/Products" text="Buy Products" className="hover:text-woodColor" />
                  <NavItem isMobileNav={false} to="/" text="Service" className="hover:text-woodColor" />
                  <NavItem isMobileNav={false} to="/About" text="About" className="hover:text-woodColor" />
                </div>

                <div className="text-[24px] font-semibold cursor-pointer md:block hidden" onClick={handleMobileNav}>
                  <MenuIcon />
                </div>
                {isMobileNav && <MobileNav handleMobileNav={handleMobileNav} />}
                
              </div>
            </div>
          </div>
        )
      }
    </div>

  );
};

export default NavBar;
