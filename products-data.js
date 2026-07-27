/* ==========================================================================
   YAAL FOOD — products-data.js
   Source de données unique, partagée par menu.html et les pages catégorie.
   ========================================================================== */

const PRODUCTS = [
  /* ---- Sandwichs Mixte ---- */
  { cat: 'sandwich', img: 'prod-magistral.png', name: 'Magistral', desc: '2 steaks, cheddar, bacon, œuf', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-radical.png', name: 'Radical', desc: '2 steaks, cheddar, galette pomme de terre, œuf', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-phenomene.png', name: 'Phénomène', desc: '2 steaks, cordon bleu, cheddar, œuf', seul: 9.00, menu: 11.00, tag: 'Best-seller' },
  { cat: 'sandwich', img: 'prod-extreme.png', name: 'Extrême', desc: '2 steaks, escalope, boursin, œuf', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-quatro.png', name: 'Quatro', desc: '4 steaks, 4 cheddars', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-escalope-chef.png', name: 'Escalope du Chef', desc: 'Escalope, sauce suisse', seul: 6.80, menu: 8.80 },
  { cat: 'sandwich', img: 'prod-duo.png', name: 'Duo', desc: '2 steaks, kebab, bacon, fromagère', seul: 8.80, menu: 10.80 },
  { cat: 'sandwich', img: 'prod-mixte.png', name: 'Mixte', desc: 'Steak émincé, fromage fondu, oignons caramélisés', seul: 9.00, menu: 11.00 },
  { cat: 'sandwich', img: 'prod-le66.png', name: 'Le 66', desc: 'Steak, cheddar, frites maison, crudités', seul: 9.00, menu: 11.00, tag: 'Signature' },

  /* ---- Kebabs ---- */
  { cat: 'kebab', img: 'prod-kebab-classique.png', name: 'Kebab Classique', desc: 'Crudités, sauce, frites', seul: 7.50, menu: 9.50 },
  { cat: 'kebab', img: 'prod-kebab-traditionnel.png', name: 'Kebab Traditionnel', desc: 'Crudités, sauce, légumes grillés, frites', seul: 8.50, menu: 10.50 },
  { cat: 'kebab', img: 'prod-kebab-berliner.png', name: 'Kebab Berliner', desc: 'Crudités, sauce, légumes grillés, frites', seul: 9.00, menu: 11.00, tag: 'Signature' },
  { cat: 'kebab', img: 'prod-kebab-special.png', name: 'Kebab Spécial', desc: 'Crudités, sauce, légumes grillés, miel', seul: 9.00, menu: 11.00 },

  /* ---- Chicken ---- */
  { cat: 'chicken', img: 'prod-chicken-curry.png', name: 'Chicken Curry', desc: 'Crudités, sauce, cheddar', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-paprika.png', name: 'Chicken Paprika', desc: 'Crudités, sauce, cheddar', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-special.png', name: 'Chicken Spécial', desc: 'Crudités, sauce, frites', seul: 6.80, menu: 8.80 },
  { cat: 'chicken', img: 'prod-chicken-duo.png', name: 'Chicken Duo', desc: '2 viandes au choix, crudités, sauce', seul: 7.50, menu: 9.50 },

  /* ---- Tacos ---- */
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos M', desc: '1 viande au choix, sauce fromagère maison, frites', seul: 9.90, menu: 9.90 },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos L', desc: '2 viandes au choix, sauce fromagère maison, frites', seul: 9.90, menu: 11.90, tag: 'Populaire' },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Tacos XL', desc: '3 viandes au choix, sauce fromagère maison, frites', seul: 11.50, menu: 13.50 },
  { cat: 'tacos', img: 'prod-tacos.png', name: 'Gratinée', desc: '2 viandes, gratinée au fromage, frites', seul: 11.50, menu: 13.50 },

  /* ---- Pizzas : Offre ---- */
  { cat: 'pizza', sub: 'offre', img: 'prod-pizza.png', name: '3 Pizzas Marguerita', desc: 'Tomate, fromage, olive, origan — le lot de 3', single: 16.00, tag: 'Offre', promo: true },

  /* ---- Pizzas Classiques ---- */
  { cat: 'pizza', sub: 'classique', img: 'prod-pizza.png', name: 'Marguerita', desc: 'Tomate, fromage, olive, origan', single: 5.90 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-4fromages.png', name: '4 Fromages', desc: 'Tomate, fromage, chèvre, mozzarella, roquefort, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-4fromages-blanche.png', name: '4 Fromages Blanche', desc: 'Crème fraîche, fromage, chèvre, mozzarella, roquefort, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-chevre-miel.png', name: 'Chèvre Miel', desc: 'Crème fraîche, fromage, chèvre, miel', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'prod-pizza.png', name: 'Végétarienne', desc: 'Tomate, fromage, poivron, oignon, tomate fraîche, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-viande-hachee.png', name: 'Viande Hachée', desc: 'Tomate, fromage, viande hachée, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-poulet.png', name: 'Poulet', desc: 'Tomate, crème fraîche, fromage, poulet, olive', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-merguez.png', name: 'Merguez', desc: 'Tomate, fromage, merguez, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-chorizo.png', name: 'Chorizo', desc: 'Tomate, fromage, chorizo, poivron, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-kebab-variant.png', name: 'Kebab', desc: 'Tomate, fromage, kebab, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-jambon.png', name: 'Jambon / Poulet', desc: 'Tomate, fromage, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-jambon.png', name: 'Jambon Dinde', desc: 'Tomate, fromage, jambon dinde, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'prod-pizza.png', name: 'Napolitaine', desc: 'Tomate, fromage, anchois, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-saumon.png', name: 'Saumon', desc: 'Tomate, fromage, saumon, olive, origan', single: 9.90 },
  { cat: 'pizza', sub: 'classique', img: 'prod-pizza.png', name: 'Thon', desc: 'Tomate, fromage, thon, olive, origan', single: 8.50 },
  { cat: 'pizza', sub: 'classique', img: 'pizza-fruits-de-mer.png', name: 'Fruits de Mer', desc: 'Tomate, fromage, fruits de mer, olive, origan', single: 9.90 },

  /* ---- Pizzas Nouveautés ---- */
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-tartiflette.png', name: 'Tartiflette', desc: 'Crème fraîche, fromage, reblochon, pommes de terre, oignons rouges, veau fumé', single: 9.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-boisee.png', name: 'La Boisée', desc: 'Crème fraîche, fromage, escalope, poulet, poivrons, sauce, gruyère', single: 9.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-chicago.png', name: 'Chicago', desc: 'Crème fraîche, fromage, œuf, viande hachée, jambon dinde, cheddar', single: 9.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-indienne.png', name: "L'Indienne", desc: 'Crème fraîche, fromage, poulet épicé, poivrons, sauce curry', single: 9.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-buffalo.png', name: 'Buffalo', desc: 'Sauce barbecue, fromage, sauce tomate, viande hachée, poivrons, oignons', single: 9.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'pizza-campagnarde.png', name: 'Campagnarde', desc: 'Crème fraîche, jambon, champignons, pommes de terre, boursin', single: 10.90, tag: 'Nouveau' },
  { cat: 'pizza', sub: 'nouveaute', img: 'prod-pizza.png', name: 'Trois Viandes', desc: 'Sauce tomate, fromage, jambon, merguez, viande hachée', single: 11.90, tag: 'Nouveau' },

  /* ---- Burgers & Paninis ---- */
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
  { cat: 'burgers', img: 'prod-panini-jambon.png', name: 'Paninis Chika', desc: 'Panini gratiné, façon Chika', seul: 4.90, menu: 6.90 },
  { cat: 'burgers', img: 'prod-panini-jambon.png', name: 'Paninis Jambon', desc: 'Panini gratiné, jambon', seul: 4.90, menu: 6.90 },
  { cat: 'burgers', img: 'prod-crock-monsieur.png', name: 'Crock Monsieur', desc: 'Jambon, fromage gratiné', single: 2.50 },

  /* ---- Plats & Pâtes ---- */
  { cat: 'plats', img: 'prod-assiette-kebab.png', name: 'Assiette Kebab', desc: 'Crudités, viande kebab, riz, frites', single: 12.00 },
  { cat: 'plats', img: 'prod-assiette-chicken.png', name: 'Assiette Chicken', desc: 'Crudités, chicken au choix, riz, frites', single: 12.00 },
  { cat: 'plats', img: 'prod-assiette-berliner.png', name: 'Assiette Berliner', desc: 'Crudités, viande kebab, légumes grillés, riz, frites', single: 13.50 },
  { cat: 'plats', img: 'prod-assiette-mixte.png', name: 'Assiette Mixte', desc: 'Crudités, 2 viandes, riz, frites', single: 13.50 },
  { cat: 'plats', img: 'prod-pates-forestiere.png', name: 'Pâtes Forestière', desc: 'Pâtes fraîches, sauce forestière', single: 7.00 },
  { cat: 'plats', img: 'prod-pates-bolognaise.png', name: 'Pâtes Bolognaise', desc: 'Pâtes fraîches, sauce bolognaise', single: 7.00 },
  { cat: 'plats', img: 'prod-pates-carbonara.png', name: 'Pâtes Carbonara', desc: 'Pâtes fraîches, sauce carbonara', single: 7.00 },
  { cat: 'plats', img: 'prod-croustry-tenders.png', name: 'Croustry Tenders', desc: 'Tenders croustillants, frites', single: 10.00 },
  { cat: 'plats', img: 'prod-croustry-curry.png', name: 'Croustry Curry', desc: 'Tenders croustillants sauce curry, frites', single: 10.00 },

  /* ---- Desserts ---- */
  { cat: 'desserts', img: null, name: 'Tarte au Daim', desc: 'Part de tarte au daim', single: 3.00 },
  { cat: 'desserts', img: null, name: 'Tiramisu', desc: 'Tiramisu maison', single: 3.00 },
  { cat: 'desserts', img: null, name: 'Häagen-Dazs', desc: 'Pot de glace Häagen-Dazs', single: 3.00 },
  { cat: 'desserts', img: null, name: 'Panini Nutella', desc: 'Panini gratiné au Nutella', single: 3.00 },
];

