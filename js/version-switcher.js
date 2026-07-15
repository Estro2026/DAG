/* ── Version switcher — solo wireframe, rimuovere in produzione ── */
(function () {
  const path        = window.location.pathname;
  const isEcommerce = path.includes('/ecommerce/');
  const page        = path.split('/').pop() || 'index.html';

  /* ── 1. Barra switcher (28px, fixed top:0) ── */
  const SW_H = 28;
  const bar  = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;align-items:center;justify-content:center;gap:2rem;background:#1a1a1a;height:' + SW_H + 'px;font-family:system-ui,sans-serif;font-size:11px;';

  [['Vetrina', isEcommerce ? '../' + page : null],
   ['E-commerce', isEcommerce ? null : 'ecommerce/' + page]
  ].forEach(function(item) {
    var label = item[0], url = item[1];
    var isCurrent = !url;
    var el = document.createElement(isCurrent ? 'span' : 'a');
    if (!isCurrent) el.href = url;
    el.textContent = label;
    el.style.cssText = 'color:' + (isCurrent ? '#fff' : '#6b6b6b') + ';text-decoration:none;letter-spacing:0.08em;font-weight:' + (isCurrent ? '600' : '400') + ';';
    if (!isCurrent) {
      el.onmouseenter = function() { el.style.color = '#fff'; };
      el.onmouseleave = function() { el.style.color = '#6b6b6b'; };
    }
    bar.appendChild(el);
  });
  document.body.prepend(bar);

  /* ── 2. Posiziona dev-panel fixed subito sotto la barra switcher ── */
  var devPanel = document.querySelector('.dev-panel');
  if (devPanel) {
    devPanel.style.cssText += 'position:fixed!important;top:' + SW_H + 'px!important;left:0;right:0;z-index:9500;';
  }

  /* ── 3. Sposta site-header e body sotto switcher + dev-panel ── */
  requestAnimationFrame(function() {
    var devH  = devPanel ? (devPanel.querySelector('.dev-panel__bar') ? devPanel.querySelector('.dev-panel__bar').offsetHeight : 0) : 0;
    var total = SW_H + devH;
    var HEADER_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
    var s = document.createElement('style');
    s.textContent = '.site-header { top: ' + total + 'px !important; } body { padding-top: ' + (total + HEADER_H) + 'px !important; }';
    document.head.appendChild(s);
  });
})();
