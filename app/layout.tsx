import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chuby-Zion Industry | Whiskey & Herbal Liquor",
  description:
    "Discover Chuby-Zion Industry Nigerian Limited, a Nigerian spirits company established in 2011. Explore our whiskey and herbal liquor range, place orders, and contact our team.",
  applicationName: "Chuby-Zion Industry",
  keywords: [
    "Chuby-Zion Industry",
    "Chuby-Zion Nigerian Limited",
    "Nigerian whiskey",
    "herbal liquor",
    "Nigerian spirits",
    "place an order",
  ],
  openGraph: {
    title: "Chuby-Zion Industry | Whiskey & Herbal Liquor",
    description:
      "Explore the spirits range from Chuby-Zion Industry Nigerian Limited, established in Nigeria in 2011.",
    type: "website",
    locale: "en_NG",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
