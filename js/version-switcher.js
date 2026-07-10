/* ── Version switcher — solo wireframe, rimuovere in produzione ── */
(function () {
  const BASE      = 'https://estro2026.github.io/DAG';
  const VETRINA   = BASE + '/';
  const ECOMMERCE = BASE + '/ecommerce/';

  const isEcommerce = window.location.pathname.includes('/ecommerce/') ||
                      !!document.querySelector('a[href="cart.html"]');
  const current = isEcommerce ? 'ecommerce' : 'vetrina';

  /* ── 1. Barra switcher (28px, fixed top:0) ── */
  const SW_H = 28;
  const bar = document.createElement('div');
  bar.style.cssText = `position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;align-items:center;justify-content:center;gap:2rem;background:#1a1a1a;height:${SW_H}px;font-family:system-ui,sans-serif;font-size:11px;`;

  [['Vetrina', VETRINA], ['E-commerce', ECOMMERCE]].forEach(([label, url]) => {
    const isCurrent = (label === 'Vetrina' && current === 'vetrina') ||
                      (label === 'E-commerce' && current === 'ecommerce');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = label;
    a.style.cssText = `color:${isCurrent?'#fff':'#6b6b6b'};text-decoration:none;letter-spacing:0.08em;font-weight:${isCurrent?'600':'400'};`;
    if (!isCurrent) { a.onmouseenter=()=>a.style.color='#fff'; a.onmouseleave=()=>a.style.color='#6b6b6b'; }
    bar.appendChild(a);
  });
  document.body.prepend(bar);

  /* ── 2. Posiziona dev-panel fixed subito sotto la barra switcher ── */
  const devPanel = document.querySelector('.dev-panel');
  if (devPanel) {
    devPanel.style.cssText += `position:fixed!important;top:${SW_H}px!important;left:0;right:0;z-index:9500;`;
  }

  /* ── 3. Sposta site-header e body sotto switcher + dev-panel ── */
  requestAnimationFrame(() => {
    const devH  = devPanel ? devPanel.querySelector('.dev-panel__bar')?.offsetHeight || 0 : 0;
    const total = SW_H + devH;
    const HEADER_H = parseInt(getComputedStyle(document.documentElement)
                      .getPropertyValue('--header-h')) || 72;

    const s = document.createElement('style');
    s.textContent = `
      .site-header { top: ${total}px !important; }
      body          { padding-top: ${total + HEADER_H}px !important; }
    `;
    document.head.appendChild(s);
  });
})();
