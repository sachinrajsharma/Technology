import Link from "next/link";
import type { CSSProperties } from "react";
import { ANDROID_APPS, WEB_PROJECTS } from "@/lib/yugtytechnology/work";
import { SectionHead } from "./Chrome";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const tint = (c: [string, string], i: number) => ({ "--wa": c[0], "--wb": c[1], "--i": i }) as CSSProperties;

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
const Play = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 2.5v19l10-9.5z" fill="#00d6ff" /><path d="m14 12 3.4-3.3L5.2 2z" fill="#34e08a" /><path d="m14 12 3.4 3.3L5.2 22z" fill="#ff4d5a" /><path d="m17.4 8.7 3.3 1.9c1 .6 1 1.2 0 1.8l-3.3 1.9L14 12z" fill="#ffc83d" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);

function Stats({ items }: { items: [string, string][] }) {
  return (
    <ul className="tw-stats dv-rv">
      {items.map(([n, l]) => (
        <li key={l}><b>{n}</b><span>{l}</span></li>
      ))}
    </ul>
  );
}

function Cta({ text }: { text: string }) {
  return (
    <div className="tw-cta dv-rv">
      <p>{text}</p>
      <Link className="vl-btn vl-btn-primary" href="/contact">Start a project</Link>
    </div>
  );
}

export function WebWork() {
  return (
    <section className="dv-sec tw-sec" id="web-work">
      <SectionHead kicker="WEB APPLICATIONS · LIVE" title={<>Built by us. <em>Running today.</em></>} text="Two products we designed, built and run ourselves. Open them and judge the work." />
      <Stats items={[["2", "live web platforms"], ["Grades 1–12", "plus JEE, NEET, CAT and more"], ["EN · हिन्दी", "AI tutor in both languages"]]} />
      <div className="tw-rows">
        {WEB_PROJECTS.map((p, i) => (
          <article key={p.host} className={`tw-row dv-rv${i % 2 ? " tw-flip" : ""}`} style={tint(p.accent, i)}>
            <a className="tw-shot" href={p.url} {...ext} aria-label={`Open ${p.host} in a new tab`}>
              <span className="tw-glow" aria-hidden="true" />
              <span className="tw-frame">
                <span className="tw-bar" aria-hidden="true"><i /><i /><i /><em>{p.host}</em></span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={`${p.name} home page at ${p.host}`} width={2160} height={1350} loading="lazy" decoding="async" />
              </span>
              <span className="tw-live"><i aria-hidden="true" />Live</span>
            </a>
            <div className="tw-info">
              <p className="tw-tag">{p.tag}</p>
              <h3>{p.name}</h3>
              <p className="tw-lead">{p.what}</p>
              <ul className="tw-chips" aria-label="Highlights">{p.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              <p className="tw-who"><b>Serves</b>{p.who}</p>
              <ul className="tw-feat">{p.features.map((f) => <li key={f}><Check />{f}</li>)}</ul>
              <a className="vl-btn vl-btn-primary tw-visit" href={p.url} {...ext}>Visit {p.host} <Arrow /></a>
            </div>
          </article>
        ))}
      </div>
      <Cta text="Need a platform, store or portal like these? We design, build and run them." />
    </section>
  );
}

export function AndroidWork() {
  return (
    <section className="dv-sec tw-sec" id="android-work">
      <SectionHead kicker="ANDROID APPS · ON GOOGLE PLAY" title={<>Apps people <em>install.</em></>} text="Three apps from our own studio, live on Google Play. Each shows how we ship mobile products from idea to store." />
      <Stats items={[["3", "apps on Google Play"], ["Free", "to download, all three"], ["Offline", "Ankora plays without a connection"]]} />
      <div className="tw-apps">
        {ANDROID_APPS.map((a, i) => (
          <article key={a.name} className="tw-app dv-rv" style={tint(a.accent, i)}>
            <div className="tw-stage">
              <span className="tw-aura" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tw-phone" src={a.image} alt={`${a.name} app screen`} width={435} height={870} loading="lazy" decoding="async" />
            </div>
            <div className="tw-appbody">
              <p className="tw-tag">{a.tag}</p>
              <h3>{a.name}</h3>
              <p className="tw-lead">{a.text}</p>
              <ul className="tw-chips">{a.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              <ul className="tw-feat">{a.points.map((f) => <li key={f}><Check />{f}</li>)}</ul>
              <small>{a.note}</small>
              <a className="tw-play" href={a.url} {...ext} aria-label={`Get ${a.name} on Google Play`}>
                <Play />
                <span><em>GET IT ON</em><b>Google Play</b></span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <Cta text="Have an app idea? We build and publish Android apps end to end." />
    </section>
  );
}
