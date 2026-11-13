/** The Yugty mark. Shared logo tile, same on every Yugty site. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/yugty-mark.svg" width={size} height={size} alt="" aria-hidden="true" style={{ display: "block", borderRadius: Math.round(size * 0.25) }} />
    </>
  );
}
