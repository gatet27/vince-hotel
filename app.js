const cityImages = {
  paris: [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=82",
  ],
  bali: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=82",
  ],
  rome: [
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=82",
  ],
  santorini: [
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1566293268584-37fdfdea1ed4?auto=format&fit=crop&w=1200&q=82",
  ],
  marrakech: [
    "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=82",
  ],
  newYork: [
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=82",
  ],
  tokyo: [
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=82",
  ],
  lisbon: [
    "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1501927023255-9063be98970c?auto=format&fit=crop&w=1200&q=82",
  ],
  dubai: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1200&q=82",
  ],
  chamonix: [
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=82",
  ],
  barcelona: [
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=1200&q=82",
  ],
  seychelles: [
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=82",
  ],
  generic: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=82",
  ],
};

const hotelSeed = [
  {
    id: "vh-paris-ecrin",
    name: "L'Ecrin Bleu Paris",
    city: "Paris",
    country: "France",
    type: "Hotel",
    price: 248,
    rating: 4.8,
    reviews: 1241,
    guests: 3,
    beds: "1 lit king",
    size: "34 m²",
    label: "Top Club",
    host: "Camille",
    instant: true,
    refundable: true,
    workspace: true,
    map: [38, 38],
    amenities: ["Spa", "Petit-déjeuner", "Parking", "Espace travail", "Room service"],
    description:
      "Adresse elegante pres des grands boulevards, pensee pour les week-ends romantiques comme pour les voyages business. Chambres calmes, conciergerie et rooftop intimiste.",
    images: cityImages.paris,
    rooms: [
      { name: "Signature King", extra: 0, perks: "Petit-déjeuner, annulation flexible, wifi premium" },
      { name: "Suite Atelier", extra: 96, perks: "Salon prive, champagne d'accueil, late checkout" },
    ],
    rules: ["Arrivee autonome apres 15h", "Silence apres 23h", "Piece d'identite demandee"],
  },
  {
    id: "vh-bali-nusa",
    name: "Nusa Azure Retreat",
    city: "Bali",
    country: "Indonésie",
    type: "Resort",
    price: 319,
    rating: 4.9,
    reviews: 2104,
    guests: 4,
    beds: "2 lits queen",
    size: "58 m²",
    label: "Vue mer",
    host: "Ayu",
    instant: true,
    refundable: true,
    workspace: false,
    map: [58, 46],
    amenities: ["Piscine", "Spa", "Vue mer", "Petit-déjeuner", "Navette"],
    description:
      "Resort lumineux au bord de l'eau, avec villas ouvertes, bassin prive, massage sur reservation et excursions locales organisees depuis l'application.",
    images: cityImages.bali,
    rooms: [
      { name: "Villa Jardin", extra: 0, perks: "Bassin semi-prive, petit-dejeuner tropical" },
      { name: "Ocean Pool Villa", extra: 140, perks: "Piscine privee, vue mer, majordome inclus" },
    ],
    rules: ["Check-in 14h", "Transfert aeroport sur demande", "Animaux non acceptes"],
  },
  {
    id: "vh-rome-palazzo",
    name: "Palazzo Vince Roma",
    city: "Rome",
    country: "Italie",
    type: "Hotel",
    price: 211,
    rating: 4.7,
    reviews: 876,
    guests: 2,
    beds: "1 lit queen",
    size: "29 m²",
    label: "Centre-ville",
    host: "Giulia",
    instant: true,
    refundable: false,
    workspace: true,
    map: [32, 62],
    amenities: ["Petit-déjeuner", "Espace travail", "Bar", "Conciergerie"],
    description:
      "Petit palais renove proche des ruelles historiques, ideal pour alterner visites, aperitivo et repos dans une chambre feutree.",
    images: cityImages.rome,
    rooms: [
      { name: "Classic Roma", extra: 0, perks: "Cafe italien, wifi, bagagerie" },
      { name: "Terrasse Privee", extra: 82, perks: "Balcon, aperitivo offert, check-out 13h" },
    ],
    rules: ["Taxe locale incluse dans le recapitulatif", "Non-fumeur", "Arrivee jusqu'a 22h"],
  },
  {
    id: "vh-santorini-caldera",
    name: "Caldera White Suites",
    city: "Santorini",
    country: "Grèce",
    type: "Villa",
    price: 486,
    rating: 4.9,
    reviews: 1548,
    guests: 5,
    beds: "3 lits",
    size: "76 m²",
    label: "Coup de coeur",
    host: "Nikos",
    instant: false,
    refundable: true,
    workspace: false,
    map: [72, 30],
    amenities: ["Piscine", "Vue mer", "Spa", "Cuisine", "Transfert"],
    description:
      "Suites blanches suspendues face a la caldeira, terrasse privee, bassin chaud et service de petit-dejeuner au lever du soleil.",
    images: cityImages.santorini,
    rooms: [
      { name: "Cave Suite", extra: 0, perks: "Terrasse, bassin partage, vue village" },
      { name: "Horizon Villa", extra: 190, perks: "Piscine privee, coucher de soleil, chef sur demande" },
    ],
    rules: ["Escaliers dans la propriete", "Evenements sur validation", "Sejour minimum 2 nuits"],
  },
  {
    id: "vh-marrakech-riad",
    name: "Riad Bleu Majorelle",
    city: "Marrakech",
    country: "Maroc",
    type: "Hotel",
    price: 154,
    rating: 4.6,
    reviews: 963,
    guests: 3,
    beds: "2 lits",
    size: "31 m²",
    label: "Spa",
    host: "Samira",
    instant: true,
    refundable: true,
    workspace: false,
    map: [44, 70],
    amenities: ["Spa", "Petit-déjeuner", "Piscine", "Rooftop", "Navette"],
    description:
      "Riad calme avec patio, hammam et rooftop. Une experience chaleureuse, tres pratique pour explorer la medina sans perdre le confort.",
    images: cityImages.marrakech,
    rooms: [
      { name: "Chambre Patio", extra: 0, perks: "The d'accueil, hammam -20%, petit-dejeuner" },
      { name: "Suite Zellige", extra: 64, perks: "Salon prive, massage 30 min, terrasse" },
    ],
    rules: ["Respect du calme du patio", "Accueil jusqu'a minuit", "Guide local disponible"],
  },
  {
    id: "vh-newyork-skyline",
    name: "Skyline Mercer New York",
    city: "New York",
    country: "États-Unis",
    type: "Appart-hôtel",
    price: 402,
    rating: 4.7,
    reviews: 1882,
    guests: 4,
    beds: "2 lits queen",
    size: "52 m²",
    label: "Business",
    host: "Maya",
    instant: true,
    refundable: false,
    workspace: true,
    map: [51, 24],
    amenities: ["Espace travail", "Cuisine", "Salle de sport", "Parking", "Check-in digital"],
    description:
      "Appart-hôtel urbain avec vue skyline, cuisine equipee, bureau confortable et acces facile aux quartiers d'affaires.",
    images: cityImages.newYork,
    rooms: [
      { name: "Studio City", extra: 0, perks: "Kitchenette, bureau, check-in mobile" },
      { name: "Loft Skyline", extra: 132, perks: "Vue haute, salon, credit cafe inclus" },
    ],
    rules: ["Caution affichee au paiement", "Pieces d'identite", "Fetes interdites"],
  },
  {
    id: "vh-tokyo-neon",
    name: "Neon Garden Tokyo",
    city: "Tokyo",
    country: "Japon",
    type: "Hotel",
    price: 226,
    rating: 4.8,
    reviews: 1342,
    guests: 2,
    beds: "1 lit double",
    size: "27 m²",
    label: "Design",
    host: "Ren",
    instant: true,
    refundable: true,
    workspace: true,
    map: [66, 58],
    amenities: ["Espace travail", "Spa", "Petit-déjeuner", "Bagagerie", "Metro proche"],
    description:
      "Hotel design pres des lignes principales, melange de calme japonais, technologie simple et salons pour travailler tard.",
    images: cityImages.tokyo,
    rooms: [
      { name: "Zen Compact", extra: 0, perks: "Onsen partenaire, cafe, bagagerie" },
      { name: "Corner View", extra: 74, perks: "Vue ville, bureau large, priorite check-in" },
    ],
    rules: ["Tri des dechets", "Non-fumeur", "Quiet floor sur demande"],
  },
  {
    id: "vh-lisbon-atlantico",
    name: "Atlantico House Lisboa",
    city: "Lisbonne",
    country: "Portugal",
    type: "Appart-hôtel",
    price: 172,
    rating: 4.6,
    reviews: 742,
    guests: 4,
    beds: "2 lits",
    size: "48 m²",
    label: "Famille",
    host: "Ines",
    instant: true,
    refundable: true,
    workspace: true,
    map: [26, 42],
    amenities: ["Cuisine", "Animaux acceptés", "Espace travail", "Laverie", "Vue mer"],
    description:
      "Appartement lumineux avec cuisine, balcon et tram a proximite. Pratique pour familles, teletravail et longs week-ends.",
    images: cityImages.lisbon,
    rooms: [
      { name: "T1 Balcon", extra: 0, perks: "Cuisine, laverie, animaux acceptes" },
      { name: "T2 Atlantique", extra: 88, perks: "Vue fleuve, deux chambres, panier local" },
    ],
    rules: ["Animaux sur declaration", "Caution 150 EUR", "Arrivee autonome"],
  },
  {
    id: "vh-dubai-marina",
    name: "Marina Pearl Dubaï",
    city: "Dubaï",
    country: "Émirats arabes unis",
    type: "Hotel",
    price: 356,
    rating: 4.8,
    reviews: 1755,
    guests: 3,
    beds: "1 king + sofa",
    size: "45 m²",
    label: "Piscine",
    host: "Nora",
    instant: true,
    refundable: true,
    workspace: true,
    map: [78, 66],
    amenities: ["Piscine", "Spa", "Parking", "Salle de sport", "Vue mer"],
    description:
      "Tour elegante cote marina, piscine panoramique, spa et service voiturier. Tout le confort premium sans parcours complique.",
    images: cityImages.dubai,
    rooms: [
      { name: "Marina Deluxe", extra: 0, perks: "Piscine, spa -15%, parking" },
      { name: "Pearl Suite", extra: 164, perks: "Salon, vue haute, transfert inclus" },
    ],
    rules: ["Tenue correcte dans les espaces communs", "Non-fumeur", "Check-in 15h"],
  },
  {
    id: "vh-chamonix-alpine",
    name: "Alpine Lodge Chamonix",
    city: "Chamonix",
    country: "France",
    type: "Chalet",
    price: 288,
    rating: 4.7,
    reviews: 529,
    guests: 6,
    beds: "4 lits",
    size: "82 m²",
    label: "Montagne",
    host: "Thomas",
    instant: false,
    refundable: true,
    workspace: false,
    map: [18, 57],
    amenities: ["Parking", "Spa", "Cuisine", "Cheminee", "Animaux acceptés"],
    description:
      "Chalet chaleureux avec cheminee, local ski et spa exterieur. Ideal pour groupes qui veulent du confort sans perdre l'esprit montagne.",
    images: cityImages.chamonix,
    rooms: [
      { name: "Chalet Entier", extra: 0, perks: "Cuisine, local ski, parking" },
      { name: "Chalet + Spa prive", extra: 115, perks: "Spa privatise, bois fourni, raclette kit" },
    ],
    rules: ["Vehicule conseille", "Bois inclus", "Fetes sur demande uniquement"],
  },
  {
    id: "vh-barcelona-ramblas",
    name: "Ramblas Blue Barcelona",
    city: "Barcelone",
    country: "Espagne",
    type: "Hotel",
    price: 198,
    rating: 4.5,
    reviews: 931,
    guests: 2,
    beds: "1 queen",
    size: "28 m²",
    label: "Central",
    host: "Lucia",
    instant: true,
    refundable: true,
    workspace: true,
    map: [41, 22],
    amenities: ["Petit-déjeuner", "Rooftop", "Espace travail", "Bagagerie", "Metro proche"],
    description:
      "Hotel central, pratique pour sortir, visiter et rentrer facilement. Rooftop, chambres propres, check-in rapide.",
    images: cityImages.barcelona,
    rooms: [
      { name: "Urban Queen", extra: 0, perks: "Petit-déjeuner, bagagerie, wifi" },
      { name: "Rooftop Access", extra: 55, perks: "Acces rooftop reserve, boisson offerte" },
    ],
    rules: ["Taxe de sejour", "Carte d'identite", "Non-fumeur"],
  },
  {
    id: "vh-seychelles-lagoon",
    name: "Lagoon Vince Seychelles",
    city: "Seychelles",
    country: "Seychelles",
    type: "Villa",
    price: 620,
    rating: 4.9,
    reviews: 684,
    guests: 6,
    beds: "4 lits",
    size: "118 m²",
    label: "Luxe",
    host: "Elina",
    instant: false,
    refundable: true,
    workspace: false,
    map: [83, 40],
    amenities: ["Vue mer", "Piscine", "Cuisine", "Spa", "Transfert"],
    description:
      "Villa ouverte sur le lagon, grande terrasse, chef prive sur option et service de conciergerie pour organiser sorties bateau.",
    images: cityImages.seychelles,
    rooms: [
      { name: "Lagoon Villa", extra: 0, perks: "Piscine, cuisine, plage a pied" },
      { name: "Lagoon Villa Plus", extra: 230, perks: "Chef prive, transfert, massage duo" },
    ],
    rules: ["Sejour minimum 3 nuits", "Depot affiche", "Respect du voisinage"],
  },
];

