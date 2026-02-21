const WHATSAPP_NUMBER = "254793669941";

const formatKsh = (n) => `Kshs. ${n.toLocaleString("en-KE")}`;

const PRODUCTS = [
  { id:"FJ001", name:"Football Jersey 001", category:"Football Jersey", color:"Green", price:1200, sizes:["M","L","XL"] },
  { id:"FJ002", name:"Football Jersey 002", category:"Football Jersey", color:"White", price:1200, sizes:["M","L","XL"] },

  { id:"BJ001", name:"Basketball Jersey 001", category:"Basketball Jersey", color:"White", price:1500, sizes:["L","XL","XXL"],
  images:[
    "assets/bj001-3.jpeg",
    "assets/bj001-1.jpeg",
    "assets/bj001-2.jpeg"
    ]
  },
 
  { id:"BJ002", name:"Basketball Jersey 002", category:"Basketball Jersey", color:"Black", price:1500, sizes:["L","XL","XXL"] },

  { id:"TS001", name:"T-Shirt 001", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },
  { id:"TS002", name:"T-Shirt 002", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },
  { id:"TS003", name:"T-Shirt 003", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },
  { id:"TS004", name:"T-Shirt 004", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },
  { id:"TS005", name:"T-Shirt 005", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },
  { id:"TS006", name:"T-Shirt 006", category:"T-Shirt", color:"Mixed", price:1200, sizes:["S","M","L","XL","XXL"] },

  { id:"LW001", name:"Laawah 001", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"] },
  { id:"LW002", name:"Laawah 002", category:"Laawah", color:"Mixed", price:2500, sizes:["Standard"] },
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
};

els.year.textContent = new Date().getFullYear();

const makeWaLink = (text) => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

els.whatsappHeaderBtn.href = makeWaLink("Hi Winchester Graphics, I’d like to place an order.");
els.whatsappOrderBtn.href = makeWaLink("Hi Winchester Graphics, I’d like to ask about your products.");

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

els.scrollBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
});

const updateCartUi = () => {
  els.cartCount.textContent = cartCount();
  els.cartTotal.textContent = formatKsh(cartTotal());
};

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
<article class="card">
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

populateFilterOptions();
renderProducts();

updateCartUi();









