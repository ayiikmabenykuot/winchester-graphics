const WHATSAPP_NUMBER = "254793669941";

const formatKsh = (n) => `Kshs. ${n.toLocaleString("en-KE")}`;

const PRODUCTS = [
{ id:"FJ001", name:"South Sudan Away Kit", category:"Football Jersey", color:"Green", price:1200, sizes:["M","L","XL"],
images:[
"assets/fj001-green-1.jpeg",
"assets/fj001-green-2.jpeg",
"assets/fj001-green-3.jpeg"
]
},
{ id:"FJ002", name:"South Sudan Home Kit", category:"Football Jersey", color:"White", price:1200, sizes:["M","L","XL"],
images:[
"assets/fj002-white-1.jpeg",
"assets/fj002-white-2.jpeg",
"assets/fj002-white-3.jpeg"
]
},

  { id:"BJ001", name:"South Sudan Home Kit: FIBA World Cup 2023", category:"Basketball Jersey", color:"White", price:1500, sizes:["L","XL","XXL"],
  images:[
    "assets/bj001-1.jpeg",
    "assets/bj001-2.jpeg",
    "assets/bj001-3.jpeg"
    ]
  },
 
  { id:"BJ002", name:"South Sudan Away Kit: FIBA World Cup 2023", category:"Basketball Jersey", color:"Black", price:1500, sizes:["L","XL","XXL"],
  images:[
    "assets/bj002-black-1.jpeg",
    "assets/bj002-black-2.jpeg",
    "assets/bj002-black-3.jpeg"
  ]
},

  { id:"TS001", name:"T-Shirt 001", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
  images:[
    "assets/ts001-black-1.jpeg",
    "assets/ts001-black-2.jpeg"
  ]
  },
  { id:"TS002", name:"T-Shirt 002", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
  images:[
    "assets/ts002-black-1.jpeg"
  ]
},
  { id:"TS003", name:"T-Shirt 003", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
    images:[
    "assets/ts001-white-1.jpeg",
    "assets/ts001-white-2.jpeg"
  ]
  },
  { id:"TS004", name:"T-Shirt 004", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
    images:[
    "assets/ts002-white-1.jpeg"
  ]
  },
  { id:"TS005", name:"Twic East Girls Association T-shirt", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
    images:[
    "assets/ts004-white-1.jpeg",
    "assets/ts004-white-2.jpeg"
  ]
  },
  { id:"TS006", name:"Get The Bag T-shirt", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"],
    images:[
    "assets/ts003-white-1.jpeg",
    "assets/ts003-white-2.jpeg"
  ]
  },

  { id:"LW001", name:"Laawah 001", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"],
  images:[
    "assets/laawah-01.jpeg"
   ]
  },
  { id:"LW002", name:"Laawah 002", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"],
  images:[
    "assets/laawah-02.jpeg"
   ]
  },
  { id:"LW003", name:"Laawah 003", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"] },
  { id:"LW004", name:"Laawah 004", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"] },
];

const els = {
  year: document.getElementById("year"),
  grid: document.getElementById("productGrid"),
  filterCategory: document.getElementById("filterCategory"),
  filterColor: document.getElementById("filterColor"),
  filterSize: document.getElementById("filterSize"),
  search: document.getElementById("searchInput"),
  cartModal: document.getElementById("cartModal"),
  cartItems: document.getElementById("cartItems"),
  cartTotal: document.getElementById("cartTotal"),
  cartCount: document.getElementById("cartCount"),
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  checkoutBtn: document.getElementById("checkoutBtn"),
  whatsappHeaderBtn: document.getElementById("whatsappHeaderBtn"),
  whatsappOrderBtn: document.getElementById("whatsappOrderBtn"),
  scrollBtn: document.getElementById("scrollToProductsBtn"),

  viewerModal: document.getElementById("viewerModal"),
viewerImg: document.getElementById("viewerImg"),
viewerTitle: document.getElementById("viewerTitle"),
viewerSubtitle: document.getElementById("viewerSubtitle"),
closeViewerBtn: document.getElementById("closeViewerBtn"),
viewerPrev: document.getElementById("viewerPrev"),
viewerNext: document.getElementById("viewerNext"),
viewerDots: document.getElementById("viewerDots"),
};

els.year.textContent = new Date().getFullYear();

const makeWaLink = (text) => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

if (els.whatsappHeaderBtn){
els.whatsappHeaderBtn.href = makeWaLink("Hi Winchester Graphics, I’d like to place an order.");
}

if (els.whatsappOrderBtn){
els.whatsappOrderBtn.href = makeWaLink("Hi Winchester Graphics, I’d like to ask about your products.");
}

const searchBtn = document.getElementById("searchBtn");
if (searchBtn){
searchBtn.addEventListener("click", () => renderProducts());
}

const CART_KEY = "wg_cart_v1";

const loadCart = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
};

const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

let cart = loadCart();

const cartCount = () => cart.reduce((sum, i) => sum + i.qty, 0);
const cartTotal = () => cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

const openCart = () => {
  els.cartModal.setAttribute("aria-hidden","false");
  renderCart();
};
const closeCart = () => els.cartModal.setAttribute("aria-hidden","true");

const waFloat = document.getElementById("waFloat");
if (waFloat){
waFloat.href = makeWaLink("Hi Winchester Graphics, I’d like to place an order.");
}

els.openCartBtn.addEventListener("click", openCart);
els.closeCartBtn.addEventListener("click", closeCart);
els.cartModal.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeCart();
});
els.clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart(cart);
  renderCart();
  updateCartUi();
});

