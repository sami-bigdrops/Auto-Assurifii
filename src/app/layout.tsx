import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

  const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Insurance Quotes Free and Fast | Assurifii",
  description: "Get free and fast auto insurance quotes from top insurance companies in Nigeria. Compare prices and save money on your auto insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${mulish.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
