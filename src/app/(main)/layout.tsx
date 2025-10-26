import Header from "@/src/components/share/Header";
import Footer from "@/src/components/share/Footer";
import ScrollToTop from "@/src/components/share/ScrollToTop";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black bg-[#FFF4E4] flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />

      {/* MAIN CONTENT */}
      <main className="flex-1 py-[100px] px-4 sm:px-8 md:px-[60px] bg-[#FFF4E4] lg:px-[120px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}
