import type { Metadata } from "next";
import "../styles.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Afghan Carpets — Premium Handmade Rugs & Carpets",
  description:
    "Authentic handmade Afghan carpets and Persian rugs. Premium silk, wool, tribal and vintage collections shipped worldwide.",
  openGraph: {
    title: "Afghan Carpets — Premium Handmade Rugs",
    description: "Heritage handmade carpets shipped worldwide.",
    type: "website",
  },
   icons: "/favicon-v1.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
