import React from "react";

type Product = {
  id: number;
  title: string;
  subtitle?: string;
  price: string;
  oldPrice?: string;
  discount?: string; // e.g. "-33%"
  image?: string;
};

const demoProducts: Product[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  title: "Tiêu đề sản phẩm 1 dòng",
  subtitle: "Tên tiêu thương",
  price: "10.002.000₫",
  oldPrice: "1.200.000₫",
  discount: "-33%",
  image: undefined,
}));

export const Suggestions: React.FC = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[20px] font-[600] text-[#1A1A1A]">Gợi ý cho bạn</div>
      <div className="grid grid-cols-5 gap-[16px]">
        {demoProducts.map((p: Product) => {
          return (
            <div className="" key={p.id}>
              <div className="bg-[#fff] px-2 [box-shadow:0px_1px_1px_0px_#0000001A] w-[172px] rounded-[8px] flex flex-col flex-none overflow-hidden">
                <div className="h-[172px] relative bg-[#e5e7eb]">
                  <div
                    className="absolute right-[8px] top-[8px] bg-[#d33] text-[white] py-[4px] text-[white] px-[8px] rounded-[6px] text-[12px] font-[600]"
                    aria-hidden
                  >
                    {p.discount}
                  </div>
                  <div className="w-full h-full" />
                </div>
                <div className="p-[8px] flex flex-col gap-[4px]">
                  <div className="text-[12px] font-[500] text-[#999999]">{p.subtitle}</div>
                  <div className="text-[14px] font-[600] text-[#333333]">{p.title}</div>
                  <div className="flex gap-[4px]">
                    <div className="whitespace-nowrap rounded-r-[4px] w-fit text-[10px] font-[500] border-1 border-[#FF6F3C] text-[#FF6F3C] px-[4px] py-[6px] rounded-[4px]">
                      Tặng 1 chai Chinsu
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-[4px]">
                      <div className="text-[#0b8a4a] text-[16px] font-[800]">{p.price}</div>
                      <div className="text-[14px] text-[#808080] font-[600] line-through">{p.oldPrice}</div>
                    </div>
                    <div className="w-[32px] h-[32px] cursor-pointer">
                      <img src="/assets/plusCircle.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="px-[50px] py-[10px] border-none bg-inherit text-[14px] font-[600] text-[#1E88E5] flex items-center cursor-pointer hover:underline cursor-pointer">
          Xem thêm 10 sản phẩm <img src="/assets/chevronDown.svg" alt="" />{" "}
        </button>
      </div>
    </div>
  );
};
