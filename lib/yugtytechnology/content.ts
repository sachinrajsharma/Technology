/**
 * Content for the Yugty Tech portal. It comes from the Velora Tech brief. Nothing is invented: where the business has not
 * published a number (project prices, timelines, client names) the page says so instead of showing one.
 */

export const BRAND = {
  name: "Yugty Tech",
  tagline: "Imagine it. We engineer it.",
  description:
    "We turn ideas into websites, web applications, Android and iOS apps, AI-powered solutions and scalable digital products.",
  accent: "#8b5cff",
  accent2: "#28d7ff",
};

/** Other Yugty portals. Each is optional: a link shows only when its URL is configured. */
export const SIBLINGS: { label: string; env: string | undefined; nav?: boolean }[] = [
  { label: "Yugty", env: process.env.NEXT_PUBLIC_APP_URL_HOME || "https://yugti.com" },
  { label: "Yugty Campus", env: process.env.NEXT_PUBLIC_APP_URL_STUDIO || "https://yugticampus.com" },
  { label: "Yugty Overseas Education", env: process.env.NEXT_PUBLIC_APP_URL_COLLEGES || "https://yugtioverseaseducation.com" },
  { label: "Yugty Learning", env: process.env.NEXT_PUBLIC_APP_URL_LEARNING || "https://yugtilearning.com", nav: true },
  { label: "Yugty AI", env: process.env.NEXT_PUBLIC_APP_URL_AI || "https://yugti.ai" },
  { label: "Yugty Jobs", env: process.env.NEXT_PUBLIC_APP_URL_JOBS || "https://yugtijobs.com", nav: true },
  { label: "Yugty PR", env: process.env.NEXT_PUBLIC_APP_URL_PR || "https://yugtipr.com" },
  { label: "Yugty Mathstudy", env: process.env.NEXT_PUBLIC_APP_URL_MATHSTUDY || "https://mathstudy.in" },
];

/** AI tools live on another Yugty portal; set its origin to make them links. Empty means they show as plain cards. */
const AI_BASE = (process.env.NEXT_PUBLIC_AI_TOOLS_URL ?? "").replace(/\/$/, "");
export function aiToolUrl(route: string): string | null {
  return AI_BASE ? `${AI_BASE}${route}` : null;
}

export type Service = { code: string; name: string; text: string; fit: string[]; deliver: string[] };

export const TECH_SERVICES: Service[] = [
  {
    code: "WEB", name: "Websites", text: "Fast, accessible, search-friendly sites that carry a brand properly.",
    fit: ["You need a new site or a rebuild of a slow or dated one", "Search visibility and accessibility matter", "Several people need to edit content without a developer"],
    deliver: ["Design and a component system", "Content management your team can use", "Performance, accessibility and search basics built in"],
  },
  {
    code: "APP", name: "Web applications", text: "Dashboards, portals and products people use every day.",
    fit: ["Customers, staff or partners need to log in and do work", "A spreadsheet or inbox has become the system", "You are launching a software product"],
    deliver: ["Sign-in, roles and permissions", "Dashboards, forms, payments and reports", "APIs and integrations with the tools you already use"],
  },
  {
    code: "AND", name: "Android apps", text: "Native and cross-platform apps for the Android ecosystem.",
    fit: ["Your users are mostly on Android", "You need offline use, notifications or the camera", "You want one team to cover Android and the web"],
    deliver: ["A designed, tested app ready for the Play Store", "Backend and API where needed", "Release and update handling"],
  },
  {
    code: "IOS", name: "iOS apps", text: "Polished apps for iPhone and iPad.",
    fit: ["Your users expect an app that feels native on iPhone", "You need device features such as the camera or notifications", "You are shipping to the App Store"],
    deliver: ["A designed, tested app ready for the App Store", "Backend and API where needed", "Release and update handling"],
  },
  {
    code: "ENG", name: "Software engineering", text: "Maintainable systems, APIs and integrations that scale.",
    fit: ["An existing system is hard to change or keeps breaking", "Two systems need to talk to each other", "You need extra engineers who work to a clear standard"],
    deliver: ["Clean, tested, documented code", "APIs and integrations", "Architecture that can grow with the product"],
  },
  {
    code: "AI", name: "AI-powered solutions", text: "Practical intelligence added where it genuinely helps.",
    fit: ["A repetitive task could be drafted, classified or searched automatically", "You want an assistant that answers from your own content", "You are unsure where AI helps and where it does not"],
    deliver: ["A scoped use case with a clear measure of success", "Human review built into the flow", "Privacy and data handling agreed before anything is built"],
  },
  {
    code: "DX", name: "Digital transformation", text: "Moving manual, paper-based work onto reliable software.",
    fit: ["Work still runs on paper, spreadsheets and email", "Approvals and records are hard to track", "Several offices or teams follow different processes"],
    deliver: ["A map of how the work is done today", "Software that fits how your people actually work", "Training and a managed switch-over"],
  },
  {
    code: "CON", name: "Technology consulting", text: "Clear advice on what to build, in what order, and why.",
    fit: ["You have an idea and are unsure how to start", "You have quotes from several vendors and need an independent view", "You need a plan before you commit budget"],
    deliver: ["A written recommendation and a build order", "Risks and trade-offs in plain language", "A plan you can use with us or with anyone else"],
  },
];

