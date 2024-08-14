import React, { useState } from "react";

const FilteringPanel = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className="w-[350px] px-[3%] space-y-6">
      {/** This is category */}
      <div className="border-[1px] px-[3%] py-[4%] rounded-[5px] shadow-xl">
        <p className="font-semibold">Category</p>
        <div className="grid grid-cols-2 gap-[4%] py-[5%] text-[12px]">
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category1</p>
          </div>
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category2</p>
          </div>
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category3</p>
          </div>
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category4</p>
          </div>
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category5</p>
          </div>
          <div className="p-2 rounded-[5px] border text-center hover:bg-gray-300 cursor-pointer">
            <p>Category6</p>
          </div>
        </div>
      </div>

      {/** This is Price range */}
      <div className="border-[1px] px-[3%] py-[4%] rounded-[5px] shadow-xl">
        <p className="font-semibold mb-[5%]">Price Range</p>
        <div className="flex justify-between items-center">
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-[45%] border rounded-[5px] p-2 text-center"
            min="0"
          />
          <span className="mx-2 text-gray-600">to</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-[45%] border rounded-[5px] p-2 text-center"
            max="10000"
          />
        </div>
        <div className="mt-[5%]">
          <input
            type="range"
            min="0"
            max="10000"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full  accent-black"
          />
          <input
            type="range"
            min="0"
            max="10000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full mt-[5%] accent-black"
          />
        </div>
        <div className="mt-[5%] text-center text-sm text-gray-600">
          Selected range: ₹{minPrice} - ₹{maxPrice}
        </div>
      </div>
    </div>
  );
};

export default FilteringPanel;
