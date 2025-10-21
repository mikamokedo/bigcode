import React from 'react';

type MarketInfoProps = {
    className?: string;
};

const MarketInfo: React.FC<MarketInfoProps> = ({ className = '' }) => {
    return (
        <section className={`container max-w-5xl mx-auto p-6 py-[16px] ${className}`} aria-labelledby="market-info-title">
            <div className="text-xl md:text-2xl text-[20px] font-[600] text-[#1A1A1A] font-semibold mb-[16px] text-gray-900 mb-4">Chợ Thông Minh – Giúp bạn đi chợ, cùng bạn nấu ăn</div>
            <div className='text-[14px] text-[#333333] font-[500]'>
                <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Bạn muốn mua rau tươi, cá sống, thịt mới mỗi ngày như ở chợ truyền thống, nhưng không có thời gian để đi chợ?<br></br>
                    Chợ Thông Minh là giải pháp dành riêng cho bạn – nền tảng đi chợ online hiện đại, kết nối trực tiếp người tiêu dùng với các tiểu thương uy tín tại chợ, giúp bạn mua sắm nhanh chóng, an toàn và tiện lợi, mọi lúc mọi nơi.
                </p>

                <div className="text-base md:text-lg font-medium text-gray-900 mt-4  mt-[20px]">Chợ truyền thống – nay đã trong lòng bàn tay</div>
                <p className="text-sm text-gray-700 m-[0px]">Tại Chợ Thông Minh, bạn có thể:</p>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    <li>Mua sắm từ sạp cho thật, với hình ảnh, giá cả rõ ràng</li>
                    <li>Trò chuyện trực tiếp với tiểu thương, như đang đứng ngay tại chợ</li>
                    <li>Lựa chọn nguyên liệu tươi mỗi ngày, đầy đủ từ rau củ, thịt cá, đến đồ khô, gia vị</li>
                    <li>Theo dõi đơn hàng dễ dàng, biết rõ từng bước giao hàng</li>
                </ul>

                <div className="text-base md:text-lg font-medium text-gray-900 mt-4  mt-[20px]">Giao hàng nhanh – luôn có bữa ăn đúng giờ</div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed m-[0px]">
                    Nhờ kết nối với hệ sinh thái giao hàng Gober, mọi đơn hàng từ Chợ Thông Minh sẽ được xử lý và giao đến tận cửa nhà bạn một cách nhanh chóng, gọn gàng và an toàn. Dù là một bó rau hay cả một bữa cơm gia đình, chúng tôi luôn sẵn sàng giao đến bạn trong thời gian ngắn nhất.
                </p>

                <div className="text-base md:text-lg font-medium text-gray-900 mt-[20px]">Vì sao nên chọn Chợ Thông Minh?</div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    <li>Tiện lợi hơn đi chợ truyền thống</li>
                    <li>Chất lượng đảm bảo, rõ nguồn gốc</li>
                    <li>Hỗ trợ tiểu thương địa phương phát triển bền vững</li>
                    <li>Tạo trải nghiệm đi chợ thật dù bạn không rời khỏi nhà</li>
                </ul>

                <div className="text-sm md:text-base font-medium text-gray-900 mt-4  mt-[20px]">Chợ Thông Minh – Giúp bạn đi chợ, cùng bạn nấu ăn</div>
                <p className="text-sm text-gray-700 leading-relaxed m-[0px]">
                    Chúng tôi không chỉ mang thực phẩm tươi ngon đến cửa nhà bạn, mà còn đồng hành cùng bạn trong từng bữa ăn gia đình, giữ trọn hương vị và sự gắn kết của chợ truyền thống trong một cách sống hiện đại.
                </p>
            </div>
        </section>
    );
};

export default MarketInfo;
