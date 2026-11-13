/**
 * Hero illustration: one web product, one phone and one assistant message, drawn in plain CSS.
 * It is decorative (aria-hidden) and shows no numbers or client names; it only suggests "web, mobile, AI".
 */
export default function HeroVisual() {
  return (
    <div className="yh-vis" aria-hidden="true">
      <div className="yh-win">
        <div className="yh-win-bar"><i /><i /><i /></div>
        <div className="yh-win-body">
          <div className="yh-side"><b /><s /><s /><s /><s /></div>
          <div className="yh-main">
            <div className="yh-line yh-l1" />
            <div className="yh-line yh-l2" />
            <div className="yh-cards"><u /><u /><u /></div>
            <div className="yh-table"><s /><s /><s /></div>
            <div className="yh-pill" />
          </div>
        </div>
      </div>
      <div className="yh-phone">
        <div className="yh-notch" />
        <div className="yh-ph-head" />
        <div className="yh-line yh-l3" />
        <div className="yh-ph-card" />
        <div className="yh-ph-card yh-ph-card2" />
        <div className="yh-ph-btn" />
      </div>
      <div className="yh-chat">
        <span className="yh-chat-dot" />
        <div><s /><s /></div>
      </div>
    </div>
  );
}
