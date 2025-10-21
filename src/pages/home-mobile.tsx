import { Banner } from "../components/mobile/Banner";
import { FlashSale } from "../components/mobile/FlashSale";
import { Header } from "../components/mobile/Header";
import { OutstandingProduct } from "../components/mobile/OutstandingProduct";
import { SlideBar } from "../components/mobile/SlideBar";

export const HomeMobile = () => {
  return <div className="container-mobile flex flex-col gap-[12px]">
    <Header/>
    <SlideBar/>
    <Banner/>
    <FlashSale/>
    <OutstandingProduct title="Sản phẩm nổi bật"/>
    <OutstandingProduct title="Sản phẩm yêu thích"/>
    <OutstandingProduct title="Sản phẩm gợi ý"/>
  </div>;
};
