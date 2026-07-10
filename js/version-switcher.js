/* ── Version switcher — solo wireframe, rimuovere in produzione ── */
(function () {
  const VETRINA   = 'https://estro2026.github.io/DAG/';
  const ECOMMERCE = 'https://estro2026.github.io/DAG/ecommerce/';

  const bar = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;align-items:center;justify-content:center;gap:2rem;background:#1a1a1a;height:28px;font-family:system-ui,sans-serif;font-size:11px;';

  [['Vetrina', VETRINA], ['E-commerce', ECOMMERCE]].forEach(([label, url]) => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = label;
    a.style.cssText = 'color:#9b9b9b;text-decoration:none;letter-spacing:0.08em;';
    a.onmouseenter = () => a.style.color = '#fff';
    a.onmouseleave = () => a.style.color = '#9b9b9b';
    bar.appendChild(a);
  });

  document.body.prepend(bar);
  const s = document.createElement('style');
  s.textContent = 'body{padding-top:28px!important}.site-header{top:28px!important}';
  document.head.appendChild(s);
})();
