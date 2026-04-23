"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { STUDIO } from "@/lib/data";

const INTEREST = [
  "New website design",
  "Website redesign",
  "Paid marketing (Meta & Google Ads)",
  "Web + Growth (website & marketing)",
  "Landing page",
  "Branding & visual identity",
  "Not sure yet — let's talk",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission — in production this would POST to Formspree/etc.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Get in touch · Response within 1 business day
              </div>
              <h1 className="h-display text-white mb-5">
                Tell us about <span className="text-accent">the work.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 max-w-[560px]">
                Short form below. We'll respond within one business day with a suggested scope, timeline, and a link to book a free 30-minute discovery call.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 border-t border-white/8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
            {/* ==== FORM ==== */}
            <Reveal>
              <div className="bg-bg-2 border border-white/8 rounded-lg p-6 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-start gap-5 py-8">
                    <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-[28px] md:text-[32px] font-medium tracking-tight text-ink">
                      Message received.
                    </h3>
                    <p className="text-[15px] text-ink-2 leading-relaxed max-w-[460px]">
                      Thanks — we'll be back in touch within one business day.
                    </p>
                    <Button asChild variant="ghost" size="md" className="mt-2">
                      <Link href="/">Back to home <ArrowRight className="w-3.5 h-3.5" /></Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="eyebrow text-ink-3 pb-1">Start a conversation</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First name *</Label>
                        <Input id="firstName" name="firstName" required placeholder="James" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input id="lastName" name="lastName" required placeholder="Harlow" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Work email *</Label>
                        <Input type="email" id="email" name="email" required placeholder="james@firm.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" placeholder="Harlow & Associates" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label>What are you looking for?</Label>
                        <Select name="interest">
                          <SelectTrigger>
                            <SelectValue placeholder="Select one..." />
                          </SelectTrigger>
                          <SelectContent>
                            {INTEREST.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="project">Tell us about your project</Label>
                      <Textarea
                        id="project"
                        name="project"
                        placeholder="What's the brief, what's the outcome you're measuring against, who else is involved?"
                        rows={5}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center pt-3 mt-1 border-t border-white/8">
                      <Magnetic>
                        <Button type="submit" size="lg" disabled={submitting}>
                          {submitting ? "Sending..." : "Send message"}{" "}
                          {!submitting && <ArrowRight className="w-3.5 h-3.5" />}
                        </Button>
                      </Magnetic>
                      <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Response under 2h in business hours
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* ==== SIDE PANEL ==== */}
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="bg-bg-2 border border-white/8 rounded-lg p-6 md:p-7 flex flex-col gap-5">
                  <div className="eyebrow text-ink-3">Direct channels</div>
                  <div className="flex flex-col gap-4">

                    <a
                      href={`tel:${STUDIO.phone}`}
                      className="flex items-start gap-3 hover:text-ink transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
                          Phone
                        </span>
                        <span className="text-[14px] text-ink group-hover:text-accent transition-colors">
                          {STUDIO.phone}
                        </span>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
                          Studio
                        </span>
                        <span className="text-[14px] text-ink">{STUDIO.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-2 border border-white/8 rounded-lg p-6 md:p-7 flex flex-col gap-4">
                  <div className="eyebrow text-ink-3">The discovery call</div>
                  <h3 className="text-[20px] font-medium tracking-tight text-ink leading-tight">
                    30 minutes, no pitch.
                  </h3>
                  <p className="text-[13.5px] text-ink-2 leading-relaxed">
                    We ask specific questions, understand the surface and the stakeholders, and tell you honestly whether we're right for this work.
                  </p>
                  <ul className="flex flex-col gap-2 text-[13px] text-ink-2 mt-1">
                    {["Scope & timeline clarity", "Budget sanity check", "Introductions if we're not the fit"].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent mt-[7px]" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-bg-2 border border-white/8 rounded-lg p-6 md:p-7 flex flex-col gap-3">
                  <div className="eyebrow text-ink-3">Already know what you need?</div>
                  <p className="text-[13.5px] text-ink-2 leading-relaxed">
                    Skip the form — fill in the client onboarding questionnaire directly.
                  </p>
                  <Button asChild variant="ghost" size="md" className="self-start mt-1">
                    <Link href="/onboarding">
                      Start onboarding <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
