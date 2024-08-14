'use client'

import Bento from "@/components/Bento/Bento";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import PopularProduct from "@/components/Home/PopularProduct";
import { NavBar } from "@/components/NavBar";
import ProductList from "@/components/ProductList/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Hero />

     <PopularProduct/>

    </div>
  );
}
