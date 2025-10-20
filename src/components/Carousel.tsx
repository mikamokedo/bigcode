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
    image: "https://placehold.co/520x232/FFA500/FFFFFF?text=Slide+1",
    alt: "Promotional slide 1",
  },
  {
    id: 2,
    image: "https://placehold.co/520x232/FF69B4/FFFFFF?text=Slide+2",
    alt: "Promotional slide 2",
  },
  {
    id: 3,
    image: "https://placehold.co/520x232/00BFFF/FFFFFF?text=Slide+3",
    alt: "Promotional slide 3",
  },
  {
    id: 4,
    image: "https://placehold.co/520x232/8A2BE2/FFFFFF?text=Slide+4",
    alt: "Promotional slide 4",
  },
];

interface CarouselProps {
  arrow?: boolean;
  dots?: boolean;
  autoplay?: boolean;
}

// Custom Arrow Components
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev-arrow" onClick={onClick} aria-label="Previous slide">
      <img src="/src/assets/dot-arrow-right.png" alt="Previous" className="arrow-image arrow-prev" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next-arrow" onClick={onClick} aria-label="Next slide">
      <img src="/src/assets/dot-arrow-right.png" alt="Next" className="arrow-image arrow-next" />
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
    <div className="max-w-6xl mx-auto carousel-container w-full">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <div className="slide-item w-full h-48 sm:h-60 md:h-72 relative overflow-hidden">
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
