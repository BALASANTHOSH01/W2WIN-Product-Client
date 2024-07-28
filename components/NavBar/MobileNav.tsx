import React from 'react';
import { CrossIcon } from '../ReusableComponent/Icons';
import NavItem from './NavItem';

const MobileNav = ({ handleMobileNav }: { handleMobileNav: () => void }) => {
  return (
    <div className='absolute top-0 right-0 flex flex-col items-start text-[22px] h-[100vh] w-2/4 bg-woodColor duration-1000'>
      <div className='h-[10vh] py-[3%] mt-[6%] relative w-[100%]'>
        <CrossIcon onClick={handleMobileNav} className='cursor-pointer text-[30px] absolute right-[15%] bg-gray-100 text-woodColor rounded-full p-1' />
      </div>
      <div className='flex flex-col h-[60vh] items-center mt-[10%] w-full py-[2%]'>
        <NavItem isMobileNav={true} text='Home' to='/' />
        <NavItem isMobileNav={true} text='Products' to='/' />
        <NavItem isMobileNav={true} text='About' to='/About' />
        <NavItem isMobileNav={true} text='Contact' to='/' />
      </div>
    </div>
  );
};

export default MobileNav;
