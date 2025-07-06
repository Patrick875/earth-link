"use client";
// import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import { Loader2Icon } from 'lucide-react'
import { useEffect, useState } from "react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Earth Link",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, or replace with your actual loading logic
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body>
          <div className='min-h-screen flex flex-col items-center justify-center'>
            <Loader2Icon className='animate-spin rotate text-green-700' />
          </div>
        </body>
      </html>
    );
  }

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
