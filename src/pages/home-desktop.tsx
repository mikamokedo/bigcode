import React from "react";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { CarouselProduct } from "../components/CarouselProduct";
import { GotoTop } from "../components/GotoTop";
import { NavBar } from "../components/NavBar";
import { FlashSale } from "../components/FlashSale";
import { Promotion } from "../components/Promotion";
import { ProductPromoCarousel } from "../components/ProductPromoCarousel";
import { Suggestions } from "../components/Suggestions";
import { Footer } from "../components/Footer";
import { SmartMarketNews } from "../components/SmartMarketNews";
import MarketInfo from "../components/MarketInfo";

const productsData = [
  {
    id: 1,
    image: "/src/assets/featruedCategories1.svg",
    title: "Stylish Jacket",
    discount: "20% OFF",
  },
  {
    id: 2,
    image: "/src/assets/featruedCategories2.svg",
    title: "Running Shoes",
    discount: "15% OFF",
  },
  {
    id: 3,
    image: "/src/assets/featruedCategories3.svg",
    title: "Smart Watch",
    discount: "10% OFF",
  },
  {
    id: 4,
    image: "/src/assets/featruedCategories4.svg",
    title: "Wireless Earbuds",
    discount: "25% OFF",
  },
  {
    id: 5,
    image: "/src/assets/featruedCategories4.svg",
    title: "Designer Handbag",
    discount: "30% OFF",
  },
];

export const HomeDesktop = () => {
  return (
    <div className="min-h-screen">
      <GotoTop />
      <Header />
      <div className="flex gap-[20px] container mx-auto px-4 py-8 space-y-8">
        <NavBar />
        <div className="w-[calc(100%-288px)] flex flex-col gap-[16px]">
          <Carousel />
          <FlashSale />
          <Promotion arrowPosition="right" />
          <Promotion arrowPosition="left" />
          <ProductPromoCarousel arrow autoplay={false} arrowPosition="left" />
          <div className="py-8">
            <h2 className="text-[20px] text-[#1A1A1A] font-bold mb-6">Featured categories</h2>
            <CarouselProduct dots>
              {productsData.map((product) => (
                <div key={product.id} className="px-2">
                  <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="product-image-container h-48 relative rounded-[12px]">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </CarouselProduct>
          </div>
          <Carousel />
          <Suggestions />
        </div>
      </div>
      <SmartMarketNews />
      <MarketInfo />
      <Footer />
    </div>
  );
};
