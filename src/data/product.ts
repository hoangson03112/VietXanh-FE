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
    title: "Túi 2 quai (T-Shirt)",
    price: 120000,
    shortDescription: "Túi hai quai chắc chắn, tiện lợi và phù hợp cho nhiều mục đích sử dụng.",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/image/product/z1.webp",
    images: [
      "/image/product/z1.webp",
      "/image/product/z1.webp",
      "/image/product/z1.webp",
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
    title: "Cốc",
    price: 150000,
    shortDescription: "Cốc nhựa sinh học bền nhẹ, an toàn cho sức khỏe, dễ dàng tái sử dụng.y",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/image/product/coc.webp",
    images: [
      "/image/product/coc.webp",
      "/image/product/coc.webp",
      "/image/product/coc.webp",
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
    title: "Ống hút",
    price: 80000,
    shortDescription: "Ống hút sinh học bền, không thấm nước, dùng an toàn cho đồ uống.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/onghut.jpg",
    images: [
      "/image/product/onghut.jpg",
      "/image/product/onghut.jpg",
      "/image/product/onghut.jpg",
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
    shortDescription: "Túi cuộn một đầu gọn nhẹ, dễ đóng mở và bảo quản đồ tiện lợi.",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/image/product/cuonrutxanh.png",
    images: [
      "/image/product/cuonrutxanh.png",
      "/image/product/cuonrutxanh.png",
      "/image/product/cuonrutxanh.png",
      "/image/product/cuonrutxanh.png",
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
    title: "Túi cuộn rút",
    price: 120000,
    shortDescription: "Túi cuộn một đầu gọn nhẹ, dễ đóng mở và bảo quản đồ tiện lợi.",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/image/product/cuonxanhla.png",
    images: [
      "/image/product/cuonxanhla.png",
      "/image/product/cuonxanhla.png",
      "/image/product/cuonxanhla.png",
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
    title: "Túi cuộn rút",
    price: 150000,
    shortDescription: "Túi cuộn một đầu gọn nhẹ, dễ đóng mở và bảo quản đồ tiện lợi.",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/image/product/cuonxanhduong.jpg",
    images: [
      "/image/product/cuonxanhduong.jpg",
      "/image/product/cuonxanhduong.jpg",
      "/image/product/cuonxanhduong.jpg",
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
    title: "Túi 2 quai (T-Shirt)",
    price: 80000,
    shortDescription: "Túi hai quai chắc chắn, tiện lợi và phù hợp cho nhiều mục đích sử dụng.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/z3.jpg",
    images: [
      "/image/product/z3.jpg",
      "/image/product/z3.jpg",
      "/image/product/z3.jpg",
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
    title: "Túi 2 quai (T-Shirt)",
    price: 80000,
    shortDescription: "Túi hai quai chắc chắn, tiện lợi và phù hợp cho nhiều mục đích sử dụng.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/z4.webp",
    images: [
      "/image/product/z4.webp",
      "/image/product/z4.webp",
      "/image/product/z4.webp",
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
    id: 10,
    title: "Túi 2 quai (T-Shirt)",
    price: 80000,
    shortDescription: "Túi hai quai chắc chắn, tiện lợi và phù hợp cho nhiều mục đích sử dụng.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/z5.jpg",
    images: [
      "/image/product/z5.jpg",
      "/image/product/z5.jpg",
      "/image/product/z5.jpg",
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
    id: 11,
    title: "Bát",
    price: 150000,
    shortDescription: "Bát sinh học chắc chắn, nhẹ và an toàn, thích hợp dùng hằng ngày.",
    description:
      "Hộp đựng thực phẩm làm từ bã mía, là lựa chọn thân thiện với môi trường thay thế hộp nhựa. Có thể sử dụng trong lò vi sóng, tủ lạnh, an toàn tuyệt đối với thực phẩm.",
    image: "/image/product/bat.jpg",
    images: [
      "/image/product/bat.jpg",
      "/image/product/bat.jpg",
      "/image/product/bat.jpg",
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
    title: "Thìa",
    price: 80000,
    shortDescription: "Thìa sinh học nhỏ gọn, cầm chắc tay, an toàn cho sức khỏe.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/thia.png",
    images: [
      "/image/product/thia.png",
      "/image/product/thia.png",
      "/image/product/thia.png",
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
    title: "Đĩa",
    price: 100000,
    shortDescription: "Đĩa sinh học bền nhẹ, chịu nhiệt tốt, phù hợp cho mọi bữa ăn.",
    description:
      "Túi cuộn một đầu là loại túi tiện lợi, thường dùng để đựng rác hoặc bảo quản thực phẩm. Thiết kế cuộn gọn giúp dễ dàng rút từng túi khi cần, tiết kiệm không gian và giữ vệ sinh. Sản phẩm dẻo dai, chống thấm và an toàn cho thực phẩm, phù hợp sử dụng trong gia đình, nhà hàng hoặc mang theo khi đi chợ, dã ngoại.",
    image: "/image/product/dia.jpg",
    images: [
      "/image/product/dia.jpg",
      "/image/product/dia.jpg",
      "/image/product/dia.jpg",
      "/image/product/dia.jpg",
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
    title: "Dao",
    price: 120000,
    shortDescription: "Dao - Dao sinh học sắc vừa phải, an toàn khi sử dụng, thuận tiện.",
    description:
      "Ly giấy sinh học được sản xuất từ bột giấy nguyên sinh, không chứa nhựa, an toàn tuyệt đối cho sức khỏe người dùng. Thích hợp sử dụng trong quán cà phê, nhà hàng hoặc mang đi.",
    image: "/image/product/Dao.png",
    images: [
      "/image/product/Dao.png",
      "/image/product/Dao.png",
      "/image/product/Dao.png",
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
    image: "/image/product/hop.jpg",
    images: [
      "/image/product/hop.jpg",
      "/image/product/hop.jpg",
      "/image/product/hop.jpg",
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
    title: "Dĩa",
    price: 80000,
    shortDescription: "Dĩa sinh học chắc chắn, dễ sử dụng, an toàn cho sức khỏe.",
    description:
      "Ống hút sinh học được làm từ tinh bột ngô, thay thế hoàn hảo cho ống hút nhựa. Sản phẩm bền, không độc hại và phân hủy tự nhiên sau thời gian sử dụng.",
    image: "/image/product/nia.png",
    images: [
      "/image/product/nia.png",
      "/image/product/nia.png",
      "/image/product/nia.png",
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
