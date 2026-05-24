/* ============================================================
   cursor.js — Tactical crosshair cursor for Kairon Technology
   ============================================================ */
(function () {

  // Don't apply on touch devices
  if ('ontouchstart' in window) return;

  /* ── Build cursor elements ─────────────────────────────── */
  const cursor     = document.createElement('div');
  const cursorDot  = document.createElement('div');
  const cursorRing = document.createElement('div');

  cursor.id = 'kairon-cursor';
  cursor.appendChild(cursorDot);
  cursor.appendChild(cursorRing);

  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { cursor: none !important; }

    #kairon-cursor {
      position: fixed;
      top: 0; left: 0;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    }

    /* Outer ring — crosshair lines */
    #kairon-cursor .ring {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      transition: width 0.15s ease, height 0.15s ease, border-color 0.2s ease;
    }

    /* Four crosshair lines using pseudo-elements + extra divs */
    #kairon-cursor .ring::before,
    #kairon-cursor .ring::after {
      content: '';
      position: absolute;
      background: var(--cursor-color, rgba(10,61,98,0.9));
      transition: background 0.2s ease;
    }
    /* Horizontal line */
    #kairon-cursor .ring::before {
      width: 100%; height: 1px;
      top: 50%; left: 0;
      transform: translateY(-50%);
      /* gap in the centre */
      clip-path: polygon(0 0, 38% 0, 38% 100%, 0 100%,
                         0 0, 62% 0, 62% 100%, 100% 100%, 100% 0);
    }
    /* Vertical line */
    #kairon-cursor .ring::after {
      height: 100%; width: 1px;
      left: 50%; top: 0;
      transform: translateX(-50%);
      clip-path: polygon(0 0, 100% 0, 100% 38%, 0 38%,
                         0 62%, 100% 62%, 100% 100%, 0 100%);
    }

    /* Centre dot */
    #kairon-cursor .dot {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 3px; height: 3px;
      border-radius: 50%;
      background: var(--cursor-color, rgba(10,61,98,0.9));
      transition: background 0.2s ease, transform 0.15s ease;
    }

    /* Corner tick marks */
    #kairon-cursor .ring .tick {
      position: absolute;
      background: var(--cursor-color, rgba(10,61,98,0.9));
      transition: background 0.2s ease;
    }
    #kairon-cursor .ring .tick-tl { top: 0;    left: 0;  width: 5px; height: 1px; }
    #kairon-cursor .ring .tick-tr { top: 0;    right: 0; width: 5px; height: 1px; }
    #kairon-cursor .ring .tick-bl { bottom: 0; left: 0;  width: 5px; height: 1px; }
    #kairon-cursor .ring .tick-br { bottom: 0; right: 0; width: 5px; height: 1px; }
    #kairon-cursor .ring .tick-lt { top: 0;    left: 0;  width: 1px; height: 5px; }
    #kairon-cursor .ring .tick-rt { top: 0;    right: 0; width: 1px; height: 5px; }
    #kairon-cursor .ring .tick-lb { bottom: 0; left: 0;  width: 1px; height: 5px; }
    #kairon-cursor .ring .tick-rb { bottom: 0; right: 0; width: 1px; height: 5px; }

    /* Hover state — expand ring */
    #kairon-cursor.hover .ring {
      width: 40px;
      height: 40px;
    }
    #kairon-cursor.hover .dot {
      transform: translate(-50%, -50%) scale(1.8);
    }

    /* Click state — contract */
    #kairon-cursor.click .ring {
      width: 20px;
      height: 20px;
    }
    #kairon-cursor.click .dot {
      transform: translate(-50%, -50%) scale(0.5);
    }

    /* Phantom mode */
    body.phantom-mode #kairon-cursor { --cursor-color: rgba(178,34,34,0.9); }
    /* Atlas mode */
    body.atlas-mode   #kairon-cursor { --cursor-color: rgba(201,162,39,0.9); }
    /* Orion mode */
    body.orion-mode   #kairon-cursor { --cursor-color: rgba(31,122,31,0.9); }

    /* Light theme — slightly darker */
    [data-theme="light"] #kairon-cursor { --cursor-color: rgba(10,61,98,1); }
  `;

  document.head.appendChild(style);

  // Add corner ticks to ring
  cursorRing.className = 'ring';
  ['tl','tr','bl','br'].forEach(function(c) {
    var h = document.createElement('span');
    var v = document.createElement('span');
    h.className = 'tick tick-' + c;
    v.className = 'tick tick-' + (c[0] === 't' ? 'l' : 'l').replace('l', c[1] === 'l' ? 'lt' : 'rt').replace('tick-', '');
    // horizontal corner ticks
    var th = document.createElement('span');
    var tv = document.createElement('span');
    th.className = 'tick tick-' + c;
    tv.className = 'tick tick-' + c[0] + (c[1] === 'l' ? 'l' : 'r');
    cursorRing.appendChild(th);
    cursorRing.appendChild(tv);
  });
  cursorDot.className = 'dot';

  /* ── Simplified clean build ─────────────────────────────── */
  // Rebuild ring with explicit tick spans
  cursorRing.innerHTML = `
    <span class="tick tick-tl"></span>
    <span class="tick tick-lt"></span>
    <span class="tick tick-tr"></span>
    <span class="tick tick-rt"></span>
    <span class="tick tick-bl"></span>
    <span class="tick tick-lb"></span>
    <span class="tick tick-br"></span>
    <span class="tick tick-rb"></span>
  `;

  /* ── Mount ──────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(cursor);
  });

  /* ── Track mouse ────────────────────────────────────────── */
  var mouseX = -100, mouseY = -100;
  var rafId  = null;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) {
      rafId = requestAnimationFrame(function () {
        cursor.style.left = mouseX + 'px';
        cursor.style.top  = mouseY + 'px';
        rafId = null;
      });
    }
  });

  /* Hide when leaving window */
  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });

  /* Hover state on interactive elements */
  var hoverTargets = 'a, button, [data-modal], .ops-card, .team-card, .card, .job-item, .news-card, select, input, textarea, .lightbox-trigger, .filter-btn';

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hover');
    }
  });

  /* Click state */
  document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursor.classList.remove('hover');
  });
  document.addEventListener('mouseup', function () {
    cursor.classList.remove('click');
  });

})();
