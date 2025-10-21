import React from "react";

const searchCategorySuggestions = ["Rau củ quả", "Thịt tươi sống", "Thủy sản, hải sản", "Dầu ăn, nước chấm"];

export const Header = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div>
      <div className="container flex justify-between py-[14px] relative">
        <div className="flex items-center gap-[8px]">
          <img src="/assets/point.svg" alt="Point Icon" />
          <div className="text-[12px] text-[#1A1A1A]">Giao đến</div>
          <div className="cursor-pointer text-[12px] text-[#1A1A1A] underline">
            123 Đường 123, Phường Tân Phú, Thành phố Hồ Chí Minh
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/assets/storeOpen.svg" alt="" />
            <div className="text-[12px] text-[#333333]">Mở quán ăn trên Chợ Thông Minh</div>
          </div>
          <div className="border-l-1 mx-[16px]"></div>
          <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/assets/clipboardHeader.svg" alt="" />
            <div className="text-[12px] text-[#333333]">Mở chợ trên Chợ Thông Minh</div>
          </div>
          <div className="border-l-1 mx-[16px]"></div>
          <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/assets/phoneHeader.svg" alt="" />
            <div className="text-[12px] text-[#333333]">Liên hệ chúng tôi</div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-[#808080]"></div>
      <div className="container flex gap-[20px] py-[20px]">
        <div className="w-[267px] flex justify-center">
          <img src="/assets/logoHeader.svg" alt="" />
        </div>
        <div className="w-[908px] flex items-start gap-[20px]">
          <div className="w-[600px]">
            <div className="relative">
              <input
                className="shadow-[0_1px_1px_0_#00000024] border-1 w-[calc(100%-34px)] border-[#333333] rounded-[8px] py-[12px] px-[16px] text-[#808080] text-[14px] font-medium outline-[0px]"
                type="text"
                placeholder="Bạn cần tìm gì ở Chợ Thông Minh..."
              />
              <img className="absolute top-[12px] right-[16px]" src="/assets/search.svg" alt="" />
            </div>
            <ul className="flex list-none gap-[12px] mt-[4px]">
              {searchCategorySuggestions.map((item, index) => {
                return (
                  <li key={index} className="cursor-pointer text-[#808080] text-[14px] leading-[20px]">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-[20px]">
            <div className="flex items-center gap-[20px] w-[82px]">
              <img className="cursor-pointer" src="/assets/basketHeader.svg" alt="" />
              <img className="cursor-pointer" src="/assets/bellHeader.svg" alt="" />
            </div>
            <button className="font-[500] cursor-pointer bg-gradient-to-r from-[#009F38] to-[#00592A] text-[#fff] border-1 py-[8px] px-[16px] flex gap-[10px] items-center w-[190px] justify-center radius rounded-[50px] hover:opacity-90 transition-opacity duration-300">
              <img src="/assets/user.svg" alt="" />
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-[#808080]"></div>
      <div
        className={`h-[64px] relative overflow-hidden ${
          activeIndex === 0
          ? "bg-[linear-gradient(90deg,_#FFFFFF_25%,_#57FFA7_100%)]"
          : "bg-[linear-gradient(90deg,_#FFFFFF_25%,_#FFB49C_100%)]"
          }`}
      >
        {
          activeIndex === 0 ? (
            <img src="/src/assets/shoppingCartHeader.svg" className="absolute w-[350px] h-[350px] top-[-120px] right-[-40px] opacity-50" alt="" />
          ) : (
            <img src="/src/assets/hotDogHeader.svg" className="absolute w-[350px] h-[350px] top-[-120px] right-[-40px] opacity-50" alt="" />
          )
        }
        <div className="container flex gap-[29px] h-full">
          <div className="w-[272px] overflow-hidden">
            <div className="flex items-center animate-slide-left-right">
              <img src="/assets/animation-2.png" alt="" />
              <img src="/assets/animation-1.png" alt="" />
            </div>
          </div>
          <div className="flex gap-[29px]">
            <div className="flex flex-col justify-between cursor-pointer" onClick={() => setActiveIndex(0)}>
              <div className="flex gap-[8px] items-center">
                <img src="/assets/shoppingCartHeader.svg" alt="" />
                <div>
                  <span className="text-[12px] text-[#666666] font-[500]">Hôm nay ăn gì?</span>
                  <div className="text-[16px] text-[#1A1A1A] font-[500]">Đi chợ</div>
                </div>
              </div>
              {activeIndex === 0 && <div className="w-full h-[4px] bg-[#00833E] rounded-t-full"></div>}
            </div>
            <div className="flex flex-col justify-between cursor-pointer" onClick={() => setActiveIndex(1)}>
              <div className="flex gap-[8px] items-center">
                <img src="/assets/hotDogHeader.svg" alt="" />
                <div>
                  <span className="text-[12px] text-[#666666] font-[500]">Menu hấp dẫn</span>
                  <div className="text-[16px] text-[#1A1A1A] font-[500]">Đặt đồ ăn</div>
                </div>
              </div>
              {activeIndex === 1 && <div className="w-full h-[4px] bg-[#FF6F3C] rounded-t-full"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
