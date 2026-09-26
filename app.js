/* =======================================================================
   Winchester Graphics — shared front-end script
   Pages: index.html (home), category.html, product.html
   No build step, no dependencies. Edit the data blocks below to update
   products, hero slides, category showcases and social videos.
   ======================================================================= */
(function () {
  "use strict";

  /* ------------------------------ CONFIG ------------------------------ */
  var CONFIG = {
    whatsapp: "254793669941",           // digits only, no + and no spaces
    whatsappPretty: "+254 793 669 941",
    currency: "Kshs.",
    storageKey: "wg_cart_v1",
    userKey: "wg_user_v1",
    usersKey: "wg_users_v1",
    imageBase: "assets/img/products/",
    email: "winchestergraphics@gmail.com",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/"
  };

  /* --------------------------- HERO SLIDES ---------------------------
     Put your photos in assets/img/ with these names (or change them). */
  var SLIDES = [
    {
      image: "assets/hero-1.jpeg",
      eyebrow: "New season",
      script: "Wear your",
      title: "South Sudan pride",
      text: "Official-look football and basketball jerseys, printed and finished in our own workshop.",
      ctaText: "Shop now",
      ctaHref: "category.html?cat=basketball"
    },
    {
      image: "assets/hero-2.jpeg",
      eyebrow: "Printed t-shirts",
      script: "Your idea,",
      title: "on a tee in 24 hours",
      text: "Teams, churches, associations and family events. One piece or five hundred, same finish.",
      ctaText: "Shop now",
      ctaHref: "category.html?cat=tshirts"
    },
    {
      image: "assets/hero-3.jpeg",
      eyebrow: "Traditional wear",
      script: "Laawah for",
      title: "every celebration",
      text: "Custom printed laawah for weddings, dowry ceremonies and cultural days.",
      ctaText: "Shop now",
      ctaHref: "category.html?cat=laawah"
    }
  ];

  /* ------------------------- CATEGORY SHOWCASES ----------------------- */
  var CATEGORIES = [
    {
      id: "football",
      name: "Football jerseys",
      script: "On the pitch",
      image: "assets/cat-football.jpg",
      intro: "South Sudan home and away kits plus full club sets — names, numbers and crests printed in-house.",
      text: "Breathable match fabric cut for real play. We print player names, numbers and team crests for clubs, schools and county tournaments, from a single shirt to a full squad set."
    },
    {
      id: "basketball",
      name: "Basketball jerseys",
      script: "Bright Stars",
      image: "assets/cat-basketball.jpg",
      intro: "FIBA-style South Sudan jerseys in home white and away navy, with matching shorts on request.",
      text: "Lightweight mesh with a clean SOUTH SUDAN chest print and flag badge. Built for the court, comfortable enough to wear all day."
    },
    {
      id: "tshirts",
      name: "Printed t-shirts",
      script: "Everyday",
      image: "assets/cat-tshirts.jpg",
      intro: "Tees, tanks and event shirts printed with your artwork, slogan or association logo.",
      text: "Soft cotton bodies with DTF or screen printing that survives the wash. Perfect for associations, churches, campaigns, reunions and giveaways."
    },
    {
      id: "laawah",
      name: "Laawah",
      script: "Traditional",
      image: "assets/cat-laawah.jpg",
      intro: "Traditional dress worn by South Sudanese ladies, printed to your colours and ceremony.",
      text: "Full-length laawah in flowing fabric, printed with the patterns, names or dates you choose. A favourite for weddings, dowry ceremonies and cultural celebrations."
    }
  ];

  /* ------------------------ EXPLORE SERVICE TILES ---------------------
     Six small tiles under "Explore Winchester Graphics".
     Images go in assets/img/services/ */
  var SERVICES = [
    { name: "Business cards", image: "assets/business-cards.jpg", ask: "Hi Winchester Graphics, I would like business cards printed." },
    { name: "Poster design", image: "assets/poster-design.jpg", ask: "Hi Winchester Graphics, I need a poster designed and printed." },
    { name: "Mug printing", image: "assets/mug-printing.jpg", ask: "Hi Winchester Graphics, I would like printed mugs." },
    { name: "Uniform labelling", image: "assets/uniform-labelling.jpg", ask: "Hi Winchester Graphics, I need uniforms labelled." },
    { name: "Bottles branding", image: "assets/bottles-branding.jpg", ask: "Hi Winchester Graphics, I would like branded bottles." },
    { name: "Notebook branding", image: "assets/notebook-branding.jpg", ask: "Hi Winchester Graphics, I would like branded notebooks." }
  ];

  /* ------------------------ SEASONAL COLLECTION -----------------------
     Four slots shown below "Featured this week". Ratings stay empty.
     Images go in assets/img/seasonal/ . Set `href` to a product page
     (product.html?id=...) once the piece exists in PRODUCTS. */
  var SEASONAL = [
    { name: "Winchester Graphic Tee", image: "assets/winchester graphics-tee.jpg", tag: "", href: "category.html?cat=tshirts" },
    { name: "Sicony Creative Tee", image: "assets/sicony-creative.jpg", tag: "", href: "category.html?cat=tshirts" },
    { name: "Coat of Arms Laawah", image: "assets/coat of arms-laawah.jpg", tag: "", href: "category.html?cat=laawah" },
    { name: "Branded Hoodie", image: "assets/branded hoodie.jpg", tag: "", href: "category.html?cat=tshirts" }
  ];

  var CAT_LABEL = {
    football: "Football jerseys",
    basketball: "Basketball jerseys",
    tshirts: "Printed t-shirts",
    laawah: "Laawah"
  };

  /* ------------------------------ PRODUCTS ---------------------------- */
  var PRODUCTS = [
    { id: "ssd-fiba-home-wc", name: "South Sudan FIBA World Cup Home Kit", category: "basketball", price: 1200, image: "ssd-fiba-home-wc.jpg", badge: "", sizes: ["M","L","XL","2XL","3XL"], colors: ["White"], added: "2026-09-10", featured: true,
      desc: "The Bright Stars home jersey in white, with SOUTH SUDAN chest print and the national flag badge. Premium breathable mesh, cut for movement — our most requested basketball piece." },
    { id: "ssd-fiba-away-wc", name: "South Sudan FIBA Away Kit", category: "basketball", price: 1200, image: "ssd-fiba-away.jpg", badge: "", sizes: ["M","L","XL","2XL","3XL"], colors: ["Navy"], added: "2026-08-20", featured: false,
      desc: "Away colourway in deep navy with white lettering. Same breathable mesh and relaxed basketball cut as the home jersey." },
    { id: "ssd-home-kit", name: "South Sudan Home Kit", category: "football", price: 1200, image: "ssd-home-kit.jpg", badge: "", sizes: ["S","M","L","XL","2XL"], colors: ["White"], added: "2026-08-02", featured: true,
      desc: "White home football shirt with the national crest. Light match fabric, ready for your name and number at no extra hassle." },
    { id: "ssd-away-kit", name: "South Sudan Away Kit", category: "football", price: 1200, image: "ssd-away-kit.jpg", badge: "", sizes: ["S","M","L","XL","2XL"], colors: ["Green"], added: "2026-08-02", featured: true,
      desc: "Away football shirt in national green. Printed crest, breathable body, and space on the back for player names and numbers." },
    { id: "ssd-bball-tee-white", name: "SSD Basketball Tee — White", category: "tshirts", price: 1200, image: "ssd-bball-tee-white.jpg", badge: "", sizes: ["S","M","L","XL","2XL"], colors: ["White"], added: "2026-07-15", featured: false,
      desc: "Soft cotton tee with the South Sudan basketball print on the chest. An everyday way to carry the team." },
    { id: "ssd-bball-tee-black", name: "SSD Basketball Tee — Black", category: "tshirts", price: 1200, image: "ssd-bball-tee-black.jpg", badge: "", sizes: ["S","M","L","XL","2XL"], colors: ["Black"], added: "2026-07-15", featured: false,
      desc: "The same basketball print on a black cotton body, finished with a durable DTF transfer." },
    { id: "ssd-bball-tank-black", name: "SSD Basketball Tank — Black", category: "tshirts", price: 1200, image: "ssd-bball-tank-black.jpg", badge: "", sizes: ["S","M","L","XL"], colors: ["Black"], added: "2026-07-20", featured: false,
      desc: "Sleeveless training tank in black. Light, quick drying and good for warm-ups or the gym." },
    { id: "ssd-bball-tank-white", name: "SSD Basketball Tank — White", category: "tshirts", price: 1200, image: "ssd-bball-tank-white.jpg", badge: "", sizes: ["S","M","L","XL"], colors: ["White"], added: "2026-07-20", featured: false,
      desc: "White training tank with the team print. Pairs with the basketball shorts for a full practice set." },
    { id: "twic-east-tee", name: "Twic East Girls Association Tee", category: "tshirts", price: 1200, image: "twic-east-tee.jpg", badge: "New", sizes: ["S","M","L","XL","2XL"], colors: ["White"], added: "2026-09-05", featured: false,
      desc: "Association tee printed for community events and fundraisers. We can swap in your own association artwork." },
    { id: "get-the-bag-tee", name: "Get The Bag Tee", category: "tshirts", price: 1200, image: "get-the-bag-tee.jpg", badge: "", sizes: ["S","M","L","XL","2XL"], colors: ["White"], added: "2026-06-28", featured: false,
      desc: "Statement slogan tee on a white cotton body. A simple print that reads clearly from across the room." },
    { id: "laawah-butterfly", name: "Laawah Butterfly Design", category: "laawah", price: 2500, image: "laawah-butterfly.jpg", badge: "", sizes: ["One Size"], colors: ["White","Blue"], added: "2026-08-12", featured: true,
      desc: "Full-length laawah in flowing fabric with a palm and river print. One size, styled the traditional way." },
    { id: "laawah-coat of arms", name: "Laawah Coat of Arms Design", category: "laawah", price: 2500, image: "laawah-coat of arms.jpg", badge: "", sizes: ["One Size"], colors: ["One Color"], added: "2026-09-08", featured: true,
      desc: "Made for weddings and dowry ceremonies. Choose your colours and we print names, dates or family patterns." },
    { id: "laawah-garang", name: "Laawah Dr. John Garang Design", category: "laawah", price: 2500, image: "laawah-garang.jpg", badge: "", sizes: ["One Size"], colors: ["One Color"], added: "2026-09-08", featured: true,
      desc: "Made for weddings and dowry ceremonies. Choose your colours and we print names, dates or family patterns." },
    { id: "laawah-ssd heart", name: "Laawah SSD Heart Design", category: "laawah", price: 2500, image: "laawah-ssd heart.jpg", badge: "", sizes: ["One Size"], colors: ["One Color"], added: "2026-09-08", featured: true,
      desc: "Made for weddings and dowry ceremonies. Choose your colours and we print names, dates or family patterns." }
  ];

  var SIZE_ORDER = ["S", "M", "L", "XL", "2XL", "3XL", "One Size"];

  /* ------------------------------ HELPERS ----------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function money(n) { return CONFIG.currency + " " + Number(n).toLocaleString("en-KE"); }
  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === id) return PRODUCTS[i]; } return null; }
  function param(name) {
    try { return new URLSearchParams(window.location.search).get(name) || ""; }
    catch (e) { return ""; }
  }
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Inline SVG placeholder so the layout never breaks before photos are added. */
  function placeholder(label) {
    var txt = esc(label || "Winchester Graphics");
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">' +
      '<rect width="800" height="800" fill="#EEF3FB"/>' +
      '<path d="M120 300 L200 500 L260 370 L320 500 L380 370 L440 500 L520 300" fill="none" stroke="#C3D2EC" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="400" y="600" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="30" fill="#8FA6CC">' + txt + '</text>' +
      "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function guardImage(img) {
    if (!img || img.dataset.guarded) return;
    img.dataset.guarded = "1";
    img.addEventListener("error", function () {
      if (img.dataset.failed) return;
      img.dataset.failed = "1";
      img.src = placeholder(img.dataset.fallback || img.alt);
      img.classList.add("is-placeholder");
    });
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
      img.dispatchEvent(new Event("error"));
    }
  }
  function guardAll(root) { $$("img[data-fallback]", root || document).forEach(guardImage); }

  /* ------------------------------- CART ------------------------------- */
  function readJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
  }
  var cart = readJSON(CONFIG.storageKey, []);
  function saveCart() { writeJSON(CONFIG.storageKey, cart); renderCart(); }
  function cartCount() { return cart.reduce(function (n, l) { return n + l.qty; }, 0); }
  function cartTotal() { return cart.reduce(function (n, l) { return n + l.qty * l.price; }, 0); }
  function addToCart(product, size, color, qty) {
    qty = Math.min(99, Math.max(1, parseInt(qty, 10) || 1));
    var key = product.id + "|" + size + "|" + color;
    var line = null;
    for (var i = 0; i < cart.length; i++) { if (cart[i].key === key) { line = cart[i]; break; } }
    if (line) line.qty = Math.min(99, line.qty + qty);
    else cart.push({ key: key, id: product.id, name: product.name, price: product.price, image: product.image, size: size, color: color, qty: qty });
    saveCart();
    toast(product.name + " added to your cart");
  }

  /* ----------------------------- ACCOUNTS ----------------------------- */
  function currentUser() { return readJSON(CONFIG.userKey, null); }
  function setCurrentUser(u) { writeJSON(CONFIG.userKey, u); paintAccount(); }
  function allUsers() { return readJSON(CONFIG.usersKey, {}); }
  function paintAccount() {
    var u = currentUser();
    $$("#signupLink").forEach(function (b) { b.hidden = !!u; });
    $$("#accountLink").forEach(function (b) {
      b.hidden = !u;
      if (u) b.innerHTML = "Hi, " + esc((u.name || "").split(" ")[0] || "there") + ' <span aria-hidden="true">\u203A</span>';
    });
    $$("#avatarDot").forEach(function (d) { d.hidden = !u; });
  }

  /* ---------------------------- WHATSAPP ------------------------------ */
  function waLink(text) {
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
  }
  function orderLines(lines) {
    var u = currentUser();
    var out = "*New order — Winchester Graphics*\n\n";
    lines.forEach(function (l, i) {
      out += (i + 1) + ". " + l.name + "\n";
      out += "   Size: " + l.size + " | Colour: " + l.color + "\n";
      out += "   Qty: " + l.qty + " x " + money(l.price) + " = " + money(l.qty * l.price) + "\n\n";
    });
    out += "*Total: " + money(lines.reduce(function (n, l) { return n + l.qty * l.price; }, 0)) + "*\n\n";
    out += "Name: " + (u && u.name ? u.name : "") + "\n";
    out += "Phone: " + (u && u.phone ? u.phone : "") + "\n";
    out += "Delivery location: " + (u && u.town ? u.town : "") + "\n\n";
    out += "(Sent from the Winchester Graphics website)";
    return out;
  }
  function openWhatsApp(text) { window.open(waLink(text), "_blank", "noopener"); }
  function buyNow(product) {
    openWhatsApp(orderLines([{ name: product.name, size: product.sizes[0], color: product.colors[0], qty: 1, price: product.price }]));
  }

  /* ------------------------------ TOAST ------------------------------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ------------------- FOOTER + DIALOGS (every page) ------------------ */
  function chrome() {
    var host = $("#siteFooter");
    if (!host) return;
    var year = new Date().getFullYear();
    host.innerHTML =
      '<footer class="site-footer">' +
        '<div class="wrap footer-grid">' +
          '<div class="footer-brand">' +
            '<strong>Winchester Graphics</strong>' +
            '<p>Design beyond limits. Printed t-shirts, South Sudan football and basketball jerseys, and laawah — printed in our own workshop and delivered countrywide.</p>' +
          "</div>" +
          '<nav class="footer-col" aria-label="Shop"><h3>Shop</h3><ul>' +
            '<li><a href="category.html?cat=football">Football jerseys</a></li>' +
            '<li><a href="category.html?cat=basketball">Basketball jerseys</a></li>' +
            '<li><a href="category.html?cat=tshirts">Printed t-shirts</a></li>' +
            '<li><a href="category.html?cat=laawah">Laawah</a></li>' +
          "</ul></nav>" +
          '<nav class="footer-col" aria-label="Help"><h3>Help</h3><ul>' +
            '<li><a href="index.html#how">How to order</a></li>' +
            '<li><a href="index.html#services">Custom printing</a></li>' +
            '<li><button type="button" data-help="1">Contact &amp; hours</button></li>' +
            '<li><button type="button" data-auth="signup">Create an account</button></li>' +
          "</ul></nav>" +
          '<div class="footer-col"><h3>Talk to us</h3><ul>' +
            '<li><a href="https://wa.me/' + CONFIG.whatsapp + '" target="_blank" rel="noopener">WhatsApp ' + CONFIG.whatsappPretty + "</a></li>" +
            '<li><a href="mailto:' + CONFIG.email + '">' + CONFIG.email + "</a></li>" +
            "<li>Nairobi, Kenya</li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="wrap footer-base"><p>&copy; ' + year + " Winchester Graphics. All rights reserved.</p><p>Prices in Kenyan Shillings. Orders are confirmed on WhatsApp.</p></div>" +
      "</footer>" +

      /* cart drawer */
      '<div class="scrim" id="scrim" hidden></div>' +
      '<aside class="drawer" id="cartDrawer" aria-label="Your cart" aria-hidden="true" hidden>' +
        '<div class="drawer-head"><h2>Your cart</h2><button class="icon-btn" id="cartClose" type="button" aria-label="Close cart">&times;</button></div>' +
        '<div class="drawer-body" id="cartBody"></div>' +
        '<div class="drawer-foot">' +
          '<div class="drawer-total"><span>Total</span><strong id="cartTotal">' + money(0) + "</strong></div>" +
          '<button class="btn btn-wa full" id="checkout" type="button">Check out on WhatsApp</button>' +
          '<p class="fine">We confirm stock, delivery and payment in the chat.</p>' +
        "</div>" +
      "</aside>" +

      /* auth modal */
      '<div class="modal" id="authModal" role="dialog" aria-modal="true" aria-labelledby="authTitle" hidden>' +
        '<div class="modal-card">' +
          '<button class="icon-btn modal-close" id="authClose" type="button" aria-label="Close">&times;</button>' +
          '<div class="tabs" role="tablist">' +
            '<button class="tab is-on" id="tabSignup" type="button" role="tab" aria-selected="true">Sign up</button>' +
            '<button class="tab" id="tabLogin" type="button" role="tab" aria-selected="false">Log in</button>' +
          "</div>" +
          '<h2 id="authTitle">Create your account</h2>' +
          '<p class="modal-sub" id="authSub">Save your details once and every WhatsApp order comes pre-filled.</p>' +
          '<form id="authForm" novalidate>' +
            '<div class="field-row" id="nameRow"><label for="acName">Full name</label><input id="acName" name="name" type="text" autocomplete="name" /></div>' +
            '<div class="field-row"><label for="acEmail">Email</label><input id="acEmail" name="email" type="email" autocomplete="email" required /></div>' +
            '<div class="field-row" id="phoneRow"><label for="acPhone">Phone (WhatsApp)</label><input id="acPhone" name="phone" type="tel" autocomplete="tel" /></div>' +
            '<div class="field-row" id="townRow"><label for="acTown">Delivery town</label><input id="acTown" name="town" type="text" autocomplete="address-level2" /></div>' +
            '<div class="field-row"><label for="acPass">Password</label><input id="acPass" name="password" type="password" autocomplete="new-password" required /></div>' +
            '<p class="form-error" id="authError" hidden></p>' +
            '<button class="btn btn-primary full" type="submit" id="authSubmit">Create account</button>' +
            '<p class="fine">Accounts are saved in this browser only, so please do not use an important password.</p>' +
            '<button class="btn btn-clear full" type="button" id="logoutBtn" hidden>Log out</button>' +
          "</form>" +
        "</div>" +
      "</div>" +

      /* help modal */
      '<div class="modal" id="helpModal" role="dialog" aria-modal="true" aria-labelledby="helpTitle" hidden>' +
        '<div class="modal-card">' +
          '<button class="icon-btn modal-close" id="helpClose" type="button" aria-label="Close">&times;</button>' +
          '<h2 id="helpTitle">Contact &amp; hours</h2>' +
          "<ul class=\"help-list\">" +
            "<li><strong>WhatsApp</strong><a href=\"https://wa.me/" + CONFIG.whatsapp + "\" target=\"_blank\" rel=\"noopener\">" + CONFIG.whatsappPretty + "</a></li>" +
            "<li><strong>Email</strong><a href=\"mailto:" + CONFIG.email + "\">" + CONFIG.email + "</a></li>" +
            "<li><strong>Hours</strong><span>Mon–Sat, 8:00am – 7:00pm</span></li>" +
            "<li><strong>Turnaround</strong><span>Most prints ready in 24–48 hours.</span></li>" +
          "</ul>" +
        "</div>" +
      "</div>" +

      '<div class="toast" id="toast" role="status" aria-live="polite"></div>' +
      '<a class="wa-float" href="https://wa.me/' + CONFIG.whatsapp + '" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 0 1 12 4Zm-3 4c-.3 0-.7.1-1 .5-.3.4-.9 1-.9 2.3s1 2.6 1.1 2.8c.1.2 1.8 3 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3-1.7-.8c-.2-.1-.4-.2-.6.1l-.8 1c-.2.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.5.3-.5v-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4H9Z"/></svg>' +
      "</a>";

    wireChrome();
    renderCart();
    paintAccount();
  }

  /* ------------------------ CHROME INTERACTIONS ----------------------- */
  var lastFocus = null;

  function openLayer(node) {
    lastFocus = document.activeElement;
    $("#scrim").hidden = false;
    node.hidden = false;
    node.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    var focusable = node.querySelector("input, button, a[href]");
    if (focusable) focusable.focus();
  }
  function closeLayers() {
    ["#cartDrawer", "#authModal", "#helpModal"].forEach(function (sel) {
      var n = $(sel);
      if (n) { n.hidden = true; n.setAttribute("aria-hidden", "true"); }
    });
    var s = $("#scrim");
    if (s) s.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function renderCart() {
    $$("#cartCount").forEach(function (c) {
      var n = cartCount();
      c.textContent = n;
      c.classList.toggle("is-on", n > 0);
    });
    var body = $("#cartBody");
    if (!body) return;
    if (!cart.length) {
      body.innerHTML = '<p class="cart-empty">Your cart is empty. Browse a collection and add your size.</p>';
    } else {
      body.innerHTML = cart.map(function (l) {
        return '<div class="cart-line" data-key="' + esc(l.key) + '">' +
          '<img src="' + esc(CONFIG.imageBase + l.image) + '" alt="" data-fallback="' + esc(l.name) + '" />' +
          '<div class="cart-line-main">' +
            '<a href="product.html?id=' + esc(l.id) + '">' + esc(l.name) + "</a>" +
            "<p>" + esc(l.size) + " &middot; " + esc(l.color) + "</p>" +
            '<div class="qty"><button type="button" data-step="-1" aria-label="Decrease quantity">&minus;</button><span>' + l.qty + '</span><button type="button" data-step="1" aria-label="Increase quantity">+</button></div>' +
          "</div>" +
          '<div class="cart-line-end"><strong>' + money(l.qty * l.price) + '</strong><button class="link-btn" type="button" data-remove="1">Remove</button></div>' +
        "</div>";
      }).join("");
      guardAll(body);
    }
    var t = $("#cartTotal");
    if (t) t.textContent = money(cartTotal());
    var co = $("#checkout");
    if (co) co.disabled = !cart.length;
  }

  function wireChrome() {
    var cartBtn = $("#cartBtn");
    if (cartBtn) cartBtn.addEventListener("click", function () { openLayer($("#cartDrawer")); });
    var cartClose = $("#cartClose");
    if (cartClose) cartClose.addEventListener("click", closeLayers);
    var scrim = $("#scrim");
    if (scrim) scrim.addEventListener("click", closeLayers);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLayers(); });

    var body = $("#cartBody");
    if (body) body.addEventListener("click", function (e) {
      var line = e.target.closest(".cart-line");
      if (!line) return;
      var key = line.dataset.key;
      var idx = cart.findIndex(function (l) { return l.key === key; });
      if (idx < 0) return;
      if (e.target.closest("[data-remove]")) { cart.splice(idx, 1); saveCart(); return; }
      var step = e.target.closest("[data-step]");
      if (step) {
        cart[idx].qty = Math.min(99, cart[idx].qty + parseInt(step.dataset.step, 10));
        if (cart[idx].qty < 1) cart.splice(idx, 1);
        saveCart();
      }
    });

    var checkout = $("#checkout");
    if (checkout) checkout.addEventListener("click", function () {
      if (!cart.length) return;
      openWhatsApp(orderLines(cart));
    });

    var helpBtn = $("#helpBtn");
    if (helpBtn) helpBtn.addEventListener("click", function () { openLayer($("#helpModal")); });
    var helpClose = $("#helpClose");
    if (helpClose) helpClose.addEventListener("click", closeLayers);

    document.addEventListener("click", function (e) {
      var h = e.target.closest("[data-help]");
      if (h) { e.preventDefault(); openLayer($("#helpModal")); return; }
      var a = e.target.closest("[data-auth]");
      if (a) { e.preventDefault(); openAuth(a.getAttribute("data-auth")); return; }
      var buy = e.target.closest("[data-buy]");
      if (buy) {
        var p = byId(buy.getAttribute("data-buy"));
        if (p) buyNow(p);
      }
    });

    var authBtn = $("#authBtn");
    if (authBtn) authBtn.addEventListener("click", function () { openAuth(currentUser() ? "account" : "signup"); });
    var authClose = $("#authClose");
    if (authClose) authClose.addEventListener("click", closeLayers);
    $("#tabSignup").addEventListener("click", function () { setAuthMode("signup"); });
    $("#tabLogin").addEventListener("click", function () { setAuthMode("login"); });
    $("#authForm").addEventListener("submit", submitAuth);
    $("#logoutBtn").addEventListener("click", function () {
      setCurrentUser(null);
      closeLayers();
      toast("You are logged out");
    });

    var menuBtn = $("#menuBtn");
    var nav = $("#mainNav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
      /* close the drawer after any link/button inside it is used */
      nav.addEventListener("click", function (e) {
        if (!e.target.closest("a,button")) return;
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    }

    guardAll(document);

    var q = $("#searchInput");
    if (q) q.value = param("q");
  }

  var authMode = "signup";
  function setAuthMode(mode) {
    authMode = mode;
    var isSignup = mode === "signup";
    var loggedIn = !!currentUser();
    $("#tabSignup").classList.toggle("is-on", isSignup);
    $("#tabLogin").classList.toggle("is-on", !isSignup);
    $("#tabSignup").setAttribute("aria-selected", String(isSignup));
    $("#tabLogin").setAttribute("aria-selected", String(!isSignup));
    $("#authTitle").textContent = loggedIn ? "Your details" : (isSignup ? "Create your account" : "Welcome back");
    $("#authSub").textContent = loggedIn
      ? "These details are added to every WhatsApp order you send."
      : (isSignup ? "Save your details once and every WhatsApp order comes pre-filled." : "Log in to pre-fill your orders.");
    ["#nameRow", "#phoneRow", "#townRow"].forEach(function (sel) { $(sel).hidden = !isSignup && !loggedIn; });
    $("#authSubmit").textContent = loggedIn ? "Save details" : (isSignup ? "Create account" : "Log in");
    $("#logoutBtn").hidden = !loggedIn;
    $("#authError").hidden = true;
    var u = currentUser();
    if (u) {
      $("#acName").value = u.name || "";
      $("#acEmail").value = u.email || "";
      $("#acPhone").value = u.phone || "";
      $("#acTown").value = u.town || "";
    }
  }
  function openAuth(mode) {
    setAuthMode(currentUser() ? "signup" : (mode === "login" ? "login" : "signup"));
    openLayer($("#authModal"));
  }
  function submitAuth(e) {
    e.preventDefault();
    var err = $("#authError");
    var email = $("#acEmail").value.trim().toLowerCase();
    var pass = $("#acPass").value;
    var name = $("#acName").value.trim();
    var phone = $("#acPhone").value.trim();
    var town = $("#acTown").value.trim();
    function fail(msg) { err.textContent = msg; err.hidden = false; }

    if (!email || email.indexOf("@") < 0) return fail("Please enter a valid email address.");
    var users = allUsers();

    if (currentUser()) {
      var u = currentUser();
      u.name = name; u.email = email; u.phone = phone; u.town = town;
      users[email] = Object.assign({}, users[email] || {}, u, { password: pass || (users[email] || {}).password });
      writeJSON(CONFIG.usersKey, users);
      setCurrentUser(u);
      closeLayers();
      toast("Details saved");
      return;
    }
    if (!pass || pass.length < 6) return fail("Use a password of at least 6 characters.");

    if (authMode === "signup") {
      if (users[email]) return fail("That email already has an account. Try logging in.");
      users[email] = { name: name, email: email, phone: phone, town: town, password: pass };
      writeJSON(CONFIG.usersKey, users);
      setCurrentUser({ name: name, email: email, phone: phone, town: town });
      closeLayers();
      toast("Account created. Your orders are now pre-filled.");
    } else {
      var rec = users[email];
      if (!rec || rec.password !== pass) return fail("We could not find that email and password.");
      setCurrentUser({ name: rec.name, email: rec.email, phone: rec.phone, town: rec.town });
      closeLayers();
      toast("Welcome back" + (rec.name ? ", " + rec.name.split(" ")[0] : ""));
    }
  }

  /* ---------------------------- PRODUCT CARD -------------------------- */
  function card(p) {
    return '<article class="card">' +
      '<a class="card-media" href="product.html?id=' + esc(p.id) + '" aria-label="' + esc(p.name) + '">' +
        (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
        '<img src="' + esc(CONFIG.imageBase + p.image) + '" alt="' + esc(p.name) + '" loading="lazy" data-fallback="' + esc(p.name) + '" />' +
      "</a>" +
      '<div class="card-body">' +
        '<p class="card-cat">' + esc(CAT_LABEL[p.category] || "") + "</p>" +
        '<h3 class="card-title"><a href="product.html?id=' + esc(p.id) + '">' + esc(p.name) + "</a></h3>" +
        '<p class="no-rating">No ratings yet</p>' +
        '<p class="card-price">' + money(p.price) + "</p>" +
        '<div class="card-actions">' +
          '<a class="btn btn-primary" href="product.html?id=' + esc(p.id) + '">View item</a>' +
          '<button class="btn btn-outline" type="button" data-buy="' + esc(p.id) + '">WhatsApp</button>' +
        "</div>" +
      "</div>" +
    "</article>";
  }

  /* empty star row — no ratings collected yet */
  function emptyStars() {
    var star = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8z" fill="currentColor"/></svg>';
    return '<p class="stars" title="No ratings yet"><span class="stars-row" aria-hidden="true">' +
      star + star + star + star + star + "</span>" +
      '<span class="stars-count">(0)</span><span class="sr-only">No ratings yet</span></p>';
  }

  /* ------------------------------- HOME ------------------------------- */
  function initHome() {
    /* hero carousel */
    var slidesHost = $("#heroSlides");
    var copyHost = $("#heroCopy");
    var dotsHost = $("#heroDots");
    if (slidesHost) {
      slidesHost.innerHTML = SLIDES.map(function (s, i) {
        return '<div class="hero-slide' + (i === 0 ? " is-on" : "") + '"><img src="' + esc(s.image) + '" alt="" ' +
          (i === 0 ? '' : 'loading="lazy" ') + 'data-fallback="' + esc(s.title) + '" /></div>';
      }).join("");
      dotsHost.innerHTML = SLIDES.map(function (s, i) {
        return '<button type="button" class="dot' + (i === 0 ? " is-on" : "") + '" data-i="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
      }).join("");
      guardAll(slidesHost);

      var index = 0;
      var timer;
      function paint(i) {
        index = (i + SLIDES.length) % SLIDES.length;
        var s = SLIDES[index];
        $$(".hero-slide", slidesHost).forEach(function (n, k) { n.classList.toggle("is-on", k === index); });
        $$(".dot", dotsHost).forEach(function (n, k) {
          n.classList.toggle("is-on", k === index);
          n.setAttribute("aria-current", k === index ? "true" : "false");
        });
        copyHost.innerHTML =
          '<p class="eyebrow light">' + esc(s.eyebrow) + "</p>" +
          '<p class="script">' + esc(s.script) + "</p>" +
          "<h1>" + esc(s.title) + "</h1>" +
          "<p class=\"hero-text\">" + esc(s.text) + "</p>" +
          '<a class="btn btn-square btn-white" href="' + esc(s.ctaHref) + '">' + esc(s.ctaText) + "</a>";
      }
      function go(i) { paint(i); restart(); }
      function restart() {
        clearInterval(timer);
        if (!reduceMotion && SLIDES.length > 1) timer = setInterval(function () { paint(index + 1); }, 7000);
      }
      $("#heroPrev").addEventListener("click", function () { go(index - 1); });
      $("#heroNext").addEventListener("click", function () { go(index + 1); });
      dotsHost.addEventListener("click", function (e) {
        var d = e.target.closest(".dot");
        if (d) go(parseInt(d.dataset.i, 10));
      });
      paint(0);
      restart();
    }

    /* explore service tiles */
    var exploreHost = $("#exploreGrid");
    if (exploreHost) {
      exploreHost.innerHTML = SERVICES.map(function (s) {
        return '<a class="tile" href="' + esc(waLink(s.ask)) + '" target="_blank" rel="noopener">' +
          '<span class="tile-media"><img src="' + esc(s.image) + '" alt="" loading="lazy" data-fallback="' + esc(s.name) + '" /></span>' +
          '<span class="tile-label">' + esc(s.name) +
            ' <svg class="tile-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          "</span>" +
        "</a>";
      }).join("");
      guardAll(exploreHost);
    }

    /* seasonal collection */
    var seasonHost = $("#seasonGrid");
    if (seasonHost) {
      seasonHost.innerHTML = SEASONAL.map(function (s) {
        var ext = /^https?:/.test(s.href) ? ' target="_blank" rel="noopener"' : "";
        return '<article class="season-item">' +
          '<a class="season-media" href="' + esc(s.href) + '"' + ext + ' aria-label="' + esc(s.name) + '">' +
            (s.tag ? '<span class="season-tag">' + esc(s.tag) + "</span>" : "") +
            '<img src="' + esc(s.image) + '" alt="" loading="lazy" data-fallback="' + esc(s.name) + '" />' +
          "</a>" +
          '<h3 class="season-name"><a href="' + esc(s.href) + '"' + ext + ">" + esc(s.name) + "</a></h3>" +
          emptyStars() +
        "</article>";
      }).join("");
      guardAll(seasonHost);
    }

    /* full-screen category showcases */
    var showHost = $("#showcases");
    if (showHost) {
      showHost.innerHTML = CATEGORIES.map(function (c) {
        /* "stacked" = photo first, copy + Shop now underneath it */
        return '<section class="showcase stacked" aria-labelledby="sc-' + c.id + '">' +
          '<img class="showcase-bg" src="' + esc(c.image) + '" alt="" loading="lazy" data-fallback="' + esc(c.name) + '" />' +
          '<div class="showcase-shade" aria-hidden="true"></div>' +
          '<div class="wrap showcase-inner">' +
            '<div class="showcase-copy">' +
              '<p class="script">' + esc(c.script) + "</p>" +
              '<h2 id="sc-' + c.id + '">' + esc(c.name) + "</h2>" +
              "<p>" + esc(c.text) + "</p>" +
              '<a class="btn btn-square btn-white" href="category.html?cat=' + esc(c.id) + '">Shop now</a>' +
            "</div>" +
          "</div>" +
        "</section>";
      }).join("");
      guardAll(showHost);
    }

    /* seen on social — 5 video slots */
    var rail = $("#socialRail");
    if (rail) {
      var slots = [1, 2, 3, 4, 5];
      rail.innerHTML = slots.map(function (n) {
        return '<figure class="social-slot">' +
          '<video playsinline muted loop controls preload="none" poster="assets/video/social-' + n + '.jpg">' +
            '<source src="assets/video/social-' + n + '.mp4" type="video/mp4" />' +
          "</video>" +
          '<figcaption>Clip ' + n + "</figcaption>" +
        "</figure>";
      }).join("");
    }

    guardAll(document);
  }

  /* ----------------------------- CATEGORY ----------------------------- */
  function initCategory() {
    var cat = param("cat");
    var q = param("q").trim();
    var meta = CATEGORIES.filter(function (c) { return c.id === cat; })[0];

    var heroImg = $("#catHeroImg");
    heroImg.src = meta ? meta.image : "assets/img/hero-1.jpg";
    heroImg.setAttribute("data-fallback", meta ? meta.name : "Winchester Graphics");
    guardImage(heroImg);

    var title = meta ? meta.name : (q ? 'Search: "' + q + '"' : "All products");
    document.title = title + " | Winchester Graphics";
    $("#catTitle").textContent = title;
    $("#crumbNow").textContent = title;
    $("#catIntro").textContent = meta ? meta.intro : "Every piece we print — jerseys, tees and laawah, ready to order on WhatsApp.";

    $$("[data-nav]").forEach(function (a) { a.classList.toggle("is-current", a.dataset.nav === cat); });

    /* pills */
    var pills = $("#categoryNav");
    pills.innerHTML =
      '<a class="pill' + (!cat ? " is-on" : "") + '" href="category.html">All</a>' +
      CATEGORIES.map(function (c) {
        return '<a class="pill' + (cat === c.id ? " is-on" : "") + '" href="category.html?cat=' + esc(c.id) + '">' + esc(c.name) + "</a>";
      }).join("");

    var pool = PRODUCTS.filter(function (p) { return !cat || p.category === cat; });

    /* filter options from the pool */
    var colors = [];
    var sizes = [];
    pool.forEach(function (p) {
      p.colors.forEach(function (c) { if (colors.indexOf(c) < 0) colors.push(c); });
      p.sizes.forEach(function (s) { if (sizes.indexOf(s) < 0) sizes.push(s); });
    });
    colors.sort();
    sizes.sort(function (a, b) { return SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b); });
    var colorSel = $("#colorFilter");
    var sizeSel = $("#sizeFilter");
    colorSel.innerHTML = '<option value="">All colours</option>' + colors.map(function (c) { return '<option>' + esc(c) + "</option>"; }).join("");
    sizeSel.innerHTML = '<option value="">All sizes</option>' + sizes.map(function (s) { return '<option>' + esc(s) + "</option>"; }).join("");

    var sortSel = $("#sortBy");
    var grid = $("#productGrid");
    var empty = $("#emptyState");
    var count = $("#resultCount");

    function apply() {
      var c = colorSel.value;
      var s = sizeSel.value;
      var list = pool.filter(function (p) {
        if (c && p.colors.indexOf(c) < 0) return false;
        if (s && p.sizes.indexOf(s) < 0) return false;
        if (q) {
          var hay = (p.name + " " + p.desc + " " + CAT_LABEL[p.category]).toLowerCase();
          if (hay.indexOf(q.toLowerCase()) < 0) return false;
        }
        return true;
      });
      var sort = sortSel.value;
      list.sort(function (a, b) {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "new") return a.added < b.added ? 1 : -1;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
      grid.innerHTML = list.map(card).join("");
      guardAll(grid);
      empty.hidden = list.length > 0;
      grid.hidden = list.length === 0;
      count.textContent = list.length + (list.length === 1 ? " item" : " items");
    }

    [colorSel, sizeSel, sortSel].forEach(function (n) { n.addEventListener("change", apply); });
    $("#clearFilters").addEventListener("click", function () {
      colorSel.value = ""; sizeSel.value = ""; sortSel.value = "featured";
      if (q) { window.location.href = cat ? "category.html?cat=" + cat : "category.html"; return; }
      apply();
    });
    $("#emptyShop").addEventListener("click", function () { window.location.href = "category.html"; });

    apply();
  }

  /* ------------------------------ PRODUCT ----------------------------- */
  function initProduct() {
    var p = byId(param("id"));
    var host = $("#productDetail");
    var crumbs = $("#pdCrumbs");

    if (!p) {
      document.title = "Item not found | Winchester Graphics";
      crumbs.innerHTML = '<a href="index.html">Home</a> <span aria-hidden="true">/</span> <span>Not found</span>';
      host.innerHTML = '<div class="wrap empty"><h1>We could not find that item</h1>' +
        "<p>It may have been renamed or sold out. Browse the collections instead.</p>" +
        '<p><a class="btn btn-primary" href="category.html">Shop all products</a></p></div>';
      return;
    }

    document.title = p.name + " | Winchester Graphics";
    crumbs.innerHTML =
      '<a href="index.html">Home</a> <span aria-hidden="true">/</span> ' +
      '<a href="category.html?cat=' + esc(p.category) + '">' + esc(CAT_LABEL[p.category]) + "</a> " +
      '<span aria-hidden="true">/</span> <span>' + esc(p.name) + "</span>";

    host.innerHTML =
      '<div class="wrap pd-grid">' +
        '<div class="pd-media">' +
          (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
          '<img src="' + esc(CONFIG.imageBase + p.image) + '" alt="' + esc(p.name) + '" data-fallback="' + esc(p.name) + '" />' +
        "</div>" +
        '<div class="pd-info">' +
          '<p class="eyebrow">' + esc(CAT_LABEL[p.category]) + "</p>" +
          "<h1>" + esc(p.name) + "</h1>" +
          '<p class="no-rating">No ratings yet</p>' +
          '<p class="pd-price">' + money(p.price) + "</p>" +
          '<p class="pd-desc">' + esc(p.desc) + "</p>" +
          '<div class="pd-field"><span class="pd-label" id="sizeLabel">Size</span>' +
            '<div class="chips" id="sizeChips" role="group" aria-labelledby="sizeLabel">' +
              p.sizes.map(function (s, i) {
                return '<button type="button" class="chip' + (i === 0 ? " is-on" : "") + '" data-size="' + esc(s) + '" aria-pressed="' + (i === 0) + '">' + esc(s) + "</button>";
              }).join("") +
            "</div>" +
          "</div>" +
          '<div class="pd-field"><span class="pd-label" id="colorLabel">Colour</span>' +
            '<div class="chips" id="colorChips" role="group" aria-labelledby="colorLabel">' +
              p.colors.map(function (c, i) {
                return '<button type="button" class="chip' + (i === 0 ? " is-on" : "") + '" data-color="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + "</button>";
              }).join("") +
            "</div>" +
          "</div>" +
          '<div class="pd-field pd-qty"><label class="pd-label" for="pdQty">Quantity</label>' +
            '<input id="pdQty" type="number" min="1" max="99" value="1" inputmode="numeric" />' +
          "</div>" +
          '<div class="pd-cta">' +
            '<button class="btn btn-primary" type="button" id="pdAdd">Add to cart</button>' +
            '<button class="btn btn-wa" type="button" id="pdWa">Order on WhatsApp</button>' +
          "</div>" +
          '<ul class="pd-notes">' +
            "<li>Printed in our own workshop in Nairobi.</li>" +
            "<li>Names, numbers and crests added on request.</li>" +
            "<li>Most orders ready in 24–48 hours, delivery countrywide.</li>" +
          "</ul>" +
        "</div>" +
      "</div>";

    guardAll(host);

    function chipPick(wrapId) {
      var w = $(wrapId);
      w.addEventListener("click", function (e) {
        var b = e.target.closest(".chip");
        if (!b) return;
        $$(".chip", w).forEach(function (n) { n.classList.remove("is-on"); n.setAttribute("aria-pressed", "false"); });
        b.classList.add("is-on");
        b.setAttribute("aria-pressed", "true");
      });
    }
    chipPick("#sizeChips");
    chipPick("#colorChips");

    function chosen() {
      return {
        size: ($("#sizeChips .chip.is-on") || {}).dataset ? $("#sizeChips .chip.is-on").dataset.size : p.sizes[0],
        color: ($("#colorChips .chip.is-on") || {}).dataset ? $("#colorChips .chip.is-on").dataset.color : p.colors[0],
        qty: Math.min(99, Math.max(1, parseInt($("#pdQty").value, 10) || 1))
      };
    }
    $("#pdAdd").addEventListener("click", function () {
      var c = chosen();
      addToCart(p, c.size, c.color, c.qty);
    });
    $("#pdWa").addEventListener("click", function () {
      var c = chosen();
      openWhatsApp(orderLines([{ name: p.name, size: c.size, color: c.color, qty: c.qty, price: p.price }]));
    });

    /* similar products */
    var similar = PRODUCTS.filter(function (o) { return o.category === p.category && o.id !== p.id; });
    if (similar.length < 4) {
      PRODUCTS.forEach(function (o) {
        if (o.id !== p.id && similar.indexOf(o) < 0 && similar.length < 4) similar.push(o);
      });
    }
    similar = similar.slice(0, 4);
    if (similar.length) {
      var sg = $("#similarGrid");
      sg.innerHTML = similar.map(card).join("");
      guardAll(sg);
      $("#similarSection").hidden = false;
    }
  }

  /* ------------------------------- BOOT ------------------------------- */
  function boot() {
    chrome();
    guardAll(document);
    var page = document.body.getAttribute("data-page");
    if (page === "home") initHome();
    else if (page === "category") initCategory();
    else if (page === "product") initProduct();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
