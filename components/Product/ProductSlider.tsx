// components/ProductSlider.tsx
import React from 'react';
import Slider from 'react-slick
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  image: string;
  name: string;
  type: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random/300x200?product1',
    name: 'Product 1',
    type: 'Type A',
    description: 'Description of Product 1',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/300x200?product2',
    name: 'Product 2',
    type: 'Type B',
    description: 'Description of Product 2',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/300x200?product3',
    name: 'Product 3',
    type: 'Type C',
    description: 'Description of Product 3',
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/random/300x200?product4',
    name: 'Product 4',
    type: 'Type D',
    description: 'Description of Product 4',
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/random/300x200?product5',
    name: 'Product 5',
    type: 'Type E',
    description: 'Description of Product 5',
  },
];

const ProductSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.type}</p>
              <p className="text-gray-800">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
