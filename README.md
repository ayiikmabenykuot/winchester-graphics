# Winchester Graphics — website files (v3)

Static site: no build step, no frameworks. Upload the files to your repo root
(`ayiikmabenykuot/winchester-graphics`) and GitHub Pages serves them as-is.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `category.html` | Product listing page (one page, driven by the URL) |
| `product.html` | Single product page (driven by the URL) |
| `styles.css` | All styling for all three pages |
| `app.js` | All data + behaviour for all three pages |
| `README.md` | This file |

Replace the old `index.html`, `styles.css` and `app.js` with these, and add the
two new pages.

## What changed in this version

1. **Hero** — full-bleed photo, curved bottom edge, copy on the right (Dove style),
   with a square SHOP NOW button and a 3-slide carousel.
2. **Limited edition** — new full-screen section directly above “Featured this week”.
   Its photo is `assets/img/limited-edition.jpg`.
3. **All products grid removed from the home page.** In its place there are now
   **four full-screen category showcases** (Football, Basketball, T-Shirts, Laawah),
   each with a photo, description, **Shop now** button and a curved bottom.
4. **Shop now → `category.html?cat=…`** which lists every product in that category
   with photos, filters and sorting.
5. **Clicking a product → `product.html?id=…`** with description, **“No ratings yet”**,
   size/colour choice, quantity, add to cart, WhatsApp order and **Similar products**.
6. **Seen on social** — 5 video slots for your own clips.
7. **Mobile** — everything re-flows for phones: hamburger menu, stacked sections,
   2-up product grid, swipeable social rail, full-width buttons.

Ratings are shown as “No ratings yet” everywhere; there is no star rating and no
rating sort.

## Photos and videos you need to add

Create these folders in the repo: `assets/img/`, `assets/img/products/`, `assets/video/`.
Anything missing shows a light blue placeholder instead of breaking the layout.

**`assets/img/`** (landscape, 1600×1000 or larger)
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` — hero carousel
- `limited-edition.jpg` — the limited edition t-shirt
- `cat-football.jpg`, `cat-basketball.jpg`, `cat-tshirts.jpg`, `cat-laawah.jpg` — the four showcases
- `ssd-fiba-wc.jpg` — featured-this-week photo

**`assets/img/products/`** (square, 1000×1000)
`ssd-fiba-wc.jpg`, `ssd-fiba-away.jpg`, `ssd-home-kit.jpg`, `ssd-away-kit.jpg`,
`ssd-bball-tee-white.jpg`, `ssd-bball-tee-black.jpg`, `ssd-bball-tank-black.jpg`,
`ssd-bball-tank-white.jpg`, `twic-east-tee.jpg`, `get-the-bag-tee.jpg`,
`laawah-palm.jpg`, `laawah-custom.jpg`

**`assets/video/`** (vertical 9:16, keep each under ~10 MB)
- `social-1.mp4` … `social-5.mp4`
- `social-1.jpg` … `social-5.jpg` — the still shown before each clip plays

Tip: keep photos under ~400 KB each (resize to 1600px wide, save at ~75% quality)
so the site stays fast on phones.

## Editing content

Everything you edit lives at the top of `app.js`:

- `CONFIG` — WhatsApp number (`254793669941`), currency, email.
- `SLIDES` — the three hero slides (image, headline, text, button link).
- `CATEGORIES` — the four full-screen showcases (photo, wording, Shop now link).
- `PRODUCTS` — every product. To add one, copy a line and change the fields:

```js
{ id: "my-new-tee", name: "My New Tee", category: "tshirts", price: 1200,
  image: "my-new-tee.jpg", badge: "New", sizes: ["S","M","L","XL"],
  colors: ["White"], added: "2026-09-20", featured: false,
  desc: "Short description shown on the product page." }
```

`id` must be unique and is what appears in the product URL. `category` must be one
of `football`, `basketball`, `tshirts`, `laawah`.

## Orders

Cart and checkout open WhatsApp at **+254 793 669 941** with the order written out
(items, sizes, colours, quantities, total). Accounts are stored in the visitor’s own
browser only — they pre-fill the order message; they are not a real server login and
no data reaches you until the customer sends the WhatsApp message.

## Run it locally

```bash
cd winchester-graphics
python3 -m http.server 8000
# open http://localhost:8000
```

Use a local server rather than double-clicking the file, so `category.html?cat=…`
links behave exactly as on GitHub Pages.

## Deploy

Commit the files to the `main` branch → Settings → Pages → Branch `main`, folder `/root`.
Live at https://ayiikmabenykuot.github.io/winchester-graphics/
