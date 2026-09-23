/* =========================================================
   Winchester Graphics — app.js
   Hero carousel · catalog · product preview · cart · accounts · WhatsApp checkout
   ========================================================= */
(function () {
  "use strict";

  /* ----------------------- CONFIG ----------------------- */
  var CONFIG = {
    whatsapp: "254793669941",      // WhatsApp Business number, digits only
    currency: "Kshs.",
    storageKey: "wg_cart_v1",
    userKey: "wg_user_v1",         // logged-in customer
    usersKey: "wg_users_v1",       // registered customers (demo, browser only)
    imageBase: "assets/img/products/"
  };

  /* ----------------------- HERO SLIDES -----------------------
     Replace the image paths with your own photos (assets/img/).
  ------------------------------------------------------------ */
  var SLIDES = [
    {
      image: "assets/img/hero-1.jpg",
      alt: "South Sudan basketball jersey",
      eyebrow: "New this season",
      script: "Official kits",
      title: "South Sudan jerseys",
      text: "Bright Stars football and basketball jerseys, printed and ready to ship countrywide.",
      ctaLabel: "Shop now",
      cat: "basketball"
    },
    {
      image: "assets/img/hero-2.jpg",
      alt: "Laawah traditional dress",
      eyebrow: "Made for celebrations",
      script: "Handprinted",
      title: "Laawah for every ceremony",
      text: "Traditional dress for weddings, dowry ceremonies and cultural days — custom prints on request.",
      ctaLabel: "Shop laawah",
      cat: "laawah"
    },
    {
      image: "assets/hero-2.jpeg",
      alt: "Printed t-shirts",
      eyebrow: "Teams & events",
      script: "From one piece",
      title: "Printed t-shirts & tanks",
      text: "Names, numbers, crests and artwork — printed in our own workshop, with no minimum order.",
      ctaLabel: "Shop t-shirts",
      cat: "tshirts"
    }
  ];

  /* ----------------------- CATEGORIES ----------------------- */
  var CATEGORIES = [
    { id: "all", label: "All products" },
    { id: "football", label: "Football" },
    { id: "basketball", label: "Basketball" },
    { id: "tshirts", label: "T-Shirts" },
    { id: "laawah", label: "Laawah" }
  ];

  /* ----------------------- PRODUCTS -----------------------
     Edit this list to change your shop. `image` is a file name
     inside assets/img/products/. Prices are in Kenyan shillings.
  --------------------------------------------------------- */
  var PRODUCTS = [
    {
      id: "ssd-fiba-wc", name: "South Sudan FIBA World Cup Jersey", category: "basketball",
      price: 1500, image: "ssd-fiba-wc.jpg", badge: "New", rating: 4.9, reviews: 67,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["White"], added: "2026-09-10", featured: true,
      description: "The Bright Stars home jersey in white, with SOUTH SUDAN chest print and the national flag badge. Premium breathable mesh, cut for movement — our most requested basketball piece."
    },
    {
      id: "ssd-fiba-away", name: "South Sudan FIBA Away Jersey", category: "basketball",
      price: 1500, image: "ssd-fiba-away.jpg", rating: 4.8, reviews: 31,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["Navy"], added: "2026-08-20",
      description: "The away edition in deep blue with contrast trim. Same breathable mesh and stitched numbering as the home kit."
    },
    {
      id: "ssd-home-kit", name: "South Sudan Home Kit", category: "football",
      price: 1200, image: "ssd-home-kit.jpg", rating: 4.7, reviews: 38,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["White"], added: "2026-08-02", featured: true,
      description: "National team home jersey in white with flag detailing. Light football fabric that holds print and colour after repeated washing."
    },
    {
      id: "ssd-away-kit", name: "South Sudan Away Kit", category: "football",
      price: 1200, image: "ssd-away-kit.jpg", rating: 4.8, reviews: 42,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["Green"], added: "2026-08-02", featured: true,
      description: "The away football jersey with the national crest. Add your own name and number at no extra charge — just tell us on WhatsApp."
    },
    {
      id: "ssd-bball-tee-white", name: "SSD Basketball Tee — White", category: "tshirts",
      price: 1200, image: "ssd-bball-tee-white.jpg", rating: 4.6, reviews: 27,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["White"], added: "2026-07-15",
      description: "Everyday cotton tee with the South Sudan basketball print. Comfortable fit for supporters and training days."
    },
    {
      id: "ssd-bball-tee-black", name: "SSD Basketball Tee — Black", category: "tshirts",
      price: 1200, image: "ssd-bball-tee-black.jpg", rating: 4.6, reviews: 24,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["Black"], added: "2026-07-15",
      description: "The same supporter tee in black. Durable DTF print that stays sharp wash after wash."
    },
    {
      id: "ssd-bball-tank-black", name: "SSD Basketball Tank — Black", category: "tshirts",
      price: 1200, image: "ssd-bball-tank-black.jpg", rating: 4.5, reviews: 18,
      sizes: ["S", "M", "L", "XL"], colors: ["Black"], added: "2026-07-20",
      description: "Sleeveless training tank in black, printed with the national basketball artwork. Built for courts and gym sessions."
    },
    {
      id: "ssd-bball-tank-white", name: "SSD Basketball Tank — White", category: "tshirts",
      price: 1200, image: "ssd-bball-tank-white.jpg", rating: 4.4, reviews: 15,
      sizes: ["S", "M", "L", "XL"], colors: ["White"], added: "2026-07-20",
      description: "White training tank with the South Sudan basketball print. Light, breathable and easy to move in."
    },
    {
      id: "twic-east-tee", name: "Twic East Girls Association Tee", category: "tshirts",
      price: 1200, image: "twic-east-tee.jpg", badge: "New", rating: 4.7, reviews: 12,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["White"], added: "2026-09-05",
      description: "Association tee printed for community groups and events. Send us your logo and we will set up the same style for your group."
    },
    {
      id: "get-the-bag-tee", name: "Get The Bag Tee", category: "tshirts",
      price: 1200, image: "get-the-bag-tee.jpg", rating: 4.3, reviews: 9,
      sizes: ["S", "M", "L", "XL", "2XL"], colors: ["White"], added: "2026-06-28",
      description: "Statement graphic tee from our own design shelf. Bold print, relaxed fit, everyday cotton."
    },
    {
      id: "laawah-palm", name: "Laawah — Palm & River Print", category: "laawah",
      price: 3500, image: "laawah-palm.jpg", rating: 4.9, reviews: 54,
      sizes: ["One Size"], colors: ["White", "Blue"], added: "2026-08-12", featured: true,
      sizeNote: "One size, full length",
      description: "Traditional laawah printed with a palm and river motif. Soft, full-length fabric worn for celebrations and family gatherings."
    },
    {
      id: "laawah-custom", name: "Laawah — Custom Ceremony Set", category: "laawah",
      price: 4000, image: "laawah-custom.jpg", badge: "New", rating: 4.8, reviews: 21,
      sizes: ["One Size"], colors: ["White", "Blue", "Red"], added: "2026-09-08", featured: true,
      sizeNote: "One size, full length",
      description: "Custom printed laawah for weddings and dowry ceremonies. Share your names, colours or photographs and we will design the print with you."
    }
  ];

  var SIZE_ORDER = ["S", "M", "L", "XL", "2XL", "3XL", "One Size"];

  /* ----------------------- STATE ----------------------- */
  var state = {
    category: "all",
    search: "",
    color: "",
    size: "",
    sort: "featured",
    cart: [],
    current: null,
    selected: { size: null, color: null, qty: 1 },
    slide: 0,
    user: null,
    authMode: "signup"
  };

  var $ = function (id) { return document.getElementById(id); };
  var timer = null;
  var heroTimer = null;

  /* ----------------------- HELPERS ----------------------- */
  function money(n) { return CONFIG.currency + " " + Number(n).toLocaleString("en-KE"); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function product(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }

  function catLabel(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i].label;
    return id;
  }

  function imgSrc(p) { return CONFIG.imageBase + p.image; }

  // Placeholder shown until you drop your own photo in place.
  function placeholder(label) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
      '<rect width="600" height="600" fill="#EEF3FB"/>' +
      '<path d="M110 200 L190 400 L245 270 L300 400 L355 270 L410 400 L490 200" fill="none" stroke="#C3D2EC" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="300" y="500" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="26" fill="#8FA6CE">' +
      esc(label || "Winchester Graphics") + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function applyFallbacks(root) {
    var imgs = (root || document).querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      (function (img) {
        if (img.dataset.bound) return;
        img.dataset.bound = "1";
        img.addEventListener("error", function () {
          if (img.dataset.done) return;
          img.dataset.done = "1";
          img.src = placeholder(img.dataset.fallback || img.alt);
        });
        if (img.complete && img.naturalWidth === 0) {
          img.dataset.done = "1";
          img.src = placeholder(img.dataset.fallback || img.alt);
        }
      })(imgs[i]);
    }
  }

  function stars(rating, reviews) {
    var full = Math.round(rating);
    var s = "";
    for (var i = 1; i <= 5; i++) s += i <= full ? "\u2605" : "\u2606";
    return '<span class="stars" aria-hidden="true">' + s + "</span>" +
      '<span class="rating-text">' + rating.toFixed(1) + " · " + reviews + " reviews</span>";
  }

  function toast(msg) {
    var el = $("toast");
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(timer);
    timer = setTimeout(function () { el.classList.remove("is-visible"); }, 2600);
  }

  function store(key, value) {
    try {
      if (value === undefined) {
        var raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      }
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  /* ----------------------- HERO CAROUSEL ----------------------- */
  function renderHero() {
    var slides = SLIDES.map(function (s, i) {
      return '<div class="hero-slide' + (i === state.slide ? " is-active" : "") + '">' +
        '<img src="' + esc(s.image) + '" alt="' + esc(s.alt) + '" data-fallback="' + esc(s.title) + '" />' +
        "</div>";
    }).join("");
    $("heroSlides").innerHTML = slides;

    var s = SLIDES[state.slide];
    $("heroCopy").innerHTML =
      '<p class="eyebrow">' + esc(s.eyebrow) + "</p>" +
      '<p class="hero-script">' + esc(s.script) + "</p>" +
      "<h1>" + esc(s.title) + "</h1>" +
      "<p>" + esc(s.text) + "</p>" +
      '<div class="hero-cta">' +
      '<button class="btn btn-primary" type="button" data-cat="' + esc(s.cat) + '">' + esc(s.ctaLabel) + "</button>" +
      '<button class="btn btn-ghost" type="button" data-auth="signup">Sign up &amp; save</button>' +
      "</div>";

    $("heroDots").innerHTML = SLIDES.map(function (_, i) {
      return '<button class="dot' + (i === state.slide ? " is-active" : "") +
        '" type="button" data-slide="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
    }).join("");

    applyFallbacks($("hero"));
  }

  function goSlide(i) {
    state.slide = (i + SLIDES.length) % SLIDES.length;
    renderHero();
  }

  function autoplay() {
    clearInterval(heroTimer);
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    heroTimer = setInterval(function () { goSlide(state.slide + 1); }, 7000);
  }

  /* ----------------------- CATALOG ----------------------- */
  function visibleProducts() {
    var q = state.search.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      if (state.category !== "all" && p.category !== state.category) return false;
      if (state.color && p.colors.indexOf(state.color) === -1) return false;
      if (state.size && p.sizes.indexOf(state.size) === -1) return false;
      if (q) {
        var hay = (p.name + " " + p.description + " " + catLabel(p.category) + " " + p.colors.join(" ")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    list.sort(function (a, b) {
      switch (state.sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "new": return a.added < b.added ? 1 : -1;
        default:
          if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
          return b.rating - a.rating;
      }
    });
    return list;
  }

  function renderCategories() {
    $("categoryNav").innerHTML = CATEGORIES.map(function (c) {
      return '<button class="pill' + (state.category === c.id ? " is-active" : "") +
        '" type="button" data-cat="' + c.id + '">' + esc(c.label) + "</button>";
    }).join("");
  }

  function renderFilterOptions() {
    var colors = [], sizes = [];
    PRODUCTS.forEach(function (p) {
      p.colors.forEach(function (c) { if (colors.indexOf(c) === -1) colors.push(c); });
      p.sizes.forEach(function (s) { if (sizes.indexOf(s) === -1) sizes.push(s); });
    });
    colors.sort();
    sizes.sort(function (a, b) { return SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b); });

    $("colorFilter").innerHTML = '<option value="">All colours</option>' +
      colors.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    $("sizeFilter").innerHTML = '<option value="">All sizes</option>' +
      sizes.map(function (s) { return '<option value="' + esc(s) + '">' + esc(s) + "</option>"; }).join("");
  }

  function card(p) {
    return '<article class="card" data-quick="' + p.id + '" tabindex="0" role="button" aria-label="View ' + esc(p.name) + '">' +
      '<div class="card-media">' +
      (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
      '<img src="' + esc(imgSrc(p)) + '" alt="' + esc(p.name) + '" data-fallback="' + esc(p.name) + '" loading="lazy" />' +
      "</div>" +
      '<div class="card-body">' +
      '<p class="card-cat">' + esc(catLabel(p.category)) + "</p>" +
      '<h3 class="card-title">' + esc(p.name) + "</h3>" +
      '<div class="card-rating">' + stars(p.rating, p.reviews) + "</div>" +
      '<p class="card-price">' + money(p.price) + "</p>" +
      '<div class="card-actions">' +
      '<button class="btn btn-primary btn-sm" type="button" data-add="' + p.id + '">Add to cart</button>' +
      "</div></div></article>";
  }

  function renderGrid() {
    var list = visibleProducts();
    $("productGrid").innerHTML = list.map(card).join("");
    $("catalogTitle").textContent = catLabel(state.category);
    $("resultCount").textContent = list.length + (list.length === 1 ? " item" : " items");
    $("emptyState").hidden = list.length > 0;
    $("productGrid").hidden = list.length === 0;
    applyFallbacks($("productGrid"));
  }

  function renderSpotRating() {
    var p = product("ssd-fiba-wc");
    if (p) $("spotRating").innerHTML = stars(p.rating, p.reviews);
  }

  /* ----------------------- PRODUCT PREVIEW ----------------------- */
  function similarTo(p) {
    var same = PRODUCTS.filter(function (x) { return x.id !== p.id && x.category === p.category; });
    var others = PRODUCTS.filter(function (x) { return x.id !== p.id && x.category !== p.category; })
      .sort(function (a, b) { return b.rating - a.rating; });
    return same.concat(others).slice(0, 4);
  }

  function openProduct(id) {
    var p = product(id);
    if (!p) return;
    state.current = p;
    state.selected = { size: p.sizes[0], color: p.colors[0], qty: 1 };

    var sizeOpts = p.sizes.map(function (s, i) {
      return '<button class="opt' + (i === 0 ? " is-active" : "") + '" type="button" data-size="' + esc(s) + '">' + esc(s) + "</button>";
    }).join("");
    var colorOpts = p.colors.map(function (c, i) {
      return '<button class="opt' + (i === 0 ? " is-active" : "") + '" type="button" data-color="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
    var similar = similarTo(p).map(function (s) {
      return '<button class="mini" type="button" data-quick="' + s.id + '">' +
        '<span class="mini-media"><img src="' + esc(imgSrc(s)) + '" alt="' + esc(s.name) + '" data-fallback="' + esc(s.name) + '" /></span>' +
        '<span class="mini-body"><span class="mini-title">' + esc(s.name) + "</span>" +
        '<span class="mini-price">' + money(s.price) + "</span></span></button>";
    }).join("");

    $("pmBody").innerHTML =
      '<div class="pm-grid">' +
      '<div class="pm-media">' +
      (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
      '<img src="' + esc(imgSrc(p)) + '" alt="' + esc(p.name) + '" data-fallback="' + esc(p.name) + '" />' +
      "</div>" +
      '<div class="pm-info">' +
      '<p class="eyebrow">' + esc(catLabel(p.category)) + "</p>" +
      '<h2 id="pmTitle">' + esc(p.name) + "</h2>" +
      '<div class="pm-rating">' + stars(p.rating, p.reviews) + "</div>" +
      '<p class="pm-price">' + money(p.price) + "</p>" +
      '<p class="pm-desc">' + esc(p.description) + "</p>" +
      '<div class="opt-group"><h4>Size' + (p.sizeNote ? " — " + esc(p.sizeNote) : "") + '</h4><div class="opts">' + sizeOpts + "</div></div>" +
      '<div class="opt-group"><h4>Colour</h4><div class="opts">' + colorOpts + "</div></div>" +
      '<div class="pm-buy">' +
      '<div class="qty"><button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>' +
      '<span id="pmQty">1</span>' +
      '<button type="button" id="qtyPlus" aria-label="Increase quantity">+</button></div>' +
      '<button class="btn btn-primary" type="button" data-add="' + p.id + '">Add to cart</button>' +
      '<button class="btn btn-wa" type="button" data-buy="' + p.id + '">Order on WhatsApp</button>' +
      "</div>" +
      '<p class="pm-note">Need custom names, numbers or a bulk order? Ask us on WhatsApp before checkout.</p>' +
      "</div></div>" +
      '<div class="similar"><h3>You may also like</h3><div class="similar-grid">' + similar + "</div></div>";

    applyFallbacks($("pmBody"));
    showDialog($("productModal"));
  }

  function selectedOptions() {
    return {
      size: state.selected.size || (state.current ? state.current.sizes[0] : ""),
      color: state.selected.color || (state.current ? state.current.colors[0] : ""),
      qty: state.selected.qty || 1
    };
  }

  /* ----------------------- DIALOGS ----------------------- */
  function showDialog(el) {
    $("overlay").hidden = false;
    el.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDialogs() {
    $("overlay").hidden = true;
    $("productModal").hidden = true;
    $("cartDrawer").hidden = true;
    $("helpModal").hidden = true;
    $("authModal").hidden = true;
    document.body.style.overflow = "";
  }

  /* ----------------------- CART ----------------------- */
  function lineKey(id, size, color) { return id + "|" + size + "|" + color; }

  function saveCart() { store(CONFIG.storageKey, state.cart); }

  function loadCart() {
    var saved = store(CONFIG.storageKey);
    state.cart = Array.isArray(saved) ? saved.filter(function (l) { return !!product(l.id); }) : [];
  }

  function addToCart(id, opts) {
    var p = product(id);
    if (!p) return;
    var o = opts || { size: p.sizes[0], color: p.colors[0], qty: 1 };
    var key = lineKey(id, o.size, o.color);
    var found = null;
    for (var i = 0; i < state.cart.length; i++) if (state.cart[i].key === key) found = state.cart[i];
    if (found) found.qty = Math.min(99, found.qty + (o.qty || 1));
    else state.cart.push({ key: key, id: id, size: o.size, color: o.color, qty: o.qty || 1 });
    saveCart();
    renderCart();
    toast(p.name + " added to cart");
  }

  function cartTotal() {
    return state.cart.reduce(function (sum, l) {
      var p = product(l.id);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
  }

  function renderCart() {
    var count = state.cart.reduce(function (n, l) { return n + l.qty; }, 0);
    $("cartCount").textContent = count;

    if (!state.cart.length) {
      $("cartBody").innerHTML =
        '<div class="cart-empty"><strong>Your cart is empty</strong>' +
        "<p>Browse the collections and add the pieces you like.</p>" +
        '<p style="margin-top:16px"><button class="btn btn-outline" type="button" id="cartBrowse">Browse products</button></p></div>';
    } else {
      $("cartBody").innerHTML = state.cart.map(function (l) {
        var p = product(l.id);
        return '<div class="cart-line">' +
          '<div class="cart-thumb"><img src="' + esc(imgSrc(p)) + '" alt="' + esc(p.name) + '" data-fallback="' + esc(p.name) + '" /></div>' +
          "<div><p class=\"cart-name\">" + esc(p.name) + "</p>" +
          '<p class="cart-meta">' + esc(l.size) + " · " + esc(l.color) + "</p>" +
          '<div class="qty"><button type="button" data-dec="' + esc(l.key) + '" aria-label="Decrease">−</button>' +
          "<span>" + l.qty + "</span>" +
          '<button type="button" data-inc="' + esc(l.key) + '" aria-label="Increase">+</button></div></div>' +
          '<div class="cart-right"><span class="cart-price">' + money(p.price * l.qty) + "</span>" +
          '<button class="link-btn" type="button" data-remove="' + esc(l.key) + '">Remove</button></div>' +
          "</div>";
      }).join("");
      applyFallbacks($("cartBody"));
    }
    $("cartTotal").textContent = money(cartTotal());
  }

  function changeQty(key, delta) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].key === key) {
        state.cart[i].qty = Math.max(1, Math.min(99, state.cart[i].qty + delta));
        break;
      }
    }
    saveCart();
    renderCart();
  }

  function removeLine(key) {
    state.cart = state.cart.filter(function (l) { return l.key !== key; });
    saveCart();
    renderCart();
  }

  /* ----------------------- WHATSAPP ----------------------- */
  function waLink(text) {
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
  }

  function customerBlock() {
    var u = state.user;
    if (!u) return "Name:\nDelivery location:\n";
    return "Name: " + u.name + "\nPhone: " + u.phone + "\nDelivery location: " + (u.town || "") + "\n";
  }

  function orderMessage(lines) {
    var text = "*New order — Winchester Graphics*\n\n";
    var total = 0;
    lines.forEach(function (l, i) {
      var p = product(l.id);
      var sub = p.price * l.qty;
      total += sub;
      text += (i + 1) + ". " + p.name + "\n";
      text += "   Size: " + l.size + " | Colour: " + l.color + "\n";
      text += "   Qty: " + l.qty + " x " + money(p.price) + " = " + money(sub) + "\n\n";
    });
    text += "*Total: " + money(total) + "*\n\n" + customerBlock() +
      "\n(Sent from the Winchester Graphics website)";
    return text;
  }

  function checkout() {
    if (!state.cart.length) { toast("Your cart is empty"); return; }
    window.open(waLink(orderMessage(state.cart)), "_blank", "noopener");
  }

  function buyNow(id) {
    var o = selectedOptions();
    var p = product(id);
    if (!p) return;
    var line = { id: id, size: o.size || p.sizes[0], color: o.color || p.colors[0], qty: o.qty || 1 };
    window.open(waLink(orderMessage([line])), "_blank", "noopener");
  }

  /* ----------------------- ACCOUNTS -----------------------
     Front-end only: accounts are stored in the visitor's own browser
     so checkout details can be pre-filled. Connect a real backend
     (Firebase, Supabase, etc.) if you need server-side accounts.
  ---------------------------------------------------------- */
  function users() {
    var list = store(CONFIG.usersKey);
    return Array.isArray(list) ? list : [];
  }

  function renderAuth(error) {
    var u = state.user;
    if (u) {
      $("authBody").innerHTML =
        '<p class="eyebrow">My account</p>' +
        "<h2>Hi, " + esc(u.name.split(" ")[0]) + "</h2>" +
        '<p class="auth-lead">Your details are added to every WhatsApp order automatically.</p>' +
        '<div class="account-row"><span>Name</span><strong>' + esc(u.name) + "</strong></div>" +
        '<div class="account-row"><span>Phone</span><strong>' + esc(u.phone) + "</strong></div>" +
        '<div class="account-row"><span>Email</span><strong>' + esc(u.email || "—") + "</strong></div>" +
        '<div class="account-row"><span>Delivery town</span><strong>' + esc(u.town || "—") + "</strong></div>" +
        '<button class="btn btn-outline btn-block" style="margin-top:22px" type="button" id="logoutBtn">Log out</button>';
      return;
    }

    var signup = state.authMode === "signup";
    $("authBody").innerHTML =
      '<p class="eyebrow">Sign up &amp; save</p>' +
      "<h2>" + (signup ? "Create your account" : "Welcome back") + "</h2>" +
      '<div class="auth-tabs">' +
      '<button class="auth-tab' + (signup ? " is-active" : "") + '" type="button" data-mode="signup">Sign up</button>' +
      '<button class="auth-tab' + (signup ? "" : " is-active") + '" type="button" data-mode="login">Log in</button>' +
      "</div>" +
      (error ? '<p class="form-error">' + esc(error) + "</p>" : "") +
      '<form id="authForm" novalidate>' +
      (signup ? '<div class="form-field"><label for="afName">Full name</label><input id="afName" name="name" type="text" autocomplete="name" required /></div>' : "") +
      '<div class="form-field"><label for="afPhone">WhatsApp number</label><input id="afPhone" name="phone" type="tel" placeholder="07xx xxx xxx" autocomplete="tel" required /></div>' +
      (signup ? '<div class="form-field"><label for="afEmail">Email (optional)</label><input id="afEmail" name="email" type="email" autocomplete="email" /></div>' : "") +
      (signup ? '<div class="form-field"><label for="afTown">Delivery town</label><input id="afTown" name="town" type="text" placeholder="Nairobi" /></div>' : "") +
      '<div class="form-field"><label for="afPass">Password</label><input id="afPass" name="password" type="password" autocomplete="' + (signup ? "new-password" : "current-password") + '" required /></div>' +
      '<button class="btn btn-primary btn-block" type="submit">' + (signup ? "Create account" : "Log in") + "</button>" +
      "</form>" +
      '<p class="form-note">Accounts are saved on this device to speed up your WhatsApp checkout. We never share your details.</p>';
  }

  function openAuth(mode) {
    state.authMode = mode === "login" ? "login" : "signup";
    renderAuth();
    showDialog($("authModal"));
  }

  function refreshUserUi() {
    var signed = !!state.user;
    $("signupLink").hidden = signed;
    $("accountLink").hidden = !signed;
    $("avatarDot").hidden = !signed;
    if (signed) $("accountLink").innerHTML = "Hi, " + esc(state.user.name.split(" ")[0]) + ' <span aria-hidden="true">›</span>';
  }

  function handleAuthSubmit(form) {
    var data = {
      name: (form.name ? form.name.value : "").trim(),
      phone: (form.phone ? form.phone.value : "").trim(),
      email: (form.email ? form.email.value : "").trim(),
      town: (form.town ? form.town.value : "").trim(),
      password: (form.password ? form.password.value : "")
    };

    if (state.authMode === "signup") {
      if (data.name.length < 2) return renderAuth("Please enter your full name.");
      if (data.phone.replace(/\D/g, "").length < 9) return renderAuth("Please enter a valid WhatsApp number.");
      if (data.password.length < 6) return renderAuth("Password must be at least 6 characters.");

      var list = users();
      for (var i = 0; i < list.length; i++) {
        if (list[i].phone === data.phone) return renderAuth("An account already exists for that number. Try logging in.");
      }
      list.push(data);
      store(CONFIG.usersKey, list);
      state.user = data;
      store(CONFIG.userKey, data);
      refreshUserUi();
      renderAuth();
      toast("Welcome, " + data.name.split(" ")[0] + "!");
      return;
    }

    var found = null;
    users().forEach(function (u) {
      if (u.phone === data.phone && u.password === data.password) found = u;
    });
    if (!found) return renderAuth("We could not find that number and password.");
    state.user = found;
    store(CONFIG.userKey, found);
    refreshUserUi();
    renderAuth();
    toast("Logged in as " + found.name.split(" ")[0]);
  }

  function logout() {
    state.user = null;
    store(CONFIG.userKey, null);
    refreshUserUi();
    renderAuth();
    closeDialogs();
    toast("You are logged out");
  }

  /* ----------------------- NAVIGATION ----------------------- */
  function setCategory(cat) {
    state.category = cat;
    renderCategories();
    renderGrid();
    $("mainNav").classList.remove("is-open");
    var shop = $("shop");
    if (shop) window.scrollTo({ top: shop.offsetTop - 90, behavior: "smooth" });
  }

  /* ----------------------- EVENTS ----------------------- */
  function bind() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-cat],[data-auth],[data-quick],[data-add],[data-buy],[data-inc],[data-dec],[data-remove],[data-slide],[data-size],[data-color],[data-mode]");
      if (!t) return;

      if (t.dataset.cat) { setCategory(t.dataset.cat); return; }
      if (t.dataset.auth) { openAuth(t.dataset.auth); return; }
      if (t.dataset.slide) { goSlide(parseInt(t.dataset.slide, 10)); autoplay(); return; }
      if (t.dataset.mode) { state.authMode = t.dataset.mode; renderAuth(); return; }

      if (t.dataset.size) {
        state.selected.size = t.dataset.size;
        t.parentNode.querySelectorAll(".opt").forEach(function (o) { o.classList.remove("is-active"); });
        t.classList.add("is-active");
        return;
      }
      if (t.dataset.color) {
        state.selected.color = t.dataset.color;
        t.parentNode.querySelectorAll(".opt").forEach(function (o) { o.classList.remove("is-active"); });
        t.classList.add("is-active");
        return;
      }
      if (t.dataset.add) {
        var inModal = !!t.closest("#productModal");
        addToCart(t.dataset.add, inModal ? selectedOptions() : null);
        return;
      }
      if (t.dataset.buy) { buyNow(t.dataset.buy); return; }
      if (t.dataset.quick) { openProduct(t.dataset.quick); return; }
      if (t.dataset.inc) { changeQty(t.dataset.inc, 1); return; }
      if (t.dataset.dec) { changeQty(t.dataset.dec, -1); return; }
      if (t.dataset.remove) { removeLine(t.dataset.remove); return; }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDialogs();
      if (e.key === "Enter" && e.target.classList && e.target.classList.contains("card")) {
        openProduct(e.target.dataset.quick);
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target.id === "qtyPlus" || e.target.id === "qtyMinus") {
        state.selected.qty = Math.max(1, Math.min(99, state.selected.qty + (e.target.id === "qtyPlus" ? 1 : -1)));
        var q = $("pmQty");
        if (q) q.textContent = state.selected.qty;
      }
      if (e.target.id === "cartBrowse") { closeDialogs(); setCategory("all"); }
      if (e.target.id === "logoutBtn") logout();
    });

    document.addEventListener("submit", function (e) {
      if (e.target.id === "authForm") { e.preventDefault(); handleAuthSubmit(e.target); }
    });

    $("heroPrev").addEventListener("click", function () { goSlide(state.slide - 1); autoplay(); });
    $("heroNext").addEventListener("click", function () { goSlide(state.slide + 1); autoplay(); });

    $("searchForm").addEventListener("submit", function (e) { e.preventDefault(); renderGrid(); });
    $("searchInput").addEventListener("input", function (e) { state.search = e.target.value; renderGrid(); });

    $("colorFilter").addEventListener("change", function (e) { state.color = e.target.value; renderGrid(); });
    $("sizeFilter").addEventListener("change", function (e) { state.size = e.target.value; renderGrid(); });
    $("sortBy").addEventListener("change", function (e) { state.sort = e.target.value; renderGrid(); });
    $("clearFilters").addEventListener("click", function () {
      state.color = ""; state.size = ""; state.sort = "featured"; state.search = "";
      $("colorFilter").value = ""; $("sizeFilter").value = ""; $("sortBy").value = "featured"; $("searchInput").value = "";
      renderGrid();
    });
    $("emptyShop").addEventListener("click", function () {
      state.search = ""; $("searchInput").value = ""; setCategory("all");
    });

    $("cartBtn").addEventListener("click", function () { renderCart(); showDialog($("cartDrawer")); });
    $("cartClose").addEventListener("click", closeDialogs);
    $("checkoutBtn").addEventListener("click", checkout);
    $("helpBtn").addEventListener("click", function () { showDialog($("helpModal")); });
    $("helpClose").addEventListener("click", closeDialogs);
    $("authBtn").addEventListener("click", function () { openAuth(state.user ? "login" : "signup"); });
    $("authClose").addEventListener("click", closeDialogs);
    $("pmClose").addEventListener("click", closeDialogs);
    $("overlay").addEventListener("click", closeDialogs);
    $("menuBtn").addEventListener("click", function () {
      var open = $("mainNav").classList.toggle("is-open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ----------------------- INIT ----------------------- */
  function init() {
    state.user = store(CONFIG.userKey) || null;
    renderHero();
    autoplay();
    renderCategories();
    renderFilterOptions();
    renderSpotRating();
    renderGrid();
    loadCart();
    renderCart();
    refreshUserUi();
    applyFallbacks(document);
    bind();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
