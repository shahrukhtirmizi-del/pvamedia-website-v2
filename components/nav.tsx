"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/data";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-40 transition-colors backdrop-blur-xl",
          scrolled
            ? "bg-bg/80 border-b border-white/8"
            : "bg-bg/40"
        )}
      >
        <div className="container flex items-center justify-between gap-4 py-4">
          <Brand />
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] text-ink-2 font-normal">
            {NAV.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">
                Book a call <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
            <button
              aria-label="Menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border border-white/10"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-over menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-bg/95 backdrop-blur-2xl lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container pt-24 pb-12 flex flex-col gap-1">
          {NAV.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-5 border-b border-white/8"
            >
              <span className="text-[32px] font-medium tracking-tighter">{link.label}</span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild size="lg" onClick={() => setOpen(false)}>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" onClick={() => setOpen(false)}>
              <Link href="/services">View pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
