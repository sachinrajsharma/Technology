import Link from "next/link";
import StandardFooter from "@/components/standard-footer/StandardFooter";
import { FOOTER } from "@/lib/footer.config";
import type { ReactNode } from "react";
import { BRAND, SIBLINGS } from "@/lib/yugtytechnology/content";
import { Mark } from "./Mark";

const LINKS: [string, string][] = [["/#build", "What we build"], ["/#process", "Process"], ["/#ai", "AI tools"], ["/services", "Services"], ["/#faq", "FAQ"]];

function siblings() {
  return SIBLINGS.filter((s): s is { label: string; env: string; nav?: boolean } => Boolean(s.env));
}

export function Nav() {
  const sibs = siblings();
  return (
    <header className="dv-nav">
      <div className="dv-nav-in">
        <Link href="/" className="dv-brand" aria-label="Yugty Tech home">
          <Mark size={40} />
          <span>YUGTY</span>
          <b>TECH</b>
        </Link>
        <nav className="dv-links" aria-label="Sections">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        {sibs.some((s) => s.nav) ? (
          <div className="dv-sibs" aria-label="Other Yugty portals">
            {sibs.filter((s) => s.nav).map((s) => (
              <a key={s.label} href={s.env} className="dv-sib" rel="noopener"><i aria-hidden="true" />{s.label}</a>
            ))}
          </div>
        ) : null}
        <Link className="vl-btn vl-btn-primary vl-btn-sm dv-cta" href="/contact">Start a project</Link>
        <details className="dv-menu">
          <summary aria-label="Menu"><span /><span /></summary>
          <div className="dv-menu-panel">
            {LINKS.map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <hr />
            {sibs.map((s) => (
              <a key={s.label} href={s.env} rel="noopener">{s.label}</a>
            ))}
            <Link href="/contact">Start a project</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

/** The standard Yugty footer. Edit lib/footer.config.ts to change its content for this app. */
export function Footer() {
  return (
    <div id="yugty-footer">
      <StandardFooter config={FOOTER} />
    </div>
  );
}

export function SectionHead({ kicker, title, text }: { kicker: string; title: ReactNode; text?: string }) {
  return (
    <div className="dv-head dv-rv">
      <p className="vl-kicker">{kicker}</p>
      <h2 className="vl-h2">{title}</h2>
      {text ? <p className="vl-sublead">{text}</p> : null}
    </div>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="dv-faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function Ticker({ items }: { items: string[] }) {
  const row = (p: string) => items.map((t, i) => <span key={p + i}><i aria-hidden="true" />{t}</span>);
  return (
    <div className="vl-ticker" role="group" aria-label="What Yugty Tech builds">
      <div className="vl-ticker-track">
        {row("a")}
        <div style={{ display: "contents" }} aria-hidden="true">{row("b")}</div>
      </div>
    </div>
  );
}

export function FinalCta({ title }: { title: string }) {
  return (
    <section className="dv-final dv-rv" aria-label="Get started">
      <h2>{title}</h2>
      <div className="vl-cta-row vl-cta-center">
        <Link className="vl-btn vl-btn-primary" href="/contact">Start a project</Link>
        <Link className="vl-btn vl-btn-ghost" href="/services">See services in detail</Link>
      </div>
      <p className="dv-final-note">Yugty Tech</p>
    </section>
  );
}
