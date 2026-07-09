/**
 * Editorial Carousel — DAG Gioielli Wireframe
 * Magazine-style overlapping parallax carousel.
 *
 * Coordinate system
 * ─────────────────
 * The track has padding-inline: 50vw, so card 0 starts at vpWidth/2 from
 * the track's left edge. Card i's centre in track content space:
 *   slideCenter(i) = i * (cardW + gap) + cardW / 2
 *
 * After translateX(trackX), card i's centre lands in the viewport at:
 *   vpWidth/2 + slideCenter(i) + trackX
 *
 * To centre card i: vpWidth/2 + slideCenter(i) + trackX = vpWidth/2
 *   → trackX = -slideCenter(i)
 *
 * Parallax: distance of card i from viewport centre = slideCenter(i) + trackX
 */
(function () {
  'use strict';

  const viewport = document.getElementById('ecViewport');
  const track    = document.getElementById('ecTrack');
  if (!viewport || !track) return;

  const slides = Array.from(track.querySelectorAll('.ec-slide'));
  const fillEl = document.getElementById('ecFill');
  const currEl = document.getElementById('ecCurrent');
  const totalEl= document.getElementById('ecTotal');
  const TOTAL  = slides.length;
  const MID    = Math.floor(TOTAL / 2);

  if (totalEl) totalEl.textContent = String(TOTAL).padStart(2, '0');

  // ── Measurements ────────────────────────────────────────────────
  // Use offsetWidth (no transforms) so scale() doesn't affect spacing math.
  function cardW() { return slides[0].offsetWidth; }
  function gap()   {
    const g = parseFloat(getComputedStyle(track).columnGap);
    return isNaN(g) ? 20 : g;
  }
  function vpW()   { return viewport.clientWidth; }

  // Centre of card i in track content space (after padding-left = 50vw)
  function slideCenter(i) { return i * (cardW() + gap()) + cardW() / 2; }

  // trackX that places card i at the viewport centre
  function targetForIndex(i) { return -slideCenter(i); }

  // ── State ────────────────────────────────────────────────────────
  let currentIndex = MID;
  let trackX       = 0;
  let isDragging   = false;
  let startX       = 0;
  let startTrackX  = 0;
  let lastX        = 0;
  let lastT        = 0;
  let velocity     = 0;

  // ── Render ───────────────────────────────────────────────────────
  function applyTransform(x, smooth) {
    track.style.transition = smooth
      ? 'transform 680ms cubic-bezier(0.16,1,0.3,1)'
      : 'none';
    track.style.transform  = `translateX(${x}px)`;

    // Parallax: distance of each card from viewport centre
    slides.forEach((slide, i) => {
      const layer = slide.querySelector('.ec-parallax-layer');
      if (!layer) return;
      const dist  = slideCenter(i) + x;   // + right of centre, − left of centre
      const speed = i === currentIndex ? 0.07 : 0.20;
      layer.style.transition = smooth ? 'transform 680ms cubic-bezier(0.16,1,0.3,1)' : 'none';
      layer.style.transform  = `translateX(${-dist * speed}px)`;
    });
  }

  // ── Active state ─────────────────────────────────────────────────
  function setActive(index) {
    currentIndex = index;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      const d = Math.abs(i - index);
      s.style.zIndex = d === 0 ? '4' : d === 1 ? '2' : '1';
    });
    if (fillEl) fillEl.style.width = (index / (TOTAL - 1) * 100) + '%';
    if (currEl) currEl.textContent = String(index + 1).padStart(2, '0');
  }

  // ── Snap ─────────────────────────────────────────────────────────
  function snapTo(index) {
    const clamped = Math.max(0, Math.min(TOTAL - 1, index));
    setActive(clamped);
    trackX = targetForIndex(clamped);
    applyTransform(trackX, true);
  }

  // ── Drag ─────────────────────────────────────────────────────────
  function onDragStart(x) {
    isDragging  = true;
    startX      = x;
    startTrackX = trackX;
    lastX = x; lastT = Date.now(); velocity = 0;
    viewport.classList.add('dragging');
    track.style.transition = 'none';
  }

  function onDragMove(x) {
    if (!isDragging) return;
    trackX = startTrackX + (x - startX);
    const now = Date.now(), dt = now - lastT || 1;
    velocity = (x - lastX) / dt;
    lastX = x; lastT = now;
    applyTransform(trackX, false);
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('dragging');

    const projected = trackX + velocity * 160;

    let nearest = 0, minDist = Infinity;
    for (let i = 0; i < TOTAL; i++) {
      const d = Math.abs(projected - targetForIndex(i));
      if (d < minDist) { minDist = d; nearest = i; }
    }
    snapTo(nearest);
  }

  // ── Events ───────────────────────────────────────────────────────
  viewport.addEventListener('mousedown', e => { e.preventDefault(); onDragStart(e.clientX); });
  window.addEventListener('mousemove',  e => { if (isDragging) onDragMove(e.clientX); });
  window.addEventListener('mouseup',    ()  => { if (isDragging) onDragEnd(); });

  viewport.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchmove',  e => { if (isDragging) onDragMove(e.touches[0].clientX); }, { passive: true });
  viewport.addEventListener('touchend',   onDragEnd);

  // Click on non-active adjacent slide → jump to it
  slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
      if (!isDragging && i !== currentIndex) snapTo(i);
    });
  });

  // Keyboard
  viewport.setAttribute('tabindex', '0');
  viewport.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') snapTo(currentIndex + 1);
    else if (e.key === 'ArrowLeft') snapTo(currentIndex - 1);
  });

  // ── Init ─────────────────────────────────────────────────────────
  function init() {
    setActive(MID);
    trackX = targetForIndex(MID);
    applyTransform(trackX, false);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      trackX = targetForIndex(currentIndex);
      applyTransform(trackX, false);
    }, 150);
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(init);
  } else {
    window.addEventListener('load', init);
  }
})();
