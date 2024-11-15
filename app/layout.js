import localFont from "next/font/local";
import { Outfit } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Perspicacious MarketStore",
  description: "For free source code purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}