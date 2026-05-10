import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Ticker } from "@/components/ticker";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "PVA Media — Websites & campaigns, done properly.",
  description:
    "A London studio building conversion-focused websites and paid marketing for businesses who want the craft, not the template.",
  metadataBase: new URL("https://pvamedia.co.uk"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69ea3ac05653ae373b8a4271"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
