/* ── Fade in via IntersectionObserver ─── */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.fade').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.fade').forEach(el => el.classList.add('in'));
}

/* ── Header sticky / transparent ─── */
const header = document.querySelector('.site-header');
if (header) {
  const hasHero = !!document.querySelector('.hero');
  if (hasHero) header.classList.add('on-hero');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) header.classList.remove('on-hero');
    else if (hasHero) header.classList.add('on-hero');
  }, { passive: true });
}

/* ── Mobile drawer ─── */
const hamburger = document.querySelector('.hamburger');
const drawer    = document.querySelector('.mobile-drawer');
const overlay   = document.querySelector('.drawer-overlay');
const closebtn  = document.querySelector('.drawer-close');
const open  = () => { drawer?.classList.add('open'); overlay?.classList.add('open'); document.body.style.overflow = 'hidden'; };
const close = () => { drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow = ''; };
hamburger?.addEventListener('click', open);
closebtn?.addEventListener('click', close);
overlay?.addEventListener('click', close);
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

/* ══ WISHLIST ═══════════════════════════════════════════════════════
   Stato salvato in localStorage. Struttura:
   { lists: [{id, name, items:[{ref,category,name,price}]}], active: id }
   In produzione: sostituire con YITH WooCommerce Wishlist API.
   ════════════════════════════════════════════════════════════════ */

const WL_KEY = 'dag_wishlist';

function wlLoad() {
  try { return JSON.parse(localStorage.getItem(WL_KEY)) || { lists: [{ id: 'main', name: 'Lista principale', items: [] }], active: 'main' }; }
  catch { return { lists: [{ id: 'main', name: 'Lista principale', items: [] }], active: 'main' }; }
}
function wlSave(data) { localStorage.setItem(WL_KEY, JSON.stringify(data)); }
function wlActiveList(data) { return data.lists.find(l => l.id === data.active) || data.lists[0]; }
function wlHas(data, ref) { return data.lists.some(l => l.items.some(i => i.ref === ref)); }
function wlListHas(list, ref) { return list.items.some(i => i.ref === ref); }

