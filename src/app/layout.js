import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Ghummakkad — Premium Rajasthan Travel & Heritage Stays",
  description: "Experience Rajasthan's authentic heritage. Handpicked palace stays, curated desert safaris, and rich cultural tours across the royal state. Padharo Mhare Desh — Book your royal journey today.",
  keywords: "Rajasthan travel, heritage stays, desert safari, Jaipur tours, Udaipur hotels, Jaisalmer, cultural tours, India travel",
  openGraph: {
    title: "Ghummakkad — Premium Rajasthan Travel & Heritage Stays",
    description: "Curated heritage stays, desert safaris, and cultural tours across the royal state of Rajasthan.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased font-sans bg-ink text-text-hi"
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
