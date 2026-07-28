/* ==========================================================================
   YAAL FOOD — script.js
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* 1. DATA                                                                  */
/* ---------------------------------------------------------------------- */
const PRODUCTS = [
  // Sandwichs (mixte)
  { cat: 'sandwich', img: 'prod-magistral.png', name: 'Magistral', desc: '2 steaks, cheddar, bacon, œuf', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-phenomene.png', name: 'Phénomène', desc: '2 steaks, cordon bleu, cheddar, œuf', seul: 9.00, menu: 11.00, tag: 'Best-seller' },
  { cat: 'sandwich', img: 'prod-quatro.png', name: 'Quatro', desc: '4 steaks, 4 cheddars', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-extreme.png', name: 'Extrême', desc: '2 steaks, escalope, boursin, œuf', seul: 9.00, menu: 11.00 },
  // Kebabs
  { cat: 'kebab', img: 'prod-kebab-classique.png', name: 'Kebab Classique', desc: 'Crudités, sauce, frites', seul: 7.50, menu: 9.50 },
  { cat: 'kebab', img: 'prod-kebab-berliner.png', name: 'Kebab Berliner', desc: 'Crudités, sauce, légumes grillés, frites', seul: 9.00, menu: 11.00, tag: 'Signature' },
  { cat: 'kebab', img: 'prod-kebab-traditionnel.png', name: 'Kebab Traditionnel', desc: 'Crudités, sauce, légumes grillés, frites', seul: 8.50, menu: 10.50 },
  { cat: 'kebab', img: 'prod-kebab-special.png', name: 'Kebab Spécial', desc: 'Crudités, sauce, légumes grillés, miel', seul: 9.00, menu: 11.00 },
  // Chicken
  { cat: 'chicken', img: 'prod-chicken-curry.png', name: 'Chicken Curry', desc: 'Crudités, sauce, cheddar', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-paprika.png', name: 'Chicken Paprika', desc: 'Crudités, sauce, cheddar', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-special.png', name: 'Chicken Spécial', desc: 'Crudités, sauce, frites', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-duo.png', name: 'Chicken Duo', desc: '2 viandes au choix, crudités, sauce', seul: 7.50, menu: 9.50 },
  // Tacos
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos M', desc: '1 viande au choix, sauce fromagère maison, frites', seul: 9.90, menu: 9.90 },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos L', desc: '2 viandes au choix, sauce fromagère maison, frites', seul: 9.90, menu: 11.90, tag: 'Populaire' },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos XL', desc: '3 viandes au choix, sauce fromagère maison, frites', seul: 11.50, menu: 13.50 },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Gratinée', desc: '2 viandes, gratinée au fromage, frites', seul: 11.50, menu: 13.50 },
  // Pizzas
  { cat: 'pizza', img: 'prod-pizza.png', name: '3 Pizzas Marguerita', desc: 'Tomate, fromage, olive, origan — le lot de 3', single: 16.00, tag: 'Offre', promo: true },
  { cat: 'pizza', img: 'prod-pizza.png', name: 'Margherita', desc: 'Tomate, fromage, olive, origan', single: 5.90 },
  { cat: 'pizza', img: 'prod-pizza.png', name: '4 Fromages', desc: 'Tomate, fromage, chèvre, mozzarella, roquefort', single: 8.50 },
  { cat: 'pizza', img: 'prod-pizza.png', name: 'Chèvre Miel', desc: 'Crème fraîche, fromage, chèvre, miel', single: 8.50 },
  { cat: 'pizza', img: 'prod-pizza.png', name: 'Trois Viandes', desc: 'Sauce tomate, fromage, jambon, merguez, viande hachée', single: 11.90, tag: 'Nouveau' },
  // Burgers & Paninis
  { cat: 'burgers', img: 'prod-cheese-burger.png', name: 'Cheeze Burger', desc: 'Steak, fromage', seul: 3.00, menu: 5.00 },
  { cat: 'burgers', img: 'prod-fish-burger.png', name: 'Fish Burger', desc: 'Poisson, fromage', seul: 5.00, menu: 7.00 },
  { cat: 'burgers', img: 'prod-king-burger.png', name: 'King Burger', desc: '1 steak 180g, cheddar', seul: 7.50, menu: 9.50 },
  { cat: 'burgers', img: 'prod-double-cheese.png', name: 'Double Cheese', desc: '2 steaks, 2 fromages', seul: 4.50, menu: 6.50 },
  { cat: 'burgers', img: 'prod-smash-burger.png', name: 'Smash Burger', desc: 'Double cheese façon smash', seul: 8.00, menu: 10.00, tag: 'Nouveau' },
  { cat: 'burgers', img: 'prod-smash-boeuf.png', name: 'Smash Bœuf', desc: 'Bacon de bœuf, sauce maison, salade, tomates, 2 steaks smashés et chèvre', seul: 3.00, menu: 5.00 },
  { cat: 'burgers', img: 'prod-smash-chevre-miel.png', name: 'Smash Chèvre Miel', desc: 'Sauce maison, salade, tomates, 2 steaks smashés et chèvre', seul: 8.70, menu: 10.70 },
  { cat: 'burgers', img: 'prod-menu-cheese-double.png', name: 'Menu Cheese D.Cheese', desc: 'Un cheese + double cheese + frites + boisson', seul: 9.50, menu: 11.50 },
  { cat: 'burgers', img: 'prod-king-burger.png', name: 'Big One', desc: 'King + crock monsieur + frites + boisson', seul: 9.50, menu: 11.50 },
  { cat: 'burgers', img: 'prod-panini-jambon.png', name: 'Paninis 3 Fromages', desc: 'Panini gratiné, 3 fromages', seul: 4.50, menu: 6.50 },
  { cat: 'burgers', img: 'prod-panini-jambon.png', name: 'Paninis Viande Hachée', desc: 'Panini gratiné, viande hachée', seul: 4.90, menu: 6.90 },
  { cat: 'burgers', img: 'prod-panini-jambon.png', name: 'Paninis Jambon', desc: 'Panini gratiné, jambon', seul: 4.90, menu: 6.90 },
  { cat: 'burgers', img: 'prod-crock-monsieur.png', name: 'Crock Monsieur', desc: 'Jambon, fromage gratiné', single: 2.50 },
];

const MORPH_STAGES = [
  { kicker: '01 — SIGNATURE', title: 'BEEF STACK', desc: 'Double smash beef, cheddar fondu, sauce maison. Notre burger le plus généreux.', bg: 'radial-gradient(circle at 50% 40%, #FF6B45, #B30510 70%)' },
  { kicker: '02 — PIZZERIA', title: 'MARGHERITA PIZZA', desc: 'Pâte fine, tomate, mozzarella fondante, basilic frais. L\'authenticité italienne.', bg: 'radial-gradient(circle at 50% 40%, #FF6B45, #B30510 70%)' },
  { kicker: '03 — FAIT MAISON', title: 'KEBAB FAIT MAISON', desc: 'Viande marinée, grillée à la broche, pain pétri sur place. La recette YAAL.', bg: 'radial-gradient(circle at 50% 40%, #FF6B45, #B30510 70%)' },
  { kicker: '04 — SIGNATURE', title: 'TACOS GOURMET', desc: 'Sauce fromagère maison, viande généreuse, frites croustillantes.', bg: 'radial-gradient(circle at 50% 40%, #FF6B45, #B30510 70%)' },
];

/* ---------------------------------------------------------------------- */
/* 2. RENDER PRODUCT GRID                                                   */
/* ---------------------------------------------------------------------- */
const grid = document.getElementById('productGrid');

function priceHTML(p) {
  if (p.single !== undefined) return `<span class="price-pill single">${p.single.toFixed(2)} €</span>`;
  return `<span class="price-pill seul">Seul ${p.seul.toFixed(2)} €</span><span class="price-pill menu">Menu ${p.menu.toFixed(2)} €</span>`;
}

const CATEGORY_PAGES = {
  sandwich: 'menu-sandwich-mixte.html',
  kebab: 'menu-kebab.html',
  chicken: 'menu-chicken.html',
  tacos: 'menu-tacos.html',
  pizza: 'menu-pizza.html',
  burgers: 'menu-burgers.html',
};

function previewForAll() {
  const cats = ['sandwich', 'kebab', 'chicken', 'tacos', 'pizza', 'burgers'];
  return cats.map(cat => {
    const items = PRODUCTS.filter(p => p.cat === cat);
    return items.find(p => p.tag) || items[0];
  }).filter(Boolean);
}

function renderGrid(filter) {
  const list = filter === 'tous'
    ? previewForAll()
    : PRODUCTS.filter(p => p.cat === filter).slice(0, 6);

  const ctaLink = document.querySelector('.menu-cta a');
  if (ctaLink) ctaLink.href = filter === 'tous' ? 'menu.html' : (CATEGORY_PAGES[filter] || 'menu.html');

  grid.innerHTML = list.map((p, i) => `
    <article class="product-card${p.promo ? ' promo' : ''}" style="transition-delay:${Math.min(i * 50, 400)}ms">
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
  `).join('');
  observeCards();
}

const filterBtns = document.querySelectorAll('.filter-pill');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    grid.style.opacity = '0';
    setTimeout(() => { renderGrid(btn.dataset.filter); grid.style.opacity = '1'; }, 200);
  });
});
grid.style.transition = 'opacity 0.25s ease';

