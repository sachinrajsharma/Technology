/* Yugty Tech: "idea to live product". Plays a sample project through the five steps by setting stage classes
   (s0..s4) on the studio; all visuals are CSS. Plain JS. Pausable, and a still of the finished project for reduced motion. */
(function () {
  var root = document.querySelector("[data-ts]");
  if (!root) return;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var steps = Array.prototype.slice.call(root.querySelectorAll("[data-ts-step]"));
  var now = root.querySelector("[data-ts-now]"), pauseBtn = root.querySelector("[data-ts-pause]");
  var DUR = [3300, 3600, 5400, 4300, 4300], HOLD = 3200;
  var cur = -1, timer = 0, paused = false, visible = true;

  function clearStages() { for (var k = 0; k < 5; k++) root.classList.remove("s" + k); }
  function mark(i) {
    steps.forEach(function (s, k) { s.classList.toggle("on", k === i); s.classList.toggle("past", k < i); if (k === i) s.setAttribute("aria-current", "step"); else s.removeAttribute("aria-current"); });
    if (now) now.textContent = steps[i].getAttribute("data-text");
  }
  /* go to stage i. instant=true skips the animation (used when you click a step). */
  function go(i, instant) {
    if (instant) root.classList.add("instant");
    clearStages(); void root.offsetWidth;
    for (var k = 0; k <= i; k++) root.classList.add("s" + k);
    cur = i; mark(i);
    if (instant) setTimeout(function () { root.classList.remove("instant"); }, 80);
  }
  function schedule() {
    clearTimeout(timer);
    if (paused || !visible || reduce) return;
    timer = setTimeout(function () {
      if (cur >= 4) { go(0, false); } else { go(cur + 1, false); }
      schedule();
    }, cur === 4 ? DUR[4] + HOLD : DUR[Math.max(cur, 0)]);
  }
  function syncPause() { if (pauseBtn) { pauseBtn.textContent = paused ? "Play" : "Pause"; pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false"); } }

  steps.forEach(function (el, i) { el.addEventListener("click", function () { paused = true; syncPause(); clearTimeout(timer); go(i, i !== cur + 1); }); });
  if (pauseBtn) pauseBtn.addEventListener("click", function () { paused = !paused; syncPause(); if (paused) clearTimeout(timer); else schedule(); });
  new IntersectionObserver(function (es) { visible = es.some(function (e) { return e.isIntersecting; }); if (visible) schedule(); else clearTimeout(timer); }).observe(root);

  var deep = location.hash.match(/ts-stage-([0-4])/);
  if (deep) { root.classList.add("live"); paused = true; syncPause(); go(parseInt(deep[1], 10), true); }
  else if (reduce) { go(4, true); if (pauseBtn) pauseBtn.hidden = true; }
  else { root.classList.add("live"); clearStages(); cur = -1; setTimeout(function () { go(0, false); schedule(); }, 900); }
})();
