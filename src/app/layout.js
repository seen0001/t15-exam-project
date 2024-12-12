import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import Banner from "@/components/Banner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Foo Fest",
  description: "Generated by create next app",
};

  const bannerItems = [
    <div key="1" className="text-xl font-bold">FOO FEST</div>,
    <div key="2" className="text-xl font-bold">MARCH 24th - 28th</div>,
    <div key="3" className="text-xl font-bold">CPH, DK</div>,
  ];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Dynamic Favicon Links */}
        <link 
          rel="icon" 
          href="/foo-fest-isometric-white-logo.svg" 
          media="(prefers-color-scheme: light)"
        />
        <link 
          rel="icon" 
          href="/foo-fest-isometric-black-logo.svg" 
          media="(prefers-color-scheme: dark)"
        />
        <link 
          rel="icon" 
          href="/foo-fest-isometric-black-logo.svg" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js" 
          strategy="beforeInteractive" 
        />
        <Nav />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <div className="w-full h-20">
        <Banner items={bannerItems} speed="medium"  />
        </div>
        <Footer />
      </body>
    </html>
  );
}