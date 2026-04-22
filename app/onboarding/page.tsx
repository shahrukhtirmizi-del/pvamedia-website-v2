"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone, FileText, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

const INDUSTRIES = [
  "Law Firm / Legal Services",
  "Dental Practice",
  "Medical / Healthcare",
  "Landscaping / Grounds",
  "Estate Agency / Real Estate",
  "Financial Services",
  "Accountancy",
  "Construction / Trades",
  "Consulting",
  "Hospitality / Restaurant",
  "Retail / E-commerce",
  "Other",
];

const STEPS = [
  { n: "01", label: "Fill in this form" },
  { n: "02", label: "We review & confirm" },
  { n: "03", label: "Project kickoff call" },
  { n: "04", label: "Build begins" },
];

const PAGES = [
  "Home", "About Us", "Services", "Individual Service Pages",
  "Team / Staff", "Portfolio / Case Studies", "Testimonials / Reviews",
  "Blog / News", "FAQ", "Contact", "Pricing", "Booking / Appointments",
];

const PERSONALITY = [
  "Professional & Corporate", "Warm & Approachable", "Bold & Confident",
  "Luxury & Premium", "Clean & Minimal", "Friendly & Casual",
  "Trustworthy & Established", "Modern & Innovative",
];

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <section className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="max-w-[620px] mx-auto text-center flex flex-col items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h1 className="h-section text-white">
                You're all <span className="text-accent">submitted.</span>
              </h1>
              <p className="text-[15px] md:text-[17px] text-ink-2 leading-relaxed max-w-[480px]">
                Thanks for taking the time to fill this in — we've got everything we need to get started. Here's what happens next.
              </p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-left">
                {[
                  { icon: Mail, title: "Within 1 business day", body: "We'll review your answers and reach out to confirm scope and timeline." },
                  { icon: FileText, title: "Project agreement", body: "Formal agreement for you to sign before work begins." },
                  { icon: Phone, title: "Kickoff call", body: "Short call to go over everything and answer any questions." },
                  { icon: Rocket, title: "Build begins", body: "Once everything's confirmed, we get to work. Delivery in 3–4 weeks." },
                ].map((item) => (
                  <div key={item.title} className="bg-bg-2 border border-white/8 rounded-lg p-5 flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-[14px] font-medium text-ink mb-1">{item.title}</div>
                      <div className="text-[12.5px] text-ink-2 leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="ghost" size="lg" className="mt-2">
                <Link href="/">Back to home <ArrowRight className="w-3.5 h-3.5" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[780px]">
            <Reveal>
              <div className="eyebrow text-accent mb-5">Website Project · Client Onboarding</div>
              <h1 className="h-display text-white mb-5">
                Let's build your <span className="text-accent">website.</span>
              </h1>
              <p className="text-[15px] md:text-[16.5px] leading-relaxed text-ink-2 max-w-[560px] mb-8">
                This form helps us understand your business, goals, and exactly what you need — so we can get started without unnecessary back-and-forth. Takes about 10 minutes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/8 rounded-lg overflow-hidden bg-bg-2">
                {STEPS.map((s, i) => (
                  <div
                    key={s.n}
                    className={`p-4 text-center ${i < STEPS.length - 1 ? "border-r border-white/8" : ""}`}
                  >
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-3 mb-1.5">
                      Step {s.n}
                    </div>
                    <div className="text-[12.5px] text-ink-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-[860px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* SECTION 1: BUSINESS INFO */}
            <SectionCard num="01" title="Your" accent="business.">
              <p className="text-[13px] text-ink-2 mb-5">
                Tell us about who you are and what you do. The more detail, the better.
              </p>
              <Grid2>
                <Field label="Business / Trading Name *">
                  <Input name="business_name" required placeholder="e.g. Harlow & Associates" />
                </Field>
                <Field label="Your Full Name *">
                  <Input name="contact_name" required placeholder="e.g. James Harlow" />
                </Field>
              </Grid2>
              <Grid2>
                <Field label="Email Address *">
                  <Input type="email" name="email" required placeholder="james@yourbusiness.com" />
                </Field>
                <Field label="Phone Number *">
                  <Input type="tel" name="phone" required placeholder="+44 0000 000 000" />
                </Field>
              </Grid2>
              <Grid2>
                <Field label="Industry / Sector *">
                  <Select name="industry" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry..." />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map((i) => (
                        <SelectItem key={i} value={i}>
                          {i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Business Location">
                  <Input name="location" placeholder="e.g. London, UK" />
                </Field>
              </Grid2>
              <Field
                label="What does your business do? *"
                hint="Be specific — who do you serve, what problem do you solve, what makes you different?"
              >
                <Textarea
                  name="business_description"
                  required
                  rows={4}
                  placeholder="e.g. We're a family law firm in Austin, TX specialising in divorce and custody cases. We've been operating for 8 years..."
                />
              </Field>
              <Field
                label="Who is your ideal client?"
                hint="Age, income level, profession, pain points — whatever you know about them."
              >
                <Textarea
                  name="ideal_client"
                  rows={3}
                  placeholder="e.g. Business owners aged 35–55 in the Dallas area looking for a reliable accountant who won't talk over their heads..."
                />
              </Field>
            </SectionCard>

            {/* SECTION 2: CURRENT ONLINE PRESENCE */}
            <SectionCard num="02" title="Your current" accent="online presence.">
              <p className="text-[13px] text-ink-2 mb-5">
                Help us understand where you're starting from.
              </p>
              <Grid2>
                <Field label="Current Website URL (if any)">
                  <Input type="url" name="current_website" placeholder="https://yoursite.com" />
                </Field>
                <Field label="Domain Name You Want to Use">
                  <Input name="domain" placeholder="e.g. yourbusiness.com" />
                </Field>
              </Grid2>
              <Field label="What's wrong with your current site? (or why do you need a new one?)">
                <Textarea
                  name="current_problems"
                  rows={3}
                  placeholder="e.g. It looks outdated, doesn't work on mobile, we're not getting any enquiries from it..."
                />
              </Field>
              <Field label="Do you have an existing domain registered?">
                <RadioGroup name="has_domain">
                  {[
                    { v: "yes", label: "Yes — I own it already", sub: "Please share your registrar login details with us separately" },
                    { v: "no", label: "No — I need one registered", sub: "We'll help you get one set up" },
                    { v: "unsure", label: "Not sure", sub: "We'll figure it out on the kickoff call" },
                  ].map((o) => (
                    <RadioRow key={o.v} value={o.v} label={o.label} sub={o.sub} />
                  ))}
                </RadioGroup>
              </Field>
            </SectionCard>

            {/* SECTION 3: GOALS */}
            <SectionCard num="03" title="What you" accent="need.">
              <p className="text-[13px] text-ink-2 mb-5">
                Tell us exactly what you want this website to do for your business.
              </p>
              <Field label="What is the primary goal of the website? *">
                <RadioGroup name="primary_goal" required>
                  {[
                    { v: "leads", label: "Generate enquiries / leads", sub: "Drive phone calls, form submissions, bookings" },
                    { v: "credibility", label: "Establish credibility and look professional", sub: "Make a strong first impression on potential clients" },
                    { v: "replace", label: "Replace an outdated site", sub: "Modernise and improve on what we already have" },
                    { v: "launch", label: "Launch a new business", sub: "Brand new website for a brand new venture" },
                    { v: "other", label: "Other" },
                  ].map((o) => (
                    <RadioRow key={o.v} value={o.v} label={o.label} sub={o.sub} />
                  ))}
                </RadioGroup>
              </Field>
              <Field label="Which pages do you need? *" hint="Tick all that apply.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PAGES.map((p) => (
                    <CheckRow key={p} name="pages" value={p} label={p} />
                  ))}
                </div>
              </Field>
              <Field label="Any special features or functionality needed?" hint="e.g. online booking, live chat, map embed, gallery, video, multilingual.">
                <Textarea
                  name="special_features"
                  rows={3}
                  placeholder="e.g. We need an online booking system integrated with our calendar..."
                />
              </Field>
            </SectionCard>

            {/* SECTION 4: LOOK & FEEL */}
            <SectionCard num="04" title="Look &" accent="feel.">
              <p className="text-[13px] text-ink-2 mb-5">
                Help us understand the style and tone that fits your brand.
              </p>
              <Field label="How would you describe your brand personality? *" hint="Tick all that apply.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PERSONALITY.map((p) => (
                    <CheckRow key={p} name="brand_feel" value={p} label={p} />
                  ))}
                </div>
              </Field>
              <Grid2>
                <Field label="Preferred Colour Scheme" hint="Any specific or brand colours?">
                  <Input name="colours" placeholder="e.g. Dark navy and gold, or #2D0CB8" />
                </Field>
                <Field label="Colours to Avoid">
                  <Input name="colours_avoid" placeholder="e.g. No bright red or yellow" />
                </Field>
              </Grid2>
              <Field label="Share 2–3 websites you like the look of" hint="They don't have to be in your industry — just sites whose design you admire.">
                <Textarea
                  name="design_inspiration"
                  rows={3}
                  placeholder={`e.g. apple.com — clean and minimal\nstripe.com — modern and professional\nairbnb.com — warm, photography-led`}
                />
              </Field>
            </SectionCard>

            {/* SECTION 5: CONTENT */}
            <SectionCard num="05" title="Your" accent="content.">
              <p className="text-[13px] text-ink-2 mb-5">
                Let us know what content you have and what you need.
              </p>
              <Field label="Who will write the website copy? *">
                <RadioGroup name="copy_source" required>
                  {[
                    { v: "pva", label: "PVA Media — please write it for us", sub: "We'll draft all copy based on your answers in this form" },
                    { v: "client", label: "We will provide all copy", sub: "We'll send you a content template to fill in" },
                    { v: "mix", label: "A mix — we'll provide some, you write the rest" },
                  ].map((o) => (
                    <RadioRow key={o.v} value={o.v} label={o.label} sub={o.sub} />
                  ))}
                </RadioGroup>
              </Field>
              <Field label="Do you have photography or images to use? *">
                <RadioGroup name="images_source" required>
                  {[
                    { v: "pro", label: "Yes — professional photos we'll send over" },
                    { v: "some", label: "We have some photos but they're not professional quality" },
                    { v: "stock", label: "No — please use stock photography", sub: "We'll source high-quality relevant images" },
                    { v: "none", label: "No photos needed — icon/graphic led design" },
                  ].map((o) => (
                    <RadioRow key={o.v} value={o.v} label={o.label} sub={o.sub} />
                  ))}
                </RadioGroup>
              </Field>
            </SectionCard>

            {/* SECTION 6: FINAL NOTES */}
            <SectionCard num="06" title="Anything" accent="else?">
              <Field label="How did you hear about PVA Media?">
                <Select name="referral_source">
                  <SelectTrigger>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Google search",
                      "Instagram / Social media",
                      "Referral from someone I know",
                      "You reached out to me",
                      "LinkedIn",
                      "Other",
                    ].map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Anything else we should know?" hint="Anything specific, unusual, or important that hasn't been covered above.">
                <Textarea
                  name="anything_else"
                  rows={4}
                  placeholder="e.g. We're rebranding at the same time, we have a very specific vision for the homepage, we need the site in two languages..."
                />
              </Field>
            </SectionCard>

            {/* DECLARATION */}
            <div className="bg-accent/8 border border-accent/30 rounded-lg p-6 md:p-7 flex flex-col gap-3">
              <p className="text-[13px] text-ink-2 leading-relaxed">
                <span className="font-medium text-ink">Before you submit — a few things to note:</span> By submitting this form you confirm the information provided is accurate to the best of your knowledge. This form is the first step in our onboarding process — it does not constitute a contract or payment obligation.
              </p>
              <p className="text-[13px] text-ink-2 leading-relaxed">
                Once we receive this, a member of the PVA Media team will review your answers and be in touch within <span className="text-ink">1 business day</span> to confirm the project scope, timeline, and next steps.
              </p>
              <div className="mt-2 pt-4 border-t border-accent/20 flex items-start gap-3">
                <Checkbox id="agree" name="agree" required />
                <label htmlFor="agree" className="text-[13px] text-ink leading-relaxed cursor-pointer">
                  I confirm I have read and understood the above, and the information I've provided is accurate.
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="flex flex-col items-center gap-3 mt-5 pt-6 border-t border-white/8">
              <Magnetic>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Onboarding Form"}{" "}
                  {!submitting && <ArrowRight className="w-3.5 h-3.5" />}
                </Button>
              </Magnetic>
              <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3 text-center">
                Your answers are sent securely · Response within 1 business day · {STUDIO.email}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* ============ LOCAL HELPERS ============ */

