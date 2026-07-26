/* ==========================================================================
   YAAL FOOD — category-page.js
   Script partagé par les pages catégorie (menu-pizza.html, menu-kebab.html, ...)
   Dépend de products-data.js et d'une variable globale PAGE_CATEGORY définie
   inline dans chaque page avant le chargement de ce script.
   ========================================================================== */

const filtersWrap = document.getElementById('filters');
const grid = document.getElementById('productGrid');

filtersWrap.innerHTML = `<a class="filter-pill" href="menu.html">Tous</a>` +
  Object.entries(CATEGORY_META).map(([key, meta]) =>
    `<a class="filter-pill${key === PAGE_CATEGORY ? ' active' : ''}" href="${meta.slug}">${meta.label}</a>`
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

const items = PRODUCTS.filter(p => p.cat === PAGE_CATEGORY);

if (PAGE_CATEGORY === 'pizza') {
  const order = ['offre', 'classique', 'nouveaute'];
  grid.innerHTML = order.map(sub => {
    const subItems = items.filter(p => p.sub === sub);
    if (!subItems.length) return '';
    return `
      <h2 class="subsection-title reveal">${PIZZA_SUB_LABELS[sub]}</h2>
      <div class="product-grid">
        ${subItems.map((p, i) => cardHTML(p, i)).join('')}
      </div>
    `;
  }).join('');
} else {
  grid.innerHTML = `<div class="product-grid">${items.map((p, i) => cardHTML(p, i)).join('')}</div>`;
}

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
