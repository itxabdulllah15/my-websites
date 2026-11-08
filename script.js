/* =========================================================
   AGED | ايجد — EASY-EDIT CONFIG
   Change anything in this block; the site updates itself.
   ========================================================= */
const CONFIG = {
  mapsUrl: "https://maps.app.goo.gl/Bp3s7iJshg5Pm5Kr5",
  mapEmbed: "https://www.google.com/maps?q=Aged+Specialty+Coffee+22nd+St+Madinat+Al+Umal+Al+Khobar+34441&output=embed",
  orderPickupUrl: "#",
  orderDeliveryUrl: "#",
  instagramUrl: "https://www.instagram.com/aged.sa?igshid=YzdkMWQ2MWU%3D",
};

/* Images: put your photos in an /images folder with these names. */
const IMG = (n) => `images/${n}.jpg`;

/* ===== DRINK PRICES (shown on menu.html) — edit here any time =====
   hot / cold are prices in SAR. Use null when not available. */
const DRINKS = [
  { en: "V60",            ar: "V60",             hot: 16,   cold: 18 },
  { en: "Americano",      ar: "أمريكانو",         hot: 13,   cold: 15 },
  { en: "Espresso",       ar: "إسبريسو",          hot: 12,   cold: null },
  { en: "Latte",          ar: "لاتيه",            hot: 18,   cold: 20 },
  { en: "Cappuccino",     ar: "كابتشينو",         hot: 18,   cold: null },
  { en: "Flat White",     ar: "فلات وايت",        hot: 16,   cold: null },
  { en: "Cortado",        ar: "كورتادو",          hot: 14,   cold: null },
  { en: "White Mocha",    ar: "وايت موكا",        hot: 20,   cold: 22 },
  { en: "Spanish Latte",  ar: "سبانش لاتيه",      hot: 20,   cold: 22 },
  { en: "Hot Chocolate",  ar: "هوت شوكلت",        hot: null, cold: 24 },
  { en: "Karkade",        ar: "كركديه",           hot: null, cold: 19 },
  { en: "Water",          ar: "ماء",              hot: null, cold: 2 }
];

const MENU = {
  coffee: [
    { id: "v60", img: "V60 Coffee", en: ["V60", "Pour-over brewed for a clean, bright cup."], ar: ["V60", "قهوة مقطّرة بطريقة الصبّ البطيء لكوب نقي ومشرق."] },
    { id: "so", img: "Single Origan", en: ["Single Origin Espresso", "Distinct character from a single farm or region."], ar: ["إسبريسو أحادي المصدر", "نكهة مميزة من مزرعة أو منطقة واحدة."] },
    { id: "iced", img: "Iced Espresso", en: ["Iced Espresso", "Bold espresso, chilled and refreshing."], ar: ["إسبريسو مثلّج", "إسبريسو قوي ومنعش على الثلج."] },
    { id: "black", img: "black-coffee", en: ["Black Coffee", "Simple, pure and carefully brewed."], ar: ["قهوة سوداء", "بسيطة ونقية ومحضّرة بعناية."] },
    { id: "col", img: "colombian", en: ["Aged Colombian Coffee", "Our signature Colombian coffee."], ar: ["قهوة أيجد الكولومبية", "قهوتنا الكولومبية المميزة."] },
    { id: "beans", img: "beans", en: ["Coffee Beans", "Take the Aged experience home."], ar: ["حبوب القهوة", "خذ تجربة أيجد معك إلى البيت."] }
  ],
  matcha: [
    { id: "im", img: "iced-matcha", en: ["Iced Matcha", "Smooth, earthy matcha over ice."], ar: ["ماتشا مثلّج", "ماتشا ناعم بنكهة ترابية على الثلج."] },
    { id: "md", img: "matcha-drinks", en: ["Matcha Drinks", "Handcrafted matcha creations."], ar: ["مشروبات الماتشا", "تشكيلة ماتشا محضّرة يدويًا."] },
    { id: "bm", img: "birthday-matcha", en: ["Birthday Matcha", "A festive matcha treat."], ar: ["ماتشا الاحتفال", "ماتشا احتفالي مميز."] }
  ],
  desserts: [
    { id: "br", img: "brownie", en: ["Brownie with Ice Cream Topping", "Warm, rich brownie with ice cream."], ar: ["براوني مع آيس كريم", "براوني دافئ وغني مع الآيس كريم."] },
    { id: "bb", img: "banana-bread", en: ["Banana Bread", "Soft, homestyle and perfect with coffee."], ar: ["كيك الموز", "طري وبيتي، رفيق القهوة المثالي."] },
    { id: "hc", img: "honey-cake", en: ["Coffee Latte Honey Cake", "Layers of coffee latte and honey."], ar: ["كيكة العسل باللاتيه", "طبقات من نكهة اللاتيه والعسل."] },
    { id: "bs", img: "basbousa", en: ["Basbousa", "Classic semolina sweet, freshly served."], ar: ["بسبوسة", "حلى السميد الكلاسيكي يُقدَّم طازجًا."] }
  ]
};

