/* ============================================================
   theme-toggle.js v4
   Fix: bind button AFTER components.js injects the navbar.
   Strategy: expose applyTheme globally so components.js can
   call it after injection, and watch for the button via a
   small MutationObserver as a fallback.
   ============================================================ */
(function () {
  const KEY = 'kairon-theme';

  function getStored() {
    const s = localStorage.getItem(KEY);
    if (s) return s;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    updateBtn(t);
    // swap logos
    const isDark = t === 'dark';
    document.querySelectorAll('img[data-logo], .main-logo').forEach(function (img) {
      img.src = isDark ? img.dataset.logoDark : img.dataset.logoLight;
    });
  }

  function updateBtn(t) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = t === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function bindBtn() {
    const btn = document.getElementById('theme-toggle');
    if (!btn || btn._kairon_bound) return;
    btn._kairon_bound = true;
    btn.addEventListener('click', function () {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
    updateBtn(document.documentElement.getAttribute('data-theme') || 'dark');
  }

  // Apply immediately to prevent flash before any DOM
  applyTheme(getStored());

  // Watch for navbar injection (components.js injects #theme-toggle dynamically)
  const mo = new MutationObserver(function () {
    if (document.getElementById('theme-toggle')) {
      bindBtn();
      mo.disconnect();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getStored()); // re-apply after DOM ready
    bindBtn();               // try immediately
    // Start observer in case navbar not yet injected
    mo.observe(document.body, { childList: true, subtree: true });
  });

  // Expose globally so components.js can call after injection
  window.KaironTheme = { apply: applyTheme, bind: bindBtn };
})();
