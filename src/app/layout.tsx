import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Artistly",
  description: "Book Artists for your Event",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
