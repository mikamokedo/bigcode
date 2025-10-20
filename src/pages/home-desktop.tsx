import React from "react";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

export const HomeDesktop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Carousel />
      </div>
    </div>
  );
};
