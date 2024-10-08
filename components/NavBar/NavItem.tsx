'use client'

import Link from 'next/link';
import React from 'react';

interface NavItemPropType {
  text: string;
  className?: string;
  to: string;
  isMobileNav?: boolean;
}

const NavItem = ({ text, className = '', to, isMobileNav  }: NavItemPropType) => {
  return (
    <Link href={to} legacyBehavior>
      <a
        className={`${
          isMobileNav
            ? 'hover:bg-gray-100 hover:text-woodColor py-[1%] text-center flex flex-col justify-center items-start w-full h-[10vh] px-[15%] cursor-pointer font-medium text-[20px]'
            : 'px-[2%] py-[1%] cursor-pointer font-medium text-[15px]'
        } ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
