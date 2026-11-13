/** Showcase projects for the Yugty Tech home page. Facts taken from vidaara.org and mathstudy.in as published; no usage numbers are claimed. */

export type WebProject = {
  name: string;
  host: string;
  url: string;
  tag: string;
  what: string;
  who: string;
  features: string[];
  accent: [string, string];
};

export const WEB_PROJECTS: WebProject[] = [
  {
    name: "Vidaara",
    host: "vidaara.org",
    url: "https://vidaara.org",
    tag: "Free education platform",
    what: "A free learning platform for Grade 1–12 and the major competitive exams, run as a nonprofit with no ads.",
    who: "School students and exam aspirants across India (JEE, NEET, UPSC, SSC).",
    features: ["Courses from Grade 1 to 12 plus language courses", "Timed mock tests with AI-powered analysis", "AI tutor in English and Hindi", "Community and exam-prep hubs"],
    accent: ["#2f7bff", "#28d7ff"],
  },
  {
    name: "MathStudy",
    host: "mathstudy.in",
    url: "https://mathstudy.in",
    tag: "E-commerce for e-books",
    what: "A store for premium maths e-books where every question is solved step by step, delivered as PDF to your email.",
    who: "Students in Grades 1–12 preparing for CBSE, ICSE, JEE, CAT, CTET and IMO.",
    features: ["Browse by grade or by exam", "600+ e-books listed, from worksheets to sample papers", "Pay by UPI, download link by email", "Accounts with re-download of past purchases"],
    accent: ["#7ee8c7", "#a78bfa"],
  },
];

export type AndroidApp = {
  name: string;
  tag: string;
  text: string;
  points: string[];
  note: string;
  url: string;
  accent: [string, string];
};

export const ANDROID_APPS: AndroidApp[] = [
  {
    name: "Vidaara",
    tag: "Learning app",
    text: "Every course, mock test and the AI tutor on your phone.",
    points: ["Grades 1–12 plus JEE, NEET, UPSC and SSC prep", "Timed mock tests with instant AI analysis", "Ask the AI tutor in English or Hindi"],
    note: "Free · Android 7.0+",
    url: "https://play.google.com/store/apps/details?id=in.vidaara.vidaara",
    accent: ["#2f7bff", "#28d7ff"],
  },
  {
    name: "Words of Vidaara",
    tag: "Word game",
    text: "A bilingual word-puzzle adventure that grows your vocabulary.",
    points: ["Anagrams, word searches and daily puzzles", "Real words in English and Hindi, with meanings", "Leaderboards and leagues with friends"],
    note: "Free · Android 7.0+",
    url: "https://play.google.com/store/apps/details?id=com.vidaara.wov",
    accent: ["#ffb02e", "#ff3d9a"],
  },
  {
    name: "Ankora",
    tag: "Maths game",
    text: "Learn maths by playing: open chapter doors, then practise in arcade mini-games.",
    points: ["Grades 1–8, chapter by chapter", "Five mini-games with hints on every mistake", "Works offline, no ads, no in-app purchases"],
    note: "Free · Offline · Rated 3+",
    url: "https://play.google.com/store/apps/details?id=org.vidaara.ankora",
    accent: ["#8b5cff", "#1fd1c0"],
  },
];
