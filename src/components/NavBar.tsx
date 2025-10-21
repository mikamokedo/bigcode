const listSuggest: { image: string; label: string }[] = [
  {
    image: "/src/assets/ellipse1.svg",
    label: "Rau củ quả",
  },
  {
    image: "/src/assets/ellipse2.svg",
    label: "Thủy sản, hải sản",
  },
  {
    image: "",
    label: "Dầu ăn, nước chấm",
  },
  {
    image: "",
    label: "Gạo nếp, ngũ cốc",
  },
  {
    image: "",
    label: "Bánh kẹo, ăn vặt",
  },
  {
    image: "",
    label: "Đồ dùng cá nhân",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
  {
    image: "",
    label: "Rau củ quả",
  },
];

export const NavBar = () => {
  return (
    <div className="bg-[#FFFFFF] w-[244px] flex flex-col gap-[20px] py-[16px] px-[12px] rounded-[8px] shadow-[0px_1px_1px_0px_#00000024] w-[244px] shrink-[0] self-baseline">
      <div className="text-[16px] text-[#1A1A1A] font-[600]">Đi chợ giúp bạn</div>
      <div className="flex flex-col gap-[16px] px-[8px]">
        {listSuggest.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-[12px]">
              {item.image ? (
                <img src={item.image} className="h-[40px] w-[40px] object-cover rounded-full" alt="" />
              ) : (
                <div className="h-[40px] w-[40px] bg-[#D9D9D9] rounded-full"></div>
              )}
              <div className="text-[16px] leading-[24px] text-[#1A1A1A] font-[500]">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
