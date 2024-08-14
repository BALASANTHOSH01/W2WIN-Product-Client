"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import ProductBG from "@/assets/Products/Productpage-BG.jpg";
import { Product } from "@/types/types";
import {
  CardIcon,
  DownArrowIcon,
  RightArrowIcon,
  ShopCardIcon,
} from "@/components/ReusableComponent/Icons";
import BreadCrumb from "@/components/ReusableComponent/BreadScrum";
import FilteringPanel from "@/components/Product/FilteringPanel";
import ProductList from "@/components/Product/ProductList";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList: Product[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">), // Ensure types are correct
        }));
        console.log(productsList); // Log the products list
        setProducts(productsList);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-[2%] bg-gray-200 px-[1%] h-auto">


      <div className=" mt-[4px] bg-white rounded-[5px]">
        <div className=" flex flex-row items-center justify-between px-[2%] py-[2%]">
          <BreadCrumb />

          <div className=" flex flex-row bg-gray-100 cursor-pointer hover:shadow-lg items-center gap-2 rounded-[25px] px-[17px] py-[7px] ">
            <p>Category</p>
            <DownArrowIcon />
          </div>
        </div>

        <div className=" flex flex-row items-start mb-[5%]">
          <FilteringPanel />
          <ProductList products={products}/>
        </div>

      </div>
    </div>
  );
};

export default Products;
