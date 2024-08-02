import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowToLeft } from '../ReusableComponent/Icons'; // Assuming you have a HomeIcon component
import NavItem from './NavItem';

interface SecondNavBar {
    isNavNeed:boolean
}

const SecondNavBar: React.FC<SecondNavBar> = ({isNavNeed}) => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/Products');
  };

  return (
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
      </div>
    </div>
  </div>
  );
};

export default SecondNavBar;
