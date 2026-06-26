/* JayTee Xaba CV — main.js
   - Splash screen with progress bar
   - Fade-in animations on load
   ================================================== */

/* ── SPLASH ─────────────────────────────────────── */
(function () {
  const splash   = document.getElementById('splash');
  const progress = document.getElementById('splashProgress');
  if (!splash || !progress) return;

  const DURATION = 2000;
  const start    = performance.now();

  function tick(now) {
    const pct = Math.min(((now - start) / DURATION) * 100, 100);
    progress.style.width = pct + '%';
    if (pct < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        splash.classList.add('hide');
        document.body.classList.remove('no-scroll');
        splash.addEventListener('transitionend', () => {
          splash.remove();
          revealPage();
        }, { once: true });
      }, 180);
    }
  }
  requestAnimationFrame(tick);

  function revealPage() {
    const els = document.querySelectorAll('.fade-in');
    els.forEach((el, i) => {
      const delay = parseFloat(el.style.animationDelay || '0') * 1000 || i * 60;
      setTimeout(() => el.classList.add('visible'), delay);
    });
  }
})();
