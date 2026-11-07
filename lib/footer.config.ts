import type { FooterConfig } from "@/components/standard-footer/types";

/**
 * Footer settings for YugtyTechnology. The layout is the standard footer used by every Yugty web application
 * (components/standard-footer); only the values below are specific to this app.
 * Override a family URL with NEXT_PUBLIC_APP_URL_HOME, _AI, _OVERSEAS, _LEARNING, _JOBS or _TECHNOLOGY.
 */
const env = (k: string) => (process.env[k] ?? "").trim();
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const FOOTER: FooterConfig = {
  brand: { name: "YugtyTechnology", logoSrc: "/yugty-logo.svg", logoAlt: "YugtyTechnology", tagline: "Imagine it. We engineer it." },
  siteUrl: SITE_URL,
  cta: { eyebrow: "Build. Ship. Grow.", title: "Have something you want built?", text: "Websites, web and mobile apps and AI-powered software, designed and engineered end to end. Tell us what you need.", primary: {"label":"Start a project","href":"/contact"}, secondary: {"label":"What we build","href":"/#build"}, tertiary: {"label":"Services in detail","href":"/services"} },
  appsTitle: "One family. One account.",
  apps: [
    { key: "home", name: "Yugti", href: env("NEXT_PUBLIC_APP_URL_HOME") || "https://yugti.com", icon: "Home", external: true },
    { key: "studio", name: "Studio", href: env("NEXT_PUBLIC_APP_URL_STUDIO") || "https://yugtistudio.com", icon: "Atom", external: true },
    { key: "colleges", name: "Colleges", href: env("NEXT_PUBLIC_APP_URL_COLLEGES") || "https://yugticolleges.com", icon: "Landmark", external: true },
    { key: "learning", name: "Learning", href: env("NEXT_PUBLIC_APP_URL_LEARNING") || "https://yugtilearning.com", icon: "GraduationCap", external: true },
    { key: "ai", name: "Yugti AI", href: env("NEXT_PUBLIC_APP_URL_AI") || "https://yugti.ai", icon: "Sparkles", external: true },
    { key: "tech", name: "Tech", href: "/", icon: "Code2" },
    { key: "jobs", name: "Jobs", href: env("NEXT_PUBLIC_APP_URL_JOBS") || "https://yugtijobs.com", icon: "Briefcase", external: true },
    { key: "pr", name: "PR", href: env("NEXT_PUBLIC_APP_URL_PR") || "https://yugtipr.com", icon: "Megaphone", external: true },
  ],
  newsletter: { label: "Get news and updates", button: "Join", endpoint: "/api/newsletter", source: "footer" },
  columns: [
    {
      "title": "Build",
      "links": [
        {
          "href": "/#build",
          "label": "What we build"
        },
        {
          "href": "/services",
          "label": "Services in detail"
        },
        {
          "href": "/#ai",
          "label": "AI tools"
        }
      ]
    },
    {
      "title": "How we work",
      "links": [
        {
          "href": "/#process",
          "label": "Process"
        },
        {
          "href": "/#faq",
          "label": "FAQ"
        }
      ]
    },
    {
      "title": "Get started",
      "links": [
        {
          "href": "/contact",
          "label": "Start a project"
        },
        {
          "href": "/contact",
          "label": "Contact us"
        }
      ]
    },
    {
      "title": "Company",
      "links": [
        {
          "href": "/privacy",
          "label": "Privacy"
        }
      ]
    }
  ],
  social: [
    { label: "LinkedIn", href: "", icon: "linkedin" },
    { label: "X", href: "", icon: "x" },
    { label: "Instagram", href: "", icon: "instagram" },
    { label: "YouTube", href: "", icon: "youtube" },
    { label: "Facebook", href: "", icon: "facebook" },
  ],
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hello@yourdomain.com",
  share: { title: "Know someone who should see YugtyTechnology?", text: "YugtyTechnology: websites, apps and AI-powered software", subject: "Have a look at YugtyTechnology" },
  legal: [{ href: "/privacy", label: "Privacy Policy" }],
};
