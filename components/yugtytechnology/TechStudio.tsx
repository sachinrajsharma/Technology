import type { ReactNode } from "react";
import { TECH_STEPS } from "@/lib/yugtytechnology/content";

/**
 * "Idea to live product": a small build studio that plays a sample project from first idea to launch and its first
 * improvement, in the five steps Yugti Tech works in. All motion is CSS driven by stage classes that
 * /public/yugtytechnology/tech-studio.js sets; without scripts it shows the finished project. The project is an illustrative sample.
 */

const IDEA = "A booking app for a small clinic";

type Tok = [string, string];
const CODE: Tok[][] = [
  [["k", "export default function "], ["f", "Booking"], ["p", "() {"]],
  [["p", "  const "], ["v", "slots"], ["p", " = "], ["f", "useSlots"], ["p", "("], ["s", '"clinic"'], ["p", ");"]],
  [["p", "  return ("]],
  [["p", "    <"], ["t", "Page"], ["p", " title="], ["s", '"Book a visit"'], ["p", ">"]],
  [["p", "      <"], ["t", "SlotPicker"], ["p", " slots={"], ["v", "slots"], ["p", "} />"]],
  [["p", "      <"], ["t", "Button"], ["p", " onClick={"], ["f", "confirm"], ["p", "}>Confirm</"], ["t", "Button"], ["p", ">"]],
  [["p", "      <"], ["t", "Assistant"], ["p", " ask="], ["s", '"Need help?"'], ["p", " />"]],
  [["p", "    </"], ["t", "Page"], ["p", ">"]],
  [["p", "  );"]],
  [["p", "}"]],
];

/** The shared mini interface drawn inside the browser and both phones. */
function Ui(): ReactNode {
  return (
    <div className="ui" aria-hidden="true">
      <div className="ui-bar ub" style={{ "--k": 0 } as React.CSSProperties}>
        <i />
        <b />
      </div>
      <div className="ui-hero ub" style={{ "--k": 1 } as React.CSSProperties}>
        <span />
        <span />
      </div>
      <div className="ui-slots">
        {[0, 1, 2, 3].map((n) => (
          <i key={n} className="ub" style={{ "--k": 2 + n } as React.CSSProperties} />
        ))}
      </div>
      <div className="ui-chart ub" style={{ "--k": 6 } as React.CSSProperties}>
        {[38, 62, 48, 80, 58, 92].map((h, n) => (
          <i key={n} style={{ "--h": `${h}%`, "--n": n } as React.CSSProperties} />
        ))}
      </div>
      <div className="ui-btn ub" style={{ "--k": 7 } as React.CSSProperties} />
      <div className="ui-chat">
        <span>Need help booking?</span>
      </div>
      <div className="ui-live">LIVE</div>
    </div>
  );
}

export default function TechStudio() {
  return (
    <div className="ts s0 s1 s2 s3 s4" data-ts role="group" aria-label="A sample project going from idea to live product. Illustrative.">
      <div className="ts-prompt">
        <small>IDEA</small>
        <span className="ts-idea" style={{ "--n": IDEA.length } as React.CSSProperties}>
          {IDEA}
        </span>
        <em className="ts-ver">
          <i className="v1">v1.0</i>
          <i className="v2">v1.1</i>
        </em>
      </div>

      <div className="ts-main">
        <div className="ts-left">
          <div className="ts-ide">
            <div className="ts-tabs" aria-hidden="true">
              <b className="on">Booking.tsx</b>
              <b>api.ts</b>
              <b>schema.sql</b>
            </div>
            <pre className="ts-code" aria-label="Sample source code">
              {CODE.map((line, i) => (
                <span key={i} className="ln" style={{ "--i": i, "--n": line.reduce((n, t) => n + t[1].length, 0) } as React.CSSProperties}>
                  {line.map(([c, t], j) => (
                    <span key={j} className={`c-${c}`}>
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </pre>
          </div>
          <div className="ts-term" aria-label="Sample build output">
            <p className="tl" data-s="0">
              $ yugty new &quot;clinic booking&quot;
            </p>
            <p className="tl" data-s="1">
              ✔ design&nbsp;&nbsp; tokens, layout, components
            </p>
            <p className="tl" data-s="2">
              ✔ build&nbsp;&nbsp;&nbsp; web · android · ios
            </p>
            <p className="tl" data-s="3">
              ✔ test&nbsp;&nbsp;&nbsp;&nbsp; all checks passed
            </p>
            <p className="tl" data-s="3">
              ✔ deploy&nbsp;&nbsp; released
            </p>
            <p className="tl" data-s="4">
              ↻ evolve&nbsp;&nbsp; assistant added · v1.1
            </p>
            <div className="ts-deploy" aria-hidden="true">
              <i />
            </div>
          </div>
        </div>

        <div className="ts-devices">
          <div className="ts-browser">
            <div className="ts-bar" aria-hidden="true">
              <i /> <i /> <i />
              <span>
                <b>clinic.example.app</b>
              </span>
            </div>
            <Ui />
          </div>
          <div className="ts-phone ts-android">
            <em aria-hidden="true">Android</em>
            <Ui />
          </div>
          <div className="ts-phone ts-ios">
            <em aria-hidden="true">iOS</em>
            <Ui />
          </div>
          <div className="ts-palette" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <p className="ts-now" data-ts-now aria-live="polite">
        {TECH_STEPS[4][1]}
      </p>
      <ol className="ts-steps">
        {TECH_STEPS.map(([name, text], i) => (
          <li key={name}>
            <button type="button" data-ts-step data-text={text} className={i === 4 ? "on" : "past"}>
              <b>{i + 1}</b>
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="ts-note">
        <span>A sample project. Steps and screens are illustrative.</span>
        <button type="button" data-ts-pause className="hq-pause" aria-pressed="false">
          Pause
        </button>
      </p>
    </div>
  );
}
