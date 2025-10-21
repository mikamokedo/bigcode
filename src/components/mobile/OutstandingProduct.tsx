const list = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  img: "/assets/slide-bar1MB.png",
  title: "Thức ăn chế biến",
  isBestSell: true,
}));

interface Props {
  title: string;
}

export const OutstandingProduct = ({ title }: Props) => {
  return (
    <div className="flex flex-col gap-[12px] mb-[8px]">
      <div className="flex items-center gap-[8px]">
        <img src="/assets/bellFlashSaleMB.svg" alt="" />
        <div className="text-[16px] font-[700]">{title}</div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="grid grid-cols-2 gap-[12px]">
          {list.map((item) => {
            return (
              <div className="rounded-[8px]  bg-[#fff]">
                <div className="relative">
                  <img
                    src="/assets/slide-bar3MB.png"
                    className="object-cover h-[164px] w-full rounded-t-[8px]"
                    alt=""
                  />
                  {item.isBestSell && (
                    <div className="text-[10px] text-[white] absolute top-[4px] left-[4px] py-[4px] px-[8px] rounded-[4px] bg-[#4d8207]">
                      Bán chạy
                    </div>
                  )}
                  <img
                    src="/assets/vectorMB.svg"
                    className="absolute p-[6px] rounded-full bottom-[8px] right-[4px] bg-[#4d8207]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[4px] py-[4px] px-[8px]">
                  <div className="text-[14px] font-[600] leading-[20px] text-[#666666]">Tên sản phẩm của cửa hàng</div>
                  <div className="text-[16px] font-[700] leading-[24px] text-[#C91432]">47.000</div>
                  <div className="text-[12px] text-[#808080] line-through flex items-center gap-[4px]">
                    1.470.000 <img src="/assets/discountMB.svg" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-[14px] font-[700] text-[#4976BA] text-center leading-[20px] cursor-pointer">Xem thêm</div>
    </div>
  );
};
