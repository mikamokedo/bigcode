import React from "react";

export const Header: React.FC = () => {
    return (
        <div className="z-10 relative bg-[linear-gradient(0deg,#138636,#138636),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] p-[12px] flex flex-col gap-[12px]">
            <div className="z-10 flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                    <img src="/src/assets/arrowLeftMB.svg" alt="" />
                    <div className="text-[white]">
                        <span className="text-[12px]">Giao tới</span>
                        <div className="text-[14px] font-[600]">Địa chỉ giao hàng</div>
                    </div>
                </div>
                <div className="flex gap-[12px]">
                    <button className="bg-inherit border-none cursor-pointer"><img src="/src/assets/basketHeaderMB.svg" alt="" /></button>
                    <button className="bg-inherit border-none cursor-pointer"><img src="/src/assets/notificationMB.svg" alt="" /></button>
                </div>
            </div>
            <div className="z-10 w-full relative">
                <input 
                    className="pl-[30px] max-w-full w-[calc(100%-40px)] outline-[0px] bg-inherit border-1 border-[white] rounded-[8px] p-[8px] text-[white] placeholder-[white]" 
                    type="text" 
                    placeholder="Bạn cần mua gì?" 
                />
                <img src="/src/assets/searchMB.svg" className="absolute top-[50%] translate-y-[-50%] left-[10px]" alt="" />
            </div>
            <img src="/assets/headerMB.jpg" className="transform scale-x-[-1] opacity-25 absolute top-[0px] left-[0px] w-full h-full inset-0 object-cover z-0" alt="" />
        </div>
    )
}