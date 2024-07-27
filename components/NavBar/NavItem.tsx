'use client'

import Link from 'next/link'
import React from 'react'


interface NavItemPropType {
    text:string,
    className:string,
    to:string
}

const NavItem = ({text,className,to}:NavItemPropType) => {
  return (
    <Link href={`${to}`} className={`${className} px-[2%] py-[1%] cursor-pointer font-medium text-[15px]`} >
        {text}
    </Link>
  )
}

export default NavItem;