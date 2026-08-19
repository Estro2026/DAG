/* ── Wireframe switcher — vetrina ↔ ecommerce wireframe ── */
(function () {
  var path        = window.location.pathname;
  var isEcommerce = path.includes('/wireframe/ecommerce/');
  var page        = path.split('/').pop() || 'index.html';

  var SW_H = 28;
  var bar  = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;align-items:center;justify-content:center;gap:2rem;background:#2a2a2a;height:' + SW_H + 'px;font-family:system-ui,sans-serif;font-size:11px;';

  /* Label "WIREFRAME" a sinistra */
  var label = document.createElement('span');
  label.textContent = 'WIREFRAME';
  label.style.cssText = 'position:absolute;left:1rem;color:rgba(255,255,255,0.35);letter-spacing:0.12em;font-size:10px;font-weight:600;';
  bar.appendChild(label);

  [['Vetrina', isEcommerce ? '../' + page : null],
   ['E-commerce', isEcommerce ? null : 'ecommerce/' + page]
  ].forEach(function(item) {
    var lbl = item[0], url = item[1];
    var isCurrent = !url;
    var el = document.createElement(isCurrent ? 'span' : 'a');
    if (!isCurrent) el.href = url;
    el.textContent = lbl;
    el.style.cssText = 'color:' + (isCurrent ? '#fff' : '#6b6b6b') + ';text-decoration:none;letter-spacing:0.08em;font-weight:' + (isCurrent ? '600' : '400') + ';';
    if (!isCurrent) {
      el.onmouseenter = function() { el.style.color = '#fff'; };
      el.onmouseleave = function() { el.style.color = '#6b6b6b'; };
    }
    bar.appendChild(el);
  });

  /* Link torna al mockup */
  var mockupLink = document.createElement('a');
  mockupLink.href = isEcommerce ? '../../ecommerce/' + page : '../' + page;
  mockupLink.textContent = '← Mockup';
  mockupLink.style.cssText = 'position:absolute;right:1rem;color:rgba(255,255,255,0.45);text-decoration:none;letter-spacing:0.06em;font-size:10px;';
  mockupLink.onmouseenter = function() { mockupLink.style.color = '#fff'; };
  mockupLink.onmouseleave = function() { mockupLink.style.color = 'rgba(255,255,255,0.45)'; };
  bar.appendChild(mockupLink);

  document.body.prepend(bar);

  requestAnimationFrame(function() {
    var devPanel = document.querySelector('.dev-panel');
    var devBarEl = devPanel ? devPanel.querySelector('.dev-panel__bar') : null;
    var devH     = devBarEl ? devBarEl.offsetHeight : 0;
    if (devPanel) devPanel.style.cssText += 'position:fixed!important;top:' + SW_H + 'px!important;left:0;right:0;z-index:9500;';
    var total    = SW_H + devH;
    var HEADER_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
    var isHero   = !!document.querySelector('.site-header.on-hero');
    var s = document.createElement('style');
    var bodyPad = isHero ? total : (total + HEADER_H);
    s.textContent = '.site-header { top: ' + total + 'px !important; } body { padding-top: ' + bodyPad + 'px !important; }';
    document.head.appendChild(s);
  });
})();
