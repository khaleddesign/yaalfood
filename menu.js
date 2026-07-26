/* ==========================================================================
   YAAL FOOD — menu.js (page Menu complet / hub)
   Dépend de products-data.js (PRODUCTS, CATEGORY_META)
   ========================================================================== */

const filtersWrap = document.getElementById('filters');
const grid = document.getElementById('productGrid');

filtersWrap.innerHTML = `<span class="filter-pill active">Tous</span>` +
  Object.entries(CATEGORY_META).map(([key, meta]) =>
    `<a class="filter-pill" href="${meta.slug}">${meta.label}</a>`
  ).join('');

function priceHTML(p) {
  if (p.single !== undefined) return `<span class="price-pill single">${p.single.toFixed(2)} €</span>`;
  return `<span class="price-pill seul">Seul ${p.seul.toFixed(2)} €</span><span class="price-pill menu">Menu ${p.menu.toFixed(2)} €</span>`;
}

function cardHTML(p, i) {
  return `
    <article class="product-card${p.promo ? ' promo' : ''}" style="transition-delay:${Math.min(i * 30, 360)}ms">
      ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
      <div class="card-image">${p.img
        ? `<img src="assets/images/${p.img}" alt="${p.name}" loading="lazy">`
        : `<div class="card-image-placeholder">🍽️</div>`}</div>
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-prices">${priceHTML(p)}</div>
      </div>
    </article>
  `;
}

grid.innerHTML = PRODUCTS.map((p, i) => cardHTML(p, i)).join('');

/* ---------------------------------------------------------------------- */
/* SCROLL REVEAL                                                            */
/* ---------------------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .product-card').forEach(el => revealObserver.observe(el));

/* ---------------------------------------------------------------------- */
/* HEADER SCROLL + MOBILE MENU                                              */
/* ---------------------------------------------------------------------- */
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

document.getElementById('year').textContent = new Date().getFullYear();
