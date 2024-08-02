'use client'

import Bento from "@/components/Bento/Bento";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import { NavBar } from "@/components/NavBar";
import ProductList from "@/components/ProductList/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Hero />

      <div className="py-6">
        <p className="text-3xl md:text-2xl text-center mb-12">Top Sale Products</p>
        <ProductList />
        <ProductList />
      </div>
      {/* <Bento/> */}

    </div>
  );
}
