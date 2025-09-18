import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TrackingHandler from "@/components/TrackingHandler";
import "./globals.css";

  const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Insurance Quotes Free and Fast | Assurifii",
  description: "Get free and fast auto insurance quotes from top insurance companies in Nigeria. Compare prices and save money on your auto insurance.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${mulish.variable} antialiased h-full`}
      >
        <TrackingHandler />
        {children}
        <Analytics />
        <SpeedInsights 
          sampleRate={1}
        />
      </body>
    </html>
  );
}
