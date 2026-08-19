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

/* ── Active nav link ─── */
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link, .drawer-nav a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
