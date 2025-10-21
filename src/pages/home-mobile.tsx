import { Banner } from "../components/mobile/Banner";
import { FlashSale } from "../components/mobile/FlashSale";
import { Header } from "../components/mobile/Header";
import { OutstandingProduct } from "../components/mobile/OutstandingProduct";
import { SlideBarMobile } from "../components/mobile/SlideBar";

const slideBar = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
}));

export const HomeMobile = () => {
  return (
    <div className="container-mobile flex flex-col gap-[12px] overflow-hidden">
      <Header />
      <SlideBarMobile>
        {slideBar.map((item) => {
          return (
            <div key={item.id} style={{ width: 96 }}>
              <div className="product-card flex flex-col gap-[8px] justify-center items-center">
                <img src="assets/slide-bar1MB.png" className="w-[56px] h-[56px] object-cover rounded-full" alt="" />
                <div className="text-[12px] font-[600] text-[#333333] text-center">Thức ăn chế biến</div>
              </div>
            </div>
          );
        })}
      </SlideBarMobile>
      <Banner />
      <FlashSale />
      <OutstandingProduct title="Sản phẩm nổi bật" />
      <OutstandingProduct title="Sản phẩm yêu thích" />
      <OutstandingProduct title="Sản phẩm gợi ý" />
    </div>
  );
};
