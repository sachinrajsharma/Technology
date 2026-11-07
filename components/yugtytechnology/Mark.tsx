/** The Yugty Tech mark: angle brackets around a spark, in the Tech violet to cyan gradient. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="yt-m" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cff" />
          <stop offset="1" stopColor="#28d7ff" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="none" stroke="url(#yt-m)" strokeWidth="2" />
      <path d="m12 11-5 5 5 5M20 11l5 5-5 5" fill="none" stroke="url(#yt-m)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m17.2 9-2.4 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
