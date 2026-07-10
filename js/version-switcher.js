/* ── Version switcher — solo wireframe, rimuovere in produzione ── */
(function () {
  const BASE      = 'https://estro2026.github.io/DAG';
  const VETRINA   = BASE + '/';
  const ECOMMERCE = BASE + '/ecommerce/';

  /* rileva versione corrente dal path (funziona dopo il deploy GitHub Actions) */
  const isEcommerce = window.location.pathname.includes('/ecommerce/') ||
                      !!document.querySelector('a[href="cart.html"]');
  const current = isEcommerce ? 'ecommerce' : 'vetrina';

  const H = 28;
  const bar = document.createElement('div');
  bar.style.cssText = `position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;align-items:center;justify-content:center;gap:2rem;background:#1a1a1a;height:${H}px;font-family:system-ui,sans-serif;font-size:11px;`;

  [['Vetrina', VETRINA], ['E-commerce', ECOMMERCE]].forEach(([label, url]) => {
    const isCurrent = (label === 'Vetrina' && current === 'vetrina') ||
                      (label === 'E-commerce' && current === 'ecommerce');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = label;
    a.style.cssText = `color:${isCurrent ? '#fff' : '#6b6b6b'};text-decoration:none;letter-spacing:0.08em;font-weight:${isCurrent ? '600' : '400'};`;
    if (!isCurrent) {
      a.onmouseenter = () => a.style.color = '#fff';
      a.onmouseleave = () => a.style.color = '#6b6b6b';
    }
    bar.appendChild(a);
  });

  document.body.prepend(bar);

  /* sposta body, header e dev-panel per fare spazio alla barra */
  const s = document.createElement('style');
  s.textContent = `
    body { padding-top: ${H}px !important; }
    .site-header { top: ${H}px !important; }
    .dev-panel { top: calc(var(--header-h) + ${H}px) !important; }
  `;
  document.head.appendChild(s);

  /* fallback diretto per position:sticky (non sempre si ricalcola con CSS tardivo) */
  const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
  const devPanel = document.querySelector('.dev-panel');
  if (devPanel) devPanel.style.setProperty('top', (headerH + H) + 'px', 'important');
})();
