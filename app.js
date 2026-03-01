const WHATSAPP_NUMBER = "254793669941";

const formatKsh = (n) => `Kshs. ${n.toLocaleString("en-KE")}`;

const PRODUCTS = [
  { 
    id: "FJ001", 
    name: "South Sudan Away Kit", 
    category: "Football Jersey", 
    color: "Green", 
    price: 1200, 
    sizes: ["M", "L", "XL"],
    images: ["assets/fj001-green-1.jpeg", "assets/fj001-green-2.jpeg", "assets/fj001-green-3.jpeg"],
    badge: "Popular",
    isNew: false
  },
  { 
    id: "FJ002", 
    name: "South Sudan Home Kit", 
    category: "Football Jersey", 
    color: "White", 
    price: 1200, 
    sizes: ["M", "L", "XL"],
    images: ["assets/fj002-white-1.jpeg", "assets/fj002-white-2.jpeg", "assets/fj002-white-3.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "BJ001", 
    name: "South Sudan FIBA World Cup Jersey", 
    category: "Basketball Jersey", 
    color: "White", 
    price: 1500, 
    sizes: ["L", "XL", "XXL"],
    images: ["assets/bj001-1.jpeg", "assets/bj001-2.jpeg", "assets/bj001-3.jpeg"],
    badge: "Best Seller",
    isNew: true
  },
  { 
    id: "BJ002", 
    name: "South Sudan FIBA Away Jersey", 
    category: "Basketball Jersey", 
    color: "Black", 
    price: 1500, 
    sizes: ["L", "XL", "XXL"],
    images: ["assets/bj002-black-1.jpeg", "assets/bj002-black-2.jpeg", "assets/bj002-black-3.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "TS001", 
    name: "SSD Basketball Tee - Black", 
    category: "T-Shirt", 
    color: "Black", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts001-black-1.jpeg", "assets/ts001-black-2.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "TS002", 
    name: "SSD Basketball Tank - Black", 
    category: "T-Shirt", 
    color: "Black", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts002-black-1.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "TS003", 
    name: "SSD Basketball Tee - White", 
    category: "T-Shirt", 
    color: "White", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts001-white-1.jpeg", "assets/ts001-white-2.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "TS004", 
    name: "SSD Basketball Tank - White", 
    category: "T-Shirt", 
    color: "White", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts002-white-1.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "TS005", 
    name: "Twic East Girls Association Tee", 
    category: "T-Shirt", 
    color: "White", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts004-white-1.jpeg", "assets/ts004-white-2.jpeg"],
    badge: "Limited",
    isNew: true
  },
  { 
    id: "TS006", 
    name: "Get The Bag Tee", 
    category: "T-Shirt", 
    color: "White", 
    price: 1200, 
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/ts003-white-1.jpeg", "assets/ts003-white-2.jpeg"],
    badge: null,
    isNew: false
  },
  { 
    id: "LW001", 
    name: "South Sudan Laawah - Blue Gradient", 
    category: "Laawah", 
    color: "Mixed", 
    price: 2500, 
    sizes: ["Standard"],
    images: ["assets/laawah-01.jpeg"],
    badge: "Traditional",
    isNew: false
  },
  { 
    id: "LW002", 
    name: "South Sudan Laawah - Flag Print", 
    category: "Laawah", 
    color: "Mixed", 
    price: 2500, 
    sizes: ["Standard"],
    images: ["assets/laawah-02.jpeg"],
    badge: "Traditional",
    isNew: false
  },
  { 
    id: "LW003", 
    name: "South Sudan Laawah - Classic", 
    category: "Laawah", 
    color: "Mixed", 
    price: 2500, 
    sizes: ["Standard"],
    images: [],
    badge: "Traditional",
    isNew: false
  },
  { 
    id: "LW004", 
    name: "South Sudan Laawah - Premium", 
    category: "Laawah", 
    color: "Mixed", 
    price: 2500, 
    sizes: ["Standard"],
    images: [],
    badge: "Premium",
    isNew: true
  },
];

// DOM Elements
const els = {
  year: document.getElementById("year"),
  grid: document.getElementById("productGrid"),
  filterCategory: document.getElementById("filterCategory"),
  filterColor: document.getElementById("filterColor"),
  filterSize: document.getElementById("filterSize"),
  sortSelect: document.getElementById("sortSelect"),
  search: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  cartModal: document.getElementById("cartModal"),
  cartItems: document.getElementById("cartItems"),
  cartTotal: document.getElementById("cartTotal"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartSubtitle: document.getElementById("cartSubtitle"),
  cartCount: document.getElementById("cartCount"),
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  checkoutBtn: document.getElementById("checkoutBtn"),
  stickyCartBar: document.getElementById("stickyCartBar"),
  stickyCartCount: document.getElementById("stickyCartCount"),
  stickyCartTotal: document.getElementById("stickyCartTotal"),
  stickyCheckoutBtn: document.getElementById("stickyCheckoutBtn"),
  viewerModal: document.getElementById("viewerModal"),
  viewerImg: document.getElementById("viewerImg"),
  viewerTitle: document.getElementById("viewerTitle"),
  viewerSubtitle: document.getElementById("viewerSubtitle"),
  viewerPrice: document.getElementById("viewerPrice"),
  viewerAddBtn: document.getElementById("viewerAddBtn"),
  closeViewerBtn: document.getElementById("closeViewerBtn"),
  viewerPrev: document.getElementById("viewerPrev"),
  viewerNext: document.getElementById("viewerNext"),
  viewerDots: document.getElementById("viewerDots"),
  heroTrack: document.getElementById("heroTrack"),
  heroDots: document.getElementById("heroDots"),
  categoryNav: document.getElementById("categoryNav"),
  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toastMessage"),
  loadMoreBtn: document.getElementById("loadMoreBtn"),
  helpBtn: document.getElementById("helpBtn"),
  helpMenu: document.getElementById("helpMenu"),
  helpWaBtn: document.getElementById("helpWaBtn"),
  featWaBtn: document.getElementById("featWaBtn"),
  whatsappOrderBtn: document.getElementById("whatsappOrderBtn"),
  waFloat: document.getElementById("waFloat"),
};

// Initialize
els.year.textContent = new Date().getFullYear();

// WhatsApp Links
const makeWaLink = (text) => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

if (els.featWaBtn) {
  els.featWaBtn.href = makeWaLink("Hi Winchester Graphics, I want the Featured South Sudan FIBA Jersey (Kshs. 1,500).");
}

if (els.whatsappOrderBtn) {
  els.whatsappOrderBtn.href = makeWaLink("Hi Winchester Graphics, I'd like to ask about your products.");
}

if (els.helpWaBtn) {
  els.helpWaBtn.href = makeWaLink("Hi Winchester Graphics, I need help placing an order.");
}

if (els.waFloat) {
  els.waFloat.href = makeWaLink("Hi Winchester Graphics, I'd like to place an order.");
}

// Cart Management
const CART_KEY = "wg_cart_v2";
let currentCategory = "all";
let displayedCount = 8;

const loadCart = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
};

const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

let cart = loadCart();

const cartCount = () => cart.reduce((sum, i) => sum + i.qty, 0);
const cartTotal = () => cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

// Toast Notification
const showToast = (message) => {
  els.toastMessage.textContent = message;
  els.toast.classList.add("show");
  setTimeout(() => els.toast.classList.remove("show"), 3000);
};

// Cart UI Updates
const updateCartUi = () => {
  const count = cartCount();
  const total = cartTotal();
  
  els.cartCount.textContent = count;
  els.cartTotal.textContent = formatKsh(total);
  els.cartSubtotal.textContent = formatKsh(total);
  els.cartSubtitle.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  
  // Sticky bar
  if (count > 0) {
    els.stickyCartBar.classList.add("visible");
    els.stickyCartCount.textContent = `${count} item${count !== 1 ? 's' : ''}`;
    els.stickyCartTotal.textContent = formatKsh(total);
  } else {
    els.stickyCartBar.classList.remove("visible");
  }
};

// Modal Controls
const openCart = () => {
  els.cartModal.setAttribute("aria-hidden", "false");
  renderCart();
};

const closeCart = () => els.cartModal.setAttribute("aria-hidden", "true");

// Help Menu
const toggleHelp = () => {
  const isOpen = els.helpMenu.getAttribute("aria-hidden") === "false";
  els.helpMenu.setAttribute("aria-hidden", isOpen ? "true" : "false");
};

const closeHelp = () => els.helpMenu.setAttribute("aria-hidden", "true");

if (els.helpBtn) {
  els.helpBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleHelp();
  });
}

