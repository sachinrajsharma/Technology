import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Footer, Nav } from "@/components/yugtytechnology/Chrome";
import InquiryForm from "@/components/yugtytechnology/InquiryForm";
import { BRAND } from "@/lib/yugtytechnology/content";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell Yugti Tech what you want to build. We reply with questions or a plan.",
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ kind?: string }> }) {
  const { kind } = await searchParams;
  return (
    <>
      <Nav />
      <main id="main-content" className="dv dv-tech yt-page" style={{ "--a": BRAND.accent, "--a2": BRAND.accent2 } as CSSProperties}>
        <section className="dv-sec yt-narrow">
          <p className="vl-kicker">START A PROJECT</p>
          <h1 className="vl-h2">Tell us what you want to <em>build.</em></h1>
          <p className="vl-sublead">A few lines are enough. We will read your brief and reply with questions or a plan. No prices are quoted until we understand the work.</p>
          <InquiryForm preset={kind} />
        </section>
      </main>
      <Footer />
    </>
  );
}
