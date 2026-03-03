# Duo Studio

**Live:** [duo.aliabbaschadar.online](https://duo.aliabbaschadar.online)

A premium creative studio portfolio built with cutting-edge web technologies. Duo Studio showcases beautifully crafted digital brand experiences with smooth animations, immersive interactions, and modern design patterns.



## 🎯 Overview

Duo Studio is a full-stack agency website that demonstrates:
- **Modern Next.js 16** with React 19 and Server Components
- **Smooth animations & interactions** powered by GSAP and Lenis
- **Responsive design** optimized for all devices
- **SEO optimized** with structured data and metadata
- **Performance focused** with optimized assets and lazy loading
- **Custom cursor effects** and interactive UI elements

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Animations** | [GSAP](https://greensock.com/gsap/) + [Lenis](https://lenis.darkroom.engineering) |
| **Runtime** | Node.js with optimal build output |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with responsive breakpoints
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── Hero.tsx             # Hero section with video background
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services showcase
│   ├── Clients.tsx          # Featured clients
│   ├── Works.tsx            # Project portfolio
│   ├── Navbar.tsx           # Navigation bar
│   ├── MobileNav.tsx        # Mobile responsive navigation
│   ├── CustomCursor.tsx     # Custom cursor effect
│   ├── Loader.tsx           # Page loader
│   └── Footer.tsx           # Footer with contact info
└── public/
    └── Content/             # Images, videos, and fonts
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- Bun (recommended) or npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd duo-studio-next

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Run development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site, or visit the live version at [duo.aliabbaschadar.online](https://duo.aliabbaschadar.online).

### Build & Production

```bash
# Build for production
bun run build

# Start production server
bun start
```

## 🎨 Features

- **Immersive Hero Section** - Full-page video background with smooth animations
- **Service Showcase** - Interactive service cards with hover effects
- **Portfolio Display** - Elegant project showcase with filterable works
- **Contact Section** - Email subscription and multiple contact hubs
- **Dark/Light Responsive Design** - Optimized for desktop, tablet, and mobile
- **SEO Optimization** - Metadata, structured data, and sitemap
- **Performance** - Code splitting, image optimization, and caching

## 📱 Responsive Design

The site is fully responsive with optimized breakpoints:
- **Desktop** (1024px+) - Full experience
- **Tablet** (768px - 1023px) - Adapted layout
- **Mobile** (480px - 767px) - Touch-optimized
- **Small Phones** (< 480px) - Minimal layout

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Deploy to Vercel
vercel
```

Or use the Vercel Dashboard for continuous deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on push to main branch

## 📝 Scripts

| Script | Purpose |
|--------|---------|
| `bun dev` | Start development server with hot reload |
| `bun build` | Create optimized production build |
| `bun start` | Run production server |
| `bun lint` | Run ESLint to check code quality |

## 🔍 SEO & Analytics

- ✅ Semantic HTML structure
- ✅ Open Graph meta tags for social sharing
- ✅ Structured data (schema.org)
- ✅ XML sitemap for search engines
- ✅ Mobile-friendly design (responsive)
- ✅ Core Web Vitals optimized

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Animation Library](https://greensock.com/gsap/)
- [Lenis Smooth Scroll](https://lenis.darkroom.engineering)

## 📧 Contact

- **Email:** hello@duo-studio.co
- **Locations:** DC, Maryland, Virginia
- **Social:** Instagram, LinkedIn, Facebook

## 📄 License

This project is private and proprietary to Duo Studio.