/* ── Toast ─── */
function wlToast(msg) {
  let t = document.getElementById('wl-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'wl-toast';
    t.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(12px);background:#1a1a1a;color:#fff;font-family:var(--font-sans);font-size:12px;letter-spacing:0.06em;padding:.65rem 1.25rem;border-radius:2px;z-index:9999;opacity:0;transition:opacity .25s ease,transform .25s ease;pointer-events:none;white-space:nowrap;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(12px)'; }, 2400);
}

/* ── Popover selezione lista ─── */
function wlBuildPopover(btn, ref, cardData) {
  document.querySelectorAll('.wl-popover').forEach(p => p.remove());
  const data = wlLoad();
  const isInAny = wlHas(data, ref);
  const pop = document.createElement('div');
  pop.className = 'wl-popover';
  pop.style.cssText = 'position:absolute;z-index:100;background:#fff;border:1px solid #cacaca;border-radius:3px;padding:.5rem 0;min-width:190px;box-shadow:0 4px 16px rgba(0,0,0,.12);font-family:var(--font-sans);font-size:12.5px;';

  /* ── Se già salvato: mostra "Rimuovi dalla wishlist" in cima ── */
  if (isInAny) {
    const removeRow = document.createElement('button');
    removeRow.style.cssText = 'display:flex;align-items:center;gap:.6rem;width:100%;padding:.55rem 1rem;background:none;border:none;cursor:pointer;color:#b94040;text-align:left;transition:background .15s;font-weight:500;';
    removeRow.onmouseenter = () => removeRow.style.background = '#fff5f5';
    removeRow.onmouseleave = () => removeRow.style.background = 'none';
    removeRow.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" fill="none" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg> Rimuovi dalla wishlist`;
    removeRow.onclick = (e) => {
      e.stopPropagation();
      const d = wlLoad();
      d.lists.forEach(l => { l.items = l.items.filter(i => i.ref !== ref); });
      wlSave(d);
      wlToast('Rimosso dalla wishlist');
      wlUpdateBtns();
      pop.remove();
    };
    pop.appendChild(removeRow);

    const divTop = document.createElement('div');
    divTop.style.cssText = 'border-top:1px solid #efefef;margin:.4rem 0;';
    pop.appendChild(divTop);

    const moveLabel = document.createElement('p');
    moveLabel.style.cssText = 'padding:.2rem 1rem .3rem;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#9b9b9b;';
    moveLabel.textContent = 'Sposta in';
    pop.appendChild(moveLabel);
  }

  data.lists.forEach(list => {
    const inList = wlListHas(list, ref);
    const row = document.createElement('button');
    row.style.cssText = 'display:flex;align-items:center;gap:.6rem;width:100%;padding:.5rem 1rem;background:none;border:none;cursor:pointer;color:#1a1a1a;text-align:left;transition:background .15s;';
    row.onmouseenter = () => row.style.background = '#f5f5f5';
    row.onmouseleave = () => row.style.background = 'none';
    row.innerHTML = `<span style="font-size:14px;line-height:1;color:${inList?'#1a1a1a':'#9b9b9b'}">${inList ? '♥' : '♡'}</span> ${list.name}`;
    row.onclick = (e) => {
      e.stopPropagation();
      const d = wlLoad();
      const l = d.lists.find(x => x.id === list.id);
      if (inList) {
        l.items = l.items.filter(i => i.ref !== ref);
        wlSave(d);
        wlToast(`Rimosso da "${list.name}"`);
      } else {
        l.items.push(cardData);
        wlSave(d);
        wlToast(`Aggiunto a "${list.name}"`);
      }
      wlUpdateBtns();
      pop.remove();
    };
    pop.appendChild(row);
  });

  const divider = document.createElement('div');
  divider.style.cssText = 'border-top:1px solid #efefef;margin:.4rem 0;';
  pop.appendChild(divider);

  const newRow = document.createElement('button');
  newRow.style.cssText = 'display:flex;align-items:center;gap:.6rem;width:100%;padding:.5rem 1rem;background:none;border:none;cursor:pointer;color:#6b6b6b;text-align:left;transition:background .15s;';
  newRow.onmouseenter = () => newRow.style.background = '#f5f5f5';
  newRow.onmouseleave = () => newRow.style.background = 'none';
  newRow.innerHTML = '<span style="font-size:14px;">+</span> Nuova lista';
  newRow.onclick = (e) => { e.stopPropagation(); pop.remove(); wlNewListPrompt(ref, cardData); };
  pop.appendChild(newRow);

  /* posizionamento relativo al pulsante */
  const wrap = btn.parentElement;
  wrap.style.position = 'relative';
  pop.style.top = (btn.offsetTop + btn.offsetHeight + 4) + 'px';
  pop.style.right = '0';
  wrap.appendChild(pop);

  setTimeout(() => document.addEventListener('click', () => pop.remove(), { once: true }), 0);
}

/* ── Crea nuova lista inline ─── */
function wlNewListPrompt(ref, cardData) {
  const name = prompt('Nome della nuova lista (es. Regali, Sogni…):');
  if (!name || !name.trim()) return;
  const data = wlLoad();
  const id = 'list_' + Date.now();
  data.lists.push({ id, name: name.trim(), items: ref ? [cardData] : [] });
  wlSave(data);
  wlToast(`Lista "${name.trim()}" creata${ref ? ' con il prodotto aggiunto' : ''}`);
  wlUpdateBtns();
  if (typeof wlRenderSidebar === 'function') wlRenderSidebar();
}

/* ── Aggiorna stato visivo cuori ─── */
function wlUpdateBtns() {
  const data = wlLoad();
  document.querySelectorAll('.wishlist-btn[data-ref]').forEach(btn => {
    const inAny = wlHas(data, btn.dataset.ref);
    btn.classList.toggle('active', inAny);
    btn.title = inAny ? 'Nella wishlist' : 'Salva in wishlist';
    const path = btn.querySelector('svg path');
    if (path) path.style.fill = inAny ? 'currentColor' : 'none';
  });
  /* pulsante PDP */
  const pdpBtn = document.querySelector('.btn--wishlist[data-ref]');
  if (pdpBtn) {
    const inAny = wlHas(data, pdpBtn.dataset.ref);
    pdpBtn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" style="fill:${inAny?'currentColor':'none'}"/></svg> ${inAny ? 'Nella wishlist' : 'Salva in wishlist'}`;
  }
}

/* ── Init wishlist buttons sulle card ─── */
document.querySelectorAll('.wishlist-btn').forEach(btn => {
  /* ricava ref e dati dalla card */
  const card = btn.closest('.product-card, .wl-card, [class*="product"]');
  const img  = btn.closest('[style*="position"]')?.querySelector('a[href*="product.html"]') ||
               btn.closest('div')?.querySelector('a[href*="product.html"]');
  const ref  = img?.href?.split('ref=')[1] || '';
  if (!ref) return;

  btn.dataset.ref = ref;
  const category = card?.querySelector('.product-card__category, .wl-card__category')?.textContent || 'Bracciale';
  const name     = card?.querySelector('.product-card__ref, .wl-card__ref')?.textContent || ref;
  const price    = card?.querySelector('.product-card__price, .wl-card__price')?.textContent?.trim() || '';
  const cardData = { ref, category, name, price };

  btn.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    wlBuildPopover(btn, ref, cardData);
  });
});

/* ── Init pulsante wishlist PDP ─── */
const pdpWishlistBtn = document.querySelector('.btn--wishlist');
if (pdpWishlistBtn) {
  const ref = new URLSearchParams(location.search).get('ref') || 'prodotto';
  pdpWishlistBtn.dataset.ref = ref;
  const h1  = document.querySelector('h1')?.textContent || ref;
  const cat = document.querySelector('.breadcrumb li:nth-child(3)')?.textContent || 'Bracciale';
  const price = document.querySelector('.t-price, [class*="price"]')?.textContent?.trim() || '';
  const cardData = { ref, category: cat, name: h1, price };

  pdpWishlistBtn.addEventListener('click', e => {
    e.preventDefault();
    const data = wlLoad();
    const list = wlActiveList(data);
    if (wlListHas(list, ref)) {
      list.items = list.items.filter(i => i.ref !== ref);
      wlSave(data);
      wlToast('Rimosso dalla wishlist');
    } else {
      wlBuildPopover(pdpWishlistBtn, ref, cardData);
    }
    wlUpdateBtns();
  });
}

