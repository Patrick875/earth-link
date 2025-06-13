import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Earth Link",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css"
        />
      </head>
      <body
        className={`${manrope.className}  antialiased text-[#687588]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