document.addEventListener("click", (e) => {
  if (els.helpMenu && !els.helpMenu.contains(e.target) && !els.helpBtn.contains(e.target)) {
    closeHelp();
  }
});

els.helpMenu?.querySelectorAll("[data-help-close]").forEach(a => {
  a.addEventListener("click", closeHelp);
});

// Product Viewer
let viewer = { product: null, images: [], index: 0 };

const openViewer = (product) => {
  const imgs = product.images?.length ? product.images : ["assets/placeholder.jpg"];
  viewer = { product, images: imgs, index: 0 };
  
  els.viewerTitle.textContent = product.name;
  els.viewerSubtitle.textContent = `${product.category} • ${product.color}`;
  els.viewerPrice.textContent = formatKsh(product.price);
  els.viewerModal.setAttribute("aria-hidden", "false");
  renderViewer();
};

const closeViewer = () => els.viewerModal.setAttribute("aria-hidden", "true");

const renderViewer = () => {
  els.viewerImg.src = viewer.images[viewer.index];
  els.viewerImg.alt = viewer.product.name;
  
  els.viewerDots.innerHTML = viewer.images.map((img, i) => `
    <button class="viewer-thumb ${i === viewer.index ? "active" : ""}" data-thumb="${i}" type="button" aria-label="View image ${i + 1}">
      <img src="${img}" alt="">
    </button>
  `).join("");
  
  els.viewerDots.querySelectorAll("[data-thumb]").forEach(btn => {
    btn.addEventListener("click", () => {
      viewer.index = Number(btn.dataset.thumb);
      renderViewer();
    });
  });
};

