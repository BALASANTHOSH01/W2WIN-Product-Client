import React from "react";

interface NavBarProductListProps {
  text: string;
}

const NavBarProductList: React.FC<NavBarProductListProps> = ({ text }) => {
  return (
    <div className="p-1 rounded-[5px] border text-center hover:bg-gray-200 cursor-pointer">
      <p>{text}</p>
    </div>
  );
};

export default NavBarProductList;