const storageKeys = {
  favorites: "vinceHotelFavorites",
  compare: "vinceHotelCompare",
  bookings: "vinceHotelBookings",
  user: "vinceHotelUser",
  customHotels: "vinceHotelCustomHotels",
};

const state = {
  query: "",
  activeType: "all",
  maxPrice: 420,
  minRating: 4.5,
  favorites: new Set(readJSON(storageKeys.favorites, [])),
  compare: new Set(readJSON(storageKeys.compare, [])),
  bookings: readJSON(storageKeys.bookings, []),
  user: readJSON(storageKeys.user, null),
  customHotels: readJSON(storageKeys.customHotels, []),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function allHotels() {
  return [...state.customHotels, ...hotelSeed];
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function nights() {
  const checkIn = new Date($("#checkInInput").value);
  const checkOut = new Date($("#checkOutInput").value);
  const diff = Math.round((checkOut - checkIn) / 86400000);
  return Math.max(diff, 1);
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, " ");
}

function imagesForDestination(city, country = "") {
  const destination = normalize(`${city} ${country}`);
  if (destination.includes("paris")) return cityImages.paris;
  if (destination.includes("bali")) return cityImages.bali;
  if (destination.includes("rome") || destination.includes("roma")) return cityImages.rome;
  if (destination.includes("santorini")) return cityImages.santorini;
  if (destination.includes("marrakech") || destination.includes("maroc")) return cityImages.marrakech;
  if (destination.includes("new york")) return cityImages.newYork;
  if (destination.includes("tokyo")) return cityImages.tokyo;
  if (destination.includes("lisbonne") || destination.includes("lisboa")) return cityImages.lisbon;
  if (destination.includes("dubai")) return cityImages.dubai;
  if (destination.includes("chamonix") || destination.includes("alpes")) return cityImages.chamonix;
  if (destination.includes("barcelone") || destination.includes("barcelona")) return cityImages.barcelona;
  if (destination.includes("seychelles")) return cityImages.seychelles;
  return cityImages.generic;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2.2,
      },
    });
  }
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove("is-visible"), 2800);
}

function initDates() {
  const checkIn = $("#checkInInput");
  const checkOut = $("#checkOutInput");
  const today = addDays(1);
  checkIn.min = today;
  checkOut.min = today;
  checkIn.value = addDays(21);
  checkOut.value = addDays(25);
}

function bindEvents() {
  $("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = $("#destinationInput").value.trim();
    renderAll();
    toast("Recherche mise a jour.");
  });

  $("#destinationInput").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderAll();
  });

  $("#budgetInput").addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value);
    $("#budgetValue").textContent = state.maxPrice;
    renderAll();
  });

  $("#ratingInput").addEventListener("change", (event) => {
    state.minRating = Number(event.target.value);
    renderAll();
  });

  $("#sortInput").addEventListener("change", renderAll);

  $$('input[name="propertyType"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.activeType = input.value;
      syncQuickPills();
      renderAll();
    });
  });

  $$('input[name="amenity"], #instantInput, #refundableInput, #workspaceInput').forEach((input) => {
    input.addEventListener("change", renderAll);
  });

  document.addEventListener("click", handleClick);
  document.addEventListener("submit", handleSubmit);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { action, id, mode, type, amenity } = button.dataset;

  if (action === "openAuth") openAuth(mode || "login");
  if (action === "openHost") openHost();
  if (action === "openTrips") openTrips();
  if (action === "openDetails") openDetails(id);
  if (action === "openCheckout") openCheckout(id, Number(button.dataset.room || 0));
  if (action === "toggleFavorite") toggleFavorite(id);
  if (action === "toggleCompare") toggleCompare(id);
  if (action === "openCompare") openCompare();
  if (action === "resetFilters") resetFilters();
  if (action === "closeModal") closeModal();
  if (action === "refreshMap") {
    renderMap(getFilteredHotels());
    toast("Carte actualisee.");
  }
  if (action === "quickType") applyQuickType(type);
  if (action === "quickAmenity") applyQuickAmenity(amenity);
  if (action === "openConcierge") openConcierge();
}

function handleSubmit(event) {
  if (event.target.id === "authForm") {
    event.preventDefault();
    submitAuth(event.target);
  }

  if (event.target.id === "checkoutForm") {
    event.preventDefault();
    submitCheckout(event.target);
  }

  if (event.target.id === "hostForm") {
    event.preventDefault();
    submitHost(event.target);
  }

  if (event.target.id === "conciergeForm") {
    event.preventDefault();
    submitConcierge(event.target);
  }
}

