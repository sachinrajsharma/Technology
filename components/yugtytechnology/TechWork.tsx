import Link from "next/link";
import type { CSSProperties } from "react";
import { ANDROID_APPS, WEB_PROJECTS } from "@/lib/yugtytechnology/work";
import { SectionHead } from "./Chrome";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const tint = (c: [string, string], i: number) => ({ "--wa": c[0], "--wb": c[1], "--i": i }) as CSSProperties;

export function WebWork() {
  return (
    <section className="dv-sec" id="web-work">
      <SectionHead kicker="WEB APPLICATIONS · LIVE" title={<>Built by us. <em>Running today.</em></>} text="Two products we designed, built and run ourselves. Open them and judge the work." />
      <div className="tw-web">
        {WEB_PROJECTS.map((p, i) => (
          <article key={p.host} className="tw-card dv-rv" style={tint(p.accent, i)}>
            <div className="tw-browser" aria-hidden="true">
              <div className="tw-bar"><i /><i /><i /><span>{p.host}</span></div>
              <div className="tw-page">
                <b>{p.name}</b>
                <s /><s /><s />
                <div className="tw-tiles"><u /><u /><u /></div>
              </div>
            </div>
            <div className="tw-body">
              <p className="tw-tag">{p.tag}</p>
              <h3>{p.name}</h3>
              <p>{p.what}</p>
              <p className="tw-who"><b>For:</b> {p.who}</p>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="vl-btn vl-btn-ghost vl-btn-sm" href={p.url} {...ext}>Visit {p.host} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <div className="tw-cta dv-rv">
        <p>Need a platform, store or portal like these?</p>
        <Link className="vl-btn vl-btn-primary" href="/contact">Start a project</Link>
      </div>
    </section>
  );
}

export function AndroidWork() {
  return (
    <section className="dv-sec" id="android-work">
      <SectionHead kicker="ANDROID APPS · ON GOOGLE PLAY" title={<>Apps people <em>install.</em></>} text="Three apps from our own studio, live on Google Play. Each one shows how we ship mobile products." />
      <div className="tw-apps">
        {ANDROID_APPS.map((a, i) => (
          <article key={a.name} className="tw-app dv-rv" style={tint(a.accent, i)}>
            <div className="tw-phone" aria-hidden="true">
              <div className="tw-notch" />
              <b>{a.name.charAt(0)}</b>
              <s /><s /><s />
            </div>
            <p className="tw-tag">{a.tag}</p>
            <h3>{a.name}</h3>
            <p>{a.text}</p>
            <ul>{a.points.map((f) => <li key={f}>{f}</li>)}</ul>
            <small>{a.note}</small>
            <a className="vl-btn vl-btn-ghost vl-btn-sm" href={a.url} {...ext}>Get it on Google Play <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
      <div className="tw-cta dv-rv">
        <p>Have an app idea? We build and publish Android apps end to end.</p>
        <Link className="vl-btn vl-btn-primary" href="/contact">Start a project</Link>
      </div>
    </section>
  );
}
