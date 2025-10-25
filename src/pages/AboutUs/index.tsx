import React from "react";

function AboutUsView() {
  return (
    <div>
      <div className="flex gap-15">
        <div className="w-3/7 bg-amber-50">
          <img
            src="/aboutus-banner.png"
            alt="aboutus-banner"
            className="w-[530px] h-[596px]"
          />
        </div>
        <div className="w-4/7">
          <p className="text-[40px] font-bold ">CHÚNG TÔI LÀ VIỆT XANH</p>
          <p className="text-[20px] mt-15 flex flex-col gap-6">
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
      <section className=" flex flex-col mt-[200px] md:flex-row  justify-between gap-15">
        {/* LEFT CONTENT */}
        <div className="md:w-3/7">
          <h2 className="text-[40px]  text-black font-bold mb-4">
            VIỆT XANH ĐƯỢC THÀNH LẬP TỪ NĂM 2025
          </h2>
          <p className="text-black text-[20px] mb-6 mt-8 flex flex-col gap-8">
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
              Lấy cảm hứng từ tinh thần “sống xanh từ những điều nhỏ nhất”, Việt
              Xanh mong muốn trở thành cầu nối giữa cuộc sống hiện đại và thiên
              nhiên, nơi mỗi sản phẩm không chỉ hữu ích mà còn mang trong mình ý
              nghĩa vì Trái Đất xanh.
            </span>
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:w-4/7 flex flex-col items-center gap-4">
          <div className="w-full rounded-[50px]  bg-gray-300 h-[439px]">
            <img
              src="/images/main-product.jpg"
              alt="Sản phẩm chính"
              className="object-cover rounded-[50px] w-full h-full"
            />
          </div>

          <div className="flex gap-8 mt-5 w-full">
            <div className="flex-1 rounded-[12px] overflow-hidden  bg-gray-300 h-[196px]">
              <img
                src="/images/sub1.jpg"
                alt="Sản phẩm phụ 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 rounded-[12px] overflow-hidden bg-gray-300 h-[187px]">
              <img
                src="/images/sub2.jpg"
                alt="Sản phẩm phụ 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[200px] h-[500px]">
        <h2 className="text-[40px] text-center text-black font-bold mb-4">
          ĐỊNH HƯỚNG
        </h2>
        <div className="flex justify-between mt-10 h-full">
          <div className="w=[383px] flex flex-col items-center gap-6 self-end">
            <p className="w-[210px] h-[210px] border border-black rounded-full flex items-center justify-center">
              TẦM NHÌN
            </p>
            <p className="w-[383px] italic text-center">
              Trở thành thương hiệu tiên phong tại Việt Nam trong lĩnh vực sản
              phẩm phân hủy sinh học, góp phần kiến tạo cuộc sống xanh và bền
              vững cho mọi người.
            </p>
          </div>
          <div className="w=[383px] flex flex-col items-center gap-6">
            <p className="w-[210px] h-[210px] border border-black rounded-full flex items-center justify-center">
              SỨ MỆNH
            </p>
            <p className="w-[383px] italic text-center">
              Mang đến các giải pháp thay thế nhựa truyền thống bằng sản phẩm an
              toàn, thân thiện môi trường.
            </p>
          </div>
          <div className="w=[383px] flex flex-col items-center gap-6 self-end">
            <p className="w-[210px] h-[210px] border border-black rounded-full flex items-center justify-center">
              GIÁ TRỊ CỐT LÕI
            </p>
            <p className="w-[383px] italic text-center">
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
