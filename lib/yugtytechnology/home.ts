/**
 * Home page copy, regrouped from the existing Yugty Tech content (lib/yugtytechnology/content.ts).
 * Nothing new is claimed: every line restates something the business already publishes in its services, FAQ or steps.
 */

/** Six solution groups; each links to the matching section of the Services page. */
export const SOLUTIONS = [
  { name: "Websites and web applications", text: "Fast, accessible, search-friendly sites, and the dashboards, portals and products people use every day.", href: "/services#web" },
  { name: "Android and iOS apps", text: "Polished apps for Android and iPhone, ready for the Play Store and the App Store.", href: "/services#and" },
  { name: "AI-powered solutions", text: "Practical intelligence added where it genuinely helps, with people reviewing the result.", href: "/services#ai" },
  { name: "Software engineering", text: "Maintainable systems, APIs and integrations that scale with the product.", href: "/services#eng" },
  { name: "Digital transformation", text: "Moving manual, paper-based work onto reliable software that fits how your people work.", href: "/services#dx" },
  { name: "Technology consulting", text: "Clear advice on what to build, in what order, and why, before you commit budget.", href: "/services#con" },
] as const;

export const WHY = [
  ["A plan before we build", "You get a written recommendation and a build order, with risks and trade-offs in plain language. You can use it with us or with anyone else."],
  ["Working software at every step", "We deliver in steps, so you can try real software as it grows instead of waiting for one big reveal."],
  ["AI with people in the loop", "Human review is built into the flow, and privacy and data handling are agreed before anything is built."],
  ["Terms agreed in writing", "Ownership of the code is settled in writing at the start of each project, and no price is quoted until we understand the work."],
] as const;

/** Short assurances shown under the hero. */
export const ASSURANCES = ["A written plan before we build", "Working software at every step", "Terms agreed in writing"] as const;
