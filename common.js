/* ==========================================================================
   YAAL FOOD — common.js (header scroll, mobile nav, reveal, footer year)
   Used by simple static pages (join-the-team.html, franchise.html)
   ========================================================================== */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  mainNav.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  burgerBtn.classList.remove('open');
  mainNav.classList.remove('open');
}));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
