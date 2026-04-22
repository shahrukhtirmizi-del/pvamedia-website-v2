import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Ticker } from "@/components/ticker";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "PVA Media — Websites & campaigns, done properly.",
  description:
    "A London studio building conversion-focused websites and paid marketing for professional services teams — law firms, estate agencies and consultancies.",
  metadataBase: new URL("https://pvamedia.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
