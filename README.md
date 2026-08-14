# Thimma Kannan (திம்மா கண்ணன்) - Traditional Ceremony Materials Website

A modern, devotional, mobile-first website for **Thimma Kannan**, providing complete ritual and pooja material packages for Poojavaagal, Homams, House Warming (Gruhapravesam), Weddings, Funeral/Dead-Kaariyam, and traditional South Indian Hindu ceremonies.

🌐 **Live Website**: [https://tksanthosh001.github.io/thimma-kannan/](https://tksanthosh001.github.io/thimma-kannan/)

---

## 🌟 Key Features

- **Tamil Default Language**: Opens in natural, professional Tamil by default, with an instant toggle to English (`தமிழ் | EN`).
- **Light Devotional Theme**: Default warm devotional palette (Cream, Maroon, Saffron, Gold) with seamless toggle to Dark Mode (`☀️ Light / 🌙 Dark`).
- **WhatsApp Direct Ordering**: Form submissions, service enquiries, package quotes, and item price inquiries automatically format pre-filled WhatsApp messages.
- **"Give Us the List" Workflow**: Step-by-step guidance allowing customers to share their priest/Iyer handwritten list photos directly on WhatsApp.
- **Respectful Funeral/Karumathi Section**: Dignified, compassionate material package breakdown for 16th-day Karumathi and traditional funeral rites.
- **Product Catalogue**: Searchable and filterable ritual materials with "Contact us for price" functionality.
- **Advanced SEO & JSON-LD**: Comprehensive dynamic metadata, OpenGraph tags, Canonical URLs, `sitemap.xml`, `robots.txt`, and LocalBusiness schema markup.
- **100% Mobile-First Responsive**: Optimized viewports from 320px to desktop display.

---

## ⚙️ Centralized Configuration Architecture

Business details and ritual metadata are centralized to allow updates without editing UI code:

- **Shop Info & WhatsApp**: `src/config/business.js`
- **Services & Categories**: `src/config/services.js`
- **Ceremony Packages**: `src/config/packages.js`
- **Materials Catalogue**: `src/config/materials.js`
- **Tamil Translations**: `src/locales/ta.js`
- **English Translations**: `src/locales/en.js`

To update the shop phone or WhatsApp number, modify `src/config/business.js`:

```javascript
export const businessConfig = {
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'contact@thimmakannan.com',
  address: { ... }
};
```

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/TKSanthosh001/thimma-kannan.git
cd thimma-kannan

# Install dependencies
npm install

# Start local dev server
npm run dev
```

---

## 📦 Production Build & Deployment

### Production Build

```bash
npm run build
```

The production output will be generated inside the `dist/` directory.

### Manual GitHub Pages Deploy

```bash
npm run deploy
```

### GitHub Actions Automated Deploy

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages upon pushing to the `main` branch.

To enable GitHub Pages in your GitHub repository:
1. Navigate to **Settings > Pages** in your GitHub repository.
2. Under **Source**, select **GitHub Actions** (or `gh-pages` branch).
3. The site will automatically deploy at `https://tksanthosh001.github.io/thimma-kannan/`.

---

## 🔍 Google Search Console Setup

1. Log into [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://tksanthosh001.github.io/thimma-kannan/`.
3. Verify ownership via HTML tag or URL prefix method.
4. Submit sitemap: `https://tksanthosh001.github.io/thimma-kannan/sitemap.xml`.
5. Use "URL Inspection" on the homepage to request indexing.

---

## 📜 License

© 2026 Thimma Kannan. All Rights Reserved.
