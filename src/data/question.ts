export interface Question {
  id: number;
  title: string;
  answer: string;
}

export const quesions: Question[] = [
  {
    id: 1,
    title: "Sản phẩm Việt Xanh được làm từ gì?",
    answer:
      "Tất cả sản phẩm của Việt Xanh đều được làm từ nguyên liệu tự nhiên, không chứa hóa chất độc hại, đảm bảo an toàn cho sức khỏe người sử dụng.",
  },
  {
    id: 2,
    title: "Sản phẩm có thật sự phân hủy được không?",
    answer:
      "Thời gian phân hủy của sản phẩm phụ thuộc vào loại sản phẩm và điều kiện môi trường, nhưng thường dao động từ vài tháng đến một năm.",
  },
  {
    id: 3,
    title: "Sản phẩm của Việt Xanh có bền không?",
    answer:
      "Bạn có thể đặt hàng trực tiếp trên website của chúng tôi hoặc liên hệ qua số điện thoại và email được cung cấp trên trang liên hệ.",
  },
  {
    id: 4,
    title: "Sản phẩm có an toàn khi đựng thực phẩm không?",
    answer:
      "Có, chúng tôi cung cấp dịch vụ giao hàng toàn quốc với thời gian và chi phí hợp lý.",
  },
  {
    id: 5,
    title: "Tôi có thể mua sản phẩm Việt Xanh ở đâu?",
    answer:
      "Một số sản phẩm của chúng tôi được thiết kế để tái sử dụng nhiều lần, trong khi những sản phẩm khác là dùng một lần và phân hủy sinh học.",
  },
];
