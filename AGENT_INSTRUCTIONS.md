# CyberHopeAI Website - Agent Instructions

## 🚀 Quick Access Information

**Live Website**: https://cyberhopeai-website.vercel.app
**GitHub Repository**: https://github.com/cyberhope-ai/cyberhope.ai-website
**Custom Domain** (pending DNS): https://cyberhopeai.com

## 📝 Series A Press Release URLs

### Primary URL for Crunchbase Linking:
```
https://cyberhopeai-website.vercel.app/press/series-a-announcement
```

### Additional URLs (all serve the same content):
- `/press` - Press listing page with all announcements
- `/press/series-a-announcement` - Full press release with SEO optimization
- `/press/series-a` - Alternative URL (redirects to main announcement)

## 🛠 How to Update the Website

### Prerequisites
1. Clone the repository: `git clone https://github.com/cyberhope-ai/cyberhope.ai-website.git`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev` (visit http://localhost:3000)

### Making Changes
1. **Edit existing pages** in `/app` directory
2. **Components** are in `/components` directory
3. **Always test locally** before pushing: `npm run build`
4. **Commit and push** to automatically deploy via Vercel

### Important Files & Locations
```
app/
├── page.tsx                      # Homepage
├── about/page.tsx                # About page  
├── technology/page.tsx           # Technology (Skills Intelligence Engine)
├── mission/page.tsx              # Mission page
├── thesis/page.tsx               # Investment thesis
├── investors/page.tsx            # Investor relations (has Crunchbase link)
├── contact/page.tsx              # Contact form (Web3Forms integrated)
├── press/
│   ├── page.tsx                  # Press listing page
│   └── series-a-announcement/    
│       └── page.tsx              # Series A press release
└── api/
    └── contact/route.ts          # Contact form API (sends emails)

components/
├── Header.tsx                    # Navigation header (includes Press link)
└── Footer.tsx                    # Footer (© 2025)
```

## 🔑 Key Features Implemented

1. **Series A Press Release**
   - Full press release with proper formatting
   - SEO metadata for Google indexing
   - Structured data (JSON-LD) for search engines
   - Social sharing buttons
   - Crunchbase links integrated

2. **Contact Form**
   - Fully functional with Web3Forms
   - Sends emails to registered email
   - No backend required

3. **Trademarks**
   - Precognition OS™ 
   - SkillDNA™
   - Automatically added throughout site

4. **SEO Optimization**
   - All pages have proper metadata
   - OpenGraph tags for social sharing
   - Sitemap.xml auto-generated

## 📊 Adding New Press Releases

To add a new press release:

1. Create new folder in `/app/press/[slug]/`
2. Add `page.tsx` with this template:

```typescript
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Title - CyberHopeAI',
  description: 'Your description',
  openGraph: {
    title: 'Your Title',
    description: 'Your description',
    type: 'article',
    publishedTime: '2025-XX-XX',
  },
};

export default function YourPressRelease() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Your content here */}
      </div>
    </div>
  );
}
```

3. Update `/app/press/page.tsx` to add it to the listing

## 🚨 Important Notes

1. **Automatic Deployment**: Any push to `main` branch auto-deploys to Vercel
2. **Build Time**: ~1-2 minutes for changes to go live
3. **Contact Form**: Emails go to the Web3Forms registered email
4. **DNS**: Custom domain requires A record pointing to `76.76.21.21`

## 📧 Contact Form Configuration

The contact form uses Web3Forms with this access key:
```
c6756334-43b4-408d-9242-f925a7e6176c
```

Located in: `/app/api/contact/route.ts`

## 🔗 External Links

- **Crunchbase**: https://www.crunchbase.com/organization/cyberhopeai
- **Press Release URL for Crunchbase**: https://cyberhopeai-website.vercel.app/press/series-a-announcement

## 💡 Tips for AI Agents

1. **Always run `npm run build`** before pushing to catch errors
2. **Use proper TypeScript types** - the project uses TypeScript
3. **Follow existing code patterns** - check similar pages for consistency
4. **Test responsive design** - site must work on mobile
5. **Keep SEO in mind** - update metadata for new pages

## 🆘 Troubleshooting

- **Build fails**: Check for TypeScript errors, missing imports
- **404 on new pages**: Ensure proper file structure in `/app` directory
- **Contact form not working**: Check Web3Forms key is correct
- **Deployment not updating**: Check Vercel dashboard for build logs

## 📝 Recent Updates (Sept 2025)

- Added Series A press release page
- Created press/news section
- Added Press link to navigation
- Integrated Web3Forms for contact
- Updated copyright to 2025
- Added ™ symbols to Precognition OS™ and SkillDNA™
- Added Crunchbase link to investors page

---

This website is deployed via Vercel with automatic GitHub integration. Any agent with access to the GitHub repository can make updates that will automatically deploy to production.