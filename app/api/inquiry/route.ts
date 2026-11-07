import { NextResponse } from "next/server";
import { BUDGETS, PROJECT_KINDS } from "@/lib/yugtytechnology/content";

export const runtime = "nodejs";

/**
 * POST /api/inquiry: a project brief from the contact form.
 * Delivery: Resend when RESEND_API_KEY and INQUIRY_TO are set. Without them a development server logs the brief to the console;
 * a production server refuses (503) rather than telling a visitor "sent" when nothing was.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 50)) return NextResponse.json({ ok: true }); // honeypot: pretend success to bots

  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 100);
  const kind = clean(body.kind, 60);
  const budget = clean(body.budget, 40);
  const message = typeof body.message === "string" ? body.message.replace(/\r\n/g, "\n").trim().slice(0, 4000) : "";

  if (name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (message.length < 20) return NextResponse.json({ error: "Please tell us a little more about the project (at least 20 characters)." }, { status: 400 });
  if (!PROJECT_KINDS.includes(kind) || !BUDGETS.includes(budget)) return NextResponse.json({ error: "Please pick from the lists." }, { status: 400 });

  const subject = `New project brief: ${kind} from ${name}`;
  const lines = [`Name: ${name}`, `Email: ${email}`];
  if (phone) lines.push(`Phone: ${phone}`);
  if (company) lines.push(`Company: ${company}`);
  lines.push(`Project: ${kind}`, `Budget: ${budget}`, "", message);
  const text = lines.join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  if (!key || !to) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Our inbox is not connected right now. Please try again later." }, { status: 503 });
    }
    console.log(`[inquiry] (not emailed: RESEND_API_KEY / INQUIRY_TO not set)\n${subject}\n${text}`);
    return NextResponse.json({ ok: true });
  }

  const from = process.env.INQUIRY_FROM ?? "Yugti Tech <onboarding@resend.dev>";
  const html = `<p><b>${esc(name)}</b> &lt;${esc(email)}&gt;${phone ? ` · ${esc(phone)}` : ""}${company ? ` · ${esc(company)}` : ""}</p><p>Project: ${esc(kind)} · Budget: ${esc(budget)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: email, subject, html, text }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
  } catch (e) {
    console.error("[inquiry] delivery failed", e);
    return NextResponse.json({ error: "We could not send your brief just now. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
