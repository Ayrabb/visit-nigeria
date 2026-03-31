import "./globals.css";
import Navbar from "./layout/NavBar";
import Footer from "./layout/Footer";

export const metadata = {
  title: "Explore Nigeria",
  description: "Premium travel inspiration and cultural stories from across Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light font-body text-slate-900">
        <Navbar />
        <main className="pt-[88px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