const CATEGORY_META = {
  sandwich: { label: 'Sandwichs Mixte', slug: 'menu-sandwich-mixte.html', h1: 'Sandwichs Mixte Perpignan', kicker: 'Fait maison' },
  kebab:    { label: 'Kebabs',            slug: 'menu-kebab.html',          h1: 'Kebab Perpignan',           kicker: 'Kebab fait maison' },
  chicken:  { label: 'Chicken',           slug: 'menu-chicken.html',        h1: 'Poulet &amp; Chicken Perpignan', kicker: 'Grillé maison' },
  tacos:    { label: 'Tacos',             slug: 'menu-tacos.html',          h1: 'Tacos Perpignan',           kicker: 'Sauce fromagère maison' },
  pizza:    { label: 'Pizzas',            slug: 'menu-pizza.html',          h1: 'Pizza Perpignan',           kicker: 'Pizzeria' },
  burgers:  { label: 'Burgers &amp; Paninis', slug: 'menu-burgers.html',    h1: 'Burger &amp; Panini Perpignan', kicker: 'Smash &amp; grillé' },
  plats:    { label: 'Plats &amp; Pâtes',     slug: 'menu-plats.html',      h1: 'Plats &amp; Pâtes Perpignan', kicker: 'Assiettes gourmandes' },
  desserts: { label: 'Desserts',          slug: 'menu-desserts.html',       h1: 'Desserts Perpignan',        kicker: 'Pour finir en douceur' },
};

const PIZZA_SUB_LABELS = {
  offre: 'Nos Offres',
  classique: 'Pizzas Classiques',
  nouveaute: 'Nouveautés Pizzas',
};