const FAVORITES = ["im", "v60", "col", "br", "bb"];

const REVIEWS = [
  { en: "Very nice atmosphere, unique, aesthetically pleasing, and delicious coffee.", ar: "أجواء جميلة ومميزة وذوق رفيع وقهوة لذيذة." },
  { en: "Nice service, good coffee, friendly staff.", ar: "خدمة لطيفة وقهوة جيدة وفريق ودود." },
  { en: "Good coffee, atmosphere and friendly barista.", ar: "قهوة جيدة وأجواء رائعة وباريستا ودود." }
];

const GALLERY = [
  { img: "interior", en: "Café interior", ar: "أجواء المقهى" },
  { img: "preparation", en: "Coffee preparation", ar: "تحضير القهوة" },
  { img: "barista", en: "Our barista", ar: "الباريستا" },
  { img: "matcha", en: "Matcha", ar: "ماتشا" },
  { img: "desserts", en: "Desserts", ar: "الحلويات" },
  { img: "customers", en: "Moments at Aged", ar: "لحظات في أيجد" },
  { img: "exterior", en: "Exterior & signage", ar: "واجهة المقهى" }
];

const COLLAGE = [
  { img: "barista", en: "Barista", ar: "الباريستا" },
  { img: "Iced Espresso", en: "Espresso", ar: "إسبريسو" },
  { img: "interior", en: "Interior", ar: "الأجواء" },
  { img: "matcha", en: "Matcha", ar: "ماتشا" },
  { img: "desserts", en: "Desserts", ar: "حلويات" }
];

const I18N = {
  en: {
    nav_home: "Home", nav_about: "About", nav_menu: "Menu", nav_gallery: "Gallery", nav_reviews: "Reviews", nav_location: "Location",
    view_menu: "View Menu Prices", get_directions: "Get Directions",
    hero_loc: "Madinat Al Umal, Al Khobar",
    hero_tag: "Specialty coffee, thoughtfully crafted.",
    hero_desc: "An aesthetic specialty coffee experience in the heart of Al Khobar.",
    about_eyebrow: "Our Story", about_title: "Made for Coffee People",
    about_text: "Aged is a specialty coffee destination in Al Khobar focused on carefully prepared coffee, quality ingredients, and a relaxed atmosphere. From single-origin coffee to matcha and handcrafted desserts, every detail is designed to create a memorable café experience.",
    explore_menu: "Explore the Menu",
    menu_eyebrow: "Signature Menu", menu_title: "Crafted, Cup by Cup",
    cat_coffee: "Coffee", cat_matcha: "Matcha", cat_desserts: "Desserts",
    price_ph: "Prices on the menu page", view_item: "View Prices",
    full_menu: "View Full Menu & Prices",
    fav_eyebrow: "Most Loved", fav_title: "Customer Favorites",
    proc_eyebrow: "The Experience", proc_title: "From Bean to Cup",
    s1_t: "Select", s1_d: "Carefully selected specialty coffee beans.",
    s2_t: "Brew", s2_d: "Prepared using precise brewing methods.",
    s3_t: "Enjoy", s3_d: "Served fresh in a comfortable atmosphere.",
    gal_eyebrow: "Gallery", gal_title: "Come for the Coffee. Stay for the Atmosphere.",
    rev_count: "619+ Google Reviews", read_more: "Read More Reviews",
    rev_src: "Google review",
    loc_eyebrow: "Visit Us", loc_title: "Find Us in Al Khobar",
    address: "22nd St, Madinat Al Umal, Al Khobar 34441, Saudi Arabia",
    hours_title: "Open Daily", hours_until: "Open until 2:00 AM",
    hours_note: "Opening hours may vary. Please check Google Maps for the latest hours.",
    order_title: "Your Coffee Is Waiting",
    order_text: "Order ahead and pick it up fresh, or have it delivered to your door.",
    order_pickup: "Order Pickup", order_delivery: "Order Delivery",
    foot_tag: "Specialty coffee in Al Khobar.", foot_nav: "Navigate", foot_social: "Social", foot_contact: "Contact",
    rights: "All rights reserved.",
    menu_page_eyebrow: "Aged | ايجد", menu_page_title: "Menu", menu_page_sub: "Prices are in Saudi Riyals (SAR).",
    drinks: "Drinks", item: "Item", hot: "Hot", cold: "Cold", sar: "SAR", back_home: "Back to Home"
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "قصتنا", nav_menu: "القائمة", nav_gallery: "المعرض", nav_reviews: "التقييمات", nav_location: "الموقع",
    view_menu: "أسعار القائمة", get_directions: "احصل على الاتجاهات",
    hero_loc: "مدينة العمال، الخبر",
    hero_tag: "قهوة مختصة، تُحضَّر بعناية.",
    hero_desc: "تجربة قهوة مختصة أنيقة في قلب الخبر.",
    about_eyebrow: "قصتنا", about_title: "صُنع لعشّاق القهوة",
    about_text: "أيجد وجهة للقهوة المختصة في الخبر، نهتم فيها بتحضير القهوة بعناية واختيار المكوّنات الجيدة وتوفير أجواء هادئة. من القهوة أحادية المصدر إلى الماتشا والحلويات المصنوعة يدويًا، صُمّم كل تفصيل ليمنحك تجربة مقهى لا تُنسى.",
    explore_menu: "استعرض القائمة",
    menu_eyebrow: "القائمة المميزة", menu_title: "كوب بعد كوب، بإتقان",
    cat_coffee: "القهوة", cat_matcha: "الماتشا", cat_desserts: "الحلويات",
    price_ph: "الأسعار في صفحة القائمة", view_item: "عرض الأسعار",
    full_menu: "القائمة الكاملة والأسعار",
    fav_eyebrow: "الأكثر طلبًا", fav_title: "مفضّلات الزبائن",
    proc_eyebrow: "التجربة", proc_title: "من الحبّة إلى الكوب",
    s1_t: "الاختيار", s1_d: "حبوب قهوة مختصة مختارة بعناية.",
    s2_t: "التحضير", s2_d: "تُحضَّر بطرق استخلاص دقيقة.",
    s3_t: "الاستمتاع", s3_d: "تُقدَّم طازجة في أجواء مريحة.",
    gal_eyebrow: "المعرض", gal_title: "تعال للقهوة، وابقَ للأجواء.",
    rev_count: "أكثر من 619 تقييم على قوقل", read_more: "اقرأ المزيد من التقييمات",
    rev_src: "تقييم من قوقل",
    loc_eyebrow: "زورونا", loc_title: "موقعنا في الخبر",
    address: "شارع 22، مدينة العمال، الخبر 34441، المملكة العربية السعودية",
    hours_title: "مفتوح يوميًا", hours_until: "مفتوح حتى 2:00 صباحًا",
    hours_note: "قد تختلف ساعات العمل، يُرجى مراجعة خرائط قوقل لمعرفة آخر المواعيد.",
    order_title: "قهوتك بانتظارك",
    order_text: "اطلب مسبقًا واستلمها طازجة، أو اطلبها لتصلك إلى بابك.",
    order_pickup: "اطلب للاستلام", order_delivery: "اطلب للتوصيل",
    foot_tag: "قهوة مختصة في الخبر.", foot_nav: "تنقّل", foot_social: "تواصل اجتماعي", foot_contact: "تواصل معنا",
    rights: "جميع الحقوق محفوظة.",
    menu_page_eyebrow: "أيجد | Aged", menu_page_title: "القائمة", menu_page_sub: "الأسعار بالريال السعودي.",
    drinks: "المشروبات", item: "الصنف", hot: "حار", cold: "بارد", sar: "ر.س", back_home: "العودة للرئيسية"
  }
};

/* ============ ENGINE ============ */
let lang = localStorage.getItem("aged-lang") || "en";
let activeCat = "coffee";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = (k) => I18N[lang][k] || k;
const EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];
const img = (name, alt) => `<img class="ph" src="images/${name}.${EXTS[0]}" data-name="${name}" data-i="0" alt="${alt}" loading="lazy" onerror="tryNext(this)">`;
function tryNext(el) {
  const i = +el.dataset.i + 1;
  if (i < EXTS.length) {
    el.dataset.i = i;
    el.src = `images/${el.dataset.name}.${EXTS[i]}`;
  } else {
    el.style.opacity = 0;
  }
}
const allItems = () => Object.values(MENU).flat();

/* Each renderer only runs if its section exists on the current page */
function renderTabs() {
  const box = $("#menuTabs"); if (!box) return;
  box.innerHTML = Object.keys(MENU).map(c =>
    `<button class="tab ${c === activeCat ? "active" : ""}" role="tab" data-cat="${c}">${t("cat_" + c)}</button>`).join("");
  $$(".tab").forEach(b => b.onclick = () => { activeCat = b.dataset.cat; renderTabs(); renderMenu(); });
}

