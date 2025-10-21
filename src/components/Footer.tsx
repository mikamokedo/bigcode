import React from "react";
import { CheckBadgeIcon, TicketIcon, CurrencyDollarIcon, BoltIcon } from "@heroicons/react/24/solid";
import SiteFooter from "./SiteFooter";


export const Footer: React.FC = () => {
    return (
        <div className="mt-[8px] flex flex-col gap-[16px]">
            <div className="[box-shadow:0px_0px_0px_8px_#00000024]">
                <div className="container flex gap-[50px] py-[10px]">
                    <div className="text-[14px] font-[600] text-[#00833E]">
                        Cam kết
                    </div>
                    <div className="flex gap-[10px] border-r-1 pr-[50px] text-[12px] text-[#333333] font-[500] items-center">
                        <div className="w-[20px] h-[20px]">

                        <CheckBadgeIcon  color="#00833E"/>
                        </div>
                        Sản phẩm tươi sống
                    </div>
                    <div className="flex gap-[10px] border-r-1 pr-[50px] text-[12px] text-[#333333] font-[500] items-center">
                        <div className="w-[20px] h-[20px]">

                        <TicketIcon  color="#00833E"/>
                        </div>
                        Nhiều mã ưu đãi
                    </div>
                    <div className="flex gap-[10px] border-r-1 pr-[50px] text-[12px] text-[#333333] font-[500] items-center">
                        <div className="w-[20px] h-[20px]">

                        <CurrencyDollarIcon  color="#00833E"/>
                        </div>
                        Giá siêu rẻ
                    </div>
                    <div className="flex gap-[10px] text-[12px] text-[#333333] font-[500] items-center">
                        <div className="w-[20px] h-[20px]">

                        <BoltIcon  color="#00833E"/>
                        </div>
                        Giao nhanh
                    </div>
                </div>
            </div>
            <div className="container">
                <SiteFooter/>
            </div>
            
        </div>
    )
}