export const STUDIO = {
  name: "PVA Media",
  tagline: "Websites. Campaigns. Done properly.",
  description:
    "A London studio building conversion-focused websites and paid marketing for professional services teams — law firms, estate agencies and consultancies who want the craft, not the template.",
  email: "admin@teampvamedia.com",
  phone: "+1 (361) 851-6951",
  location: "London, UK",
  established: 2025,
  availability: "",
};

export const STATS = [
  { k: "Avg. delivery", v: "6–8 days" },
  { k: "Monthly maintenance", v: "2 hrs incl." },
  { k: "Revisions", v: "Unlimited" },
  { k: "Payment", v: "On approval" },
];

export const LOGOS: string[] = [];

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  headline: string;
  summary: string;
  metrics: { k: string; v: string; accent?: boolean }[];
};

export const CASES: CaseStudy[] = [];

export const SERVICES = [
  {
    num: "01",
    name: "Website Design",
    price: "From $2,000",
    summary: "Custom websites built from scratch — no templates. Designed to reflect your expertise and convert visitors into enquiries.",
    points: [
      "Custom design, as many pages as needed",
      "Mobile responsive & SEO-ready",
      "Unlimited revisions until satisfied",
      "Contact forms & integrations",
      "Managed hosting — complimentary",
      "2 hrs/mo maintenance — complimentary",
    ],
  },
  {
    num: "02",
    name: "Paid Marketing",
    price: "All-in $2,500/mo",
    summary: "Meta and Google Ads managed end-to-end. Strategy, creative, copywriting, targeting, and reporting.",
    points: [
      "Meta & Google Ads management",
      "Ad creative & copywriting",
      "Monthly performance report",
      "Free digital presence audit",
      "30-day strategy onboarding",
      "Dedicated point of contact",
    ],
  },
  {
    num: "03",
    name: "Landing Pages",
    price: "From $800",
    summary: "High-converting pages for campaigns, launches, and lead generation. Built to guide visitors toward one clear action.",
    points: [
      "Single-purpose conversion page",
      "A/B test variants included",
      "Tracking & analytics wired up",
      "Hosted on our infrastructure",
    ],
  },
  {
    num: "04",
    name: "Brand & Visual Identity",
    price: "From $1,800",
    summary: "Craft or refine your visual identity — logo, colour palette, typography. Everything works in harmony.",
    points: [
      "Logo design & refinement",
      "Colour system & typography",
      "Brand usage guidelines",
      "Asset library & templates",
    ],
  },
  {
    num: "05",
    name: "Website Redesign",
    price: "From $1,500",
    summary: "Your current site isn't doing you justice. Strip it back and rebuild something that works — faster, sharper, built to convert.",
    points: [
      "Heritage audit of existing site",
      "Full redesign on new platform",
      "Content migration included",
      "Zero downtime deployment",
    ],
  },
];

export type Tier = {
  name: string;
  pitch: string;
  setup: string | null;
  setupNote: string | null;
  monthly: string | null;
  monthlyNote: string | null;
  cta: string;
  featured: boolean;
  tag?: string;
  includes: string[];
  discounts?: { term: string; price: string; note: string }[];
};

export const TIERS: Tier[] = [
  {
    name: "Web",
    pitch: "A site that lands better clients, and nothing you don't need.",
    setup: "$2,000",
    setupNote: "one-off",
    monthly: null,
    monthlyNote: null,
    cta: "Start a website",
    featured: false,
    includes: [
      "Custom design, unlimited pages",
      "Mobile responsive & SEO-ready",
      "Unlimited revisions until satisfied",
      "Free brand strategy session",
      "Contact forms & integrations",
      "Managed hosting — complimentary",
      "2 hrs/mo maintenance — complimentary",
    ],
  },
  {
    name: "Web + Growth",
    pitch: "The full stack. Website plus a paid program that brings the client pipeline.",
    setup: "$1,700",
    setupNote: "one-off · 15% off",
    monthly: "$2,500",
    monthlyNote: "per month",
    cta: "Start both",
    featured: true,
    tag: "Most popular",
    includes: [
      "Everything in Web",
      "Paid ad management — Meta & Google",
      "Ad creative & copywriting",
      "Monthly performance report",
      "Free digital presence audit",
      "Dedicated point of contact",
    ],
  },
  {
    name: "Growth",
    pitch: "Keep your current site — we run the marketing program on top of it.",
    setup: null,
    setupNote: null,
    monthly: "$2,500",
    monthlyNote: "per month · all-in",
    cta: "Start growth",
    featured: false,
    includes: [
      "Paid ad management — Meta & Google",
      "Ad creative & copywriting",
      "Monthly performance report",
      "Free digital presence audit",
      "30-day strategy onboarding",
      "Dedicated point of contact",
      "Website audit on signup",
    ],
    discounts: [
      { term: "Month to month", price: "$2,500/mo", note: "Full flexibility" },
      { term: "3 months upfront", price: "$6,375", note: "Save $1,125 · 15% off" },
      { term: "6 months upfront", price: "$12,000", note: "Save $3,000 · 20% off" },
    ],
  },
];

export const PROCESS = [
  {
    num: "01",
    name: "Discovery call",
    desc: "A straight conversation about your business, goals, and what success looks like. No pressure, no pitch.",
    duration: "30 min",
  },
  {
    num: "02",
    name: "Strategy & planning",
    desc: "We map structure, user journey, visual direction and goals. You sign off before a single line of code is written.",
    duration: "1–2 days",
  },
  {
    num: "03",
    name: "Design & development",
    desc: "Built with care and precision. You see progress and give feedback at every stage — no black boxes, no hand-offs to juniors.",
    duration: "3–5 days",
  },
  {
    num: "04",
    name: "Review & refinement",
    desc: "We revise, polish, and perfect together — as many rounds as it takes until everything is exactly right.",
    duration: "1–2 days",
  },
  {
    num: "05",
    name: "Launch & beyond",
    desc: "We handle the full launch and stay on hand after. You're not on your own once we hand over.",
    duration: "Ongoing",
  },
];

export const GUARANTEES = [
  {
    num: "01",
    tag: "Zero risk",
    name: "Website guarantee",
    desc: "You don't pay a single penny until your website is live and you're 100% satisfied. Unlimited revisions — no time limit, no pressure.",
  },
  {
    num: "02",
    tag: "No strings",
    name: "Free digital audit",
    desc: "Every marketing client gets a full audit of their current digital presence before we start. No charge, no strings — just an honest picture of where you stand.",
  },
  {
    num: "03",
    tag: "Yours to keep",
    name: "Marketing onboarding",
    desc: "Month one is dedicated entirely to strategy, account setup and creative build. Everything produced is yours to keep — regardless of what happens next.",
  },
];

export const VALUES = [
  {
    name: "Direct communication",
    desc: "You always know exactly where things stand. We respond fast, explain clearly, and never leave you guessing.",
  },
  {
    name: "No templates, ever",
    desc: "Every project is designed from scratch for your brand. No shortcuts — just purposeful, considered work built to last.",
  },
  {
    name: "Built to convert",
    desc: "Beautiful isn't enough. Every decision is tied to how it affects your ability to attract and convert the right clients.",
  },
  {
    name: "Reliable & dependable",
    desc: "We hit deadlines, stick to scope, and stand behind our work. When you work with us, you can count on us to deliver.",
  },
];

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "Studio" },
];
