# CyberHopeAI Website

Official website for CyberHopeAI - Building an Intelligence Operating System for Human Potential through Precognition OS™.

🌐 **Live at**: [https://www.cyberhopeai.com](https://www.cyberhopeai.com)

## 🎯 About CyberHopeAI

CyberHopeAI has raised $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/cyberhope-ai/cyberhope.ai-website.git
cd cyberhope.ai-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with Turbopack
- **Runtime**: React 19.1.0
- **Styling**: [Tailwind CSS 3.4.0](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Forms**: [Web3Forms](https://web3forms.com/)
- **Language**: TypeScript

## 📁 Project Structure

```
cyberhope.ai-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── technology/        # Technology showcase (Skills Intelligence Engine)
│   ├── mission/           # Mission statement
│   ├── thesis/            # Investment thesis
│   ├── investors/         # Investor relations (Crunchbase link)
│   ├── contact/           # Contact form (Web3Forms integrated)
│   ├── press/             # Press releases section
│   │   ├── page.tsx       # Press listing page
│   │   ├── series-a/      # Series A announcement (alternate URL)
│   │   └── series-a-announcement/  # Primary Series A press release
│   └── api/               # API routes
│       └── contact/       # Contact form handler
├── components/            # React components
│   ├── Header.tsx         # Navigation with Press link
│   └── Footer.tsx         # Footer (© 2025)
├── public/               # Static assets
├── styles/               # Global styles
├── AGENT_INSTRUCTIONS.md # Comprehensive AI agent guidelines
└── README.md            # This file
```

## 🔧 Development

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Git for version control

### Local Development

1. **Start the development server:**
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

2. **Before committing changes:**
```bash
# Run build to catch errors
npm run build

# Check TypeScript
npm run typecheck

# Lint code
npm run lint
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📝 Content Management

### Press Release System

#### CRITICAL: Crunchbase Validation Requirements

For press releases to be accepted by Crunchbase:

1. **Use `NewsArticle` schema type** (NOT `PressRelease`)
2. **Include comprehensive structured data**
3. **Add semantic HTML5 markup**
4. **Include author information** (Rick Barretto)
5. **Add proper dateline** (Indianapolis, IN)

#### Creating a New Press Release

1. **Create folder structure:**
```bash
mkdir app/press/your-press-release-slug
```

2. **Use the template from AGENT_INSTRUCTIONS.md**
   - Complete metadata with noindex for stealth mode
   - NewsArticle schema type
   - Semantic HTML markup
   - Author and publisher details

3. **Update press listing** at `app/press/page.tsx`

4. **Test and deploy:**
```bash
npm run build
git add .
git commit -m "Add press release: [title]"
git push
```

#### Current Press Releases

- **Series A Announcement** (Crunchbase validated ✅)
  - Primary: `/press/series-a-announcement`
  - Alternative: `/press/series-a`
  - Both configured with noindex for stealth mode

### Updating Content

All content is in TypeScript/React files:

1. Locate the page in `app/` directory
2. Edit the TSX file
3. Handle special characters:
   - Use `&apos;` for apostrophes
   - Use `&ldquo;` and `&rdquo;` for quotes
   - Use `&mdash;` for em dashes
4. Test with `npm run dev`
5. Build with `npm run build`
6. Commit and push to deploy

## 🚀 Deployment

### Automatic Deployment

The site automatically deploys to Vercel when changes are pushed to the `main` branch.

- **Production URL**: https://www.cyberhopeai.com
- **Vercel URL**: https://cyberhopeai-website.vercel.app
- **Build Time**: ~1-2 minutes
- **Deploy Status**: Check GitHub commits for ✅

### DNS Configuration

Domain configured with:
- **A Record**: `76.76.21.21` (Vercel IP)
- **Domain Provider**: Squarespace
- **SSL**: Automatic via Vercel

## 📧 Contact Form System

### Web3Forms Integration

- **Service**: Web3Forms
- **Access Key**: `c6756334-43b4-408d-9242-f925a7e6176c`
- **API Route**: `/api/contact/route.ts`
- **Fields**: name, organization, email, interest, message
- **Validation**: Server-side validation included

### Testing Contact Form

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#00D9FF` (Cyan - CyberHopeAI brand)
- **Secondary**: Sky blue variants
- **Background**: `#0D0F13` (Dark)
- **Text**: White/Gray scale

### Typography
- System fonts via Tailwind CSS
- Consistent heading hierarchy (h1 → h6)
- `prose` class for article content
- Responsive font sizing

### Component Standards
- Mobile-first responsive design
- Hover states and transitions
- Accessible focus indicators
- Dark theme throughout

## 📊 SEO & Metadata

### Required for Every Page

```typescript
export const metadata: Metadata = {
  title: 'Page Title - CyberHopeAI',
  description: 'Comprehensive description',
  keywords: 'relevant, keywords',
  authors: [{ name: 'CyberHopeAI' }],
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter cards */ }
}
```

### Press Release Requirements

- NewsArticle schema (Crunchbase requirement)
- Author: Rick Barretto
- Dateline: Indianapolis, IN
- Media contact footer
- Semantic HTML5 tags
- Noindex for stealth mode

## 🔒 Security & Privacy

- **Stealth Mode**: Press releases use `noindex` tags
- **Privacy-First**: No cookies or tracking
- **Secure Forms**: Web3Forms handles data securely
- **HTTPS**: Enforced via Vercel
- **No Client Secrets**: All sensitive data server-side

## 🤖 For AI Agents

### CRITICAL: Read AGENT_INSTRUCTIONS.md First!

The `AGENT_INSTRUCTIONS.md` file contains:
- Step-by-step update procedures
- Press release templates
- Common error fixes
- Deployment guidelines
- Content standards

### Key Rules for AI Agents

1. **ALWAYS run `npm run build` before committing**
2. **Use `&apos;` for apostrophes in TSX**
3. **Keep `noindex` tags on press releases**
4. **Use Precognition OS™ and SkillDNA™ with ™ symbols**
5. **Never modify Web3Forms access key**
6. **Test locally before pushing**

### Common AI Agent Tasks

```bash
# Update content
npm run dev  # Test locally
npm run build  # Check for errors
git add .
git commit -m "Update: [description]"
git push  # Auto-deploys

# Add press release
mkdir app/press/new-release
# Copy template from AGENT_INSTRUCTIONS.md
npm run build
git add . && git commit -m "Add press release: [title]"
git push
```

## 🐛 Troubleshooting

### Build Errors

**Unescaped entities:**
```tsx
// ❌ Wrong
<p>It's Rick's company</p>

// ✅ Correct
<p>It&apos;s Rick&apos;s company</p>
```

**TypeScript errors:**
```bash
npm run typecheck
```

### Deployment Issues

1. Check Vercel dashboard for logs
2. Ensure pushing to `main` branch
3. Verify GitHub integration active
4. Check build logs for errors

### Contact Form Not Working

1. Verify Web3Forms key in `/api/contact/route.ts`
2. Check API route response
3. Test with curl command above
4. Check Web3Forms dashboard

## 📚 Documentation

- **Agent Guide**: `AGENT_INSTRUCTIONS.md` - Comprehensive AI instructions
- **This File**: `README.md` - Project overview
- **Inline Comments**: Throughout codebase
- **Next.js Docs**: https://nextjs.org/docs

## 📞 Support

- **GitHub Issues**: Bug reports and features
- **Email**: rick@cyberhopeai.com
- **Crunchbase**: https://www.crunchbase.com/organization/cyberhopeai
- **Investment**: See [/investors](https://www.cyberhopeai.com/investors)

## 🏆 Recent Achievements

- ✅ **Series A Funding**: $500K from Joan Young Trust
- ✅ **Crunchbase Listed**: Official profile active
- ✅ **Clean Migration**: From Plasmic/Firebase to Next.js
- ✅ **Stealth Mode**: Press releases with controlled visibility
- ✅ **Web3Forms**: Contact form integration complete

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (Performance)
- **Build Time**: < 30 seconds
- **Deploy Time**: 1-2 minutes
- **Page Load**: < 2 seconds
- **Static Generation**: Most pages pre-rendered

## 📜 License

© 2025 CyberHopeAI. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com/)
- Forms by [Web3Forms](https://web3forms.com/)
- Funded by Joan Young Trust

---

**Series A Announcement**: [Read the press release](https://www.cyberhopeai.com/press/series-a-announcement)

**Live Website**: [www.cyberhopeai.com](https://www.cyberhopeai.com)

**For AI Agents**: See `AGENT_INSTRUCTIONS.md` for detailed guidelines