function renderMenu() {
  const grid = $("#menuGrid"); if (!grid) return;
  grid.innerHTML = MENU[activeCat].map((it, i) => `
    <article class="card" style="animation-delay:${i * 70}ms">
      <div class="card__img">${img(it.img, it[lang][0])}</div>
      <div class="card__body">
        <h3>${it[lang][0]}</h3>
        <p>${it[lang][1]}</p>
        <div class="card__foot">
          <span class="price">${t("price_ph")}</span>
          <a class="link-btn" href="menu.html">${t("view_item")}</a>
        </div>
      </div>
    </article>`).join("");
}

function renderPrices() {
  const body = $("#priceBody"); if (!body) return;
  const cell = (v) => v == null
    ? `<span class="na">—</span>`
    : `<span class="num">${v}</span> <small>${t("sar")}</small>`;
  body.innerHTML = DRINKS.map(d => `
    <tr>
      <td class="name">${d[lang]}</td>
      <td class="p">${cell(d.hot)}</td>
      <td class="p">${cell(d.cold)}</td>
    </tr>`).join("");
}

function renderFavs() {
  const box = $("#favGrid"); if (!box) return;
  const items = FAVORITES.map(id => allItems().find(i => i.id === id)).filter(Boolean);
  box.innerHTML = items.map((it, i) => `
    <article class="fav reveal">
      <div class="fav__img">${img(it.img, it[lang][0])}</div>
      <div class="fav__txt"><span class="fav__rank">0${i + 1}</span><h3>${it[lang][0]}</h3></div>
    </article>`).join("");
}

function renderCollage() {
  const box = $("#collage"); if (!box) return;
  box.innerHTML = COLLAGE.map(c =>
    `<figure class="tile">${img(c.img, c[lang])}<figcaption class="cap">${c[lang]}</figcaption></figure>`).join("");
}

function renderGallery() {
  const box = $("#masonry"); if (!box) return;
  box.innerHTML = GALLERY.map(g =>
    `<figure class="m-item reveal">${img(g.img, g[lang])}<span>${g[lang]}</span></figure>`).join("");
}

function renderReviews() {
  const box = $("#reviewGrid"); if (!box) return;
  box.innerHTML = REVIEWS.map(r =>
    `<blockquote class="review reveal"><p>${r[lang]}</p><small>${t("rev_src")}</small></blockquote>`).join("");
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  // keep arrow in primary hero button
  const hb = $(".hero__btns .btn--brown");
  if (hb) hb.innerHTML = `<span data-i18n="view_menu">${t("view_menu")}</span> <span class="arrow">→</span>`;
  renderTabs(); renderMenu(); renderPrices(); renderFavs(); renderCollage(); renderGallery(); renderReviews();
  bindMaps();
  observe();
  localStorage.setItem("aged-lang", lang);
}

/* Google Maps: every .js-maps link opens the café location */
function bindMaps() {
  $$(".js-maps").forEach(a => { a.href = CONFIG.mapsUrl; a.target = "_blank"; a.rel = "noopener"; });
}

function bindConfigLinks() {
  const set = (sel, fn) => { const e = $(sel); if (e) fn(e); };
  set("#mapFrame", e => e.src = CONFIG.mapEmbed);
  set("#orderPickup", e => e.href = CONFIG.orderPickupUrl);
  set("#orderDelivery", e => e.href = CONFIG.orderDeliveryUrl);
  set("#instagramLink", e => e.href = CONFIG.instagramUrl);
  bindMaps();
}

/* Scroll reveal */
let io;
function observe() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => io.observe(el));
}

/* Nav behavior */
const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
const alwaysSolid = nav.classList.contains("scrolled");
const updateNav = () => nav.classList.toggle("scrolled", alwaysSolid || scrollY > 40);
addEventListener("scroll", updateNav, { passive: true });
updateNav();
burger.onclick = () => {
  const open = links.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
};
$$("#navLinks a").forEach(a => a.addEventListener("click", () => { links.classList.remove("open"); burger.classList.remove("open"); }));
$("#langBtn").onclick = () => { lang = lang === "en" ? "ar" : "en"; applyLang(); };

bindConfigLinks();
applyLang();
/* Floating particles */
(function(){
  const bg = document.querySelector(".site-bg"); if(!bg) return;
  const COUNT = 45;      // kitne dots
  const MIN_SIZE = 2;    // sab se chhota dot (px)
  const MAX_SIZE = 5;    // sab se bara dot (px)
  const box = document.createElement("div");
  box.className = "particles";
  for(let i = 0; i < COUNT; i++){
    const s = document.createElement("span");
    const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
    s.style.width = s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = (10 + Math.random() * 12) + "s";
    s.style.animationDelay = (-Math.random() * 20) + "s";
    box.appendChild(s);
  }
  bg.appendChild(box);
})();