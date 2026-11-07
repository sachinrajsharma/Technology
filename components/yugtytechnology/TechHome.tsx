import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { AI_AGENTS, BRAND, FAQS, TECH_SERVICES, TECH_STEPS, TECH_TRACKS, aiToolUrl } from "@/lib/yugtytechnology/content";
import { Faq, FinalCta, Footer, Nav, SectionHead, Ticker } from "./Chrome";
import TechIcon from "./TechIcons";
import TechStudio from "./TechStudio";

const ACCENT = { "--a": BRAND.accent, "--a2": BRAND.accent2 } as CSSProperties;

function Agent({ i, name, text, route }: { i: number; name: string; text: string; route: string }) {
  const body: ReactNode = (
    <>
      <span aria-hidden="true">A{i + 1}</span>
      <b>{name}</b>
      <small>{text}</small>
    </>
  );
  const href = aiToolUrl(route);
  return href ? (
    <a href={href} target="_blank" rel="noopener" className="dv-agent dv-rv">{body}</a>
  ) : (
    <div className="dv-agent dv-rv">{body}</div>
  );
}

export default function TechHome() {
  return (
    <>
      <Nav />
      <main id="main-content" className="dv dv-tech" style={ACCENT}>
        <section className="dv-hero" id="top">
          <div className="dv-hero-copy">
            <p className="vl-kicker">YUGTI TECH · SOFTWARE, APPS, AI</p>
            <h1 className="dv-h1">Imagine it. We engineer it.</h1>
            <p className="vl-lead">{BRAND.description} Tell us the problem; we will recommend what to build and in what order.</p>
            <div className="vl-cta-row">
              <Link className="vl-btn vl-btn-primary" href="/contact">Start a project</Link>
              <Link className="vl-btn vl-btn-ghost" href="#build">What we build</Link>
            </div>
          </div>
          <div className="dv-hero-vis dv-tech-vis">
            <canvas className="dv-canvas" data-hero="tech" aria-hidden="true" />
            <TechStudio />
          </div>
        </section>

        <Ticker items={TECH_SERVICES.map((s) => s.name)} />
        <ul className="dv-stats dv-rv">
          <li><b data-count={TECH_SERVICES.length}>{TECH_SERVICES.length}</b><span>kinds of build</span></li>
          <li><b data-count={TECH_STEPS.length}>{TECH_STEPS.length}</b><span>step process</span></li>
          <li><b data-count={AI_AGENTS.length}>{AI_AGENTS.length}</b><span>AI tools live today</span></li>
        </ul>

        <section className="dv-sec" id="build">
          <SectionHead kicker="WHAT WE BUILD" title={<>Ideas, <em>engineered.</em></>} text="From a first website to a full product. Tell us the problem; we will recommend what to build and in what order." />
          <div className="dv-blue">
            {TECH_SERVICES.map((s, i) => (
              <Link key={s.code} href={`/services#${s.code.toLowerCase()}`} className="dv-bp dv-rv" style={{ "--i": i } as CSSProperties}>
                <TechIcon code={s.code} />
                <span className="dv-bp-code">{String(i + 1).padStart(2, "0")} / {s.code}</span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </Link>
            ))}
          </div>
          <p className="vl-note">No prices or timelines are published here because every project is different. Tell us what you want to build and we will respond with a plan.</p>
        </section>

        <section className="dv-sec" id="process">
          <SectionHead kicker="HOW WE WORK" title={<>Five steps. <em>No surprises.</em></>} />
          <ol className="dv-git" data-journey>
            {TECH_STEPS.map(([n, t], i) => (
              <li key={n} className="dv-rv" data-j style={{ "--i": i } as CSSProperties}>
                <span className="dv-git-dot" aria-hidden="true" />
                <b>{n}</b>
                <p>{t}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="dv-sec" id="ai">
          <SectionHead kicker="AI, LIVE TODAY" title={<>Specialised AI, with <em>humans in the loop.</em></>} text="Seven agents you can use right now, built on the same engineering." />
          <div className="dv-roster">
            {AI_AGENTS.map((a, i) => (
              <Agent key={a.name} i={i} {...a} />
            ))}
          </div>
          <p className="dv-tracks-label">Tech skills you can learn on the Yugti platform</p>
          <ul className="dv-tracks">
            {TECH_TRACKS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="dv-sec" id="faq">
          <SectionHead kicker="QUESTIONS" title="Good questions." />
          <Faq items={FAQS} />
        </section>

        <FinalCta title="Imagine it. We engineer it." />
      </main>
      <Footer />
    </>
  );
}