/* ---------------------------------------------------------------------- */
/* 3. SCROLL REVEAL                                                         */
/* ---------------------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

function observeReveals() { document.querySelectorAll('.reveal:not(.in-view)').forEach(el => revealObserver.observe(el)); }
function observeCards() { document.querySelectorAll('.product-card:not(.in-view)').forEach(el => revealObserver.observe(el)); }

renderGrid('tous');
observeReveals();

/* ---------------------------------------------------------------------- */
/* 4. HERO PRODUCT CAROUSEL                                                  */
/* ---------------------------------------------------------------------- */
const heroTrack = document.getElementById('carouselTrack');
const heroPrevBtn = document.getElementById('prevBtn');
const heroNextBtn = document.getElementById('nextBtn');
const heroDotsWrap = document.getElementById('heroDots');

const heroSlides = Array.from(heroTrack.querySelectorAll('.product-slide'));

function heroSlideBy(direction) {
  const slide = heroTrack.querySelector('.product-slide');
  const amount = slide.offsetWidth * direction;
  heroTrack.scrollBy({ left: amount, behavior: 'smooth' });
}

function heroGoToIndex(index) {
  const slide = heroTrack.querySelector('.product-slide');
  heroTrack.scrollTo({ left: slide.offsetWidth * index, behavior: 'smooth' });
}

