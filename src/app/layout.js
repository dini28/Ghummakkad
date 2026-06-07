import { Inter, Outfit, Nothing_You_Could_Do, Playfair_Display, Syne_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing-you-could-do",
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "400",
  subsets: ["latin"],
});

const syneMono = Syne_Mono({
  variable: "--font-syne-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ghummakkad — Premium Rajasthan Travel & Heritage Stays",
  description: "Experience Rajasthan like never before. Curated heritage stays, desert safaris, and cultural tours across 12+ cities. Rated 4.9/5 by 10,000+ travelers. Book your royal adventure today.",
  keywords: "Rajasthan travel, heritage stays, desert safari, Jaipur tours, Udaipur hotels, Jaisalmer, cultural tours, India travel",
  openGraph: {
    title: "Ghummakkad — Premium Rajasthan Travel & Heritage Stays",
    description: "Curated heritage stays, desert safaris, and cultural tours across 12+ cities in Rajasthan.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${nothingYouCouldDo.variable} ${playfairDisplay.variable} ${syneMono.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
