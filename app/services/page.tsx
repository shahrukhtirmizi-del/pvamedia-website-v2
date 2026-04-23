import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { PricingCard } from "@/components/pricing-card";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { SERVICES, TIERS } from "@/lib/data";

export const metadata = {
  title: "Services & Pricing · PVA Media",
  description:
    "Websites, paid marketing, landing pages and brand identity — from $800 one-off to $2,500/mo, all-in packages with no surprise invoices.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6">Services · Pricing</div>
              <h1 className="h-display text-white mb-5">
                Websites, campaigns <br className="hidden md:block" />
                & everything <span className="text-accent">in between.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 max-w-[580px]">
                Transparent pricing. Everything included. No retainer surprises, no locked-in contracts.
                Hosting, maintenance, ad creative and reporting — all in the price.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRICING TIERS ============ */}
      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {TIERS.map((t, i) => (
              <PricingCard key={t.name} tier={t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center text-[13px] text-ink-3">
            Every engagement starts with a free discovery call. We'll tell you honestly whether this is the right fit.
          </div>
        </div>
      </section>

      {/* ============ SERVICE CATALOGUE ============ */}
      <section className="py-20 md:py-28 border-t border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="02"
            eyebrow="Individual services"
            title={
              <>
                Build a custom engagement from <span className="text-accent">five disciplines.</span>
              </>
            }
            sub="Not every project fits a package. Pick the services that match your moment — we'll scope a bespoke engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/8">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.num} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED STRIP ============ */}
      <section className="py-20 md:py-24 border-t border-white/8">
        <div className="container">
          <SectionHead
            num="03"
            eyebrow="What's included"
            title={
              <>
                Nothing hidden. <span className="text-accent">Nothing extra.</span>
              </>
            }
            sub="What you see on this page is what you pay. If we can't do something for the agreed price, we say so before we start."
            align="stacked"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/8">
            {[
              { k: "Hosting", v: "Managed, complimentary, with every website" },
              { k: "Maintenance", v: "2 hours/month included, extended available" },
              { k: "Revisions", v: "Unlimited until you're 100% satisfied" },
              { k: "Payment", v: "Zero until the site is live and you approve" },
              { k: "Reporting", v: "Monthly performance with marketing engagements" },
              { k: "Creative", v: "All ad creative & copy produced in-house" },
              { k: "Onboarding", v: "First 30 days focused on setup & strategy" },
              { k: "Contract", v: "Month-to-month on marketing · no lock-in" },
            ].map((item) => (
              <div
                key={item.k}
                className="p-6 md:p-7 border-r border-b border-white/8 flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
                  {item.k}
                </span>
                <span className="text-[14px] text-ink leading-relaxed">{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 md:py-28 relative overflow-hidden border-t border-white/8">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[720px]">
            <Reveal>
              <h2 className="h-section text-white mb-5">
                Unsure which package fits? <br className="hidden md:block" />
                <span className="text-accent">Let's have a conversation.</span>
              </h2>
              <p className="text-[16px] text-ink-2 mb-7 max-w-[480px] leading-relaxed">
                30 minutes on a call and we'll tell you honestly which engagement shape makes sense — or whether PVA Media is even the right fit.
              </p>
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a discovery call <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
