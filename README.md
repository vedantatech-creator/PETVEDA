# Vedanta Technologies - PET Blow Moulding & Turnkey Bottling Machinery

Official production web platform for **Vedanta Technologies**, an Indian OEM manufacturer of high-speed Linear Stretch PET Blow Moulding Machines, Automatic Bottling Triblocks, and Turnkey Packaged Drinking Water Plants based in Vasai, Maharashtra.

---

## 🚀 Key Features & Capabilities

- **Machinery Catalog (15 Models):** Fully automatic servo stretch blowers (2K to 8K BPH), semi-automatic blowers, 20L 5-gallon jar blowers, BOPP labelers, and downstream packaging machinery with real Indian OEM technical specifications and indicative pricing.
- **Dynamic Line Sizer & Utility Estimator (`/calculator`):** Interactive utility calculator determining recommended blower models, RFC monoblock filling speeds, industrial RO plants, reciprocating compressor CFM, connected electrical loads (kW), and floor footprints.
- **Bottle Profit & Unit Economics Tool (`/roi`):** Detailed 500ml cost breakdown (₹2.02 ex-factory cost, ₹4.80 wholesale, ₹2.78 margin), interactive volume slider, and 6–9 month plant payback projection.
- **Turnkey Bottling Plant Packages (`/turnkey`):** Standard 40, 60, and 120 BPM packaged drinking water lines and CSD carbonated soda plants with full BIS IS:14543 cleanroom and microbiology laboratory compliance.
- **Interactive CAD Engineering Flow (`/plant-layout`):** 8-stage industrial journey from raw borehole pre-filtration to boxed, palletized finished product.
- **Buyer Decision Guides (`/guides`):** Practical CapEx comparisons between semi-automatic and fully automatic machinery, 20L jar plant setup costs, and laboratory equipment lists.
- **Lead Capture & Direct WhatsApp RFQ:** Pre-filled quotation requests targeting `+91 8850848971` with offline browser storage backup (`vedanta_web_leads`).

---

## 🛠️ Tech Stack & Standards

- **Core Framework:** React 18, Vite 6
- **Routing:** React Router v6 (Multi-Page Architecture with SPA rewrites)
- **Styling:** Tailwind CSS, Custom Industrial Design Tokens
- **Icons & Animation:** Lucide Icons, Framer Motion
- **SEO & Structured Data:** Dynamic JSON-LD Schemas (`Organization`, `LocalBusiness`, `Product`, `WebSite`, `ItemList`, `WebApplication`, `FAQPage`), XML Sitemap, Robots.txt
- **Protocols:** Pure White canvas, zero red color classes, zero emojis, WCAG AA focus rings.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run SSR route tests
node test_routes.mjs

# Build for production
npm run build
```

---

## 🌐 Deployment

### Vercel (Recommended)
This repository includes a [`vercel.json`](./vercel.json) file pre-configured with SPA route rewrites:
1. Import this repository in [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add your custom domain (`vedantatechnologies.in`).

### Netlify / Cloudflare Pages
This repository includes [`public/_redirects`](./public/_redirects) for automatic `/* -> /index.html 200` single-page application routing.
