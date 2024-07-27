'use client'

import Hero from "@/components/Home/Hero";
import { NavBar } from "@/components/NavBar";
import ProductList from "@/components/ProductList/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <ProductList/>
    </div>
  );
}
