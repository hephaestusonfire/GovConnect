# GovConnect

A premium website for **GovConnect** — strategic consultancy bridging governance, compliance, and sustainability between corporates, startups, and the Indian government.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Framer Motion** (animations)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Optional: create a `.env.local` file and add `GEMINI_API_KEY` if you use Gemini-related features.

---

## Project Structure

```
GovConnect/
├── App.tsx              # Root layout and section order
├── index.html           # HTML entry
├── index.tsx            # React entry
├── vite.config.ts       # Vite config
├── tsconfig.json        # TypeScript config
├── types.ts             # Shared types
├── components/          # UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── Mission.tsx
│   ├── Services.tsx
│   ├── TrustSection.tsx
│   ├── Testimonials.tsx
│   ├── Blog.tsx
│   ├── BlogDetail.tsx
│   ├── Footer.tsx
│   ├── WhatsAppFloat.tsx
│   └── ui/
└── data/
    └── blogData.ts      # Blog content
```

---

## Features

- Responsive layout (mobile, tablet, desktop)
- Scroll-linked expertise section with staggered triggers
- Blog with full articles
- Initiatives dropdown (e.g. Syntaxium)
- Floating WhatsApp contact
- Glass-style navbar with blur on scroll

---

## Production & SEO

The site is production-ready. The build outputs to `dist/` with:

- **SEO:** Meta tags, Open Graph, Twitter Card, canonical URL, JSON-LD (Organization, WebSite, ProfessionalService)
- **Indexing:** `robots.txt` and `sitemap.xml` in `public/` (copied to `dist/`), pointing to `https://govconnect.consulting/`
- **Assets:** Favicon at `public/favicon.ico`; optional: add `public/og-image.png` (1200×630) for social previews

After deploy, submit `https://govconnect.consulting/sitemap.xml` in Google Search Console and request indexing for the homepage.

---

## License

Proprietary — GovConnect / All Compliances Solutions.
