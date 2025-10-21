import React from "react";

const listNews = Array.from({ length: 4 }).map((_, i) => (
    {
        id: i+1,
        image: '/src/assets/imageNews.png',
        time: '16:59, 20/08/2025',
        content: 'Dịch vụ đi chợ thuê tại TP.HCM giải pháp cho người bận rộn'
    }
))

export const SmartMarketNews: React.FC = () => {
    return (
        <div className="border-t-1 container flex flex-col gap-[16px]">
            <div className="flex justify-between items-center">
                <div className="text-[20px] font-[600] text-[#1A1A1A]">Tin tức Chợ Thông Minh</div>
                <button className="text-[14px] font-[600] text-[#1E88E5] border-none bg-inherit">Xem thêm</button>
            </div>
            <div className="flex gap-[16px]">
                {listNews.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col gap-[8px]">
                            <img className="object-cover w-[292px] h-[217px] rounded-[8px]" src={item.image} alt="" />
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[12px] text-[#666666]">{item.time}</div>
                                <div className="text-[14px] text-[#333333] font-[500]">{item.content}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}