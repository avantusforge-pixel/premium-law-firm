# Premium Law Firm Website - Development Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Setup database
npx prisma migrate dev

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── (pages)/     # Public pages
│   ├── api/         # API endpoints
│   ├── admin/       # Protected admin routes
│   └── layout.tsx   # Root layout with header/footer
├── components/
│   ├── ui/          # Base UI components (Button, Card, etc.)
│   ├── sections/    # Page sections (Hero, PracticeAreas, etc.)
│   ├── layout/      # Header and Footer
│   └── animations.tsx # Framer Motion utilities
├── lib/
│   ├── utils.ts     # Helper functions
│   ├── validation.ts # Zod schemas
│   ├── db.ts        # Prisma client
│   ├── auth.ts      # Auth utilities
│   └── api.ts       # API client
├── types/           # TypeScript definitions
├── data/            # Static data and constants
└── styles/          # Global CSS
```

## 🎨 Design System

### Colors
- **Navy**: `#0f172a` (primary)
- **Gold**: `#d4af37` (accent)
- **Slate**: `#64748b` (secondary)

### Typography
- **Headings**: Plus Jakarta Sans
- **Body**: Inter
- **Code**: JetBrains Mono

## 🔧 Key Features

### Homepage
- Premium hero with animations
- Practice area cards
- Client testimonials
- Case results showcase
- Attorney highlights
- Blog preview
- CTA section

### Pages
- `/` - Homepage
- `/about` - About the firm
- `/attorneys` - Team profiles
- `/practice-areas` - Services
- `/case-results` - Success stories
- `/blog` - Legal insights
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/blog` - Fetch blog posts
- `GET /api/practice-areas` - Practice areas list
- `GET /api/attorneys` - Attorney list
- `GET /api/sitemap.xml` - Dynamic sitemap

## 💾 Database

Run migrations:
```bash
npx prisma migrate dev
```

Access Prisma Studio:
```bash
npx prisma studio
```

## 🎭 Animations

Uses Framer Motion for:
- Page transitions
- Scroll-triggered reveals
- Interactive hover states
- Floating gradients
- Counter animations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Touch-friendly interactions
- Optimized images

## 🔍 SEO

- Dynamic metadata
- XML sitemap
- robots.txt
- JSON-LD schema
- OpenGraph tags
- Twitter cards

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t premium-law-firm .
docker run -p 3000:3000 premium-law-firm
```

## 📊 Performance

- Lighthouse target: 95+
- Core Web Vitals optimized
- Image optimization
- Code splitting
- Server components

## 🔐 Security

- Environment variables protected
- Rate limiting on API routes
- CORS configured
- CSRF protection
- SQL injection prevention (Prisma ORM)

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma ORM](https://www.prisma.io)
- [TypeScript](https://www.typescriptlang.org)

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit PR

## 📄 License

MIT License