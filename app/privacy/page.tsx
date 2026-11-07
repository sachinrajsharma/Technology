import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Footer, Nav } from "@/components/yugtytechnology/Chrome";
import { BRAND } from "@/lib/yugtytechnology/content";

export const metadata: Metadata = { title: "Privacy", description: "How Yugty Tech handles the details you send us." };

export default function Privacy() {
  return (
    <>
      <Nav />
      <main id="main-content" className="dv dv-tech yt-page" style={{ "--a": BRAND.accent, "--a2": BRAND.accent2 } as CSSProperties}>
        <section className="dv-sec yt-narrow yt-prose">
          <p className="vl-kicker">PRIVACY</p>
          <h1 className="vl-h2">What we do with your details</h1>
          <p>This site has one form: the project brief on the Start a project page. This note says what happens to what you send.</p>
          <h2>What we collect</h2>
          <p>The name, email address, optional phone number and company, project type, budget range and message you type into the form. We do not use advertising trackers on this site.</p>
          <h2>How we use it</h2>
          <p>Only to read your brief and reply to you. We do not sell your details, and we do not use them to train AI models.</p>
          <h2>Who sees it</h2>
          <p>Your brief is emailed to our team through an email delivery service. People outside the team do not receive it unless you ask us to share it.</p>
          <h2>Your choices</h2>
          <p>Ask us to correct or delete your brief at any time by replying to our email.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
