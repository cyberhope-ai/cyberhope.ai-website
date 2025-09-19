# CyberHopeAI Website - Agent Instructions

## 🚀 Quick Access Information

**Live Website**: https://www.cyberhopeai.com (custom domain)
**Vercel Deployment**: https://cyberhopeai-website.vercel.app
**GitHub Repository**: https://github.com/cyberhope-ai/cyberhope.ai-website

## 🎯 Mission Critical Information

This is the official CyberHopeAI company website. It's a clean Next.js 15.5.3 application deployed on Vercel with automatic GitHub integration. Any push to the main branch automatically deploys to production.

## 📝 Press Release URLs (Crunchbase Validated)

### Primary URLs for External Linking:
- **Series A Announcement**: https://www.cyberhopeai.com/press/series-a-announcement
- **Series A Alternative**: https://www.cyberhopeai.com/press/series-a
- **Press Listing Page**: https://www.cyberhopeai.com/press

### Important Press Release Notes:
- Pages are configured with `noindex` meta tags for stealth mode
- Uses NewsArticle schema (NOT PressRelease) for better validation
- Includes comprehensive structured data for Crunchbase
- All press releases MUST include proper author attribution to Rick Barretto

## 🛠 Technical Stack

```json
{
  "framework": "Next.js 15.5.3",
  "runtime": "React 19.1.0",
  "styling": "Tailwind CSS 3.4.0",
  "deployment": "Vercel",
  "form_service": "Web3Forms",
  "build_tool": "Turbopack"
}
```

## 📁 Project Structure

```
app/
├── page.tsx                      # Homepage
├── about/page.tsx                # About page  
├── technology/page.tsx           # Technology (Skills Intelligence Engine)
├── mission/page.tsx              # Mission page
├── thesis/page.tsx               # Investment thesis
├── investors/page.tsx            # Investor relations (Crunchbase link)
├── contact/page.tsx              # Contact form (Web3Forms integrated)
├── press/
│   ├── page.tsx                  # Press listing page
│   ├── series-a-announcement/    # Primary Series A press release
│   │   └── page.tsx              # (Crunchbase validated)
│   └── series-a/                 # Alternative Series A URL
│       └── page.tsx              # (Also Crunchbase validated)
└── api/
    └── contact/route.ts          # Contact form API endpoint

components/
├── Header.tsx                    # Navigation with Press link
├── Footer.tsx                    # Footer (© 2025)
└── [other components]

public/
└── [static assets]
```

## 🚨 CRITICAL RULES FOR AI AGENTS

### 1. NEVER Break These Rules:
- ✅ ALWAYS run `npm run build` before committing
- ✅ ALWAYS use Precognition OS™ and SkillDNA™ with trademark symbols
- ✅ ALWAYS keep copyright year as 2025
- ✅ NEVER remove the noindex tags from press releases (stealth mode)
- ✅ NEVER change the Web3Forms access key in contact API
- ✅ NEVER create documentation unless explicitly requested

### 2. Build & Deploy Process:
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build to check for errors
npm run build

# 4. Commit and push (auto-deploys to Vercel)
git add .
git commit -m "Your descriptive message"
git push
```

### 3. Common Issues & Fixes:

**Apostrophe/Quote Errors in TSX:**
- Use `&apos;` for apostrophes
- Use `&ldquo;` and `&rdquo;` for quotes
- Use `&mdash;` for em dashes

**Build Errors:**
```bash
# Always check with:
npm run build

# If TypeScript errors:
npm run typecheck

# If linting errors:
npm run lint
```

## 📰 Creating New Press Releases

### Step-by-Step Process:

1. **Create folder structure:**
```bash
mkdir app/press/your-press-release-slug
```

2. **Create page.tsx with this template:**
```typescript
import type { Metadata } from 'next'

const SITE_URL = 'https://www.cyberhopeai.com'
const url = `${SITE_URL}/press/your-press-release-slug`

export const metadata: Metadata = {
  title: 'Your Title - CyberHopeAI',
  description: 'Your description',
  keywords: 'relevant, keywords, here',
  authors: [{ name: 'Rick Barretto' }],
  publisher: 'CyberHopeAI',
  robots: {
    index: false,  // Keep for stealth mode
    follow: false,
    nocache: true,
  },
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    url,
    title: 'Your Title',
    description: 'Your description',
    siteName: 'CyberHopeAI',
    locale: 'en_US',
    publishedTime: '2025-XX-XX',
    authors: ['Rick Barretto'],
  },
}

