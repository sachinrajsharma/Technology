"use client";

import { useEffect, useState } from "react";

/** Adds a gentle fade-up to `.yh-rv` blocks as they scroll into view. Content stays visible without scripts or with reduced motion. */
export function RevealInit() {
  useEffect(() => {
    const root = document.querySelector(".yh");
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".yh-rv")).filter((el) => el.getBoundingClientRect().top > innerHeight * 0.92);
    if (!els.length) return;
    root.classList.add("yh-js");
    els.forEach((el) => el.setAttribute("data-armed", ""));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute("data-in", ""); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/** Footer newsletter form. Same endpoint and payload as the standard Yugty footer. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setOk(null);
    if (honeypot) return setOk("Thanks for subscribing.");
    if (!email) return setErr("Please enter your email.");
    setBusy(true);
    try {
      const r = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "newsletter", email, source: "footer" }) });
      const j = (await r.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!r.ok) throw new Error(j.message || j.error || "Could not subscribe. Please try again.");
      setOk("Thanks for subscribing.");
      setEmail("");
    } catch (x) {
      setErr((x as Error).message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="yh-news" onSubmit={subscribe} aria-label="Join the Yugty Tech newsletter">
      <label htmlFor="yh-news-email">Get news and updates</label>
      <div>
        <input id="yh-news-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required maxLength={190} disabled={busy} autoComplete="email" />
        <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" className="yh-hp" aria-hidden="true" />
        <button type="submit" disabled={busy}>{busy ? "Joining..." : "Join"}</button>
      </div>
      <p className="yh-news-msg" aria-live="polite">{ok ?? err ?? ""}</p>
    </form>
  );
}
