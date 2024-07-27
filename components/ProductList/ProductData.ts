// 'use client'

import { MiniSofaImg, SofaImg, TableImg } from "@/assets/ProductList/index";

const ProductData = [
    {
        id: "1",
        name: "Mini Sofa with bed",
        thumbnail: MiniSofaImg,
        category: "furniture",
        image: [MiniSofaImg, SofaImg, TableImg],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rating: "3",
        aboutOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aboutTwo: "Quidem porro molestiae vero, debitis facere accusantium rem.",
        price: "1000",
    },
    {
        id: "2",
        name: "Green Sofa with billow",
        thumbnail: SofaImg,
        category: "furniture",
        image: [MiniSofaImg, SofaImg, TableImg],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rating: "3",
        aboutOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aboutTwo: "Quidem porro molestiae vero, debitis facere accusantium rem.",
        price: "1000",
    },
    {
        id: "3",
        name: "Laptop table",
        thumbnail: TableImg,
        category: "furniture",
        image: [MiniSofaImg, SofaImg, TableImg],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rating: "3",
        aboutOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aboutTwo: "Quidem porro molestiae vero, debitis facere accusantium rem.",
        price: "1000",
    },
];

export default ProductData;
