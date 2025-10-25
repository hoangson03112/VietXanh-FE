export interface Product {
  id: number;
  title: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  link: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Túi cuộn rút",
    price: 100000,
    shortDescription: "Túi phân hủy sinh học 100% từ tinh bột ngô",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/tui-cuon-rut",
    features: [
      "100% sản phẩm phân hủy sinh học từ tinh bột ngô",
      "Giao hàng nhanh, thanh toán khi nhận",
      "Dễ dàng đổi trả trong 14 ngày",
      "An toàn, thân thiện với môi trường",
    ],
  },
  {
    id: 2,
    title: "Ly Giấy",
    price: 120000,
    shortDescription: "Ly sinh học thân thiện với môi trường, không nhựa",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ly-giay",
    features: [
      "Thân thiện với môi trường, dễ phân hủy",
      "Không bị rò nước, chịu nhiệt tốt",
      "Phù hợp cho nước nóng và lạnh",
      "Sản xuất tại Việt Nam, đạt tiêu chuẩn an toàn thực phẩm",
    ],
  },
  {
    id: 3,
    title: "Hộp Đựng Thực Phẩm",
    price: 150000,
    shortDescription: "Hộp sinh học từ bã mía, dễ phân hủy",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/hop-thuc-pham",
    features: [
      "Sử dụng được trong lò vi sóng và tủ lạnh",
      "100% phân hủy sinh học tự nhiên",
      "Không chứa BPA hay hóa chất độc hại",
      "Thích hợp cho nhà hàng, quán ăn, gia đình",
    ],
  },
  {
    id: 4,
    title: "Ống Hút Sinh Học",
    price: 80000,
    shortDescription: "Ống hút làm từ tinh bột ngô, thân thiện môi trường",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ong-hut",
    features: [
      "Phân hủy hoàn toàn trong môi trường tự nhiên",
      "Không ảnh hưởng đến vị thức uống",
      "Bền, khó gãy, sử dụng tiện lợi",
      "An toàn với trẻ em và người lớn",
    ],
  },
  {
    id: 5,
    title: "Túi cuộn rút",
    price: 100000,
    shortDescription: "Túi phân hủy sinh học 100% từ tinh bột ngô",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/tui-cuon-rut",
    features: [
      "100% sản phẩm phân hủy sinh học từ tinh bột ngô",
      "Giao hàng nhanh, thanh toán khi nhận",
      "Dễ dàng đổi trả trong 14 ngày",
      "An toàn, thân thiện với môi trường",
    ],
  },
  {
    id: 6,
    title: "Ly Giấy",
    price: 120000,
    shortDescription: "Ly sinh học thân thiện với môi trường, không nhựa",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ly-giay",
    features: [
      "Thân thiện với môi trường, dễ phân hủy",
      "Không bị rò nước, chịu nhiệt tốt",
      "Phù hợp cho nước nóng và lạnh",
      "Sản xuất tại Việt Nam, đạt tiêu chuẩn an toàn thực phẩm",
    ],
  },
  {
    id: 7,
    title: "Hộp Đựng Thực Phẩm",
    price: 150000,
    shortDescription: "Hộp sinh học từ bã mía, dễ phân hủy",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/hop-thuc-pham",
    features: [
      "Sử dụng được trong lò vi sóng và tủ lạnh",
      "100% phân hủy sinh học tự nhiên",
      "Không chứa BPA hay hóa chất độc hại",
      "Thích hợp cho nhà hàng, quán ăn, gia đình",
    ],
  },
  {
    id: 8,
    title: "Ống Hút Sinh Học",
    price: 80000,
    shortDescription: "Ống hút làm từ tinh bột ngô, thân thiện môi trường",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ong-hut",
    features: [
      "Phân hủy hoàn toàn trong môi trường tự nhiên",
      "Không ảnh hưởng đến vị thức uống",
      "Bền, khó gãy, sử dụng tiện lợi",
      "An toàn với trẻ em và người lớn",
    ],
  },
  {
    id: 9,
    title: "Túi cuộn rút",
    price: 100000,
    shortDescription: "Túi phân hủy sinh học 100% từ tinh bột ngô",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/tui-cuon-rut",
    features: [
      "100% sản phẩm phân hủy sinh học từ tinh bột ngô",
      "Giao hàng nhanh, thanh toán khi nhận",
      "Dễ dàng đổi trả trong 14 ngày",
      "An toàn, thân thiện với môi trường",
    ],
  },
  {
    id: 10,
    title: "Ly Giấy",
    price: 120000,
    shortDescription: "Ly sinh học thân thiện với môi trường, không nhựa",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ly-giay",
    features: [
      "Thân thiện với môi trường, dễ phân hủy",
      "Không bị rò nước, chịu nhiệt tốt",
      "Phù hợp cho nước nóng và lạnh",
      "Sản xuất tại Việt Nam, đạt tiêu chuẩn an toàn thực phẩm",
    ],
  },
  {
    id: 11,
    title: "Hộp Đựng Thực Phẩm",
    price: 150000,
    shortDescription: "Hộp sinh học từ bã mía, dễ phân hủy",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/hop-thuc-pham",
    features: [
      "Sử dụng được trong lò vi sóng và tủ lạnh",
      "100% phân hủy sinh học tự nhiên",
      "Không chứa BPA hay hóa chất độc hại",
      "Thích hợp cho nhà hàng, quán ăn, gia đình",
    ],
  },
  {
    id: 12,
    title: "Ống Hút Sinh Học",
    price: 80000,
    shortDescription: "Ống hút làm từ tinh bột ngô, thân thiện môi trường",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ong-hut",
    features: [
      "Phân hủy hoàn toàn trong môi trường tự nhiên",
      "Không ảnh hưởng đến vị thức uống",
      "Bền, khó gãy, sử dụng tiện lợi",
      "An toàn với trẻ em và người lớn",
    ],
  },
  {
    id: 13,
    title: "Túi cuộn rút",
    price: 100000,
    shortDescription: "Túi phân hủy sinh học 100% từ tinh bột ngô",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/tui-cuon-rut",
    features: [
      "100% sản phẩm phân hủy sinh học từ tinh bột ngô",
      "Giao hàng nhanh, thanh toán khi nhận",
      "Dễ dàng đổi trả trong 14 ngày",
      "An toàn, thân thiện với môi trường",
    ],
  },
  {
    id: 14,
    title: "Ly Giấy",
    price: 120000,
    shortDescription: "Ly sinh học thân thiện với môi trường, không nhựa",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ly-giay",
    features: [
      "Thân thiện với môi trường, dễ phân hủy",
      "Không bị rò nước, chịu nhiệt tốt",
      "Phù hợp cho nước nóng và lạnh",
      "Sản xuất tại Việt Nam, đạt tiêu chuẩn an toàn thực phẩm",
    ],
  },
  {
    id: 15,
    title: "Hộp Đựng Thực Phẩm",
    price: 150000,
    shortDescription: "Hộp sinh học từ bã mía, dễ phân hủy",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/hop-thuc-pham",
    features: [
      "Sử dụng được trong lò vi sóng và tủ lạnh",
      "100% phân hủy sinh học tự nhiên",
      "Không chứa BPA hay hóa chất độc hại",
      "Thích hợp cho nhà hàng, quán ăn, gia đình",
    ],
  },
  {
    id: 16,
    title: "Ống Hút Sinh Học",
    price: 80000,
    shortDescription: "Ống hút làm từ tinh bột ngô, thân thiện môi trường",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/category/cuonrut.png",
    images: [
      "/category/cuonrut.png",
      "/category/cuonrut.png",
      "/category/cuonrut.png",
    ],
    link: "/san-pham/ong-hut",
    features: [
      "Phân hủy hoàn toàn trong môi trường tự nhiên",
      "Không ảnh hưởng đến vị thức uống",
      "Bền, khó gãy, sử dụng tiện lợi",
      "An toàn với trẻ em và người lớn",
    ],
  },
];
