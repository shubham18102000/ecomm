import React, { useState } from 'react';
import img1 from "../assets/product/headphone.jpg";
import img3 from "../assets/product/study-lamp.jpg";
import img4 from "../assets/product/laptop-bag.jpg";
import img7 from "../assets/product/luxury-pen.jpg";
import Customerfav from "./Customerfav";
import QuickView from './QuickView';

const products = [
  {
    id: 1,
    name: 'Boat-Headphone',
    href: '#',
    imageSrc: img1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description: 'High-quality headphones with great sound.',
    colors: [
      { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-400' }
    ],
    sizes: [
      { name: 'One Size', inStock: true }
    ]
  },
  {
    id: 2,
    name: 'Study Lamp',
    href: '#',
    imageSrc: img3,
    imageAlt: "Study lamp for reading.",
    price: '$20',
    color: 'White',
    description: 'Bright and adjustable study lamp.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' }
    ],
    sizes: [
      { name: 'One Size', inStock: true }
    ]
  },
  {
    id: 3,
    name: 'Luxury Pen',
    href: '#',
    imageSrc: img7,
    imageAlt: "Luxury pen for writing.",
    price: '$15',
    color: 'Black',
    description: 'Elegant and smooth writing pen.',
    colors: [
      { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-400' }
    ],
    sizes: [
      { name: 'One Size', inStock: true }
    ]
  },
  {
    id: 4,
    name: 'Laptop Bag',
    href: '#',
    imageSrc: img4,
    imageAlt: "Stylish laptop bag.",
    price: '$50',
    color: 'Grey',
    description: 'Durable and stylish laptop bag.',
    colors: [
      { name: 'Grey', class: 'bg-gray-400', selectedClass: 'ring-gray-400' }
    ],
    sizes: [
      { name: 'One Size', inStock: true }
    ]
  }
];

export default function Productitems() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <div className="loginhead bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative" onClick={() => handleProductClick(product)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <QuickView product={selectedProduct} open={isQuickViewOpen} setOpen={setIsQuickViewOpen} />
      )}
      <Customerfav />
    </>
  );
}
