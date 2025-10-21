import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

interface SlideData {
  id: number;
  image: string;
  alt: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    image: "/assets/carousel1.png",
    alt: "Promotional slide 1",
  },
  {
    id: 2,
    image: "/assets/carousel2.png",
    alt: "Promotional slide 2",
  },
  {
    id: 3,
    image: "/assets/carousel3.png",
    alt: "Promotional slide 3",
  },
];

interface CarouselProps {
  arrow?: boolean;
  dots?: boolean;
  autoplay?: boolean;
}

// Custom Arrow Components
export const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev-arrow" onClick={onClick} aria-label="Previous slide">
      <img src="/assets/dot-arrow-right.png" alt="Previous" className="arrow-image arrow-prev" />
    </button>
  );
};

export const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next-arrow" onClick={onClick} aria-label="Next slide">
      <img src="/assets/dot-arrow-right.png" alt="Next" className="arrow-image arrow-next" />
    </button>
  );
};

export const Carousel: React.FC<CarouselProps> = ({ arrow = false, dots = true, autoplay = true }) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: arrow,
    prevArrow: arrow ? <CustomPrevArrow /> : undefined,
    nextArrow: arrow ? <CustomNextArrow /> : undefined,
    centerMode: true,
    centerPadding: "21%",
    focusOnSelect: true,
    customPaging: () => <div></div>,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto carousel-container carousel-container-main w-full relative">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <div className="aspect-[4/2] slide-item w-full h-48 sm:h-60 md:h-72 relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
