import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "@/components/standard-footer/footer.css";
import "@/components/yugtytechnology/base.css";
import "@/components/yugtytechnology/division.css";
import "@/components/yugtytechnology/yugtytechnology.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--vl-display", display: "swap" });
const text = Inter({ subsets: ["latin"], variable: "--vl-text", display: "swap" });
const footerFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-footer", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = { themeColor: "#04060f", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Yugty Tech: Websites, apps and AI-powered software", template: "%s | Yugty Tech" },
  description: "We turn ideas into websites, web applications, Android and iOS apps, AI-powered solutions and scalable digital products.",
  icons: { icon: "/yugty-logo.svg" },
  openGraph: { title: "Yugty Tech", description: "Imagine it. We engineer it.", type: "website", siteName: "Yugty Tech" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={`vl ${display.variable} ${text.variable} ${footerFont.variable}`}>
          <a className="vl-skip" href="#main-content">Skip to content</a>
          {children}
          <Script src="/yugtytechnology/fx.js" strategy="afterInteractive" />
          <Script src="/yugtytechnology/division.js" strategy="afterInteractive" />
          <Script src="/yugtytechnology/tech-studio.js" strategy="afterInteractive" />
        </div>
      </body>
    </html>
  );
}
