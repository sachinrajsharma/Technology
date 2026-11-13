import Link from "next/link";
import { SIBLINGS } from "@/lib/yugtytechnology/content";
import { SOLUTIONS } from "@/lib/yugtytechnology/home";
import { Mark } from "./Mark";
import { Newsletter } from "./HomeClient";

const NAV: [string, string][] = [["/#build", "Solutions"], ["/#process", "Approach"], ["/#technology", "Technology"], ["/services", "Services"]];

const family = () => SIBLINGS.filter((s): s is { label: string; env: string; nav?: boolean } => Boolean(s.env));

export function HomeNav() {
  return (
    <header className="yh-nav">
      <div className="yh-wrap yh-nav-in">
        <Link href="/" className="yh-brand" aria-label="Yugty Tech home">
          <Mark size={32} />
          <span>Yugty Tech</span>
        </Link>
        <nav className="yh-links" aria-label="Main">
          {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="yh-btn yh-btn-primary yh-btn-sm yh-nav-cta" href="/contact">Start a project</Link>
        <details className="yh-menu">
          <summary aria-label="Open menu"><span aria-hidden="true" /><span aria-hidden="true" /></summary>
          <div className="yh-menu-panel">
            <nav aria-label="Mobile">
              {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/#faq">Questions</Link>
            </nav>
            <Link className="yh-btn yh-btn-primary" href="/contact">Start a project</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function HomeFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="yh-footer" aria-label="Site footer">
      <div className="yh-wrap">
        <div className="yh-foot-grid">
          <div className="yh-foot-brand">
            <Link href="/" className="yh-brand" aria-label="Yugty Tech home"><Mark size={32} /><span>Yugty Tech</span></Link>
            <p>Imagine it. We engineer it. Websites, web applications, Android and iOS apps, and AI-powered software.</p>
            <Newsletter />
          </div>
          <nav aria-label="Solutions">
            <h3>Solutions</h3>
            <ul>
              {SOLUTIONS.map((s) => <li key={s.name}><Link href={s.href}>{s.name}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h3>Company</h3>
            <ul>
              <li><Link href="/#process">Approach</Link></li>
              <li><Link href="/#technology">Technology</Link></li>
              <li><Link href="/services">Services in detail</Link></li>
              <li><Link href="/#faq">Questions</Link></li>
            </ul>
          </nav>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><Link href="/contact">Start a project</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
          <nav aria-label="Yugty family">
            <h3>Yugty family</h3>
            <ul>
              {family().map((s) => <li key={s.label}><a href={s.env} rel="noopener noreferrer" target="_blank">{s.label}</a></li>)}
            </ul>
          </nav>
        </div>
        <div className="yh-foot-base">
          <p>&copy; {year} Yugty Tech. All rights reserved.</p>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
