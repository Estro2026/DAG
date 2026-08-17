function initHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');

  const closeAll = () => {
    document.querySelectorAll('.hotspot-card.open').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.hotspot[aria-expanded="true"]').forEach(h => h.setAttribute('aria-expanded','false'));
  };

  hotspots.forEach(hs => {
    const card = hs.querySelector('.hotspot-card');
    if (!card) return;
    hs.setAttribute('role','button'); hs.setAttribute('tabindex','0'); hs.setAttribute('aria-expanded','false');

    const toggle = e => {
      e.stopPropagation();
      const isOpen = card.classList.contains('open');
      closeAll();
      if (!isOpen) {
        card.classList.add('open');
        hs.setAttribute('aria-expanded','true');
        // position: default below-right, flip if near edges
        const wrap = hs.closest('.hotspot-wrap');
        const hr = hs.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
        const cw = 240, gap = 10;
        let l = hr.left - wr.left + 17, t = hr.bottom - wr.top + gap;
        if (l + cw > wr.width - 12) l = hr.left - wr.left - cw + 17;
        if (t + 170 > wr.height - 12) t = hr.top - wr.top - 170 - gap;
        card.style.left = Math.max(8, l) + 'px';
        card.style.top  = Math.max(8, t) + 'px';
      }
    };

    hs.addEventListener('click', toggle);
    hs.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' '){e.preventDefault();toggle(e);} if(e.key==='Escape')closeAll(); });
  });

  document.addEventListener('click', closeAll);
}

document.addEventListener('DOMContentLoaded', initHotspots);
