import React from "react";

function AboutUsView() {
  return (
    <div className="pb-20 md:pb-40 px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-15">
        <div className="w-full md:w-3/7 bg-amber-50">
          <img
            src="/aboutus-banner.png"
            alt="aboutus-banner"
            className="w-full h-auto md:w-[530px] md:h-[596px] object-cover"
          />
        </div>
        <div className="w-full md:w-4/7">
          <p className="text-2xl md:text-[32px] lg:text-[40px] font-bold">
            CHÚNG TÔI LÀ VIỆT XANH
          </p>
          <p className="text-base md:text-lg lg:text-[20px] mt-6 md:mt-15 flex flex-col gap-4 md:gap-6">
            <span>
              Chúng tôi là Việt Xanh – một trong những công ty tiên phong trong
              việc mang đến các sản phẩm phân hủy sinh học từ tinh bột ngô, góp
              phần thay thế nhựa truyền thống và bảo vệ môi trường sống.
            </span>
            <span>
              Với sứ mệnh xây dựng lối sống xanh - bền vững, Việt Xanh cam kết
              tạo ra những sản phẩm an toàn, tiện lợi và thân thiện với thiên
              nhiên, đồng hành cùng cộng đồng hướng tới một tương lai không rác
              thải nhựa.
            </span>
          </p>
        </div>
      </div>

      {/* History Section */}
      <section className="flex flex-col mt-20 md:mt-32 lg:mt-[200px] md:flex-row justify-between gap-8 md:gap-15">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-3/7">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] text-black font-bold mb-4">
            VIỆT XANH ĐƯỢC THÀNH LẬP TỪ NĂM 2025
          </h2>
          <p className="text-black text-base md:text-lg lg:text-[20px] mb-6 mt-6 md:mt-8 flex flex-col gap-6 md:gap-8">
            <span>
              Câu chuyện của Việt Xanh bắt đầu từ những chuyến đi thực tế và các
              hoạt động cộng đồng hướng tới bảo vệ môi trường. Chứng kiến lượng
              rác thải nhựa ngày càng tăng và tác động nặng nề của chúng tới
              thiên nhiên, nhóm sáng lập nhận ra cần phải hành động — không chỉ
              kêu gọi mà phải tạo ra một giải pháp thiết thực.
            </span>
            <span>
              Việt Xanh với những ý tưởng về các sản phẩm phân hủy sinh học từ
              tinh bột ngô, thân thiện với môi trường và an toàn cho người dùng.
              Lấy cảm hứng từ tinh thần "sống xanh từ những điều nhỏ nhất", Việt
              Xanh mong muốn trở thành cầu nối giữa cuộc sống hiện đại và thiên
              nhiên, nơi mỗi sản phẩm không chỉ hữu ích mà còn mang trong mình ý
              nghĩa vì Trái Đất xanh.
            </span>
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full md:w-4/7 flex flex-col items-center gap-4">
          <div className="w-full rounded-3xl md:rounded-[50px] bg-gray-300 h-64 md:h-80 lg:h-[439px]">
            <img
              src="/images/main-product.jpg"
              alt="Sản phẩm chính"
              className="object-cover rounded-3xl md:rounded-[50px] w-full h-full"
            />
          </div>

          <div className="flex gap-4 md:gap-8 mt-3 md:mt-5 w-full">
            <div className="flex-1 rounded-xl md:rounded-[12px] overflow-hidden bg-gray-300 h-32 md:h-40 lg:h-[196px]">
              <img
                src="/images/sub1.jpg"
                alt="Sản phẩm phụ 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 rounded-xl md:rounded-[12px] overflow-hidden bg-gray-300 h-32 md:h-40 lg:h-[187px]">
              <img
                src="/images/sub2.jpg"
                alt="Sản phẩm phụ 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="mt-20 md:mt-32 lg:mt-[200px] min-h-[400px] md:min-h-[500px] w-full">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] text-center text-black font-bold mb-8 md:mb-4">
          ĐỊNH HƯỚNG
        </h2>
        <div className="flex flex-col md:min-h-[500px] md:flex-row justify-between md:justify-around lg:justify-between mt-8 md:mt-10 gap-12 md:gap-6">
          {/* Vision */}
          <div className="flex flex-col items-center gap-4 md:gap-6 md:self-end">
            <p className="w-40 h-40 md:w-48 md:h-48 lg:w-[210px] lg:h-[210px] border-2 border-black rounded-full flex items-center justify-center text-base md:text-lg font-semibold">
              TẦM NHÌN
            </p>
            <p className="max-w-xs md:max-w-[300px] lg:w-[383px] italic text-center text-sm md:text-base">
              Trở thành thương hiệu tiên phong tại Việt Nam trong lĩnh vực sản
              phẩm phân hủy sinh học, góp phần kiến tạo cuộc sống xanh và bền
              vững cho mọi người.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="w-40 h-40 md:w-48 md:h-48 lg:w-[210px] lg:h-[210px] border-2 border-black rounded-full flex items-center justify-center text-base md:text-lg font-semibold">
              SỨ MỆNH
            </p>
            <p className="max-w-xs md:max-w-[300px] lg:w-[383px] italic text-center text-sm md:text-base">
              Mang đến các giải pháp thay thế nhựa truyền thống bằng sản phẩm an
              toàn, thân thiện môi trường.
            </p>
          </div>

          {/* Core Values */}
          <div className="flex flex-col items-center gap-4 md:gap-6 md:self-end">
            <p className="w-40 h-40 md:w-48 md:h-48 lg:w-[210px] lg:h-[210px] border-2 border-black rounded-full flex items-center justify-center text-base md:text-lg font-semibold text-center px-2">
              GIÁ TRỊ CỐT LÕI
            </p>
            <p className="max-w-xs md:max-w-[300px] lg:w-[383px] italic text-center text-sm md:text-base">
              Việt Xanh xây dựng hành trình phát triển dựa trên bốn giá trị cốt
              lõi: Tự nhiên – Bền vững – Trách nhiệm – Sáng tạo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsView;