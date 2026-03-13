# LMN Yoga Website

Modern, elegant yoga and wellness website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- **6 Pages**: Home, About, Classes & Services, AI Practice Builder, Schedule, Contact
- **AI Practice Builder**: Personalized yoga sequences generated with OpenAI
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS v4
- **SEO Optimized**: Meta tags, sitemap, robots.txt, semantic HTML
- **Smooth Animations**: CSS-only transitions and fade-in effects
- **Warm Color Palette**: Sage greens, cream, gold, earth tones

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your OpenAI API key to `.env.local`:

```
OPENAI_API_KEY=sk-...
```

Get your API key at: https://platform.openai.com/api-keys

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
lmnoyoga/
├── app/
│   ├── about/
│   │   └── page.tsx              # About Liane page
│   ├── classes/
│   │   └── page.tsx              # Classes & Services page
│   ├── contact/
│   │   └── page.tsx              # Contact form page
│   ├── practice-builder/
│   │   └── page.tsx              # AI Practice Builder page
│   ├── schedule/
│   │   └── page.tsx              # Class schedule page
│   ├── api/
│   │   └── practice-builder/
│   │       └── route.ts          # OpenAI API endpoint
│   ├── components/
│   │   ├── Navigation.tsx        # Header navigation
│   │   └── Footer.tsx            # Footer component
│   ├── globals.css               # Global styles & Tailwind
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── sitemap.ts                # Sitemap generation
│   └── robots.ts                 # Robots.txt generation
├── public/                        # Static assets (favicon, images)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Deployment to Vercel

### Prerequisites
- Vercel account (ayden@yardura.com)
- lmnoyoga.com domain

### Deploy Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Set environment variable: `OPENAI_API_KEY=<your-key>`
   - Click "Deploy"

3. **Configure Domain**:
   - In Vercel project settings, go to "Domains"
   - Add `lmnoyoga.com` and `www.lmnoyoga.com`
   - Follow DNS configuration instructions
   - Update your domain's DNS records:
     - Type: `A`, Name: `@`, Value: `76.76.21.21`
     - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

4. **Verify Deployment**:
   - Visit your Vercel preview URL
   - Test all pages and the Practice Builder
   - Once verified, domain should propagate within 24-48 hours

## Environment Variables

Required for production:

- `OPENAI_API_KEY`: OpenAI API key for Practice Builder feature

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (sans-serif), Lora (serif) via next/font
- **AI**: OpenAI API (gpt-4o-mini)
- **Deployment**: Vercel

## Design Philosophy

- **Warm & Calming**: Sage greens, creams, soft golds
- **Generous Whitespace**: Let content breathe
- **Mobile-First**: Responsive from the ground up
- **Subtle Animations**: CSS-only, no JS bloat
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## License

© 2026 LMN Yoga. All rights reserved.