/* Dots (visible on mobile) */
heroDotsWrap.innerHTML = heroSlides.map((_, i) =>
  `<span class="zz-hero-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
).join('');
const heroDots = heroDotsWrap.querySelectorAll('.zz-hero-dot');
heroDots.forEach(dot => dot.addEventListener('click', () => {
  restartHeroAutoplay();
  heroGoToIndex(Number(dot.dataset.index));
}));

heroPrevBtn.addEventListener('click', () => { restartHeroAutoplay(); heroSlideBy(-1); });
heroNextBtn.addEventListener('click', () => { restartHeroAutoplay(); heroSlideBy(1); });

let heroCenterTicking = false;
let heroCurrentCenter = null;
let heroCurrentIndex = 0;

function updateHeroCenterSlide() {
  const viewCenter = window.innerWidth / 2;
  let closest = null;
  let closestDist = Infinity;
  let closestIndex = 0;
  heroSlides.forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const dist = Math.abs(slideCenter - viewCenter);
    if (dist < closestDist) { closestDist = dist; closest = slide; closestIndex = i; }
  });
  heroSlides.forEach(slide => slide.classList.toggle('is-center', slide === closest));

  if (closest !== heroCurrentCenter) {
    heroCurrentCenter = closest;
    heroCurrentIndex = closestIndex;
    const img = closest.querySelector('img');
    img.classList.remove('pulse');
    void img.offsetWidth;
    img.classList.add('pulse');
    heroDots.forEach(dot => dot.classList.toggle('active', Number(dot.dataset.index) === closestIndex));
  }
  heroCenterTicking = false;
}
heroTrack.addEventListener('scroll', () => {
  if (!heroCenterTicking) { requestAnimationFrame(updateHeroCenterSlide); heroCenterTicking = true; }
}, { passive: true });
window.addEventListener('resize', updateHeroCenterSlide);
updateHeroCenterSlide();

/* Auto-play: advance every 5s, loop back to start; pauses briefly after manual interaction */
const HERO_AUTOPLAY_DELAY = 5000;
let heroAutoplayTimer = null;

function startHeroAutoplay() {
  heroAutoplayTimer = setInterval(() => {
    const next = (heroCurrentIndex + 1) % heroSlides.length;
    heroGoToIndex(next);
  }, HERO_AUTOPLAY_DELAY);
}
function restartHeroAutoplay() {
  clearInterval(heroAutoplayTimer);
  startHeroAutoplay();
}
heroTrack.addEventListener('touchstart', restartHeroAutoplay, { passive: true });
startHeroAutoplay();

/* Pizza variant thumbnails — swap main photo + title on click */
const pizzaMainImg = document.getElementById('pizzaMainImg');
const pizzaMainTitle = document.getElementById('pizzaMainTitle');
const pizzaVariants = document.getElementById('pizzaVariants');
if (pizzaVariants) {
  pizzaVariants.addEventListener('click', (e) => {
    const btn = e.target.closest('.variant-thumb');
    if (!btn) return;
    pizzaVariants.querySelectorAll('.variant-thumb').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    pizzaMainImg.src = `assets/images/${btn.dataset.img}`;
    pizzaMainTitle.innerHTML = btn.dataset.name;
    pizzaMainImg.classList.remove('pulse');
    void pizzaMainImg.offsetWidth;
    pizzaMainImg.classList.add('pulse');
  });
}

/* ---------------------------------------------------------------------- */
/* 5. MORPH TRANSFORMATION SCROLL SEQUENCE                                  */
/* ---------------------------------------------------------------------- */
const morphSection = document.getElementById('transform');
const morphBg = document.getElementById('morphBg');
const morphImgs = document.querySelectorAll('.morph-img');
const morphTextWrap = document.getElementById('morphTextWrap');
const morphKicker = document.getElementById('morphKicker');
const morphTitle = document.getElementById('morphTitle');
const morphDesc = document.getElementById('morphDesc');
const morphDots = document.querySelectorAll('.morph-dot');

morphImgs[0].classList.add('active');
morphBg.style.background = MORPH_STAGES[0].bg;

let lastMorphStage = 0;
let morphTicking = false;
let morphSwitchTimeout = null;

function updateMorph() {
  const rect = morphSection.getBoundingClientRect();
  const sectionHeight = morphSection.offsetHeight;
  const scrollable = sectionHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
  const stage = Math.min(3, Math.floor(progress * 4));

  if (stage !== lastMorphStage) {
    lastMorphStage = stage;
    morphImgs.forEach(img => img.classList.toggle('active', Number(img.dataset.stage) === stage));
    morphBg.style.background = MORPH_STAGES[stage].bg;
    morphDots.forEach(dot => dot.classList.toggle('active', Number(dot.dataset.dot) === stage));

    morphTextWrap.classList.add('switching');
    clearTimeout(morphSwitchTimeout);
    morphSwitchTimeout = setTimeout(() => {
      morphKicker.textContent = MORPH_STAGES[stage].kicker;
      morphTitle.textContent = MORPH_STAGES[stage].title;
      morphDesc.textContent = MORPH_STAGES[stage].desc;
      morphTextWrap.classList.remove('switching');
    }, 220);
  }
  morphTicking = false;
}

window.addEventListener('scroll', () => {
  if (!morphTicking) { requestAnimationFrame(updateMorph); morphTicking = true; }
}, { passive: true });

/* ---------------------------------------------------------------------- */
/* 6. HEADER SCROLL STATE                                                   */
/* ---------------------------------------------------------------------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------------------------------------------------------------------- */
/* 7. MOBILE MENU                                                           */
/* ---------------------------------------------------------------------- */
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

/* ---------------------------------------------------------------------- */
/* 8. TESTIMONIAL CAROUSEL                                                  */
/* ---------------------------------------------------------------------- */
const track = document.getElementById('testimonialTrack');
const slides = track.children;
const dotsWrap = document.getElementById('testimonialDots');
let testiIndex = 0;

dotsWrap.innerHTML = Array.from(slides).map((_, i) =>
  `<span class="testimonial-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></span>`
).join('');
const testiDots = dotsWrap.querySelectorAll('.testimonial-dot');

function goToSlide(i) {
  testiIndex = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${testiIndex * 100}%)`;
  testiDots.forEach(dot => dot.classList.toggle('active', Number(dot.dataset.dot) === testiIndex));
}
document.getElementById('testimonialPrev').addEventListener('click', () => goToSlide(testiIndex - 1));
document.getElementById('testimonialNext').addEventListener('click', () => goToSlide(testiIndex + 1));
testiDots.forEach(dot => dot.addEventListener('click', () => goToSlide(Number(dot.dataset.dot))));
setInterval(() => goToSlide(testiIndex + 1), 6000);

/* ---------------------------------------------------------------------- */
/* 9. FOOTER YEAR                                                           */
/* ---------------------------------------------------------------------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------------------- */
/* 10. MISSING IMAGE FALLBACK (until Gemini assets are dropped in)          */
/* ---------------------------------------------------------------------- */
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') e.target.style.opacity = '0';
}, true);
