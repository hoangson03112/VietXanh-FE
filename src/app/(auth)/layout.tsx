import "../globals.css";
export const metadata = {
  title: "Đăng nhập / Đăng ký",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
