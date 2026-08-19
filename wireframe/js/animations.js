/* ========================================
   ANIMATIONS — Fade in, sticky header, drawer
   ======================================== */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Intersection Observer — fade in */
if (!prefersReduced) {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

/* Sticky header */
const header = document.querySelector('.site-header');
if (header) {
  const heroEl = document.querySelector('.hero');
  const isHeroPage = !!heroEl;

  if (isHeroPage) {
    header.classList.add('transparent');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('scrolled');
      if (isHeroPage) header.classList.add('transparent');
    }
  }, { passive: true });
}

/* Mobile drawer */
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');
const overlay = document.querySelector('.drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');

function openDrawer() {
  drawer?.classList.add('open');
  overlay?.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer?.classList.remove('open');
  overlay?.classList.remove('visible');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
overlay?.addEventListener('click', closeDrawer);

drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

/* Active nav link */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.header-nav a, .drawer-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
