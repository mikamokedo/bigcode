import React from "react";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { CarouselProduct } from "../components/CarouselProduct";
import { GotoTop } from "../components/GotoTop";

const productsData = [
  {
    id: 1,
    image: "https://placehold.co/300x300/FF6347/FFFFFF?text=Product+1",
    title: "Stylish Jacket",
    discount: "20% OFF",
  },
  {
    id: 2,
    image: "https://placehold.co/300x300/3CB371/FFFFFF?text=Product+2",
    title: "Running Shoes",
    discount: "15% OFF",
  },
  {
    id: 3,
    image: "https://placehold.co/300x300/1E90FF/FFFFFF?text=Product+3",
    title: "Smart Watch",
    discount: "10% OFF",
  },
  {
    id: 4,
    image: "https://placehold.co/300x300/FFD700/FFFFFF?text=Product+4",
    title: "Wireless Earbuds",
    discount: "25% OFF",
  },
  {
    id: 5,
    image: "https://placehold.co/300x300/FF69B4/FFFFFF?text=Product+5",
    title: "Designer Handbag",
    discount: "30% OFF",
  },
];

export const HomeDesktop = () => {
  return (
    <div className="min-h-screen">
      <GotoTop />
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Carousel />

        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
          <CarouselProduct>
            {productsData.map((product) => (
              <div key={product.id} className="px-2">
                <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="product-image-container h-48 relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="product-info p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-800 mb-1">{product.title}</h3>
                    <p className="text-xs text-gray-600">{product.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </CarouselProduct>
        </div>
      </div>
    </div>
  );
};