const updateCartUi = () => {
  els.cartCount.textContent = cartCount();
  els.cartTotal.textContent = formatKsh(cartTotal());
};

let viewer = { images: [], index: 0, title: "" };

const openViewer = (product) => {
const imgs = (product.images && product.images.length) ? product.images : [];
if (!imgs.length) return;

viewer = { images: imgs, index: 0, title: product.name };

els.viewerTitle.textContent = product.name;
els.viewerSubtitle.textContent = `${product.category} • ${product.color}`;
els.viewerModal.setAttribute("aria-hidden", "false");
renderViewer();
};

const closeViewer = () => els.viewerModal.setAttribute("aria-hidden", "true");

const renderViewer = () => {
const src = viewer.images[viewer.index];
els.viewerImg.src = src;
els.viewerImg.alt = viewer.title;

els.viewerDots.innerHTML = viewer.images.map((imgSrc, i) =>
`<button class="viewer-thumb ${i===viewer.index ? "active":""}" data-thumb="${i}" type="button" aria-label="View photo ${i+1}">
<img src="${imgSrc}" alt="">
</button>`
).join("");

els.viewerDots.querySelectorAll("[data-thumb]").forEach(b => {
b.addEventListener("click", () => {
viewer.index = Number(b.dataset.thumb);
renderViewer();
});
});
};

els.closeViewerBtn.addEventListener("click", closeViewer);
els.viewerModal.addEventListener("click", (e) => {
if (e.target?.dataset?.viewerClose === "true") closeViewer();
});

const unique = (arr) => Array.from(new Set(arr));

const populateFilterOptions = () => {
  const colors = unique(PRODUCTS.map(p => p.color)).sort();
  const sizes = unique(PRODUCTS.flatMap(p => p.sizes)).sort((a,b)=>a.localeCompare(b, undefined, {numeric:true}));

  els.filterColor.innerHTML = '<option value="all">All</option>' + colors.map(c => `<option value="${c}">${c}</option>`).join("");
  els.filterSize.innerHTML = '<option value="all">All</option>' + sizes.map(s => `<option value="${s}">${s}</option>`).join("");
};

