import { CarouselProduct } from "../CarouselProduct";
import "./FlashSale.css";

const listRender = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
}));

export const FlashSale = () => {
  return (
    <div className="FlashSale-mb flex flex-col gap-[12px] p-[12px] bg-[#f7faf3]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <img src="/assets/bellFlashSaleMB.svg" alt="" />
          <div className="text-[16px] font-[700] text-[#C91432]">FLASH SALE</div>
        </div>
        <img src="/assets/nextArrowMB.svg" alt="" />
      </div>

      <div className="bg-[#f7faf3]">
        <CarouselProduct arrow={false} slidesToShow={2}>
          {listRender.map((item) => {
            return (
              <div key={item.id}>
                <div className="product-cart flex flex-col gap-[12px]">
                  <div className="rounded-[8px] w-[152px]  bg-[#fff]">
                    <img
                      src="assets/slide-bar3MB.png"
                      className="object-cover h-[132px] w-[152px] rounded-t-[8px]"
                      alt=""
                    />
                    <div className="flex flex-col gap-[4px] py-[4px] px-[8px]">
                      <div className="flex flex-col gap-[4px]">
                        <div className="flex gap-[4px] text-[10px] text-[#d4435b] overflow-ellipsis overflow-hidden whitespace-nowrap">
                          <img src="/assets/discountMB.svg" alt="" />
                          <span>Giảm 6.000đ</span>
                          <span>•</span>
                          <span>Cho hóa đơn trên 1.000.000đ</span>
                        </div>
                      </div>
                      <div className="text-[14px] font-[600] leading-[20px]">Tên của cửa hàng/ tiểu thương</div>
                      <div className="flex gap-[4px] text-[12px] text-[#666666]">
                        <span>25 phút trở lên</span>
                        <span>•</span>
                        <span>5 km</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[8px] w-[152px]  bg-[#fff]">
                    <img
                      src="/assets/slide-bar3MB.png"
                      className="object-cover h-[132px] w-[152px] rounded-t-[8px]"
                      alt=""
                    />
                    <div className="flex flex-col gap-[4px] py-[4px] px-[8px]">
                      <div className="flex flex-col gap-[4px]">
                        <div className="flex gap-[4px] text-[10px] text-[#d4435b] overflow-ellipsis overflow-hidden whitespace-nowrap">
                          <img src="/assets/discountMB.svg" alt="" />
                          <span>Giảm 6.000đ</span>
                          <span>•</span>
                          <span>Cho hóa đơn trên 1.000.000đ</span>
                        </div>
                      </div>
                      <div className="text-[14px] font-[600] leading-[20px]">Tên của cửa hàng/ tiểu thương</div>
                      <div className="flex gap-[4px] text-[12px] text-[#666666]">
                        <span>25 phút trở lên</span>
                        <span>•</span>
                        <span>5 km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </CarouselProduct>
      </div>
    </div>
  );
};
