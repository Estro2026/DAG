/* ══ VERSION SWITCHER ════════════════════════════════════════════
   Barra di anteprima — visibile solo nel wireframe.
   Rimuovere in produzione oppure nascondere con .wf-switcher { display:none }
   ════════════════════════════════════════════════════════════════ */

(function () {
  /* ── URL dei due siti ── aggiorna quando GitHub Pages è configurato ── */
  const VETRINA    = 'https://estro2026.github.io/DAG/';        /* branch main   */
  const ECOMMERCE  = 'https://estro2026.github.io/DAG/ecommerce/'; /* branch ecommerce */

  /* ── Rileva versione corrente ── */
  const isEcommerce = document.querySelector('a[href="shop.html"], a[href="cart.html"]') !== null;
  const current     = isEcommerce ? 'ecommerce' : 'vetrina';

  /* ── Costruisci la barra ── */
  const bar = document.createElement('div');
  bar.className = 'wf-switcher';
  bar.setAttribute('role', 'navigation');
  bar.setAttribute('aria-label', 'Switcher versione wireframe');
  bar.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'right:0', 'z-index:10000',
    'display:flex', 'align-items:center', 'justify-content:center', 'gap:0',
    'background:#1a1a1a', 'height:28px',
    'font-family:system-ui,sans-serif', 'font-size:11px', 'letter-spacing:0.06em',
  ].join(';');

  const label = document.createElement('span');
  label.style.cssText = 'color:#6b6b6b;margin-right:1rem;text-transform:uppercase;font-size:10px;letter-spacing:0.12em;';
  label.textContent = '⬡ Wireframe DAG';
  bar.appendChild(label);

  /* Pulsante Vetrina */
  const btnV = document.createElement('a');
  btnV.href = VETRINA;
  btnV.target = '_blank';
  btnV.rel = 'noopener';
  btnV.textContent = 'Vetrina';
  btnV.style.cssText = [
    'padding:0 1rem', 'height:28px', 'line-height:28px',
    'text-decoration:none', 'text-transform:uppercase', 'font-size:10px', 'letter-spacing:0.1em',
    'transition:background .18s,color .18s', 'border-right:1px solid #333',
    current === 'vetrina'
      ? 'background:#fff;color:#1a1a1a;font-weight:600;'
      : 'background:none;color:#9b9b9b;',
  ].join(';');
  btnV.onmouseenter = () => { if (current !== 'vetrina') btnV.style.color = '#fff'; };
  btnV.onmouseleave = () => { if (current !== 'vetrina') btnV.style.color = '#9b9b9b'; };

  /* Pulsante E-commerce */
  const btnE = document.createElement('a');
  btnE.href = ECOMMERCE;
  btnE.target = '_blank';
  btnE.rel = 'noopener';
  btnE.textContent = 'E-commerce';
  btnE.style.cssText = [
    'padding:0 1rem', 'height:28px', 'line-height:28px',
    'text-decoration:none', 'text-transform:uppercase', 'font-size:10px', 'letter-spacing:0.1em',
    'transition:background .18s,color .18s',
    current === 'ecommerce'
      ? 'background:#fff;color:#1a1a1a;font-weight:600;'
      : 'background:none;color:#9b9b9b;',
  ].join(';');
  btnE.onmouseenter = () => { if (current !== 'ecommerce') btnE.style.color = '#fff'; };
  btnE.onmouseleave = () => { if (current !== 'ecommerce') btnE.style.color = '#9b9b9b'; };

  /* Badge versione corrente */
  const badge = document.createElement('span');
  badge.style.cssText = 'margin-left:1rem;padding:1px 7px;border-radius:10px;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;background:#3a3a3a;color:#9b9b9b;';
  badge.textContent = current === 'ecommerce' ? 'corrente' : 'corrente';

  bar.appendChild(btnV);
  bar.appendChild(btnE);
  bar.appendChild(badge);

  /* ── Inserisci in cima al body ── */
  document.body.prepend(bar);

  /* ── Sposta il body verso il basso per non coprire il contenuto ── */
  document.documentElement.style.setProperty('--switcher-h', '28px');
  const style = document.createElement('style');
  style.textContent = `
    body { padding-top: 28px !important; }
    .site-header { top: 28px !important; }
  `;
  document.head.appendChild(style);
})();
