import { NextResponse } from "next/server";

// Newsletter box in the standard footer. Validates, rate-limits per IP, and emails the
// address to the team through Resend. Without RESEND_API_KEY + NEWSLETTER_TO, dev logs
// the sign-up and production answers 503 rather than pretending it was saved.
const hits = new Map<string, number[]>();
const LIMIT = 6, WINDOW = 10 * 60_000;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= LIMIT) return NextResponse.json({ error: "rate", message: "Too many attempts. Please try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body: { email?: unknown; source?: unknown };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request", message: "Invalid request." }, { status: 400 }); }
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 190) return NextResponse.json({ error: "invalid", message: "Please enter a valid email address." }, { status: 422 });

  const key = process.env.RESEND_API_KEY, to = process.env.NEWSLETTER_TO;
  if (!key || !to) {
    if (process.env.NODE_ENV !== "production") { console.log("[newsletter] (not emailed, no RESEND_API_KEY/NEWSLETTER_TO)", email); return NextResponse.json({ ok: true }); }
    return NextResponse.json({ error: "unavailable", message: "We cannot take sign-ups right now. Please try again shortly." }, { status: 503 });
  }
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.NEWSLETTER_FROM || "Yugty <onboarding@resend.dev>", to: [to], subject: "New newsletter sign-up", text: `Email: ${email}\nSource: ${String(body.source ?? "footer").slice(0, 60)}` }),
    });
    if (!r.ok) throw new Error(String(r.status));
  } catch {
    return NextResponse.json({ error: "server", message: "Something went wrong. Please try again." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
