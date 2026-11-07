import type { ReactNode } from "react";

/** Small looping icons for the eight things Yugti Tech builds. Pure SVG; motion is CSS (see division.css) and stops for reduced motion. */
const ICONS: Record<string, ReactNode> = {
  WEB: (
    <svg viewBox="0 0 48 48" className="tic tic-web">
      <rect x="4" y="8" width="40" height="32" rx="4" />
      <path d="M4 16h40" />
      <circle cx="9" cy="12" r="1" className="fill" />
      <circle cx="13" cy="12" r="1" className="fill" />
      <path className="draw d1" d="M10 24h18" />
      <path className="draw d2" d="M10 30h26" />
      <rect className="blink" x="30" y="22" width="9" height="5" rx="1" />
    </svg>
  ),
  APP: (
    <svg viewBox="0 0 48 48" className="tic tic-app">
      <rect x="4" y="6" width="40" height="36" rx="4" />
      <path d="M4 14h40" />
      <rect className="bar b1" x="11" y="22" width="5" height="14" rx="1" />
      <rect className="bar b2" x="21" y="22" width="5" height="14" rx="1" />
      <rect className="bar b3" x="31" y="22" width="5" height="14" rx="1" />
    </svg>
  ),
  AND: (
    <svg viewBox="0 0 48 48" className="tic tic-and">
      <rect x="14" y="4" width="20" height="40" rx="4" />
      <path d="M21 8h6" />
      <circle className="pulse" cx="24" cy="26" r="5" />
      <path d="M20 38h8" />
    </svg>
  ),
  IOS: (
    <svg viewBox="0 0 48 48" className="tic tic-ios">
      <rect x="14" y="4" width="20" height="40" rx="6" />
      <rect x="20" y="7" width="8" height="3" rx="1.5" className="fill" />
      <path className="swipe" d="M18 36h12" />
      <rect className="card" x="18" y="16" width="12" height="9" rx="2" />
    </svg>
  ),
  ENG: (
    <svg viewBox="0 0 48 48" className="tic tic-eng">
      <path d="M17 14 7 24l10 10" />
      <path d="M31 14l10 10-10 10" />
      <path className="caret" d="M26 12 22 36" />
    </svg>
  ),
  AI: (
    <svg viewBox="0 0 48 48" className="tic tic-ai">
      <path d="M8 14 24 24 8 34M24 24 40 12M24 24 40 36M8 14v20" />
      <circle className="n n1" cx="8" cy="14" r="3" />
      <circle className="n n2" cx="8" cy="34" r="3" />
      <circle className="n n3" cx="24" cy="24" r="4" />
      <circle className="n n4" cx="40" cy="12" r="3" />
      <circle className="n n5" cx="40" cy="36" r="3" />
    </svg>
  ),
  DX: (
    <svg viewBox="0 0 48 48" className="tic tic-dx">
      <g className="paper">
        <rect x="6" y="8" width="16" height="22" rx="2" />
        <path d="M10 15h8M10 20h8M10 25h5" />
      </g>
      <path className="arrow" d="M25 24h8m-3-3 3 3-3 3" />
      <g className="chart">
        <rect x="30" y="14" width="14" height="22" rx="2" />
        <path d="M34 31v-5M38 31v-9M42 31v-12" />
      </g>
    </svg>
  ),
  CON: (
    <svg viewBox="0 0 48 48" className="tic tic-con">
      <path className="bulb" d="M24 6a12 12 0 0 0-6 22v4h12v-4A12 12 0 0 0 24 6Z" />
      <path d="M19 38h10M21 42h6" />
      <path className="ray" d="M24 1v2M8 10l1.5 1.5M40 10l-1.5 1.5M3 24h2M43 24h2" />
    </svg>
  ),
};

export default function TechIcon({ code }: { code: string }) {
  return (
    <span className="dv-bp-ico" aria-hidden="true">
      {ICONS[code] ?? null}
    </span>
  );
}
