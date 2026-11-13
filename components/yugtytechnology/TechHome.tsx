import Link from "next/link";
import { AI_AGENTS, BRAND, FAQS, TECH_STEPS, TECH_TRACKS, aiToolUrl } from "@/lib/yugtytechnology/content";
import { ASSURANCES, SOLUTIONS, WHY } from "@/lib/yugtytechnology/home";
import { HomeFooter, HomeNav } from "./HomeChrome";
import { RevealInit } from "./HomeClient";
import HeroVisual from "./HeroVisual";

const Check = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4.5 10.5 3.5 3.5 7.5-8" /></svg>
);
const Arrow = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
);

export default function TechHome() {
  return (
    <div className="yh">
      <RevealInit />
      <HomeNav />
      <main id="main-content">
        {/* 1. Hero */}
        <section className="yh-hero" id="top" aria-labelledby="yh-h1">
          <div className="yh-wrap yh-hero-grid">
            <div className="yh-hero-copy">
              <p className="yh-eyebrow">Software, apps and AI</p>
              <h1 id="yh-h1">
                {BRAND.tagline.split(". ").map((p, i, a) => <span key={p}>{i < a.length - 1 ? `${p}.` : p}</span>)}
              </h1>
              <p className="yh-lead">{BRAND.description}</p>
              <div className="yh-cta-row">
                <Link className="yh-btn yh-btn-primary" href="/contact">Start a project</Link>
                <Link className="yh-btn yh-btn-ghost" href="/#build">See what we build</Link>
              </div>
              <ul className="yh-assure" aria-label="How we work with you">
                {ASSURANCES.map((a) => <li key={a}><Check />{a}</li>)}
              </ul>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* 2. Solutions */}
        <section className="yh-sec" id="build" aria-labelledby="yh-build">
          <div className="yh-wrap">
            <div className="yh-head yh-rv">
              <p className="yh-eyebrow">Solutions</p>
              <h2 id="yh-build">Ideas, engineered.</h2>
              <p className="yh-sub">From a first website to a full product. Tell us the problem; we will recommend what to build and in what order.</p>
            </div>
            <ul className="yh-sol">
              {SOLUTIONS.map((s, i) => (
                <li key={s.name} className="yh-rv" style={{ ["--d" as string]: `${(i % 3) * 70}ms` }}>
                  <span className="yh-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <Link href={s.href} className="yh-more" aria-label={`${s.name}: learn more`}>Learn more <Arrow /></Link>
                </li>
              ))}
            </ul>
            <p className="yh-note yh-rv">No prices or timelines are published here because every project is different. Tell us what you want to build and we will respond with a plan.</p>
          </div>
        </section>

        {/* 3. Why */}
        <section className="yh-sec yh-soft" id="why" aria-labelledby="yh-why">
          <div className="yh-wrap yh-split">
            <div className="yh-head yh-rv yh-sticky">
              <p className="yh-eyebrow">Why Yugty Tech</p>
              <h2 id="yh-why">Technology that answers to your business.</h2>
              <p className="yh-sub">We keep the work clear, staged and accountable, so you always know what is being built and why.</p>
            </div>
            <ol className="yh-why">
              {WHY.map(([t, d]) => (
                <li key={t} className="yh-rv">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Approach */}
        <section className="yh-sec" id="process" aria-labelledby="yh-process">
          <div className="yh-wrap">
            <div className="yh-head yh-rv">
              <p className="yh-eyebrow">Our approach</p>
              <h2 id="yh-process">Five steps. No surprises.</h2>
            </div>
            <ol className="yh-steps">
              {TECH_STEPS.map(([n, t], i) => (
                <li key={n} className="yh-rv" style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <span className="yh-step-n" aria-hidden="true">{i + 1}</span>
                  <h3>{n}</h3>
                  <p>{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. Technology and innovation */}
        <section className="yh-sec yh-soft" id="technology" aria-labelledby="yh-tech">
          <div className="yh-wrap yh-split">
            <div className="yh-head yh-rv yh-sticky">
              <p className="yh-eyebrow">Technology and innovation</p>
              <h2 id="yh-tech">AI that works with people.</h2>
              <p className="yh-sub">Seven AI agents are live today, built on the same engineering we bring to client work.</p>
            </div>
            <div className="yh-rv">
              <ul className="yh-agents">
                {AI_AGENTS.map((a) => {
                  const href = aiToolUrl(a.route);
                  const body = (
                    <>
                      <b>{a.name}</b>
                      <span>{a.text}</span>
                      {href ? <Arrow /> : null}
                    </>
                  );
                  return <li key={a.name}>{href ? <a href={href} target="_blank" rel="noopener noreferrer">{body}</a> : <div>{body}</div>}</li>;
                })}
              </ul>
              <p className="yh-tracks-label">Tech skills you can learn on the Yugty platform</p>
              <p className="yh-tracks">{TECH_TRACKS.join("  ·  ")}</p>
            </div>
          </div>
        </section>

        {/* 6. Questions */}
        <section className="yh-sec" id="faq" aria-labelledby="yh-faq">
          <div className="yh-wrap yh-split">
            <div className="yh-head yh-rv yh-sticky">
              <p className="yh-eyebrow">Questions</p>
              <h2 id="yh-faq">Good questions.</h2>
            </div>
            <div className="yh-faq yh-rv">
              {FAQS.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Call to action */}
        <section className="yh-sec yh-sec-end" aria-labelledby="yh-cta">
          <div className="yh-wrap">
            <div className="yh-cta yh-rv">
              <h2 id="yh-cta">Tell us what you want to build.</h2>
              <p>A few lines are enough. We will read your brief and reply with questions or a plan.</p>
              <Link className="yh-btn yh-btn-light" href="/contact">Start a project</Link>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
