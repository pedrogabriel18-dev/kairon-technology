/* ============================================================
   components.js v4
   Injects navbar, footer, cookie banner, lightbox.
   Calls KaironTheme.bind() and KaironLang.apply() AFTER injection.
   ============================================================ */
(function () {

  const NAVBAR = `
<nav id="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img id="nav-logo-img"
           data-logo="true"
           data-logo-dark="assets/images/logokaironbranco.jpg"
           data-logo-light="assets/images/logokaironpreto.jpg"
           src="assets/images/logokaironbranco.jpg"
           alt="Kairon Technology" style="height:36px;width:auto;object-fit:contain"/>
    </a>
    <ul class="nav-links">
      <li><a href="index.html"           data-i18n="nav.home">Home</a></li>
      <li><a href="about.html"           data-i18n="nav.about">About</a></li>
      <li><a href="services.html"        data-i18n="nav.services">Services</a></li>
      <li><a href="operations.html"      data-i18n="nav.operations">Operations</a></li>
      <li><a href="team.html"            data-i18n="nav.team">Team</a></li>
      <li><a href="technology.html"      data-i18n="nav.technology">Technology</a></li>
      <li><a href="careers.html"         data-i18n="nav.careers">Careers</a></li>
      <li><a href="newsroom.html"        data-i18n="nav.newsroom">Newsroom</a></li>
      <li><a href="contact.html"         data-i18n="nav.contact">Contact</a></li>
    </ul>
    <div class="nav-controls" style="position:relative">
      <button id="theme-toggle" aria-label="Toggle theme"></button>
      <button id="lang-btn" aria-label="Change language"><span class="lang-code">EN</span></button>
      <div id="lang-dropdown" class="lang-dropdown"></div>
      <button id="menu-toggle" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>
<div id="mobile-nav">
  <a href="index.html"      data-i18n="nav.home">Home</a>
  <a href="about.html"      data-i18n="nav.about">About</a>
  <a href="services.html"   data-i18n="nav.services">Services</a>
  <a href="operations.html" data-i18n="nav.operations">Operations</a>
  <a href="team.html"       data-i18n="nav.team">Team</a>
  <a href="technology.html" data-i18n="nav.technology">Technology</a>
  <a href="careers.html"    data-i18n="nav.careers">Careers</a>
  <a href="newsroom.html"   data-i18n="nav.newsroom">Newsroom</a>
  <a href="contact.html"    data-i18n="nav.contact">Contact</a>
</div>`;

  const FOOTER = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="margin-bottom:20px;display:inline-flex">
          <img data-logo="true"
               data-logo-dark="assets/images/logokaironbranco.jpg"
               data-logo-light="assets/images/logokaironpreto.jpg"
               src="assets/images/logokaironbranco.jpg"
               alt="Kairon Technology" style="height:40px;width:auto"/>
        </a>
        <p class="footer-tagline" data-i18n="footer.tagline">Elite security, strategic intelligence, and advanced protection systems for governments and corporations worldwide.</p>
        <div class="footer-social">
          <a href="#" class="social-btn" aria-label="LinkedIn">in</a>
          <a href="#" class="social-btn" aria-label="X">X</a>
          <a href="#" class="social-btn" aria-label="Signal">S</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer.company">Company</div>
        <ul class="footer-links">
          <li><a href="about.html"    data-i18n="nav.about">About</a></li>
          <li><a href="team.html"     data-i18n="nav.team">Team</a></li>
          <li><a href="careers.html"  data-i18n="nav.careers">Careers</a></li>
          <li><a href="newsroom.html" data-i18n="nav.newsroom">Newsroom</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer.services">Services</div>
        <ul class="footer-links">
          <li><a href="services.html" data-i18n="srv.physical">Physical Security</a></li>
          <li><a href="services.html" data-i18n="srv.executive">Executive Protection</a></li>
          <li><a href="services.html" data-i18n="srv.cyber">Cyber Intelligence</a></li>
          <li><a href="services.html" data-i18n="srv.tactical">Tactical Operations</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer.legal">Legal</div>
        <ul class="footer-links">
          <li><a href="privacy.html"       data-i18n="legal.privacy">Privacy Policy</a></li>
          <li><a href="terms.html"         data-i18n="legal.terms">Terms of Use</a></li>
          <li><a href="security.html"      data-i18n="legal.security">Security Standards</a></li>
          <li><a href="accessibility.html" data-i18n="legal.access">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy" data-i18n="footer.copy">&copy; 2025 Kairon Technology Ltd. All rights reserved. Registered in Belfast, Northern Ireland.</p>
      <div class="footer-legal">
        <a href="privacy.html"  data-i18n="legal.privacy">Privacy</a>
        <a href="terms.html"    data-i18n="legal.terms">Terms</a>
        <a href="security.html" data-i18n="legal.security">Security</a>
        <a href="contact.html"  data-i18n="nav.contact">Contact</a>
      </div>
    </div>
  </div>
</footer>`;

  const COOKIE = `
<div id="cookie-banner" role="alertdialog" aria-label="Cookie consent">
  <p>
    <span data-i18n="cookie.text">We use cookies to improve your experience on our site. By continuing you accept our</span>
    <a href="privacy.html" data-i18n="cookie.policy"> Privacy Policy</a>.
  </p>
  <div class="cookie-btns">
    <button id="cookie-decline" class="btn btn-ghost" style="padding:10px 20px;font-size:11px" data-i18n="cookie.decline">Decline</button>
    <button id="cookie-accept"  class="btn btn-primary" style="padding:10px 20px;font-size:11px" data-i18n="cookie.accept">Accept</button>
  </div>
</div>`;

  const LIGHTBOX = `
<div id="lightbox" role="dialog" aria-modal="true">
  <span id="lightbox-close">&times;</span>
  <img id="lightbox-img" src="" alt=""/>
</div>`;

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Inject navbar
    var navPh = document.getElementById('nav-placeholder');
    if (navPh) navPh.outerHTML = NAVBAR;

    // 2. Inject footer
    var footPh = document.getElementById('footer-placeholder');
    if (footPh) footPh.outerHTML = FOOTER;

    // 3. Inject cookie + lightbox
    document.body.insertAdjacentHTML('beforeend', COOKIE);
    document.body.insertAdjacentHTML('beforeend', LIGHTBOX);

    // 4. NOW bind theme button (it exists in the DOM at this point)
    if (window.KaironTheme) {
      window.KaironTheme.bind();
      // Sync logo with current theme
      var t = document.documentElement.getAttribute('data-theme') || 'dark';
      window.KaironTheme.apply(t);
    }

    // 5. NOW apply language (nav links exist now)
    if (window.KaironLang) {
      window.KaironLang.applyStored();
    }
  });
})();
