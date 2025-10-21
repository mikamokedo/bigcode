import React from "react";
import { CarouselProduct } from "./CarouselProduct";

type Product = {
    id: number;
    title: string;
    subtitle?: string;
    price: string;
    oldPrice?: string;
    discount?: string; // e.g. "-33%"
    image?: string;
};

const demoProducts: Product[] = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: "Tiêu đề sản phẩm 1 dòng",
    subtitle: "Tên tiêu thương",
    price: "10.002.000₫",
    oldPrice: "1.200.000₫",
    discount: "-33%",
    image: undefined,
}));

interface PromotionType {
    arrowPosition: 'left'|'right' 
}

export const Promotion: React.FC<PromotionType> = ({arrowPosition}) => {
    return (
        <section className="flex flex-col gap-[16px]">
            <div className="font-[600] text-[#1A1A1A] text-[20px]">Chương trình khuyến mại</div>
            <div className="w-full relative">
                <div className="h-full w-[80px] right-[0px] bg-[linear-gradient(270deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] absolute "></div>
                <CarouselProduct slidesToShow={5} arrowPosition={arrowPosition} >
                    {demoProducts.map((p) => (
                        <div className="" key={p.id}>
                            <div className="product-card bg-[#fff] [box-shadow:0px_1px_1px_0px_#0000001A] w-[172px] rounded-[8px] [box-shadow:0_1px_0_rgba(0,0,0,0.06)] flex flex-col flex-none overflow-hidden">
                                <div className="h-[172px] relative bg-[#e5e7eb]">
                                    <div className="absolute right-[8px] top-[8px] bg-[#d33] text-[white] py-[4px] px-[8px] rounded-[6px] text-[12px] font-[600]" aria-hidden>{p.discount}</div>
                                    <div className="w-full h-full" />
                                </div>
                                <div className="p-[8px] flex flex-col gap-[4px]">
                                    <div className="text-[12px] font-[500] text-[#999999]">{p.subtitle}</div>
                                    <div className="text-[14px] font-[600] text-[#333333]">{p.title}</div>
                                    <div className="flex gap-[4px]">
                                        <div className="whitespace-nowrap w-[12px] hover:w-fit transition-all duration-[0.3s] text-[10px] font-[500] text-[white] bg-[#006429] px-[4px] py-[6px] rounded-[4px]">Sale cực sốc</div>
                                        <div className="whitespace-nowrap rounded-r-[0px] hover:rounded-r-[4px] w-[31px] hover:w-fit transition-all duration-[0.3s] text-[10px] font-[500] text-[white] bg-[#FF6F3C] px-[4px] py-[6px] rounded-[4px]">Tặng 1 chai Chinsu</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col gap-[4px]">
                                            <div className="text-[#0b8a4a] text-[16px] font-[800]">{p.price}</div>
                                            <div className="text-[14px] text-[#808080] font-[600] line-through">{p.oldPrice}</div>
                                        </div>
                                        <div className="w-[32px] h-[32px] cursor-pointer">
                                            <img src="/src/assets/plusCircle.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </CarouselProduct>
            </div>
        </section>
    );
};
