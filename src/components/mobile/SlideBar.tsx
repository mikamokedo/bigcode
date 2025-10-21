import React from "react";
import { CarouselProduct } from "../CarouselProduct";

const slideBar = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
}))

export const SlideBar: React.FC = () => {
    return (
        <div className="p-[12px]">
            <CarouselProduct arrow={false} slidesToShow={3}>
                {slideBar.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="product-card flex flex-col w-[100px] gap-[8px] justify-center items-center">
                                <img src="assets/slide-bar1MB.png" className="w-[56px] h-[56px] object-cover rounded-full" alt="" />
                                <div className="text-[12px] font-[600] text-[#333333]">Thức ăn chế biến</div>
                            </div>
                        </div>
                    )
                })}
            </CarouselProduct>
        </div>
    )
}