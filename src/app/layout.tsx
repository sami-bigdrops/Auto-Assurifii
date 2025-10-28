import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TrackingHandler from "@/components/TrackingHandler";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Auto Insurance Quotes Free and Fast | Assurifii",
  description: "Get free and fast auto insurance quotes from top insurance companies in Nigeria. Compare prices and save money on your auto insurance.",
  keywords: "auto insurance, car insurance, insurance quotes, Nigeria, fast quotes, compare insurance",
  authors: [{ name: "Assurifii" }],
  robots: "index, follow",
  openGraph: {
    title: "Auto Insurance Quotes Free and Fast | Assurifii",
    description: "Get free and fast auto insurance quotes from top insurance companies in Nigeria. Compare prices and save money on your auto insurance.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//quote.assurifii.com" />
        <link rel="dns-prefetch" href="//vercel-analytics.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />
        <link rel="preload" href="/landing-illustration.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/Logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body
        className={`${mulish.variable} antialiased h-full`}
        suppressHydrationWarning={true}
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
