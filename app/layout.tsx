import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Seamless Technology",
  description: "Seamless Technology and Consultancy PLC",

  //   icons: {
  //   icon: "/favicon.ico",               // default favicon
  //   // shortcut: "/favicon-16x16.png",     // optional shortcut icon
  //   // apple: "/apple-touch-icon.png",     // iOS/Apple devices
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