// Viewer Navigation
if (els.viewerPrev) {
  els.viewerPrev.addEventListener("click", () => {
    viewer.index = (viewer.index - 1 + viewer.images.length) % viewer.images.length;
    renderViewer();
  });
}

if (els.viewerNext) {
  els.viewerNext.addEventListener("click", () => {
    viewer.index = (viewer.index + 1) % viewer.images.length;
    renderViewer();
  });
}

// Add from viewer
if (els.viewerAddBtn) {
  els.viewerAddBtn.addEventListener("click", () => {
    if (viewer.product) {
      addToCart(viewer.product, viewer.product.sizes[0]);
      closeViewer();
    }
  });
}

// Filter Functions
const unique = (arr) => Array.from(new Set(arr));

const populateFilterOptions = () => {
  const colors = unique(PRODUCTS.map(p => p.color)).sort();
  const sizes = unique(PRODUCTS.flatMap(p => p.sizes)).sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
  
  els.filterColor.innerHTML = '<option value="all">All Colors</option>' + 
    colors.map(c => `<option value="${c}">${c}</option>`).join("");
  
  els.filterSize.innerHTML = '<option value="all">All Sizes</option>' + 
    sizes.map(s => `<option value="${s}">${s}</option>`).join("");
};

const matchesFilters = (p) => {
  const col = els.filterColor.value;
  const size = els.filterSize.value;
  const q = (els.search.value || "").trim().toLowerCase();
  
  if (currentCategory !== "all" && p.category !== currentCategory) return false;
  if (col !== "all" && p.color !== col) return false;
  if (size !== "all" && !p.sizes.includes(size)) return false;
  
  if (q) {
    const hay = `${p.name} ${p.category} ${p.color} ${p.id}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }
  
  return true;
};

const sortProducts = (products) => {
  const sortType = els.sortSelect?.value || "featured";
  
  switch(sortType) {
    case "price-low":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...products].sort((a, b) => b.price - a.price);
    case "newest":
      return [...products].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    default:
      return products;
  }
};

// Render Products
const renderProducts = () => {
  let filtered = PRODUCTS.filter(matchesFilters);
  filtered = sortProducts(filtered);
  
  const toShow = filtered.slice(0, displayedCount);
  const hasMore = filtered.length > displayedCount;
  
  els.grid.innerHTML = toShow.map(p => {
    const sizeOptions = p.sizes.map(s => `<option value="${s}">${s}</option>`).join("");
    const thumbImg = p.images?.[0] || "assets/placeholder.jpg";
    const badgeHtml = p.badge ? `<span class="thumb-badge ${p.isNew ? 'new' : ''}">${p.badge}</span>` : "";
    const newBadge = p.isNew && !p.badge ? `<span class="thumb-badge new">New</span>` : "";
    
    return `
      <article class="card" data-id="${p.id}">
        <div class="thumb">
          ${badgeHtml}${newBadge}
          <img src="${thumbImg}" alt="${p.name}" loading="lazy">
          <button class="thumb-quickview" data-view="${p.id}">Quick View</button>
        </div>
        <div class="card-body">
          <div class="card-header">
            <h3 class="title">${p.name}</h3>
          </div>
          <div class="meta">
            <span class="badge">${p.color}</span>
            <span class="price">${formatKsh(p.price)}</span>
          </div>
          <div class="card-actions">
            <select class="size-select" data-size-for="${p.id}">
              ${sizeOptions}
            </select>
            <button class="add-btn" data-add="${p.id}" type="button">Add to Cart</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  
  // Load more button
  if (els.loadMoreBtn) {
    els.loadMoreBtn.style.display = hasMore ? "inline-flex" : "none";
    els.loadMoreBtn.textContent = `Load More (${filtered.length - displayedCount} remaining)`;
  }
  
  // Event Listeners
  els.grid.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const p = PRODUCTS.find(x => x.id === btn.dataset.view);
      openViewer(p);
    });
  });
  
  els.grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button") || e.target.closest("select")) return;
      const p = PRODUCTS.find(x => x.id === card.dataset.id);
      openViewer(p);
    });
  });
  
  els.grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.add;
      const p = PRODUCTS.find(x => x.id === id);
      const sizeSel = els.grid.querySelector(`[data-size-for="${id}"]`);
      const size = sizeSel?.value || p.sizes[0];
      
      addToCart(p, size);
    });
  });
};

