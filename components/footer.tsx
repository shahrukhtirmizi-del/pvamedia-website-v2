import Link from "next/link";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { STUDIO } from "@/lib/data";
import { Brand } from "@/components/brand";

const COLS = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/process", label: "How we work" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Website design" },
      { href: "/services", label: "Paid marketing" },
      { href: "/services", label: "Landing pages" },
      { href: "/services", label: "Brand identity" },
      { href: "/services", label: "Website redesign" },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: "/contact", label: "Book a discovery call" },
      { href: "/services", label: "View pricing" },
      { href: "/onboarding", label: "Client onboarding" },
      { href: "/contact", label: "Free digital audit" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/8 bg-bg pt-16 md:pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_repeat(3,_1fr)] gap-10 md:gap-12 pb-14 border-b border-white/8">
          <div className="flex flex-col gap-5">
            <Brand />
            <p className="text-[14px] leading-relaxed text-ink-2 max-w-sm">
              We build websites and run marketing campaigns that help professional services businesses grow — clean, strategic, and built with care, every time.
            </p>
            <div className="flex flex-col gap-2.5 text-[13px] text-ink-2 mt-2">
              <a href={`tel:${STUDIO.phone}`} className="flex items-center gap-2 hover:text-ink transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent" /> {STUDIO.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" /> {STUDIO.location}
              </span>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ink-3">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-ink-2 hover:text-ink transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2025 PVA Media Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
