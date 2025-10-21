import React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-white mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-[16px] pt-[65px] pb-[16px]">
          <div className="w-[400px] max-w-full flex flex-col gap-[12px]">
            <img src="/src/assets/smartMarket.svg" alt="Chợ Thông Minh" className="w-[230px] h-[70px] object-cover" />
            <div className="font-semibold font-[600] text-[16px] text-[#333333]">
              Công ty TNHH ĐT PT Công nghệ Bigcode
            </div>
            <div className="text-sm text-gray-600 flex flex-col gap-[4px] ">
              <div className="text-[14px] text-[#333333]">
                Giấy chứng nhận ĐKDN: 0317912848 do sở KH & ĐT TP.HCM cấp ngày 13/07/2023.
              </div>
              <div className="text-[14px] text-[#333333]">
                Địa chỉ:{" "}
                <span className="font-[600]">
                  L17-11, Tầng 17, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh.
                </span>
              </div>
              <div className="text-[14px] text-[#333333]">
                Đại diện công ty: <span className="font-[600]">Ông Lâm Đăng Khoa. Chức vụ: Tổng Giám Đốc.</span>
              </div>
            </div>
          </div>

          {/* <div className="md:col-span-6 grid grid-cols-3 gap-6"> */}
          <div className="flex flex-col gap-[12px]">
            <div className="text-sm font-semibold text-gray-800 mb-3 text-[16px] font-[500] text-[#333333]">
              Về Chợ Thông Minh
            </div>
            <ul className="text-sm text-gray-600 space-y-2 text-[14px] text-[#333333] flex flex-col gap-[4px]">
              <li>Thông tin liên hệ</li>
              <li>Đi chợ</li>
              <li>Đặt đồ ăn</li>
              <li>Tuyển dụng việc làm</li>
              <li>Tin tức</li>
              <li>Hotline: 1900 8099</li>
              <li>Email: hotro@gober.com.vn</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="text-sm font-semibold text-gray-800 mb-3 text-[16px] font-[500] text-[#333333]">
              Danh mục sản phẩm
            </div>
            <ul className="text-sm text-gray-600 space-y-2 text-[14px] text-[#333333] flex flex-col gap-[4px]">
              <li>Rau củ quả</li>
              <li>Thịt tươi</li>
              <li>Thủy sản, hải sản</li>
              <li>Dầu ăn, nước chấm</li>
              <li>Rau củ quả</li>
              <li>Thịt tươi</li>
              <li>Thủy sản, hải sản</li>
              <li>Dầu ăn, nước chấm</li>
              <li>Rau củ quả</li>
              <li>Thịt tươi</li>
              <li>Thủy sản, hải sản</li>
              <li>Dầu ăn, nước chấm</li>
              <li>Rau củ quả</li>
              <li>Thịt tươi</li>
              <li>Thủy sản, hải sản</li>
              <li>Dầu ăn, nước chấm</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="text-sm font-semibold text-gray-800 mb-3 text-[16px] font-[500] text-[#333333]">
              Khách hàng cá nhân
            </div>
            <ul className="text-sm text-gray-600 space-y-2 text-[14px] text-[#333333] flex flex-col gap-[4px]">
              <li>Chính sách bảo mật</li>
              <li>Điều khoản điều kiện</li>
              <li>Quy định khiếu nại</li>
              <li>Chính sách bồi thường</li>
            </ul>
          </div>
          {/* </div> */}

          <div className="flex flex-col items-start gap-[22px]">
            <div className="text-sm font-semibold text-gray-800 text-[16px] font-[500] text-[#333333]">
              Kết nối với chúng tôi
            </div>
            <div className="flex gap-[12px] items-center">
              {/* simple social icons */}
              <a
                href="#"
                aria-label="facebook"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center"
              >
                <img src="/src/assets/facebook.svg" alt="" />
              </a>
              <a
                href="#"
                aria-label="youtube"
                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center"
              >
                <img src="/src/assets/youtube.svg" alt="" />
              </a>
              <a
                href="#"
                aria-label="tiktok"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
              >
                <img src="/src/assets/tiktok.svg" alt="" />
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center"
              >
                <img src="/src/assets/linkedIn.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-8 pt-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-[16px]">
            <div className="flex items-center gap-[10px] py-[10px]  border-[#808080] border-t">
              <div className="text-sm text-gray-600">Website cùng tập đoàn</div>
              <div className="flex items-center gap-6">
                <img src="/src/assets/light-BigCode.png" alt="Bigcode" className="h-6 object-cover w-[150px]" />
                <img src="/src/assets/gober.png" alt="Gober" className="h-[53px] object-cover w-[136px]" />
              </div>
            </div>

            <div className=" border-t border-[#808080] text-center text-[16px] text-[#333333] py-[12px]">
              Bản quyền thuộc về Bigcode
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