export default function YourPressRelease() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',  // MUST be NewsArticle for Crunchbase
    '@id': url,
    headline: 'Your headline',
    datePublished: '2025-XX-XX',
    author: {
      '@type': 'Person',
      name: 'Rick Barretto',
      jobTitle: 'Founder & CEO',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: SITE_URL,
    },
    // ... rest of schema
  }

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article itemScope itemType="https://schema.org/NewsArticle">
        {/* Your content */}
      </article>
    </main>
  )
}
```

3. **Update press listing page** (`app/press/page.tsx`) to include new release

4. **Test and deploy:**
```bash
npm run build
git add .
git commit -m "Add new press release: [title]"
git push
```

## 🔧 Key Configurations

### Web3Forms Contact Integration
- **Access Key**: `c6756334-43b4-408d-9242-f925a7e6176c`
- **Location**: `/app/api/contact/route.ts`
- **Emails go to**: Registered email address with Web3Forms

### DNS Configuration (Already Set)
- **A Record**: Points to `76.76.21.21` (Vercel)
- **Domain**: cyberhopeai.com (managed via Squarespace)

### Environment Variables
- Create `.env.local` for any sensitive keys
- Never commit `.env.local` to repository

## 📊 SEO & Metadata Standards

### Every Page Must Have:
```typescript
export const metadata: Metadata = {
  title: 'Page Title - CyberHopeAI',
  description: 'Comprehensive description',
  keywords: 'relevant, keywords',
  authors: [{ name: 'CyberHopeAI' }],
  openGraph: {
    // Complete OG tags
  },
  twitter: {
    // Twitter card data
  }
}
```

### Press Releases Additional Requirements:
- NewsArticle schema (not PressRelease)
- Author must be Rick Barretto
- Include dateline (Indianapolis, IN)
- Add media contact footer
- Use semantic HTML5 tags

## 🎨 Design Standards

### Color Palette:
- Primary: `#00D9FF` (cyan)
- Secondary: Sky blue variants
- Background: Dark (`#0D0F13`)
- Text: White/Gray scale

### Typography:
- Use default Tailwind classes
- Maintain consistent heading hierarchy
- Always use `prose` class for article content

## 🚀 Performance Optimization

### Image Optimization:
- Use Next.js Image component
- Provide width and height attributes
- Use WebP format when possible

### Build Optimization:
- Turbopack enabled for faster builds
- Static generation for most pages
- API routes for dynamic content only

## 📝 Recent Updates (September 2025)

- ✅ Migrated from Plasmic/Firebase to clean Next.js
- ✅ Added Series A press release with Crunchbase validation
- ✅ Implemented Web3Forms contact integration
- ✅ Updated copyright to 2025
- ✅ Added ™ symbols to Precognition OS™ and SkillDNA™
- ✅ Added Press section to navigation
- ✅ Configured noindex for stealth mode on press releases
- ✅ Enhanced SEO with NewsArticle schema
- ✅ Added semantic HTML5 markup for better validation

## 🆘 Troubleshooting

### Build Fails:
```bash
# Check for TypeScript errors
npm run typecheck

# Check for unescaped entities
# Replace ' with &apos;
# Replace " with &ldquo; or &rdquo;
```

### 404 on New Pages:
- Ensure proper file structure in `/app` directory
- File must be named `page.tsx`

### Contact Form Not Working:
- Verify Web3Forms key is correct
- Check API route at `/api/contact/route.ts`

### Deployment Not Updating:
- Check Vercel dashboard for build logs
- Ensure GitHub integration is connected
- Verify branch is set to `main`

## 📞 Support Channels

- **GitHub Issues**: Report bugs or suggest features
- **Email**: rick@cyberhopeai.com
- **Crunchbase**: https://www.crunchbase.com/organization/cyberhopeai

## 🎯 Mission Statement

This website represents CyberHopeAI's vision of building an Intelligence Operating System for Human Potential through Precognition OS™. Every update should maintain the professional, innovative, and purposeful tone that reflects our Series A funding milestone and our commitment to empowering human potential through AI.

---

**Last Updated**: September 2025
**Maintained By**: CyberHopeAI Development Team
**For AI Agents**: Follow these instructions exactly for successful updates