# Winchester Graphics — Online Catalog

**Design Beyond Limits.** Product catalog for Winchester Graphics: printed t-shirts, South Sudan football and basketball jerseys, and laawah (traditional dress). Customers browse, open any item for a full preview, add to cart, and check out straight to our WhatsApp Business line.

- **WhatsApp checkout:** +254 793 669 941
- **Stack:** plain HTML, CSS and vanilla JavaScript — no build step, no dependencies, no backend.

---

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell: header, search, category nav, hero carousel, filters, catalog, services, footer, modals |
| `styles.css` | All styling. Palette locked to dark blue + white with a small red accent |
| `app.js` | Product data, filtering, sorting, product preview modal, cart, WhatsApp checkout |
| `README.md` | This file |

Put all four in the repository root, then add your photos:

```
/
├─ index.html
├─ styles.css
├─ app.js
├─ README.md
└─ assets/img/products/     ← product photos go here
```

---

## How ordering works

1. Customer browses the catalog (category pills, search, colour/size/sort filters).
2. Clicking any card opens the **product preview**: large photo, category, star rating and review count, price, full description, size and colour choices, quantity, and a **You may also like** row of four similar items.
3. **Add to cart** stores the line in `localStorage`, so the cart survives a page reload.
4. **Checkout on WhatsApp** opens `wa.me/254793669941` with a pre-filled order message:

```
*New order — Winchester Graphics*

1. South Sudan FIBA World Cup Jersey
   Size: L | Colour: White
   Qty: 2 x Kshs. 1,500 = Kshs. 3,000

*Total: Kshs. 3,000*

Name:
Delivery location:
```

The customer fills in name and location, hits send, and you confirm payment and delivery in chat. **Order on WhatsApp** inside the preview does the same thing for a single item, skipping the cart.

---

## Adding and editing products

Everything lives in the `PRODUCTS` array at the top of `app.js`. Copy a block and edit it:

```js
{
  id: "ssd-fiba-wc",                       // unique, no spaces
  name: "South Sudan FIBA World Cup Jersey",
  category: "basketball",                   // football | basketball | tshirts | laawah
  price: 1500,                              // number only, no "Kshs."
  image: "ssd-fiba-wc.jpg",                 // file in assets/img/products/
  badge: "NEW",                             // "" for no badge
  featured: true,                            // shows first under "Featured" sort
  added: "2026-09-10",                      // powers the "Newest" sort
  colors: ["White"],                        // also builds the Colour filter
  sizes: ["S","M","L","XL","2XL"],           // also builds the Size filter
  rating: 4.9,
  reviews: 67,
  description: "..."                        // shown in the product preview
}
```

Notes:

- The **Colour** and **Size** dropdowns are generated from your products automatically — no separate list to maintain.
- Laawah items use `sizes: ["One Size"]` plus an optional `sizeNote` (for example `"One size, full length"`).
- If a photo is missing, a dark blue placeholder with the product name is drawn automatically, so the grid never shows a broken image.

### Product photos

Save them in `assets/img/products/` using the exact `image` file name. Square crops (1:1, about 800×800px) look best in the grid. Keep each file under ~300KB so the page stays fast on mobile data.

---

## Changing the WhatsApp number

One place, at the top of `app.js`:

```js
var CONFIG = {
  whatsapp: "254793669941",   // country code, no + and no spaces
  currency: "Kshs.",
  ...
};
```

Also update the two `wa.me` links in `index.html` (the floating button and the footer) if you change it.

---

## Colour palette

Defined as CSS variables in `styles.css` — change them once and the whole site follows.

| Token | Value | Used for |
| --- | --- | --- |
| `--navy` | `#0A1E3C` | Buttons, headings, active pills, "How to order" band |
| `--navy-2` | `#102D57` | Footer, hover states |
| `--navy-3` | `#1B3E6F` | Borders and gradients on dark surfaces |
| `--white` / `--surface` | `#FFFFFF` | Cards, header, modals |
| `--wash` | `#F4F7FB` | Page background |
| `--red` | `#D22B2B` | NEW badges, cart count, services banner — accent only |
| `--wa` | `#128C4A` | WhatsApp buttons only |

Red is deliberately limited to badges, the cart counter and the services banner. Green appears only on WhatsApp actions, where users expect it.

---

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` by double-clicking also works, since there is no build step.

## Deploy on GitHub Pages

1. Commit the four files plus `assets/` to `main`.
2. Repository **Settings → Pages → Source:** *Deploy from a branch* → `main` / `/ (root)`.
3. Your site goes live at `https://ayiikmabenykuot.github.io/winchester-graphics/`.

---

## Features

- Category pills: All Products, Football, Basketball, T-Shirts, Laawah
- Search across product names, categories and descriptions
- Filters for colour and size, plus sorting by Featured, Newest, Price, Top Rated
- Auto-rotating hero carousel with a Featured This Week card
- Product preview with description, price, star ratings, review count, size/colour options, quantity, and similar items
- Cart drawer with quantity controls, remove, live subtotal, saved in `localStorage`
- WhatsApp checkout with a formatted order message, plus a floating chat button
- Responsive from desktop down to 390px phones; keyboard accessible cards, modals and options

## Ideas for later

- Multiple photos per product (front, back, detail)
- Real customer reviews instead of static ratings
- Stock status per size
- Bulk-order pricing tiers for teams and associations
- Shareable product links, for example `?item=ssd-fiba-wc`