// Load More
if (els.loadMoreBtn) {
  els.loadMoreBtn.addEventListener("click", () => {
    displayedCount += 8;
    renderProducts();
  });
}

// Category Navigation
if (els.categoryNav) {
  els.categoryNav.querySelectorAll("[data-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      els.categoryNav.querySelectorAll("[data-cat]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      displayedCount = 8;
      renderProducts();
    });
  });
}

// Cart Functions
const addToCart = (product, size) => {
  const key = `${product.id}__${size}`;
  const existing = cart.find(i => i.key === key);
  
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      category: product.category,
      color: product.color,
      size,
      price: product.price,
      qty: 1,
      image: product.images?.[0] || "assets/placeholder.jpg"
    });
  }
  
  saveCart(cart);
  updateCartUi();
  showToast(`${product.name} added to cart`);
};

const renderCart = () => {
  if (!cart.length) {
    els.cartItems.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started</p>
      </div>
    `;
    updateCartUi();
    return;
  }
  
  els.cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-thumb">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-details">
        <div class="cart-name">${item.name}</div>
        <div class="cart-meta">${item.color} • Size ${item.size}</div>
        <div class="cart-price">${formatKsh(item.price * item.qty)}</div>
        <div class="cart-controls">
          <div class="qty">
            <button type="button" data-dec="${item.key}">−</button>
            <div>${item.qty}</div>
            <button type="button" data-inc="${item.key}">+</button>
          </div>
          <button class="remove-btn" type="button" data-remove="${item.key}">Remove</button>
        </div>
      </div>
    </div>
  `).join("");
  
  els.cartItems.querySelectorAll("[data-inc]").forEach(btn => {
    btn.addEventListener("click", () => changeQty(btn.dataset.inc, 1));
  });
  
  els.cartItems.querySelectorAll("[data-dec]").forEach(btn => {
    btn.addEventListener("click", () => changeQty(btn.dataset.dec, -1));
  });
  
  els.cartItems.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => removeItem(btn.dataset.remove));
  });
  
  updateCartUi();
};