function SectionCard({
  num,
  title,
  accent,
  children,
}: {
  num: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="bg-bg-2 border border-white/8 rounded-lg p-6 md:p-9 relative overflow-hidden">
        <div className="absolute top-6 right-6 md:top-9 md:right-9 font-mono text-[14px] tracking-[0.1em] text-accent/20 select-none">
          {num}
        </div>
        <h2 className="text-[24px] md:text-[26px] font-medium tracking-tight text-ink mb-1">
          {title} <span className="text-accent">{accent}</span>
        </h2>
        <div className="flex flex-col gap-5 mt-5">{children}</div>
      </div>
    </Reveal>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {hint && <p className="text-[11.5px] text-ink-3 -mt-1">{hint}</p>}
      {children}
    </div>
  );
}

function Grid2({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}

function RadioRow({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <label className="flex items-start gap-3 p-4 bg-bg-3 border border-white/8 rounded-md cursor-pointer hover:border-white/20 hover:bg-bg-2 transition-colors">
      <RadioGroupItem value={value} className="mt-[2px]" />
      <div className="flex flex-col gap-0.5">
        <span className="text-[13.5px] text-ink">{label}</span>
        {sub && <span className="text-[11.5px] text-ink-3">{sub}</span>}
      </div>
    </label>
  );
}

function CheckRow({ name, value, label }: { name: string; value: string; label: string }) {
  return (
    <label className="flex items-center gap-3 p-3 bg-bg-3 border border-white/8 rounded-md cursor-pointer hover:border-white/20 hover:bg-bg-2 transition-colors">
      <Checkbox name={name} value={value} />
      <span className="text-[13px] text-ink">{label}</span>
    </label>
  );
}
