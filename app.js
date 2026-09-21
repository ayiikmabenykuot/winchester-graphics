/* =============================================================
   Winchester Graphics — catalog, product preview, cart,
   WhatsApp checkout.  Vanilla JS, no dependencies.
   ============================================================= */
(function () {
  "use strict";

  /* ---------- CONFIG ---------- */
  var CONFIG = {
    whatsapp: "254793669941",          // WhatsApp Business number (no +, no spaces)
    currency: "Kshs.",
    storageKey: "wg_cart_v1",
    imageBase: "assets/img/products/"  // drop your product photos here
  };

  var CATEGORIES = [
    { id: "all",        label: "All Products" },
    { id: "football",   label: "Football" },
    { id: "basketball", label: "Basketball" },
    { id: "tshirts",    label: "T-Shirts" },
    { id: "laawah",     label: "Laawah" }
  ];

  /* ---------- PRODUCTS ----------
     Edit this array to manage your catalog.
     image: file name inside assets/img/products/ (a placeholder
     is drawn automatically if the file is missing). */
  var PRODUCTS = [
    {
      id: "ssd-away-kit", name: "South Sudan Away Kit", category: "football",
      price: 1200, image: "ssd-away-kit.jpg", badge: "", featured: true, added: "2026-07-02",
      colors: ["Green"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.8, reviews: 42,
      description: "Official-style South Sudan away kit in bright green with the national crest and embossed pattern detail. Breathable polyester mesh built for match day or the terraces. Name and number printing available on request."
    },
    {
      id: "ssd-home-kit", name: "South Sudan Home Kit", category: "football",
      price: 1200, image: "ssd-home-kit.jpg", badge: "", featured: true, added: "2026-07-02",
      colors: ["White"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.7, reviews: 38,
      description: "South Sudan home kit in clean white with the national star and crest. Lightweight quick-dry fabric with a tailored fit. Pair it with matching shorts for a full set."
    },
    {
      id: "ssd-fiba-wc", name: "South Sudan FIBA World Cup Jersey", category: "basketball",
      price: 1500, image: "ssd-fiba-wc.jpg", badge: "NEW", featured: true, added: "2026-09-10",
      colors: ["White"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.9, reviews: 67,
      description: "The World Cup home jersey of the Bright Stars in white, with SOUTH SUDAN chest print and national flag badge. Premium mesh cut for movement and airflow — our most requested basketball piece."
    },
    {
      id: "ssd-fiba-away", name: "South Sudan FIBA Away Jersey", category: "basketball",
      price: 1500, image: "ssd-fiba-away.jpg", badge: "", featured: false, added: "2026-08-14",
      colors: ["Navy"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.8, reviews: 31,
      description: "Navy away jersey with sky-blue trim and sponsor detail, finished with the national flag badge. Same premium mesh as the home kit. Custom numbers available."
    },
    {
      id: "ssd-bball-tee-black", name: "SSD Basketball Tee — Black", category: "tshirts",
      price: 1200, image: "ssd-bball-tee-black.jpg", badge: "", featured: false, added: "2026-06-20",
      colors: ["Black"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.6, reviews: 24,
      description: "Heavyweight black cotton tee with the bold SSD BASKETBALL chest print and flag accent. Pre-shrunk, ribbed collar, everyday fit."
    },
    {
      id: "ssd-bball-tank-black", name: "SSD Basketball Tank — Black", category: "tshirts",
      price: 1200, image: "ssd-bball-tank-black.jpg", badge: "", featured: false, added: "2026-06-20",
      colors: ["Black"], sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 18,
      description: "Sleeveless black training tank with SSD BASKETBALL print. Cut wide at the armhole for gym and court sessions."
    },
    {
      id: "ssd-bball-tee-white", name: "SSD Basketball Tee — White", category: "tshirts",
      price: 1200, image: "ssd-bball-tee-white.jpg", badge: "", featured: false, added: "2026-06-20",
      colors: ["White"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.6, reviews: 27,
      description: "White cotton tee with black SSD BASKETBALL print and the South Sudan flag underneath. A lighter option for hot days."
    },
    {
      id: "ssd-bball-tank-white", name: "SSD Basketball Tank — White", category: "tshirts",
      price: 1200, image: "ssd-bball-tank-white.jpg", badge: "", featured: false, added: "2026-06-20",
      colors: ["White"], sizes: ["S", "M", "L", "XL"], rating: 4.4, reviews: 15,
      description: "White sleeveless tank with SSD BASKETBALL print. Soft combed cotton that holds print colour wash after wash."
    },
    {
      id: "twic-east-tee", name: "Twic East Girls Association Tee", category: "tshirts",
      price: 1200, image: "twic-east-tee.jpg", badge: "NEW", featured: false, added: "2026-09-12",
      colors: ["White"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.7, reviews: 12,
      description: "Association tee printed with the full Twic East Girls Association crest. Made for group orders — bulk pricing available for teams and associations."
    },
    {
      id: "get-the-bag-tee", name: "Get The Bag Tee", category: "tshirts",
      price: 1200, image: "get-the-bag-tee.jpg", badge: "", featured: false, added: "2026-05-30",
      colors: ["White"], sizes: ["S", "M", "L", "XL", "2XL"], rating: 4.3, reviews: 9,
      description: "Clean white tee with the GTB monogram print. Simple streetwear staple from our own label."
    },
    {
      id: "laawah-palm", name: "Laawah — Palm &amp; River Print", category: "laawah",
      price: 3500, image: "laawah-palm.jpg", badge: "", featured: true, added: "2026-08-28",
      colors: ["White", "Blue"], sizes: ["One Size"], sizeNote: "One size, full length",
      rating: 4.9, reviews: 54,
      description: "Traditional laawah printed with the palm and river motif in turquoise and green on white. A favourite for dowry ceremonies and weddings — we print bridal-party sets with matching names and dates."
    },
    {
      id: "laawah-custom", name: "Laawah — Custom Ceremony Set", category: "laawah",
      price: 4000, image: "laawah-custom.jpg", badge: "NEW", featured: false, added: "2026-09-15",
      colors: ["White", "Blue", "Red"], sizes: ["One Size"], sizeNote: "One size, full length",
      rating: 4.8, reviews: 21,
      description: "Fully custom laawah designed around your ceremony — your names, date and chosen colours printed across the fabric. Send us your details on WhatsApp and we will design a proof before printing. Group orders of 10+ get a discount."
    }
  ];

  /* ---------- STATE ---------- */
  var state = {
    category: "all",
    color: "all",
    size: "all",
    sort: "featured",
    search: "",
    cart: loadCart(),
    slide: 0,
    lastFocus: null
  };

  /* ---------- HELPERS ---------- */
  function $(sel) { return document.querySelector(sel); }
  function money(n) { return CONFIG.currency + " " + n.toLocaleString("en-KE"); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function plain(s) { // strip entities used in product names for WhatsApp text
    var d = document.createElement("textarea");
    d.innerHTML = s;
    return d.value;
  }
  function byId(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || []; }
    catch (e) { return []; }
  }
  function saveCart() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart)); } catch (e) {}
  }

  /* Inline SVG placeholder so the grid never shows broken images. */
  function placeholder(name) {
    var label = plain(name).replace(/ — .*$/, "");
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
      '<rect width="400" height="400" fill="#0A1E3C"/>' +
      '<path d="M40 60l30 110 26-68 14 36 14-36 26 68 30-110" fill="none" stroke="#ffffff" ' +
      'stroke-opacity="0.22" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" ' +
      'transform="translate(95 100)"/>' +
      '<text x="200" y="330" fill="#ffffff" fill-opacity="0.6" font-size="20" ' +
      'font-family="Arial, sans-serif" text-anchor="middle">' + esc(label) + '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function stars(rating) {
    var full = Math.floor(rating);
    var half = rating - full >= 0.5;
    var out = "";
    for (var i = 0; i < 5; i++) {
      var cls = i < full ? "on" : (i === full && half ? "half" : "");
      out += '<span class="star ' + cls + '" aria-hidden="true">\u2605</span>';
    }
    return '<span class="stars">' + out + "</span>";
  }

  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      t.classList.remove("show");
      setTimeout(function () { t.hidden = true; }, 220);
    }, 2400);
  }

  /* ---------- FILTER + SORT ---------- */
  function visibleProducts() {
    var q = state.search.toLowerCase().trim();
    var list = PRODUCTS.filter(function (p) {
      if (state.category !== "all" && p.category !== state.category) return false;
      if (state.color !== "all" && p.colors.indexOf(state.color) === -1) return false;
      if (state.size !== "all" && p.sizes.indexOf(state.size) === -1) return false;
      if (q) {
        var hay = (plain(p.name) + " " + p.category + " " + p.description).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    var sorters = {
      featured: function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating; },
      "new": function (a, b) { return new Date(b.added) - new Date(a.added); },
      "price-asc": function (a, b) { return a.price - b.price; },
      "price-desc": function (a, b) { return b.price - a.price; },
      rating: function (a, b) { return b.rating - a.rating; }
    };
    return list.sort(sorters[state.sort] || sorters.featured);
  }

  /* ---------- RENDER: categories, filters ---------- */
  function renderCategories() {
    $("#categoryNav").innerHTML = CATEGORIES.map(function (c) {
      return '<button class="pill' + (state.category === c.id ? " is-active" : "") +
        '" data-cat="' + c.id + '" aria-pressed="' + (state.category === c.id) + '">' +
        esc(c.label) + "</button>";
    }).join("");
  }

  function renderFilterOptions() {
    var colors = [], sizes = [];
    PRODUCTS.forEach(function (p) {
      p.colors.forEach(function (c) { if (colors.indexOf(c) === -1) colors.push(c); });
      p.sizes.forEach(function (s) { if (sizes.indexOf(s) === -1) sizes.push(s); });
    });
    colors.sort();
    var order = ["S", "M", "L", "XL", "2XL", "3XL", "One Size"];
    sizes.sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });

    $("#colorFilter").innerHTML = '<option value="all">All Colors</option>' +
      colors.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    $("#sizeFilter").innerHTML = '<option value="all">All Sizes</option>' +
      sizes.map(function (s) { return '<option value="' + esc(s) + '">' + esc(s) + "</option>"; }).join("");
  }

  /* ---------- RENDER: grid ---------- */
  function card(p) {
    return '<article class="card" data-id="' + p.id + '" tabindex="0" role="button" ' +
      'aria-label="' + esc(plain(p.name)) + ', ' + money(p.price) + '. View details">' +
      '<div class="card-media">' +
        (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
        '<img loading="lazy" alt="' + esc(plain(p.name)) + '" src="' + CONFIG.imageBase + p.image +
        '" data-fallback="' + placeholder(p.name) + '" />' +
      "</div>" +
      '<div class="card-body">' +
        "<h3>" + p.name + "</h3>" +
        '<div class="card-rating">' + stars(p.rating) +
          '<span class="rating-num">' + p.rating.toFixed(1) + "</span></div>" +
        '<p class="price">' + money(p.price) + "</p>" +
        '<button class="btn btn-dark btn-sm card-cta" data-quick="' + p.id + '">View item</button>' +
      "</div></article>";
  }

  function renderGrid() {
    var list = visibleProducts();
    var label = CATEGORIES.filter(function (c) { return c.id === state.category; })[0].label;
    $("#catalogTitle").textContent = state.search ? 'Results for “' + state.search + '”' : label;
    $("#resultCount").textContent = list.length + (list.length === 1 ? " item" : " items");
    $("#productGrid").innerHTML = list.map(card).join("");
    $("#emptyState").hidden = list.length !== 0;
    applyFallbacks();
  }

  function applyFallbacks() {
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      img.onerror = function () {
        img.onerror = null;
        img.src = img.getAttribute("data-fallback");
        img.classList.add("is-placeholder");
      };
      if (img.complete && img.naturalWidth === 0) img.onerror();
    });
  }

  /* ---------- RENDER: hero ---------- */
  var SLIDES = [
    { title: "Laawah for every ceremony", text: "Custom printed traditional dress for weddings and dowry celebrations.", cat: "laawah" },
    { title: "South Sudan basketball", text: "FIBA World Cup home and away jerseys, in stock now.", cat: "basketball" },
    { title: "Football kits", text: "Home and away national team kits with optional name and number printing.", cat: "football" },
    { title: "Printed t-shirts", text: "Team, church and association tees printed in-house from one piece up.", cat: "tshirts" }
  ];

  function renderCarousel() {
    $("#slides").innerHTML = SLIDES.map(function (s, i) {
      return '<div class="slide' + (i === 0 ? " is-active" : "") + '" data-i="' + i + '">' +
        '<div class="slide-copy"><p class="eyebrow">Winchester Graphics</p><h2>' + esc(s.title) +
        "</h2><p>" + esc(s.text) + '</p>' +
        '<button class="btn btn-light btn-sm" data-cat="' + s.cat + '">Shop now</button></div></div>';
    }).join("");

    $("#carDots").innerHTML = SLIDES.map(function (s, i) {
      return '<button class="dot' + (i === 0 ? " is-active" : "") + '" data-slide="' + i +
        '" role="tab" aria-label="Slide ' + (i + 1) + '" aria-selected="' + (i === 0) + '"></button>';
    }).join("");
  }

  function goSlide(i) {
    var n = SLIDES.length;
    state.slide = (i + n) % n;
    document.querySelectorAll(".slide").forEach(function (el, idx) {
      el.classList.toggle("is-active", idx === state.slide);
    });
    document.querySelectorAll(".dot").forEach(function (el, idx) {
      el.classList.toggle("is-active", idx === state.slide);
      el.setAttribute("aria-selected", String(idx === state.slide));
    });
  }

  function renderFeature() {
    var p = byId("ssd-fiba-wc") || PRODUCTS[0];
    $("#featureCard").innerHTML =
      '<div class="fc-media"><img alt="' + esc(plain(p.name)) + '" src="' + CONFIG.imageBase + p.image +
      '" data-fallback="' + placeholder(p.name) + '" /></div>' +
      '<p class="eyebrow">Featured this week</p>' +
      "<h3>" + p.name + "</h3>" +
      '<p class="fc-sub">Official World Cup kit · Premium quality</p>' +
      '<div class="card-rating">' + stars(p.rating) + '<span class="rating-num">' + p.rating.toFixed(1) +
      ' (' + p.reviews + ')</span></div>' +
      '<div class="fc-foot"><strong class="price">' + money(p.price) + "</strong>" +
      '<button class="btn btn-dark" data-quick="' + p.id + '">Order Now</button></div>';
    applyFallbacks();
  }

  /* ---------- PRODUCT MODAL ---------- */
  function similarTo(p) {
    var same = PRODUCTS.filter(function (x) { return x.id !== p.id && x.category === p.category; });
    var others = PRODUCTS.filter(function (x) { return x.id !== p.id && x.category !== p.category; })
      .sort(function (a, b) { return b.rating - a.rating; });
    return same.concat(others).slice(0, 4);
  }

  function openProduct(id) {
    var p = byId(id);
    if (!p) return;
    state.lastFocus = document.activeElement;

    var sizeOpts = p.sizes.map(function (s, i) {
      return '<label class="chip"><input type="radio" name="pmSize" value="' + esc(s) + '"' +
        (i === 0 ? " checked" : "") + " /><span>" + esc(s) + "</span></label>";
    }).join("");

    var colorOpts = p.colors.map(function (c, i) {
      return '<label class="chip"><input type="radio" name="pmColor" value="' + esc(c) + '"' +
        (i === 0 ? " checked" : "") + " /><span>" + esc(c) + "</span></label>";
    }).join("");

    var sim = similarTo(p).map(function (s) {
      return '<button class="sim" data-quick="' + s.id + '">' +
        '<img alt="" src="' + CONFIG.imageBase + s.image + '" data-fallback="' + placeholder(s.name) + '" />' +
        '<span class="sim-name">' + s.name + "</span>" +
        '<span class="sim-price">' + money(s.price) + "</span></button>";
    }).join("");

    $("#pmBody").innerHTML =
      '<div class="pm-grid">' +
        '<div class="pm-media">' +
          (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
          '<img alt="' + esc(plain(p.name)) + '" src="' + CONFIG.imageBase + p.image +
          '" data-fallback="' + placeholder(p.name) + '" />' +
        "</div>" +
        '<div class="pm-info">' +
          '<p class="eyebrow">' + esc(catLabel(p.category)) + "</p>" +
          '<h2 id="pmTitle">' + p.name + "</h2>" +
          '<div class="card-rating">' + stars(p.rating) +
            '<span class="rating-num">' + p.rating.toFixed(1) + " · " + p.reviews + " reviews</span></div>" +
          '<p class="pm-price">' + money(p.price) + "</p>" +
          '<p class="pm-desc">' + esc(p.description) + "</p>" +
          '<div class="opt-group"><p class="opt-label">Size' +
            (p.sizeNote ? ' <span class="muted">(' + esc(p.sizeNote) + ")</span>" : "") +
            '</p><div class="chips">' + sizeOpts + "</div></div>" +
          '<div class="opt-group"><p class="opt-label">Colour</p><div class="chips">' + colorOpts + "</div></div>" +
          '<div class="pm-actions">' +
            '<div class="qty" role="group" aria-label="Quantity">' +
              '<button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>' +
              '<input id="pmQty" type="number" value="1" min="1" max="99" aria-label="Quantity" />' +
              '<button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>' +
            "</div>" +
            '<button class="btn btn-dark" id="pmAdd" data-add="' + p.id + '">Add to cart</button>' +
            '<button class="btn btn-wa" id="pmBuy" data-buy="' + p.id + '">Order on WhatsApp</button>' +
          "</div>" +
          '<p class="pm-note">Need custom names, numbers or a bulk order? Ask us on WhatsApp before checkout.</p>' +
        "</div>" +
      "</div>" +
      '<section class="pm-similar"><h3>You may also like</h3><div class="sims">' + sim + "</div></section>";

    applyFallbacks();
    showDialog($("#productModal"));
    $("#pmClose").focus();
  }

  function catLabel(id) {
    var c = CATEGORIES.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  function selectedOptions() {
    var size = document.querySelector('input[name="pmSize"]:checked');
    var color = document.querySelector('input[name="pmColor"]:checked');
    var qty = parseInt(($("#pmQty") || {}).value, 10);
    return {
      size: size ? size.value : "",
      color: color ? color.value : "",
      qty: isNaN(qty) || qty < 1 ? 1 : Math.min(qty, 99)
    };
  }

  /* ---------- DIALOG PLUMBING ---------- */
  function showDialog(el) {
    $("#overlay").hidden = false;
    el.hidden = false;
    document.body.classList.add("no-scroll");
  }
  function closeDialogs() {
    ["#productModal", "#helpModal", "#cartDrawer"].forEach(function (s) { $(s).hidden = true; });
    $("#overlay").hidden = true;
    document.body.classList.remove("no-scroll");
    if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus();
  }

  /* ---------- CART ---------- */
  function addToCart(id, opts) {
    var p = byId(id);
    if (!p) return;
    var key = id + "|" + opts.size + "|" + opts.color;
    var found = state.cart.filter(function (l) { return l.key === key; })[0];
    if (found) found.qty = Math.min(found.qty + opts.qty, 99);
    else state.cart.push({ key: key, id: id, size: opts.size, color: opts.color, qty: opts.qty });
    saveCart();
    renderCart();
    toast(plain(p.name) + " added to cart");
  }

  function cartTotal() {
    return state.cart.reduce(function (sum, l) {
      var p = byId(l.id);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
  }

  function renderCart() {
    var count = state.cart.reduce(function (n, l) { return n + l.qty; }, 0);
    $("#cartCount").textContent = count;
    $("#cartCount").classList.toggle("has-items", count > 0);
    $("#cartTotal").textContent = money(cartTotal());

    if (!state.cart.length) {
      $("#cartBody").innerHTML =
        '<div class="cart-empty"><p>Your cart is empty.</p>' +
        '<button class="btn btn-dark btn-sm" id="emptyShop">Browse products</button></div>';
      $("#checkoutBtn").disabled = true;
      return;
    }
    $("#checkoutBtn").disabled = false;

    $("#cartBody").innerHTML = state.cart.map(function (l) {
      var p = byId(l.id);
      if (!p) return "";
      return '<div class="line" data-key="' + esc(l.key) + '">' +
        '<img alt="" src="' + CONFIG.imageBase + p.image + '" data-fallback="' + placeholder(p.name) + '" />' +
        '<div class="line-info"><h4>' + p.name + "</h4>" +
          '<p class="muted">' + esc(l.size) + " · " + esc(l.color) + "</p>" +
          '<p class="line-price">' + money(p.price * l.qty) + "</p></div>" +
        '<div class="line-actions">' +
          '<div class="qty small"><button type="button" data-dec="' + esc(l.key) + '" aria-label="Decrease">−</button>' +
          "<span>" + l.qty + "</span>" +
          '<button type="button" data-inc="' + esc(l.key) + '" aria-label="Increase">+</button></div>' +
          '<button class="link-btn" data-remove="' + esc(l.key) + '">Remove</button>' +
        "</div></div>";
    }).join("");
    applyFallbacks();
  }

  function changeQty(key, delta) {
    state.cart = state.cart.map(function (l) {
      if (l.key === key) l.qty = Math.max(0, Math.min(l.qty + delta, 99));
      return l;
    }).filter(function (l) { return l.qty > 0; });
    saveCart();
    renderCart();
  }

  function removeLine(key) {
    state.cart = state.cart.filter(function (l) { return l.key !== key; });
    saveCart();
    renderCart();
  }

  /* ---------- WHATSAPP CHECKOUT ---------- */
  function waLink(text) {
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
  }

  function checkout() {
    if (!state.cart.length) return;
    var lines = state.cart.map(function (l, i) {
      var p = byId(l.id);
      return (i + 1) + ". " + plain(p.name) +
        "\n   Size: " + l.size + " | Colour: " + l.color +
        "\n   Qty: " + l.qty + " x " + money(p.price) + " = " + money(p.price * l.qty);
    }).join("\n");

    var msg =
      "*New order — Winchester Graphics*\n\n" + lines +
      "\n\n*Total: " + money(cartTotal()) + "*" +
      "\n\nName:\nDelivery location:\n\n(Sent from the Winchester Graphics website)";

    window.open(waLink(msg), "_blank", "noopener");
  }

  function buyNow(id, opts) {
    var p = byId(id);
    if (!p) return;
    var msg =
      "*Order enquiry — Winchester Graphics*\n\n" + plain(p.name) +
      "\nSize: " + opts.size + " | Colour: " + opts.color +
      "\nQty: " + opts.qty +
      "\nPrice: " + money(p.price * opts.qty) +
      "\n\nName:\nDelivery location:";
    window.open(waLink(msg), "_blank", "noopener");
  }

  /* ---------- EVENTS ---------- */
  function setCategory(cat) {
    state.category = cat;
    state.search = "";
    $("#searchInput").value = "";
    renderCategories();
    renderGrid();
    var target = document.getElementById("catalog");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bind() {
    // Category pills, hero "Shop now", footer jumps
    document.addEventListener("click", function (e) {
      var catBtn = e.target.closest("[data-cat]");
      if (catBtn) { setCategory(catBtn.getAttribute("data-cat")); return; }

      var jump = e.target.closest("[data-jump]");
      if (jump) { e.preventDefault(); setCategory(jump.getAttribute("data-jump")); return; }

      var quick = e.target.closest("[data-quick]");
      if (quick) { e.stopPropagation(); openProduct(quick.getAttribute("data-quick")); return; }

      var cardEl = e.target.closest(".card");
      if (cardEl) { openProduct(cardEl.getAttribute("data-id")); return; }

      var add = e.target.closest("[data-add]");
      if (add) { addToCart(add.getAttribute("data-add"), selectedOptions()); return; }

      var buy = e.target.closest("[data-buy]");
      if (buy) { buyNow(buy.getAttribute("data-buy"), selectedOptions()); return; }

      var dec = e.target.closest("[data-dec]");
      if (dec) { changeQty(dec.getAttribute("data-dec"), -1); return; }

      var inc = e.target.closest("[data-inc]");
      if (inc) { changeQty(inc.getAttribute("data-inc"), 1); return; }

      var rm = e.target.closest("[data-remove]");
      if (rm) { removeLine(rm.getAttribute("data-remove")); return; }

      var dot = e.target.closest("[data-slide]");
      if (dot) { goSlide(parseInt(dot.getAttribute("data-slide"), 10)); return; }

      if (e.target.id === "emptyShop") { closeDialogs(); setCategory("all"); }
      if (e.target.id === "qtyMinus") {
        var qm = $("#pmQty"); qm.value = Math.max(1, (parseInt(qm.value, 10) || 1) - 1);
      }
      if (e.target.id === "qtyPlus") {
        var qp = $("#pmQty"); qp.value = Math.min(99, (parseInt(qp.value, 10) || 1) + 1);
      }
    });

    // Keyboard on product cards
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDialogs();
      if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("card")) {
        e.preventDefault();
        openProduct(e.target.getAttribute("data-id"));
      }
    });

    // Search
    $("#searchForm").addEventListener("submit", function (e) {
      e.preventDefault();
      state.search = $("#searchInput").value;
      state.category = "all";
      renderCategories();
      renderGrid();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("#searchInput").addEventListener("input", function () {
      if (!this.value) { state.search = ""; renderGrid(); }
    });

    // Filters
    $("#colorFilter").addEventListener("change", function () { state.color = this.value; renderGrid(); });
    $("#sizeFilter").addEventListener("change", function () { state.size = this.value; renderGrid(); });
    $("#sortBy").addEventListener("change", function () { state.sort = this.value; renderGrid(); });
    $("#clearFilters").addEventListener("click", function () {
      state.color = state.size = "all";
      state.sort = "featured";
      state.search = "";
      $("#colorFilter").value = "all";
      $("#sizeFilter").value = "all";
      $("#sortBy").value = "featured";
      $("#searchInput").value = "";
      renderGrid();
    });

    // Carousel
    $("#carPrev").addEventListener("click", function () { goSlide(state.slide - 1); });
    $("#carNext").addEventListener("click", function () { goSlide(state.slide + 1); });
    var auto = setInterval(function () { goSlide(state.slide + 1); }, 7000);
    $("#carousel").addEventListener("mouseenter", function () { clearInterval(auto); });

    // Dialogs
    $("#cartBtn").addEventListener("click", function () {
      state.lastFocus = this;
      renderCart();
      showDialog($("#cartDrawer"));
      $("#cartClose").focus();
    });
    $("#helpBtn").addEventListener("click", function () {
      state.lastFocus = this;
      showDialog($("#helpModal"));
      $("#helpClose").focus();
    });
    $("#pmClose").addEventListener("click", closeDialogs);
    $("#cartClose").addEventListener("click", closeDialogs);
    $("#helpClose").addEventListener("click", closeDialogs);
    $("#overlay").addEventListener("click", closeDialogs);
    $("#checkoutBtn").addEventListener("click", checkout);
  }

  /* ---------- INIT ---------- */
  function init() {
    $("#year").textContent = String(new Date().getFullYear());
    renderCategories();
    renderFilterOptions();
    renderCarousel();
    renderFeature();
    renderGrid();
    renderCart();
    bind();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