function selectedAmenities() {
  return $$('input[name="amenity"]:checked').map((input) => input.value);
}

function getFilteredHotels() {
  const query = normalize(state.query);
  const amenities = selectedAmenities();
  const instant = $("#instantInput").checked;
  const refundable = $("#refundableInput").checked;
  const workspace = $("#workspaceInput").checked;
  const sort = $("#sortInput").value;

  let results = allHotels().filter((hotel) => {
    const haystack = normalize(`${hotel.name} ${hotel.city} ${hotel.country} ${hotel.type} ${hotel.amenities.join(" ")}`);
    const matchesQuery = !query || haystack.includes(query);
    const matchesType = state.activeType === "all" || normalize(hotel.type) === normalize(state.activeType);
    const matchesBudget = hotel.price <= state.maxPrice;
    const matchesRating = hotel.rating >= state.minRating;
    const matchesAmenities = amenities.every((item) => normalize(hotel.amenities).includes(normalize(item)));
    const matchesInstant = !instant || hotel.instant;
    const matchesRefund = !refundable || hotel.refundable;
    const matchesWorkspace = !workspace || hotel.workspace;

    return (
      matchesQuery &&
      matchesType &&
      matchesBudget &&
      matchesRating &&
      matchesAmenities &&
      matchesInstant &&
      matchesRefund &&
      matchesWorkspace
    );
  });

  if (sort === "priceAsc") results = results.sort((a, b) => a.price - b.price);
  if (sort === "ratingDesc") results = results.sort((a, b) => b.rating - a.rating);
  if (sort === "popular") results = results.sort((a, b) => b.reviews - a.reviews);
  if (sort === "recommended") {
    results = results.sort((a, b) => b.rating * 100 + b.reviews / 40 - (a.rating * 100 + a.reviews / 40));
  }

  return results;
}

function renderAll() {
  const hotels = getFilteredHotels();
  $("#resultCount").textContent = hotels.length;
  $("#compareCount").textContent = state.compare.size;
  syncQuickPills();
  renderActiveFilters();
  renderHotels(hotels);
  renderMap(hotels);
  updateHeader();
  refreshIcons();
}

function renderActiveFilters() {
  const chips = [];
  if (state.query) chips.push(`Recherche: ${escapeHTML(state.query)}`);
  if (state.activeType !== "all") chips.push(escapeHTML(state.activeType));
  chips.push(`${state.maxPrice} EUR max`);
  if (state.minRating > 0) chips.push(`${state.minRating.toString().replace(".", ",")}+`);
  selectedAmenities().forEach((amenity) => chips.push(escapeHTML(amenity)));
  if ($("#instantInput").checked) chips.push("Instantane");
  if ($("#refundableInput").checked) chips.push("Flexible");
  if ($("#workspaceInput").checked) chips.push("Travail");

  $("#activeFilters").innerHTML = chips.map((chip) => `<span class="filter-chip">${chip}</span>`).join("");
}

