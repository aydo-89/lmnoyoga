# Deployment Guide - LMNO Yoga Website

## Quick Deploy to Vercel

### Prerequisites
- Vercel account: ayden@yardura.com (ayden-1958)
- GitHub repository (or direct upload)
- OpenAI API key for Practice Builder

### Method 1: GitHub Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   # If not already done
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Project settings:
     - **Framework Preset**: Next.js
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Environment Variables**:
   Add the following in Vercel project settings:
   ```
   OPENAI_API_KEY=sk-...your-key-here...
   ```

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /Users/shimpsbugs/.openclaw/workspace/lmnoyoga
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set up production deployment
# - Add OPENAI_API_KEY environment variable when prompted

# Deploy to production
vercel --prod
```

## Domain Configuration

### Add lmnoyoga.com to Vercel

1. In Vercel project settings, go to **Domains**
2. Add custom domain:
   - `lmnoyoga.com`
   - `www.lmnoyoga.com` (optional)

3. Update DNS records at your domain registrar:

   **For apex domain (lmnoyoga.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

4. Vercel will automatically provision SSL certificate
5. Domain should be live within 24-48 hours (usually much faster)

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test Practice Builder AI feature
- [ ] Verify hero video plays on mobile and desktop
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags (view source)
- [ ] Test all navigation links
- [ ] Check sitemap.xml and robots.txt

## Testing Locally Before Deploy

```bash
# Development server
npm run dev
# Visit http://localhost:3000

# Production build test
npm run build
npm start
# Visit http://localhost:3000
```

## Environment Variables Required

Production environment needs:
```
OPENAI_API_KEY=sk-...
```

## Troubleshooting

### Build Fails
- Check `npm run build` locally first
- Verify all dependencies in package.json
- Check Vercel build logs for specific errors

### Practice Builder Not Working
- Verify OPENAI_API_KEY is set in Vercel environment variables
- Redeploy after adding environment variables

### Video Not Loading
- Videos are in `/public/hero-bg.webm` and `/public/hero-bg.mp4`
- Both should be committed to repo
- Check browser console for 404 errors

### Domain Not Resolving
- DNS propagation can take 24-48 hours
- Verify DNS records match Vercel's requirements
- Use [dnschecker.org](https://dnschecker.org) to verify propagation

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Project Issues: Check build logs in Vercel dashboard
