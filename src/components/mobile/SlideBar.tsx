import type { PropsWithChildren, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide-mobile-product.css";

interface SlideBarMobileProps {
  slidesToShow?: number;
}

export const SlideBarMobile: FC<PropsWithChildren<SlideBarMobileProps>> = ({ slidesToShow = 4, children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    centerMode: false,
    variableWidth: true,
    className: "slider variable-width",
  };

  return (
    <div className="py-[12px] w-[600px] carousel-container-main-mobile">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
