'use client'

import { useEffect, useLayoutEffect, useState } from 'react';
import NavItem from './NavItem';
import { MenuIcon, NavSectionArrowIcon } from '../ReusableComponent/Icons';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Logo from "@/assets/Logo/we2win_white_logo.png"
import { useParams } from 'next/navigation';
import Link from 'next/link';


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

  const [isProductHovered,setProductHovered]=useState(false);
  useEffect(() => {
    const handleClick = () => {
      setProductHovered(false);
    };

    // Add event listener on component mount
    document.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div className='flex flex-row justify-between font-semibold items-center text-[18px] px-[3%] py-[1%] bg-white border-b w-screen overflow-hidden'>
      
      <div>
        <p>Logo</p>
      </div>

      <div className=' flex flex-row w-[40%] items-center font-bold justify-around'>

        <div className='flex flex-row items-center gap-2' onMouseEnter={()=>setProductHovered(true)}>
        <NavItem text='Products' className='' to='' isMobileNav={isMobileNav} />
        <NavSectionArrowIcon/>
        </div>

        <NavItem text='Service' className='' to='' isMobileNav={isMobileNav} />
        <NavItem text='About' className='' to='' isMobileNav={isMobileNav} />
      </div>

      <div>
      <NavItem text='Contact' className='w-[20%] text-start font-bold' to='' isMobileNav={isMobileNav} />
      </div>

      {
        isProductHovered  && (
          <div className=' absolute top-[12%] font-normal text-ellipsis left-[35%] w-[400px] z-30 bg-white '>
        <div className=' relative grid grid-cols-4 py-[2%] px-[3%]'>
        <div>
          <p>Chair</p>
        </div>
        <div>
          <p>Door</p>
        </div>
        <div>
          <p>Bed</p>
        </div>
        <div>
          <p>Table</p>
        </div>
        <div>
          <p>Table 1</p>
        </div>
        <div>
          <p>Table 2</p>
        </div>

        <div className=' absolute right-[1%] bottom-[2%] '>
          <p>CustomeOrder</p>
        </div>
        </div>


      </div>
        )
      }
    </div>

  )
};

export default NavBar;