export const TECH_STEPS = [
  ["Discover", "We listen, define the problem and agree what success looks like."],
  ["Design", "Flows, interface and architecture, shown to you before code."],
  ["Build", "Iterative delivery with working software you can try each step."],
  ["Launch", "Testing, hardening and a managed release."],
  ["Evolve", "Support and improvements as the product grows."],
] as const;

export type AiTool = { name: string; text: string; route: string };

export const AI_AGENTS: AiTool[] = [
  { name: "AI Resume Expert", text: "Line-by-line feedback on your resume.", route: "/ai-resume-expert" },
  { name: "AI Interviewer", text: "Mock interviews with instant feedback.", route: "/ai-interviewer" },
  { name: "AI Roleplay Coach", text: "Rehearse hard conversations before they happen.", route: "/ai-roleplay-coach" },
  { name: "AI Skill Trainer", text: "Targeted practice for the skills you are missing.", route: "/ai-skill-trainer" },
  { name: "AI Opportunity Finder", text: "Openings matched to your profile.", route: "/ai-opportunity-finder" },
  { name: "AI Brand Builder", text: "Shape a professional presence people notice.", route: "/ai-brand-builder" },
  { name: "AI Learning Curator", text: "A learning path built around you.", route: "/ai-learning-curator" },
];

export const TECH_TRACKS = ["AI and ML", "Data and Analytics", "Software", "Cloud and DevOps", "Cybersecurity", "Design", "Digital Marketing", "Blockchain and Web3"];

export const FAQS: [string, string][] = [
  ["What does Yugty Tech build?", "Websites, web applications, Android and iOS apps, software, AI-powered solutions and digital transformation, with consulting to decide what to build first."],
  ["How much does a project cost?", "It depends on scope, so no prices are published here. Tell us what you want to build and we will respond with a plan."],
  ["How long does a project take?", "That depends on the size of the work, so we do not quote a standard timeline. After the Discover step you get a plan with milestones you can hold us to."],
  ["Will I see progress before launch?", "Yes. We deliver in steps, and you can try working software at each one."],
  ["Do you offer AI tools for individuals?", "Yes. The AI agents on this page, such as the Resume Expert and the Interviewer, are available now."],
  ["Who owns the code?", "That is agreed in writing at the start of each project. Talk to us about your requirements."],
];

export const PROJECT_KINDS = [...TECH_SERVICES.map((s) => s.name), "Not sure yet"];
export const BUDGETS = ["Not decided", "Under ₹1 lakh", "₹1 to 5 lakh", "₹5 to 15 lakh", "Above ₹15 lakh"];
