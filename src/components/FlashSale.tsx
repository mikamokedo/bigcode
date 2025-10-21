type Product = {
  id: number;
  title: string;
  subtitle?: string;
  price: string;
  oldPrice?: string;
  discount?: string; // e.g. "-33%"
  image?: string;
};

const demoProducts: Product[] = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  title: "Tiêu đề sản phẩm 1 dòng",
  subtitle: "Tên tiêu thương",
  price: "10.002.000₫",
  oldPrice: "1.200.000₫",
  discount: "-33%",
  image: undefined,
}));

export const FlashSale = () => {
  return (
    <section
      className="bg-[linear-gradient(to_top,#ffffff_0%,#fff3b9_100%)] p-[16px] relative rounded-[8px] [box-shadow:0px_1px_1px_0px_#00000024]"
      aria-labelledby="flashsale-heading"
    >
      <div className="w-full">
        <header className="flex justify-between mb-[16px] items-end">
          <div className="flex gap-[8px]">
            <img src="/src/assets/ThumbsUp(1).gif" alt="thumbs up" className="w-[32px] h-[30px]" />
            <div className="text-[28px] text-[#B3261E] font-[600]">FLASH SALE</div>
          </div>
          <div>
            <button className="text-[14px] bg-inherit border-none text-[#333333] font-[600] hover:underline cursor-pointer">
              Xem thêm
            </button>
          </div>
        </header>

        <div className="flex gap-[14px]" role="list">
          {demoProducts.map((p) => (
            <div
              className="bg-[#fff] w-[168px] rounded-[8px] [box-shadow:0_1px_0_rgba(0,0,0,0.06)] flex flex-col flex-none overflow-hidden"
              key={p.id}
            >
              <div className="h-[168px] relative bg-[#e5e7eb]">
                <div
                  className="absolute right-[8px] top-[8px] bg-[#d33] text-[white] py-[4px] px-[8px] rounded-[6px] text-[12px] font-[600]"
                  aria-hidden
                >
                  {p.discount}
                </div>
                <div className="w-full h-full" />
              </div>
              <div className="p-[8px] flex flex-col gap-[4px]">
                <div className="text-[12px] font-[500] text-[#999999]">{p.subtitle}</div>
                <div className="text-[14px] font-[600] text-[#333333]">{p.title}</div>
                <div className="flex flex-col gap-[4px]">
                  <div className="text-[#0b8a4a] text-[16px] font-[800]">{p.price}</div>
                  <div className="text-[14px] text-[#808080] font-[600] line-through">{p.oldPrice}</div>
                </div>
                <div className="w-full">
                  <div className="w-full h-[20px] relative bg-[#00833E]/25 rounded-full">
                    <div className="absolute bg-[#00833E] w-[60%] h-[20px] rounded-full"></div>
                    <div className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-[10px] font-[500] text-[#FFFFFF]">
                      Đang bán chạy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