wlUpdateBtns();

/* ══ WISHLIST PAGE ═══════════════════════════════════════════════ */
if (location.pathname.includes('wishlist')) {

  function wlRenderSidebar() {
    const data = wlLoad();
    const sidebar = document.querySelector('.wl-sidebar');
    if (!sidebar) return;

    const title = sidebar.querySelector('.wl-sidebar__title');
    const note  = sidebar.querySelector('.wf-note');
    const share = sidebar.querySelector('.wl-share');
    const newBtn = sidebar.querySelector('.wl-new-list');

    /* rimuovi voci lista esistenti */
    sidebar.querySelectorAll('.wl-list-item').forEach(el => el.remove());

    data.lists.forEach(list => {
      const item = document.createElement('div');
      item.className = 'wl-list-item' + (list.id === data.active ? ' active' : '');
      item.setAttribute('role','button'); item.setAttribute('tabindex','0');
      item.innerHTML = `<span class="wl-list-item__name">${list.name}</span><span class="wl-list-item__count">${list.items.length}</span>`;
      item.addEventListener('click', () => {
        const d = wlLoad(); d.active = list.id; wlSave(d);
        wlRenderSidebar(); wlRenderGrid();
      });
      /* inserisci prima del bottone "Nuova lista" */
      sidebar.insertBefore(item, newBtn);
    });
  }

  function wlRenderGrid() {
    const data = wlLoad();
    const list = wlActiveList(data);
    const grid = document.querySelector('.grid-3');
    const empty = document.querySelector('.wl-empty');
    const header = document.querySelector('.wl-header__title');

    if (header) header.innerHTML = `${list.name} <span style="font-family:var(--font-sans);font-size:14px;color:var(--wf-ghost);font-weight:400;">— ${list.items.length} prodott${list.items.length===1?'o':'i'}</span>`;

    if (!grid) return;
    grid.innerHTML = '';

    if (list.items.length === 0) {
      grid.style.display = 'none';
      if (empty) { empty.style.display = 'block'; empty.removeAttribute('aria-hidden'); }
      return;
    }
    grid.style.display = '';
    if (empty) { empty.style.display = 'none'; empty.setAttribute('aria-hidden','true'); }

    list.items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'wl-card fade in';
      card.style.animationDelay = (i * 0.06) + 's';
      card.innerHTML = `
        <button class="wl-card__remove" aria-label="Rimuovi dalla wishlist" title="Rimuovi">×</button>
        <a href="product.html?ref=${item.ref}" class="wl-card__img" aria-label="${item.name}">
          <div class="img-ph ar-3-4"><span class="img-ph__label">${item.category} — ${item.name}</span></div>
        </a>
        <div class="wl-card__body">
          <p class="wl-card__category">${item.category}</p>
          <p class="wl-card__ref">${item.name}</p>
          <p class="wl-card__price">${item.price}</p>
          <button class="wl-card__cta">Aggiungi al carrello</button>
        </div>`;
      card.querySelector('.wl-card__remove').addEventListener('click', () => {
        const d = wlLoad();
        const l = wlActiveList(d);
        l.items = l.items.filter(x => x.ref !== item.ref);
        wlSave(d);
        card.style.opacity = '0'; card.style.transform = 'scale(.95)';
        card.style.transition = 'opacity .2s,transform .2s';
        setTimeout(() => { wlRenderGrid(); wlRenderSidebar(); }, 220);
      });
      grid.appendChild(card);
    });
  }

  /* pulsante "Nuova lista" nella sidebar della pagina wishlist */
  const sidebarNewBtn = document.querySelector('.wl-new-list');
  if (sidebarNewBtn) {
    sidebarNewBtn.onclick = () => wlNewListPrompt(null, null);
  }

  /* modal nella pagina wishlist */
  const modalCreateBtn = document.querySelector('.wl-modal__actions .wl-action-btn--filled');
  if (modalCreateBtn) {
    modalCreateBtn.onclick = () => {
      const input = document.getElementById('wlListName');
      const name = input?.value?.trim();
      if (!name) return;
      const data = wlLoad();
      data.lists.push({ id: 'list_' + Date.now(), name, items: [] });
      wlSave(data);
      input.value = '';
      document.getElementById('wlModal')?.classList.remove('open');
      wlRenderSidebar(); wlRenderGrid();
      wlToast(`Lista "${name}" creata`);
    };
  }

  wlRenderSidebar();
  wlRenderGrid();
}

/* ── Active nav link ─── */
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link, .drawer-nav a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
