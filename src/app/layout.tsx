import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Artistly.com",
  description: "Book Artists for your Event",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
