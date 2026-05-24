# Kairon Technology — v3

Premium institutional website for **Kairon Technology**, a fictional international security and intelligence firm.

## Stack
- HTML5, CSS3, Vanilla JavaScript — no build step required
- Google Fonts (Bebas Neue, Barlow Condensed, Barlow)

## Pages (22 total)

| Page | File |
|------|------|
| Home | index.html |
| About | about.html |
| Services | services.html |
| Operations (hub) | operations.html |
| Operation Sentinel | operation-sentinel.html |
| Project Atlas | project-atlas.html |
| Black Shield Initiative | black-shield.html |
| Team (hub) | team.html |
| Sentinel Unit | sentinel-unit.html |
| Vanguard Unit | vanguard-unit.html |
| Cipher Division | cipher-division.html |
| Phantom Division | phantom-division.html |
| Technology | technology.html |
| Careers | careers.html |
| Newsroom | newsroom.html |
| Contact | contact.html |
| Privacy Policy | privacy.html |
| Terms of Use | terms.html |
| Security Standards | security.html |
| Accessibility | accessibility.html |

## CSS (3 files)
- `css/style.css` — design system, all components, CSS variables
- `css/responsive.css` — breakpoints (desktop / tablet / mobile)
- `css/images.css` — image treatments and lightbox

## JavaScript (4 files)
- `js/theme-toggle.js` — dark/light mode, persisted in localStorage
- `js/language-switcher.js` — 7 languages (EN, PT-BR, PT-PT, ES, ZH, HI, AR)
- `js/components.js` — shared navbar, footer, cookie banner, lightbox
- `js/main.js` — scroll behaviour, modals, counters, lightbox, phantom mode

## Assets required in `assets/images/`

Place all images in `assets/images/` using the exact filenames below:

### Logos
- `logokaironbranco.jpg` — white logo (dark mode navbar/footer)
- `logokaironpreto.jpg` — black logo (light mode)
- `logokaironvermelha.jpg` — red logo (Phantom contexts)
- `logokaironfavicon.jpg` — favicon

### Photos (01–24)
- `01-home-hero-operator.png` through `24-contact-office-entrance.png`

### Banners (25–33)
- `25-home-secondary-banner.jpg`
- `26-about-banner.jpg`
- `27-services-banner.jpg`
- `28-operations-banner.jpg`
- `29-team-banner.png`
- `30-technology-banner.jpeg`
- `31-careers-banner.jpeg`
- `32-newsroom-banner.jpeg`
- `33-contact-banner.jpeg`

### Office Photos (34–51)
- `34-office-london.jpeg` through `51-office-mexico-city.jpeg`

### Phantom Division (52, 57–58)
- `52-team-phantom-division.jpeg`
- `57-phantom-nightvision.jpeg`
- `58-phantom-breach.jpeg`

### Map
- `56-belfast-map.jpeg`

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel
```

Or connect your GitHub repo to Vercel for automatic deploys on push.

## Deploy to GitHub Pages

1. Push repo to GitHub
2. Settings → Pages → Source: `main` branch, root `/`
3. Site live at `https://yourusername.github.io/kairon-technology`

## Local Development

No build step. Open `index.html` directly in a browser.

---

**Kairon Technology — Protecting Tomorrow**
