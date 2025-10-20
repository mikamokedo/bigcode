import type { PropsWithChildren, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Reuse the main carousel styles
import "./CarouselProduct.css";
import { CustomNextArrow, CustomPrevArrow } from "./Carousel";

interface CarouselProductProps {
  arrow?: boolean;
  dots?: boolean;
  autoplay?: boolean;
}

export const CarouselProduct: FC<PropsWithChildren<CarouselProductProps>> = ({
  arrow = true,
  dots = false,
  autoplay = false,
  children,
}) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: arrow,
    prevArrow: arrow ? <CustomPrevArrow /> : undefined,
    nextArrow: arrow ? <CustomNextArrow /> : undefined,
    customPaging: () => <div></div>,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto carousel-container carousel-container-prod w-full">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