const changeQty = (key, delta) => {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.key !== key);
  }
  
  saveCart(cart);
  renderCart();
};

const removeItem = (key) => {
  cart = cart.filter(i => i.key !== key);
  saveCart(cart);
  renderCart();
};

// Checkout
const checkout = () => {
  if (!cart.length) return;
  
  const lines = [
    "Hi Winchester Graphics, I'd like to order:",
    "",
    ...cart.map(i => `• ${i.name} (${i.color}) - Size ${i.size} x${i.qty} = ${formatKsh(i.price * i.qty)}`),
    "",
    `*Total: ${formatKsh(cartTotal())}*`,
    "",
    "Name: ",
    "Location: ",
    "Preferred delivery time: "
  ];
  
  window.open(makeWaLink(lines.join("\n")), "_blank");
};

// Event Listeners
els.openCartBtn?.addEventListener("click", openCart);
els.closeCartBtn?.addEventListener("click", closeCart);
els.stickyCheckoutBtn?.addEventListener("click", openCart);
els.cartModal?.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeCart();
});
els.clearCartBtn?.addEventListener("click", () => {
  cart = [];
  saveCart(cart);
  renderCart();
});
els.checkoutBtn?.addEventListener("click", checkout);
els.closeViewerBtn?.addEventListener("click", closeViewer);
els.viewerModal?.addEventListener("click", (e) => {
  if (e.target?.dataset?.viewerClose === "true") closeViewer();
});

// Filter Events
["change", "input"].forEach(evt => {
  els.filterColor?.addEventListener(evt, () => { displayedCount = 8; renderProducts(); });
  els.filterSize?.addEventListener(evt, () => { displayedCount = 8; renderProducts(); });
  els.sortSelect?.addEventListener(evt, renderProducts);
  els.search?.addEventListener(evt, () => { displayedCount = 8; renderProducts(); });
});

els.searchBtn?.addEventListener("click", () => { displayedCount = 8; renderProducts(); });

// Hero Carousel - Manual Only (No Auto-rotation)
let heroIndex = 0;
let heroInterval;

const updateHero = () => {
  if (!els.heroTrack) return;
  const slides = els.heroTrack.querySelectorAll(".hero-slide");
  if (!slides.length) return;
  
  const slideWidth = slides[0].offsetWidth;
  els.heroTrack.style.transform = `translateX(-${heroIndex * slideWidth}px)`;
  
  // Update dots
  if (els.heroDots) {
    els.heroDots.innerHTML = Array.from(slides).map((_, i) => `
      <button class="hero-dot ${i === heroIndex ? 'active' : ''}" data-hero-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join("");
    
    els.heroDots.querySelectorAll("[data-hero-dot]").forEach(dot => {
      dot.addEventListener("click", () => {
        heroIndex = Number(dot.dataset.heroDot);
        updateHero();
      });
    });
  }
};

const nextHero = () => {
  const slides = els.heroTrack?.querySelectorAll(".hero-slide");
  if (!slides?.length) return;
  heroIndex = (heroIndex + 1) % slides.length;
  updateHero();
};

const prevHero = () => {
  const slides = els.heroTrack?.querySelectorAll(".hero-slide");
  if (!slides?.length) return;
  heroIndex = (heroIndex - 1 + slides.length) % slides.length;
  updateHero();
};

// Touch/Swipe for Hero
(() => {
  const carousel = document.getElementById("heroCarousel");
  if (!carousel || !els.heroTrack) return;
  
  let startX = 0;
  let isDown = false;
  
  const onDown = (e) => {
    isDown = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  };
  
  const onUp = (e) => {
    if (!isDown) return;
    isDown = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextHero();
      else prevHero();
    }
  };
  
  carousel.addEventListener("touchstart", onDown, {passive: true});
  carousel.addEventListener("touchend", onUp);
  carousel.addEventListener("mousedown", onDown);
  window.addEventListener("mouseup", onUp);
})();

// Initialize
window.addEventListener("resize", updateHero);
window.addEventListener("load", () => {
  populateFilterOptions();
  renderProducts();
  updateHero();
  updateCartUi();
});
