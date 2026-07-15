/* ── Version switcher — solo wireframe, rimuovere in produzione ── */
(function () {
  var path        = window.location.pathname;
  var isEcommerce = path.includes('/ecommerce/');
  var page        = path.split('/').pop() || 'index.html';

  /* ── 1. Barra switcher (28px, fixed top:0) ── */
  var SW_H = 28;
  var bar  = document.createElement('div');
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
    var devBarEl = devPanel ? devPanel.querySelector('.dev-panel__bar') : null;
    var devH     = devBarEl ? devBarEl.offsetHeight : 0;
    var total    = SW_H + devH;
    var HEADER_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
    var isHero   = !!document.querySelector('.site-header.on-hero');
    var s = document.createElement('style');
    /* sulle pagine hero il header si sovrappone all'immagine:
       il body non ha bisogno del padding dell'header, solo della barra switcher */
    var bodyPad = isHero ? total : (total + HEADER_H);
    s.textContent = '.site-header { top: ' + total + 'px !important; } body { padding-top: ' + bodyPad + 'px !important; }';
    document.head.appendChild(s);
  });
})();