function renderHotels(hotels) {
  if (!hotels.length) {
    $("#hotelGrid").innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Aucun sejour ne correspond encore.</h3>
          <p>Elargis le budget, retire un service ou cherche une autre destination pour relancer Vince Hotel.</p>
        </div>
      </div>
    `;
    return;
  }

  $("#hotelGrid").innerHTML = hotels.map(hotelCard).join("");
}

function hotelCard(hotel) {
  const isFavorite = state.favorites.has(hotel.id);
  const isCompared = state.compare.has(hotel.id);
  const amenities = hotel.amenities.slice(0, 4).map((item) => `<span>${escapeHTML(item)}</span>`).join("");

  return `
    <article class="hotel-card">
      <div class="hotel-media">
        <img src="${hotel.images[0]}" alt="${escapeHTML(hotel.name)} a ${escapeHTML(hotel.city)}" loading="lazy" />
        <div class="hotel-badges">
          <span class="badge">${escapeHTML(hotel.label)}</span>
          <button class="favorite-button ${isFavorite ? "is-active" : ""}" type="button" data-action="toggleFavorite" data-id="${hotel.id}" aria-label="Ajouter aux favoris">
            <i data-lucide="heart"></i>
          </button>
        </div>
      </div>
      <div class="hotel-body">
        <div class="hotel-title-row">
          <div>
            <h3>${escapeHTML(hotel.name)}</h3>
            <p>${escapeHTML(hotel.city)}, ${escapeHTML(hotel.country)} · ${escapeHTML(hotel.type)}</p>
          </div>
          <span class="rating"><i data-lucide="star"></i>${hotel.rating.toFixed(1)}</span>
        </div>
        <div class="amenities">${amenities}</div>
        <div class="hotel-meta">
          <span>${escapeHTML(hotel.beds)}</span>
          <span>${hotel.guests} voyageurs</span>
          <span>${escapeHTML(hotel.size)}</span>
          <span>${hotel.refundable ? "Annulation flexible" : "Non remboursable"}</span>
        </div>
        <div class="hotel-footer">
          <div class="price">
            <strong>${money(hotel.price)}</strong>
            <span>/ nuit</span>
          </div>
          <div class="card-actions">
            <button class="ghost-button" type="button" data-action="toggleCompare" data-id="${hotel.id}">
              <i data-lucide="${isCompared ? "check" : "plus"}"></i>
              ${isCompared ? "Ajoute" : "Comparer"}
            </button>
            <button class="primary-button" type="button" data-action="openDetails" data-id="${hotel.id}">
              Voir
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderMap(hotels) {
  const pins = hotels.slice(0, 8).map((hotel) => {
    const [left, top] = hotel.map || [Math.random() * 72 + 10, Math.random() * 62 + 12];
    return `<button class="price-pin" style="left:${left}%;top:${top}%;" type="button" data-action="openDetails" data-id="${hotel.id}">${money(hotel.price)}</button>`;
  });

  $("#mapPins").innerHTML = pins.join("");
}

function updateHeader() {
  const loginButton = document.querySelector('[data-action="openAuth"][data-mode="login"]');
  const registerButton = document.querySelector('[data-action="openAuth"][data-mode="register"]');

  if (!loginButton || !registerButton) return;

  if (state.user) {
    loginButton.textContent = `Bonjour ${state.user.name.split(" ")[0]}`;
    registerButton.textContent = "Compte";
    registerButton.dataset.mode = "login";
  } else {
    loginButton.textContent = "Connexion";
    registerButton.textContent = "Créer un compte";
    registerButton.dataset.mode = "register";
  }
}

function resetFilters() {
  state.query = "";
  state.activeType = "all";
  state.maxPrice = 420;
  state.minRating = 4.5;
  $("#destinationInput").value = "";
  $("#budgetInput").value = 420;
  $("#budgetValue").textContent = "420";
  $("#ratingInput").value = "4.5";
  $("#sortInput").value = "recommended";
  $$('input[name="propertyType"]').forEach((input) => {
    input.checked = input.value === "all";
  });
  $$('input[name="amenity"], #instantInput, #refundableInput, #workspaceInput').forEach((input) => {
    input.checked = false;
  });
  syncQuickPills();
  renderAll();
  toast("Filtres remis a zero.");
}

function applyQuickType(type) {
  state.activeType = type || "all";
  const radio = $$('input[name="propertyType"]').find((input) => input.value === state.activeType);
  if (radio) radio.checked = true;
  syncQuickPills();
  renderAll();
}

function applyQuickAmenity(amenity) {
  const checkbox = $$('input[name="amenity"]').find((input) => input.value === amenity);
  if (checkbox) checkbox.checked = !checkbox.checked;
  renderAll();
}

function syncQuickPills() {
  $$(".quick-picks .pill").forEach((pill) => {
    const isType = pill.dataset.action === "quickType";
    const isAmenity = pill.dataset.action === "quickAmenity";
    const amenityChecked = isAmenity && selectedAmenities().includes(pill.dataset.amenity);
    pill.classList.toggle("is-active", isType && pill.dataset.type === state.activeType);
    if (isAmenity) pill.classList.toggle("is-active", amenityChecked);
  });
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    toast("Retire des favoris.");
  } else {
    state.favorites.add(id);
    toast("Ajoute aux favoris.");
  }
  saveJSON(storageKeys.favorites, [...state.favorites]);
  renderAll();
}

function toggleCompare(id) {
  if (state.compare.has(id)) {
    state.compare.delete(id);
  } else if (state.compare.size >= 3) {
    toast("Comparateur limite a 3 hotels.");
    return;
  } else {
    state.compare.add(id);
  }
  saveJSON(storageKeys.compare, [...state.compare]);
  renderAll();
}

function findHotel(id) {
  return allHotels().find((hotel) => hotel.id === id);
}

function openModal(markup) {
  const layer = $("#modalLayer");
  layer.innerHTML = markup;
  layer.classList.add("is-open");
  layer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function closeModal() {
  const layer = $("#modalLayer");
  layer.classList.remove("is-open");
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = "";
  document.body.style.overflow = "";
}

function openDetails(id) {
  const hotel = findHotel(id);
  if (!hotel) return;
  const n = nights();
  const subtotal = hotel.price * n;
  const taxes = Math.round(subtotal * 0.12);
  const service = 29;
  const total = subtotal + taxes + service;

  openModal(`
    <section class="modal large" role="dialog" aria-modal="true" aria-label="${escapeHTML(hotel.name)}">
      <header class="modal-header">
        <div>
          <p class="eyebrow">${escapeHTML(hotel.city)} · ${escapeHTML(hotel.type)}</p>
          <h2>${escapeHTML(hotel.name)}</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content detail-layout">
        <div>
          <div class="gallery-grid">
            <img src="${hotel.images[0]}" alt="${escapeHTML(hotel.name)} photo principale" />
            <div class="gallery-side">
              <img src="${hotel.images[1]}" alt="${escapeHTML(hotel.name)} chambre" />
              <img src="${hotel.images[2]}" alt="${escapeHTML(hotel.name)} ambiance" />
            </div>
          </div>

          <section class="detail-section">
            <h3>Experience</h3>
            <p class="detail-muted">${escapeHTML(hotel.description)}</p>
          </section>

          <section class="detail-section">
            <h3>Ce qui est inclus</h3>
            <div class="amenities">${hotel.amenities.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div>
          </section>

          <section class="detail-section">
            <h3>Chambres disponibles</h3>
            <div class="room-grid">
              ${hotel.rooms
                .map(
                  (room, index) => `
                    <div class="room-card">
                      <div>
                        <h4>${escapeHTML(room.name)}</h4>
                        <p class="room-line">${escapeHTML(room.perks)}</p>
                      </div>
                      <button class="secondary-button" type="button" data-action="openCheckout" data-id="${hotel.id}" data-room="${index}">
                        ${money(hotel.price + room.extra)} / nuit
                      </button>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="detail-section">
            <h3>Regles et avis</h3>
            <p class="detail-muted">${hotel.rules.map(escapeHTML).join(" · ")} · ${hotel.reviews.toLocaleString("fr-FR")} avis verifies.</p>
          </section>
        </div>

        <aside class="booking-box">
          <div class="price">
            <strong>${money(hotel.price)}</strong>
            <span>par nuit</span>
          </div>
          <div class="cost-line"><span>${n} nuit(s)</span><strong>${money(subtotal)}</strong></div>
          <div class="cost-line"><span>Taxes et frais</span><strong>${money(taxes)}</strong></div>
          <div class="cost-line"><span>Service Vince</span><strong>${money(service)}</strong></div>
          <div class="cost-line total"><span>Total</span><strong>${money(total)}</strong></div>
          <button class="primary-button full" type="button" data-action="openCheckout" data-id="${hotel.id}" data-room="0">
            <i data-lucide="credit-card"></i>
            Reserver maintenant
          </button>
          <button class="ghost-button full" type="button" data-action="toggleFavorite" data-id="${hotel.id}">
            <i data-lucide="heart"></i>
            Ajouter aux favoris
          </button>
          <p class="detail-muted">Paiement sécurisé, confirmation rapide et reçu disponible dans ton espace voyage.</p>
        </aside>
      </div>
    </section>
  `);
}

function openCheckout(id, roomIndex = 0) {
  const hotel = findHotel(id);
  if (!hotel) return;
  const room = hotel.rooms[roomIndex] || hotel.rooms[0];
  const nightly = hotel.price + room.extra;
  const n = nights();
  const subtotal = nightly * n;
  const taxes = Math.round(subtotal * 0.12);
  const service = 29;
  const total = subtotal + taxes + service;
  const userName = state.user?.name || "";
  const userEmail = state.user?.email || "";

  openModal(`
    <section class="modal large" role="dialog" aria-modal="true" aria-label="Paiement sécurisé">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Paiement securise</p>
          <h2>Finaliser ${escapeHTML(hotel.name)}</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content payment-layout">
        <form class="payment-grid" id="checkoutForm" data-hotel="${hotel.id}" data-room="${roomIndex}">
          <div class="form-grid">
            <label class="form-field">
              <span>Nom complet</span>
              <input name="name" value="${escapeHTML(userName)}" required placeholder="Vince Hotel" />
            </label>
            <label class="form-field">
              <span>Email</span>
              <input name="email" type="email" value="${escapeHTML(userEmail)}" required placeholder="vince@email.com" />
            </label>
            <label class="form-field full-row">
              <span>Numero de carte</span>
              <input name="card" inputmode="numeric" required placeholder="4242 4242 4242 4242" />
            </label>
            <label class="form-field">
              <span>Expiration</span>
              <input name="expiry" required placeholder="12/30" />
            </label>
            <label class="form-field">
              <span>CVC</span>
              <input name="cvc" inputmode="numeric" required placeholder="123" />
            </label>
            <label class="form-field">
              <span>Code promo</span>
              <input name="promo" placeholder="VINCE10" />
            </label>
            <label class="form-field">
              <span>Assurance</span>
              <select name="insurance">
                <option value="0">Sans assurance</option>
                <option value="19">Flex +19 EUR</option>
                <option value="39">Premium +39 EUR</option>
              </select>
            </label>
          </div>

          <label class="checkbox-line">
            <input name="terms" type="checkbox" required />
            <span>J'accepte les conditions de reservation et la politique d'annulation de Vince Hotel.</span>
          </label>

          <button class="primary-button full" type="submit">
            <i data-lucide="lock"></i>
            Payer ${money(total)}
          </button>
        </form>

        <aside class="summary-box">
          <p class="eyebrow">Recapitulatif</p>
          <h3>${escapeHTML(room.name)}</h3>
          <p class="detail-muted">${escapeHTML(hotel.city)}, ${escapeHTML(hotel.country)} · ${n} nuit(s) · ${$("#guestsInput").value} voyageur(s)</p>
          <div class="summary-line"><span>${money(nightly)} x ${n}</span><strong>${money(subtotal)}</strong></div>
          <div class="summary-line"><span>Taxes</span><strong>${money(taxes)}</strong></div>
          <div class="summary-line"><span>Frais Vince</span><strong>${money(service)}</strong></div>
          <div class="summary-line total"><span>Total</span><strong>${money(total)}</strong></div>
          <div class="secure-box">
            <span class="status-dot"><i data-lucide="shield-check"></i></span>
            <strong>Protection voyageur</strong>
            <span>Confirmation instantanee, reçu, message hôte et check-in digital.</span>
          </div>
        </aside>
      </div>
    </section>
  `);
}

function submitCheckout(form) {
  const formData = new FormData(form);
  const card = String(formData.get("card") || "").replace(/\D/g, "");
  const cvc = String(formData.get("cvc") || "").replace(/\D/g, "");

  if (card.length < 12 || cvc.length < 3) {
    toast("Verifie la carte et le CVC.");
    return;
  }

  const hotel = findHotel(form.dataset.hotel);
  const room = hotel.rooms[Number(form.dataset.room || 0)] || hotel.rooms[0];
  const n = nights();
  const nightly = hotel.price + room.extra;
  const subtotal = nightly * n;
  const taxes = Math.round(subtotal * 0.12);
  const service = 29;
  const insurance = Number(formData.get("insurance") || 0);
  const promo = normalize(formData.get("promo") || "");
  const discount = promo === "vince10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + taxes + service + insurance - discount;
  const code = `VH-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  const booking = {
    code,
    hotelId: hotel.id,
    hotelName: hotel.name,
    city: hotel.city,
    roomName: room.name,
    checkIn: $("#checkInInput").value,
    checkOut: $("#checkOutInput").value,
    guests: $("#guestsInput").value,
    total,
    createdAt: new Date().toISOString(),
  };

  state.bookings.unshift(booking);
  state.user = {
    name: String(formData.get("name") || "Vince"),
    email: String(formData.get("email") || ""),
  };

  saveJSON(storageKeys.bookings, state.bookings);
  saveJSON(storageKeys.user, state.user);

  openModal(`
    <section class="modal" role="dialog" aria-modal="true" aria-label="Reservation confirmee">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Confirmation Vince Hotel</p>
          <h2>Reservation confirmee</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content">
        <div class="success-state">
          <span class="status-dot"><i data-lucide="check"></i></span>
          <h3>${escapeHTML(hotel.name)}</h3>
          <p class="detail-muted">${escapeHTML(room.name)} · ${booking.checkIn} au ${booking.checkOut} · Total ${money(total)}</p>
          <span class="success-code">${code}</span>
          <button class="primary-button" type="button" data-action="openTrips">Voir mes voyages</button>
        </div>
      </div>
    </section>
  `);
  renderAll();
}

function openAuth(mode = "login") {
  const isRegister = mode === "register";
  openModal(`
    <section class="modal" role="dialog" aria-modal="true" aria-label="${isRegister ? "Creation de compte" : "Connexion"}">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Compte Vince</p>
          <h2>${isRegister ? "Créer ton compte" : "Connexion"}</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content">
        <div class="auth-switch">
          <button class="${isRegister ? "ghost-button" : "primary-button"}" type="button" data-action="openAuth" data-mode="login">Connexion</button>
          <button class="${isRegister ? "primary-button" : "ghost-button"}" type="button" data-action="openAuth" data-mode="register">Créer un compte</button>
        </div>
        <form class="auth-grid" id="authForm" data-mode="${mode}">
          <div class="form-grid">
            ${
              isRegister
                ? `<label class="form-field full-row"><span>Nom</span><input name="name" required placeholder="Vince Hotel" /></label>`
                : ""
            }
            <label class="form-field full-row">
              <span>Email</span>
              <input name="email" type="email" required placeholder="vince@email.com" />
            </label>
            <label class="form-field full-row">
              <span>Mot de passe</span>
              <input name="password" type="password" required placeholder="8 caracteres minimum" />
            </label>
          </div>
          <button class="primary-button full" type="submit">
            <i data-lucide="${isRegister ? "user-plus" : "log-in"}"></i>
            ${isRegister ? "Créer le compte" : "Se connecter"}
          </button>
          <p class="detail-muted">Ton compte permet de retrouver tes voyages, favoris et informations de reservation.</p>
        </form>
      </div>
    </section>
  `);
}

function submitAuth(form) {
  const data = new FormData(form);
  const email = String(data.get("email") || "");
  const password = String(data.get("password") || "");
  if (password.length < 6) {
    toast("Mot de passe trop court.");
    return;
  }

  const fallbackName = email.split("@")[0] || "Vince";
  state.user = {
    name: String(data.get("name") || fallbackName).trim(),
    email,
  };
  saveJSON(storageKeys.user, state.user);
  closeModal();
  renderAll();
  toast("Compte Vince Hotel active.");
}

function openHost() {
  openModal(`
    <section class="modal large" role="dialog" aria-modal="true" aria-label="Devenir hote">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Vince Host</p>
          <h2>Publier un hotel ou logement</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content payment-layout">
        <form class="host-grid" id="hostForm">
          <div class="form-grid">
            <label class="form-field">
              <span>Nom de l'annonce</span>
              <input name="name" required placeholder="Villa Vince Riviera" />
            </label>
            <label class="form-field">
              <span>Ville</span>
              <input name="city" required placeholder="Nice" />
            </label>
            <label class="form-field">
              <span>Pays</span>
              <input name="country" required placeholder="France" />
            </label>
            <label class="form-field">
              <span>Type</span>
              <select name="type">
                <option>Hotel</option>
                <option>Villa</option>
                <option>Resort</option>
                <option>Appart-hôtel</option>
                <option>Chalet</option>
              </select>
            </label>
            <label class="form-field">
              <span>Prix par nuit</span>
              <input name="price" type="number" min="60" max="2000" required placeholder="240" />
            </label>
            <label class="form-field">
              <span>Voyageurs max</span>
              <input name="guests" type="number" min="1" max="20" required placeholder="4" />
            </label>
            <label class="form-field full-row">
              <span>Description</span>
              <textarea name="description" required placeholder="Decris l'ambiance, les services, les points forts..."></textarea>
            </label>
          </div>
          <div class="filter-group">
            <span class="filter-title">Services de l'annonce</span>
            <label><input type="checkbox" name="amenities" value="Piscine" checked /> Piscine</label>
            <label><input type="checkbox" name="amenities" value="Spa" /> Spa</label>
            <label><input type="checkbox" name="amenities" value="Parking" checked /> Parking</label>
            <label><input type="checkbox" name="amenities" value="Petit-déjeuner" /> Petit-déjeuner</label>
            <label><input type="checkbox" name="amenities" value="Espace travail" checked /> Espace travail</label>
            <label><input type="checkbox" name="amenities" value="Vue mer" /> Vue mer</label>
          </div>
          <button class="primary-button full" type="submit">
            <i data-lucide="home"></i>
            Publier l'annonce
          </button>
        </form>

        <aside class="host-preview">
          <p class="eyebrow">Estimation hote</p>
          <strong>+1 840 EUR</strong>
          <span>revenu mensuel estimé selon disponibilité, prix moyen et saisonnalité.</span>
          <ul class="feature-list">
            <li><i data-lucide="calendar-clock"></i> Calendrier, disponibilites et regles</li>
            <li><i data-lucide="receipt"></i> Reçus, taxes et frais visibles</li>
            <li><i data-lucide="messages-square"></i> Messagerie voyageur intégrée</li>
            <li><i data-lucide="badge-check"></i> Badge hote verifie</li>
          </ul>
        </aside>
      </div>
    </section>
  `);
}

function submitHost(form) {
  const data = new FormData(form);
  const amenities = data.getAll("amenities");
  const price = Number(data.get("price") || 180);
  const guests = Number(data.get("guests") || 2);
  const city = String(data.get("city") || "Paris");
  const country = String(data.get("country") || "France");

  const listing = {
    id: `host-${Date.now()}`,
    name: String(data.get("name") || "Nouvelle adresse Vince"),
    city,
    country,
    type: String(data.get("type") || "Hotel"),
    price,
    rating: 4.8,
    reviews: 0,
    guests,
    beds: guests > 2 ? "Plusieurs lits" : "1 lit queen",
    size: guests > 3 ? "64 m²" : "32 m²",
    label: "Nouveau",
    host: state.user?.name || "Hote Vince",
    instant: true,
    refundable: true,
    workspace: amenities.includes("Espace travail"),
    map: [Math.round(Math.random() * 70 + 12), Math.round(Math.random() * 58 + 18)],
    amenities: amenities.length ? amenities : ["Parking", "Petit-déjeuner"],
    description: String(data.get("description") || "Adresse ajoutee depuis l'espace hote Vince Hotel."),
    images: imagesForDestination(city, country),
    rooms: [
      { name: "Offre Standard", extra: 0, perks: "Annulation flexible, messagerie hote, reçu inclus" },
      { name: "Offre Premium", extra: 58, perks: "Check-in prioritaire, accueil personnalise, late checkout" },
    ],
    rules: ["Annonce verifiee", "Calendrier ouvert", "Reservation instantanee"],
  };

  state.customHotels.unshift(listing);
  saveJSON(storageKeys.customHotels, state.customHotels);
  closeModal();
  resetFilters();
  toast("Annonce hote publiee dans le catalogue.");
}

function openTrips() {
  const favoriteHotels = allHotels().filter((hotel) => state.favorites.has(hotel.id));
  const bookingMarkup = state.bookings.length
    ? state.bookings
        .map(
          (booking) => `
            <div class="trip-card">
              <h4>${escapeHTML(booking.hotelName)}</h4>
              <p class="detail-muted">${escapeHTML(booking.city)} · ${escapeHTML(booking.roomName)} · ${booking.checkIn} au ${booking.checkOut}</p>
              <div class="summary-line total"><span>${escapeHTML(booking.code)}</span><strong>${money(booking.total)}</strong></div>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state"><div><h3>Aucun voyage reserve.</h3><p>Reserve un sejour pour voir le reçu, le code et les details ici.</p></div></div>`;

  const favoritesMarkup = favoriteHotels.length
    ? favoriteHotels
        .map(
          (hotel) => `
            <div class="trip-card">
              <h4>${escapeHTML(hotel.name)}</h4>
              <p class="detail-muted">${escapeHTML(hotel.city)} · ${money(hotel.price)} / nuit · ${hotel.rating.toFixed(1)}/5</p>
              <button class="secondary-button" type="button" data-action="openDetails" data-id="${hotel.id}">Voir</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state"><div><h3>Pas encore de favoris.</h3><p>Ajoute des hotels avec le bouton coeur pour construire ta shortlist.</p></div></div>`;

  openModal(`
    <section class="modal large" role="dialog" aria-modal="true" aria-label="Mes voyages">
      <header class="modal-header">
        <div>
          <p class="eyebrow">${state.user ? escapeHTML(state.user.email) : "Invite"}</p>
          <h2>Mes voyages Vince Hotel</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content trip-grid">
        <section>
          <h3>Reservations</h3>
          <div class="trip-grid">${bookingMarkup}</div>
        </section>
        <section>
          <h3>Favoris</h3>
          <div class="trip-grid">${favoritesMarkup}</div>
        </section>
      </div>
    </section>
  `);
}

function openCompare() {
  const hotels = [...state.compare].map(findHotel).filter(Boolean);
  const markup = hotels.length
    ? hotels
        .map(
          (hotel) => `
            <div class="compare-card">
              <h4>${escapeHTML(hotel.name)}</h4>
              <p class="detail-muted">${escapeHTML(hotel.city)} · ${escapeHTML(hotel.type)}</p>
              <div class="summary-line"><span>Prix</span><strong>${money(hotel.price)}</strong></div>
              <div class="summary-line"><span>Note</span><strong>${hotel.rating.toFixed(1)}</strong></div>
              <div class="summary-line"><span>Services</span><strong>${hotel.amenities.slice(0, 2).map(escapeHTML).join(", ")}</strong></div>
              <button class="primary-button full" type="button" data-action="openDetails" data-id="${hotel.id}">Choisir</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state"><div><h3>Comparateur vide.</h3><p>Ajoute jusqu'a 3 hotels depuis les cartes pour comparer prix, services et notes.</p></div></div>`;

  openModal(`
    <section class="modal" role="dialog" aria-modal="true" aria-label="Comparateur">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Shortlist</p>
          <h2>Comparer les hotels</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content compare-grid">${markup}</div>
    </section>
  `);
}

function openConcierge() {
  openModal(`
    <section class="modal" role="dialog" aria-modal="true" aria-label="Conciergerie">
      <header class="modal-header">
        <div>
          <p class="eyebrow">Conciergerie</p>
          <h2>Assistant Vince Hotel</h2>
        </div>
        <button class="icon-button" type="button" data-action="closeModal" aria-label="Fermer"><i data-lucide="x"></i></button>
      </header>
      <div class="modal-content concierge-log" id="conciergeLog">
        <div class="message-row">
          <strong>Vince Hotel</strong>
          <p>Je peux proposer une destination, preparer un itineraire, expliquer les frais ou rediger un message a l'hote.</p>
        </div>
        <div class="message-row">
          <strong>Suggestion</strong>
          <p>Essaie: "hotel avec piscine a Bali pour 4 voyageurs" ou "week-end a Paris avec spa".</p>
        </div>
      </div>
      <div class="modal-content">
        <form class="form-grid" id="conciergeForm">
          <label class="form-field full-row">
            <span>Message</span>
            <input name="message" required placeholder="Demande a la conciergerie..." />
          </label>
          <button class="primary-button full-row" type="submit">
            <i data-lucide="send"></i>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  `);
}

function submitConcierge(form) {
  const data = new FormData(form);
  const message = String(data.get("message") || "").trim();
  if (!message) return;

  const log = $("#conciergeLog");
  const suggestion = getFilteredHotels()[0] || allHotels()[0];
  log.insertAdjacentHTML(
    "beforeend",
    `
      <div class="message-row">
        <strong>Vous</strong>
        <p>${escapeHTML(message)}</p>
      </div>
      <div class="message-row">
        <strong>Vince Hotel</strong>
        <p>Je partirais sur ${escapeHTML(suggestion.name)} a ${escapeHTML(suggestion.city)}: ${money(suggestion.price)} / nuit, note ${suggestion.rating.toFixed(1)}, avec ${suggestion.amenities
          .slice(0, 3)
          .map(escapeHTML)
          .join(", ")}. Tu peux l'ouvrir depuis le catalogue pour reserver.</p>
      </div>
    `,
  );
  form.reset();
  log.scrollTop = log.scrollHeight;
}

function boot() {
  initDates();
  $("#budgetValue").textContent = state.maxPrice;
  bindEvents();
  renderAll();
}

boot();
