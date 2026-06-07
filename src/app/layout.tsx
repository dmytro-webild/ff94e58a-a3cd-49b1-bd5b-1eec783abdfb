import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Saba Beauty Salon | Luxury Bridal Makeup & Beauty in Lahore',
  description: 'Experience premium bridal makeup, luxury hair treatments, and personalized beauty care at Saba Beauty Salon in Lahore. Crafting confidence since 2018.',
  keywords: ["Saba Beauty Salon, bridal makeup Lahore, luxury hair treatments, beauty salon Garhi Shahu, Lahore beauty services, personalized beauty care, skin care Lahore"],
  openGraph: {
    "title": "Saba Beauty Salon | Luxury Beauty in Lahore",
    "description": "Premium bridal makeup, luxury hair treatments, and personalized beauty care in the heart of Lahore.",
    "url": "https://sababeautysalon.com",
    "siteName": "Saba Beauty Salon",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg",
        "alt": "Elegant bridal makeup and beauty salon interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Saba Beauty Salon | Luxury Beauty in Lahore",
    "description": "Premium bridal makeup, luxury hair treatments, and personalized beauty care in the heart of Lahore.",
    "images": [
      "http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
