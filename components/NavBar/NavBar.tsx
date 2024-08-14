"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import NavItem from "./NavItem";
import { MenuIcon, NavSectionArrowIcon } from "../ReusableComponent/Icons";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Logo from "@/assets/Logo/we2win_white_logo.png";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavBarProductList from "../ReusableComponent/NavBarProductList";

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

  const [isProductHovered, setProductHovered] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      setProductHovered(false);
    };

    // Add event listener on component mount
    document.addEventListener("click", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between font-semibold items-center text-[18px] px-[3%] py-[1%] bg-white border-b w-screen overflow-hidden">
      <div>
        <p>Logo</p>
      </div>

      <div className=" flex flex-row w-[40%] items-center font-bold justify-around">
        <div
          className="flex flex-row items-center gap-2"
          onMouseEnter={() => setProductHovered(true)}
        >
          <NavItem
            text="Products"
            className=""
            to="/Products"
            isMobileNav={isMobileNav}
          />
          <NavSectionArrowIcon />
        </div>

        <NavItem text="Service" className="" to="" isMobileNav={isMobileNav} />
        <NavItem text="About" className="" to="/About" isMobileNav={isMobileNav} />
      </div>

      <div>
        <NavItem
          text="Contact"
          className="w-[20%] text-start font-bold"
          to=""
          isMobileNav={isMobileNav}
        />
      </div>

      {isProductHovered && (
        <div className=" absolute rounded-[5px] top-[12%] grid grid-rows-2 font-normal text-ellipsis left-[35%]  w-[400px] z-30 bg-white ">
          <div className=" grid grid-cols-3 gap-[5%] p-3 text-[15px] h-[100px]">
          <NavBarProductList text="Chair"/>
          <NavBarProductList text="Door"/>
          <NavBarProductList text="Chair"/>
          <NavBarProductList text="Bed"/>
          <NavBarProductList text="Table 1"/>
          <NavBarProductList text="Table 2"/>
          <NavBarProductList text="Table 3"/>
          <NavBarProductList text="Table 4"/>
          <NavBarProductList text="Table 5"/>
          <NavBarProductList text="Table 6"/> 
          <NavBarProductList text="Table 7"/> 
          <NavBarProductList text="Table 8"/> 
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
