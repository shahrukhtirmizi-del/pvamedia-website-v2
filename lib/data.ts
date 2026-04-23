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
  { k: "Avg. delivery", v: "5–7 days" },
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