const matchesFilters = (p) => {
  const cat = els.filterCategory.value;
  const col = els.filterColor.value;
  const size = els.filterSize.value;
  const q = (els.search.value || "").trim().toLowerCase();

  if (cat !== "all" && p.category !== cat) return false;
  if (col !== "all" && p.color !== col) return false;
  if (size !== "all" && !p.sizes.includes(size)) return false;

  if (q){
    const hay = `${p.name} ${p.category} ${p.color} ${p.id}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }

  return true;
};

const renderProducts = () => {
const list = PRODUCTS.filter(matchesFilters);

els.grid.innerHTML = list.map(p => {
const sizeOptions = p.sizes.map(s => `<option value="${s}">${s}</option>`).join("");

const thumbHtml = (p.images && p.images.length)
? `<img src="${p.images[0]}" alt="${p.name}">`
: `<span>${p.category}</span>`;

return `
<article class="card" data-view="${p.id}" role="button" tabindex="0">
<div class="thumb">${thumbHtml}</div>
<div class="card-body">
<div class="title">${p.name}</div>
<div class="meta">
<span class="badge">${p.color}</span>
<span class="price">${formatKsh(p.price)}</span>
</div>
<div class="row">
<select data-size-for="${p.id}">
${sizeOptions}
</select>
<button class="btn btn-primary" data-add="${p.id}" type="button">Add</button>
</div>
</div>
</article>
`;
}).join("");

  els.grid.querySelectorAll("[data-view]").forEach(card => {
const id = card.getAttribute("data-view");
const p = PRODUCTS.find(x => x.id === id);
card.addEventListener("click", (e) => {
if (e.target.closest("[data-add]")) return;
if (e.target.closest("select")) return;
openViewer(p);
});
});
  
  els.grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-add");
      const p = PRODUCTS.find(x => x.id === id);
      const sizeSel = els.grid.querySelector(`[data-size-for="${id}"]`);
      const chosenSize = sizeSel?.value || p.sizes[0];

      addToCart(p, chosenSize);
    });
  });
};

const helpBtn = document.getElementById("helpBtn");
const helpMenu = document.getElementById("helpMenu");
const helpWaBtn = document.getElementById("helpWaBtn");

const closeHelp = () => helpMenu?.setAttribute("aria-hidden","true");
const toggleHelp = () => {
if (!helpMenu) return;
const isOpen = helpMenu.getAttribute("aria-hidden") === "false";
helpMenu.setAttribute("aria-hidden", isOpen ? "true" : "false");
};

if (helpBtn) helpBtn.addEventListener("click", (e) => {
e.stopPropagation();
toggleHelp();
});

document.addEventListener("click", (e) => {
if (!helpMenu) return;
if (helpMenu.contains(e.target) || helpBtn?.contains(e.target)) return;
closeHelp();
});

helpMenu?.querySelectorAll("[data-help-close]").forEach(a => {
a.addEventListener("click", closeHelp);
});

if (helpWaBtn){
helpWaBtn.href = makeWaLink("Hi Winchester Graphics, I need help placing an order.");
}

const addToCart = (product, size) => {
  const key = `${product.id}__${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += 1;
  else cart.push({
    key,
    id: product.id,
    name: product.name,
    category: product.category,
    color: product.color,
    size,
    price: product.price,
    qty: 1
  });

  saveCart(cart);
  updateCartUi();
};

const renderCart = () => {
  if (!cart.length){
    els.cartItems.innerHTML = `<div class="cart-mini">Your cart is empty.</div>`;
    updateCartUi();
    return;
  }

  els.cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-top">
        <div>
          <div class="cart-name">${item.name}</div>
          <div class="cart-mini">${item.category} • ${item.color} • Size ${item.size}</div>
        </div>
        <div class="cart-name">${formatKsh(item.price * item.qty)}</div>
      </div>

      <div class="cart-actions">
        <div class="qty">
          <button type="button" data-dec="${item.key}">-</button>
          <div>${item.qty}</div>
          <button type="button" data-inc="${item.key}">+</button>
        </div>
        <button class="btn btn-ghost" type="button" data-remove="${item.key}">Remove</button>
      </div>
    </div>
  `).join("");

  els.cartItems.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.inc, +1)));
  els.cartItems.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.dec, -1)));
  els.cartItems.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeItem(b.dataset.remove)));

  updateCartUi();
};

const changeQty = (key, delta) => {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart(cart);
  renderCart();
};

const removeItem = (key) => {
  cart = cart.filter(i => i.key !== key);
  saveCart(cart);
  renderCart();
};

els.checkoutBtn.addEventListener("click", () => {
  if (!cart.length) return;

  const lines = [];
  lines.push("Hi Winchester Graphics, I’d like to order:");
  lines.push("");

  cart.forEach((i) => {
    lines.push(`- ${i.name} (${i.color}), Size: ${i.size}, Qty: ${i.qty} = ${formatKsh(i.price * i.qty)}`);
  });

  lines.push("");
  lines.push(`Total: ${formatKsh(cartTotal())}`);
  lines.push("");
  lines.push("My name: ");
  lines.push("My location: ");
  lines.push("Preferred delivery/pickup: ");

  window.open(makeWaLink(lines.join("")), "_blank");
});

["change","input"].forEach(evt => {
  els.filterCategory.addEventListener(evt, renderProducts);
  els.filterColor.addEventListener(evt, renderProducts);
  els.filterSize.addEventListener(evt, renderProducts);
  els.search.addEventListener(evt, renderProducts);
});

let heroIndex = 0;
const track = document.getElementById("heroTrack");

console.log("heroTrack found?", !!track);

const updateHero = () => {
if (!track) return;
const slides = track.querySelectorAll(".hero-slide");
if (!slides.length) return;

const slideWidth = slides[0].getBoundingClientRect().width;

const styles = getComputedStyle(track);
const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
const padL = parseFloat(styles.paddingLeft || "0") || 0;
const padR = parseFloat(styles.paddingRight || "0") || 0;

const viewport = track.parentElement.getBoundingClientRect().width;

const trackWidth =
padL + padR +
slides.length * slideWidth +
(slides.length - 1) * gap;

const minX = viewport - trackWidth; // last slide snaps right
const maxX = 0; // first slide snaps left

const offsetToSlideStart = padL + heroIndex * (slideWidth + gap);
const centerOffset = (viewport - slideWidth) / 2;

let x = centerOffset - offsetToSlideStart;

if (x > maxX) x = maxX;
if (x < minX) x = minX;

track.style.transform = `translateX(${x}px)`;
};

const nextHero = () => {
if (!track) return;
const slides = track.querySelectorAll(".hero-slide");
heroIndex = (heroIndex + 1) % slides.length;
updateHero();
};

window.addEventListener("resize", updateHero);
setTimeout(updateHero, 100);
setInterval(nextHero, 6000);

let startX = 0;
let currentX = 0;
let isDown = false;

const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

const prevHero = () => {
if (!track) return;
const slides = track.querySelectorAll(".hero-slide");
heroIndex = (heroIndex - 1 + slides.length) % slides.length;
updateHero();
};

const onDown = (e) => {
if (!track) return;
isDown = true;
startX = getX(e);
currentX = startX;
track.style.transition = "none";
};

const onMove = (e) => {
if (!isDown || !track) return;
currentX = getX(e);
const dx = currentX - startX;
const slides = track.querySelectorAll(".hero-slide");
const slideWidth = slides[0].getBoundingClientRect().width;
const gap = 14;
const offset = (slideWidth + gap) * heroIndex;

track.style.transform = `translateX(${dx - offset}px)`;
};

const onUp = () => {
if (!isDown || !track) return;
isDown = false;
track.style.transition = "transform .55s ease";

const dx = currentX - startX;
const threshold = 50;

if (dx > threshold) prevHero();
else if (dx < -threshold) nextHero();
else updateHero();
};

if (track){
track.addEventListener("touchstart", onDown, {passive:true});
track.addEventListener("touchmove", onMove, {passive:true});
track.addEventListener("touchend", onUp);

track.addEventListener("mousedown", onDown);
window.addEventListener("mousemove", onMove);
window.addEventListener("mouseup", onUp);
}


populateFilterOptions();
renderProducts();

updateCartUi();































