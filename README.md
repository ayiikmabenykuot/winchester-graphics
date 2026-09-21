# Winchester Graphics — online shop

A static shop for **Winchester Graphics**: printed t-shirts, South Sudan football and basketball jerseys, and **laawah** (traditional dress worn by South Sudanese ladies). Customers browse, preview an item, add it to the cart, create an account, and check out to our **WhatsApp Business** number.

- **WhatsApp Business:** +254 793 669 941
- **Live site (GitHub Pages):** https://ayiikmabenykuot.github.io/winchester-graphics/
- **Stack:** plain HTML, CSS and JavaScript. No build step, no dependencies.

---

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page structure: utility bar, header, hero carousel, categories, spotlight, catalog, services, how-to-order, sign-up band, footer, modals |
| `styles.css` | All styling and the colour palette |
| `app.js` | Hero slides, product data, filters, product preview, cart, accounts, WhatsApp checkout |
| `README.md` | This file |

---

## Layout (modelled on the Dove homepage)

| Dove homepage | Winchester Graphics |
| --- | --- |
| Navy utility strip with brand links + “Find Dove Near You / Sign Up & Save” | Navy utility strip with brand links + “Find Us on WhatsApp / Sign Up & Save” |
| White header: logo, nav, underlined search box | White header: logo, category nav, search, account, help, cart |
| Split hero: photo left, copy right, italic serif line, rectangular CTA, arrows + dots | Same, rotating through three collections |
| Grey “EXPLORE DOVE” band | Grey “EXPLORE WINCHESTER GRAPHICS” band |
| Round category tiles | Football / Basketball / T-Shirts / Laawah tiles |
| Featured product split panel | South Sudan FIBA World Cup Jersey spotlight |
| Product range listing | Filterable product grid |
| Brand purpose band | “Printed with care, made to last” |
| Tips & articles | Our services + How to order |
| Sign-up band | “Create an account for faster orders” |
| Multi-column footer | Shop / Account & help / Contact |

---

## Images — add your own

Every image falls back to a Winchester Graphics placeholder until you add a real photo, so the site never looks broken. Create this structure and drop your photos in:

```
assets/
  img/
    hero-1.jpg            # hero slide 1 (jerseys)
    hero-2.jpg            # hero slide 2 (laawah)
    hero-3.jpg            # hero slide 3 (t-shirts)
    cat-football.jpg      # category tile
    cat-basketball.jpg    # category tile
    cat-tshirts.jpg       # category tile
    cat-laawah.jpg        # category tile
    ssd-fiba-wc.jpg       # featured spotlight photo
    products/
      ssd-fiba-wc.jpg
      ssd-fiba-away.jpg
      ssd-home-kit.jpg
      ssd-away-kit.jpg
      ssd-bball-tee-white.jpg
      ssd-bball-tee-black.jpg
      ssd-bball-tank-black.jpg
      ssd-bball-tank-white.jpg
      twic-east-tee.jpg
      get-the-bag-tee.jpg
      laawah-palm.jpg
      laawah-custom.jpg
```

Square photos (1000×1000) work best for products; wide photos (1600×1200 or larger) for the hero slides.

---

## Editing the hero slides

Top of `app.js`, in `SLIDES`:

```js
{
  image: "assets/img/hero-1.jpg",
  eyebrow: "New this season",
  script: "Official kits",          // italic serif line
  title: "South Sudan jerseys",
  text: "Bright Stars football and basketball jerseys…",
  ctaLabel: "Shop now",
  cat: "basketball"                  // category the button opens
}
```

The carousel rotates every 7 seconds and stops for visitors who prefer reduced motion.

---

## Editing products

In `app.js`, edit the `PRODUCTS` array:

```js
{
  id: "ssd-fiba-wc",                 // unique, no spaces
  name: "South Sudan FIBA World Cup Jersey",
  category: "basketball",            // football | basketball | tshirts | laawah
  price: 1500,                       // Kenyan shillings
  image: "ssd-fiba-wc.jpg",          // file inside assets/img/products/
  badge: "New",                      // optional red pill
  rating: 4.9, reviews: 67,
  sizes: ["S","M","L","XL","2XL"],
  colors: ["White"],
  added: "2026-09-10",               // used by "Newest" sorting
  featured: true,
  description: "…"
}
```

Prices and product names came from the shop screenshots — please confirm them, and edit the ratings and descriptions to match reality.

---

## Customer accounts

- **Sign Up & Save** appears in the utility bar, the hero, the sign-up band, the footer and the account icon in the header.
- Sign-up collects name, WhatsApp number, optional email, delivery town and a password.
- Once signed in, the header shows “Hi, *name*”, and every WhatsApp order is pre-filled with the customer's name, phone and delivery town.
- Accounts are stored in the visitor's **own browser** (`localStorage`) — this is a front-end convenience, not a server. For real accounts across devices, connect a backend such as Firebase Auth or Supabase and replace the functions in the *ACCOUNTS* section of `app.js`.

---

## Order flow

1. Customer clicks an item → preview with description, price, star rating, sizes, colours and “You may also like”.
2. Add to cart (saved in the browser between visits).
3. **Check out on WhatsApp** opens a chat with `+254793669941` and a ready-written order:

```
*New order — Winchester Graphics*

1. South Sudan FIBA World Cup Jersey
   Size: L | Colour: White
   Qty: 2 x Kshs. 1,500 = Kshs. 3,000

*Total: Kshs. 3,000*

Name: …
Phone: …
Delivery location: …
```

4. We confirm price, payment and delivery on WhatsApp.

To change the number, edit `CONFIG.whatsapp` at the top of `app.js` (digits only, with country code).

---

## Colours

| Token | Value | Used for |
| --- | --- | --- |
| `--navy` | `#001E60` | Headings, buttons, utility bar, bands |
| `--navy-2` | `#0B3C8C` | Hover states |
| `--blue-50` | `#EEF3FB` | Section washes, image wells |
| `--white` | `#FFFFFF` | Page background |
| `--red` | `#D0021B` | NEW badges, cart count, services banner |
| `--wa` | `#128C4A` | WhatsApp buttons only |

---

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Commit `index.html`, `styles.css`, `app.js`, `README.md` and the `assets/` folder to the repository root.
2. **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
3. Your site publishes at `https://ayiikmabenykuot.github.io/winchester-graphics/`.

---

© 2026 Winchester Graphics — Design Beyond Limits
