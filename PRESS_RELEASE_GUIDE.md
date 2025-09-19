# Press Release Creation Guide for CyberHopeAI Website

## ✅ Crunchbase Validation Success

The Series A press release was successfully validated by Crunchbase using these exact specifications. Follow this guide exactly for future press releases.

## 🎯 Critical Requirements for Crunchbase

### MUST HAVE Elements:

1. **Schema Type**: Use `NewsArticle` NOT `PressRelease`
2. **Author**: Must include Rick Barretto as Person with jobTitle
3. **Publisher**: CyberHopeAI with logo
4. **Dateline**: Include city and state (Indianapolis, IN)
5. **Semantic HTML**: Use `itemScope` and `itemProp` attributes
6. **Article Tag**: Wrap content in `<article>` tag
7. **Timestamps**: Use ISO 8601 format (2025-09-09T00:00:00.000Z)

## 📝 Complete Press Release Template

```typescript
import type { Metadata } from 'next'

const SITE_URL = 'https://www.cyberhopeai.com'
const url = `${SITE_URL}/press/your-slug-here`

export const metadata: Metadata = {
  title: 'Your Headline - CyberHopeAI',
  description: 'Your comprehensive description for search engines and social media.',
  keywords: 'CyberHopeAI, your, relevant, keywords, here',
  authors: [{ name: 'Rick Barretto' }],
  publisher: 'CyberHopeAI',
  robots: {
    index: false,  // KEEP THIS for stealth mode
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    url,
    title: 'Your Full Headline Here',
    description: 'Your description for social media sharing',
    siteName: 'CyberHopeAI',
    locale: 'en_US',
    publishedTime: '2025-XX-XXT00:00:00.000Z',
    modifiedTime: '2025-XX-XXT00:00:00.000Z',
    authors: ['Rick Barretto'],
    section: 'Press Release',
    tags: ['your', 'relevant', 'tags'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Headline for Twitter',
    description: 'Your description for Twitter cards',
    site: '@cyberhopeai',
    creator: '@rickbarretto',
  },
}

export default function YourPressRelease() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',  // CRITICAL: Must be NewsArticle
    '@id': url,
    headline: 'Your Full Headline Here',
    alternativeHeadline: 'Your Alternative Headline',
    datePublished: '2025-XX-XXT00:00:00.000Z',
    dateModified: '2025-XX-XXT00:00:00.000Z',
    dateCreated: '2025-XX-XXT00:00:00.000Z',
    dateline: 'Indianapolis, IN',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    url,
    author: {
      '@type': 'Person',
      name: 'Rick Barretto',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'CyberHopeAI'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512
      }
    },
    description: 'Your comprehensive description',
    articleSection: 'Press Release',
    keywords: 'your, keywords, here',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CyberHopeAI',
      url: SITE_URL
    },
    about: {
      '@type': 'Thing',
      name: 'Main Topic',
      description: 'Description of what this is about'
    },
    mentions: [
      {
        '@type': 'Organization',
        name: 'Partner/Investor Name',
        description: 'Their role'
      },
      {
        '@type': 'Product',
        name: 'Precognition OS™',
        description: 'AI platform designed as an intelligence operating system'
      }
    ],
    articleBody: `Full text of your press release here...`
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-invert max-w-none" itemScope itemType="https://schema.org/NewsArticle">
          <header className="mb-8">
            <p className="text-sm text-gray-400 mb-2">FOR IMMEDIATE RELEASE</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" itemProp="headline">
              Your Headline Here
            </h1>
            <p className="text-lg text-gray-400">
              <span itemProp="dateline">Indianapolis, IN</span> – 
              <time dateTime="2025-XX-XX" itemProp="datePublished">Month Day, 2025</time>
            </p>
          </header>

          <div className="text-lg text-gray-300 space-y-6 leading-relaxed" itemProp="articleBody">
            <p>
              <strong>Indianapolis, IN – Month Day, 2025</strong> – Your lead paragraph here...
            </p>

            <p>
              Second paragraph with details...
            </p>

            <blockquote className="border-l-4 border-cyan-400 pl-4 my-8 italic">
              <p className="text-xl text-white">
                &ldquo;Your quote here,&rdquo; said 
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Rick Barretto</span>, 
                  <span itemProp="jobTitle">Founder & CEO</span>
                </span> of CyberHopeAI.
              </p>
            </blockquote>

            <p>
              Additional paragraphs...
            </p>

            <footer className="mt-8 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                <strong>Media contact:</strong> Rick Barretto — 
                <a href="mailto:rick@cyberhopeai.com" className="text-cyan-400">
                  rick@cyberhopeai.com
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Note: This release is intentionally limited in distribution.
              </p>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}
```

## 🚨 Common Mistakes to Avoid

### ❌ DON'T DO THIS:
1. Using `PressRelease` schema type (Crunchbase won't accept it)
2. Missing author information
3. Missing semantic HTML attributes
4. Using plain `<div>` instead of `<article>`
5. Forgetting the dateline
6. Not escaping apostrophes and quotes

### ✅ ALWAYS DO THIS:
1. Use `NewsArticle` schema type
2. Include complete author details
3. Add all semantic HTML5 attributes
4. Wrap in `<article>` tag
5. Include city and state dateline
6. Escape special characters:
   - `'` → `&apos;`
   - `"` → `&ldquo;` or `&rdquo;`
   - `—` → `&mdash;`

## 📋 Step-by-Step Process

### 1. Create the folder:
```bash
mkdir app/press/your-press-release-slug
```

### 2. Create page.tsx:
Copy the template above and customize with your content

### 3. Update press listing page:
Edit `app/press/page.tsx` to add your new release:

```typescript
// Add to the press listing
<div className="mb-12">
  <Link href="/press/your-slug" className="group">
    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary">
      Your Headline
    </h2>
    <p className="text-gray-300 mb-4">
      Your description...
    </p>
    <span className="text-primary">Read Full Announcement →</span>
  </Link>
</div>
```

### 4. Test thoroughly:
```bash
# Test locally
npm run dev
# Visit http://localhost:3000/press/your-slug

# Build to check for errors
npm run build
```

### 5. Deploy:
```bash
git add .
git commit -m "Add press release: [Your Title]"
git push
```

## 🔍 Validation Checklist

Before submitting to Crunchbase, verify:

- [ ] URL is accessible: `https://www.cyberhopeai.com/press/your-slug`
- [ ] Schema type is `NewsArticle` (check page source)
- [ ] Author information present
- [ ] Dateline included
- [ ] Article tag used
- [ ] No build errors
- [ ] Page loads correctly

## 📊 Testing Your Press Release

### Check structured data:
1. Visit: https://validator.schema.org/
2. Enter your URL
3. Verify NewsArticle is detected

### Check meta tags:
1. View page source
2. Verify all meta tags present
3. Check OpenGraph tags

### Test Crunchbase submission:
1. Go to Crunchbase company profile
2. Add news item
3. Paste your URL
4. Should validate immediately

## 🎯 Proven Working URLs

These URLs have been validated by Crunchbase:
- https://www.cyberhopeai.com/press/series-a-announcement ✅
- https://www.cyberhopeai.com/press/series-a ✅

Use these as reference implementations.

## 💡 Pro Tips

1. **Stealth Mode**: Keep `robots: { index: false }` to prevent Google indexing
2. **Consistency**: Always use Rick Barretto as author for authenticity
3. **Dateline**: Always use "Indianapolis, IN" unless announcing from elsewhere
4. **Quotes**: Use smart quotes (`&ldquo;` and `&rdquo;`) for professionalism
5. **Testing**: Always test locally before deploying

## 🆘 Troubleshooting

### Crunchbase says "invalid article":
- Check schema type is NewsArticle
- Verify author information
- Ensure article tag is used
- Check all required fields

### Build errors:
- Escape all apostrophes and quotes
- Check TypeScript syntax
- Run `npm run build` locally

### Page not loading:
- Check folder structure
- Verify file is named `page.tsx`
- Check for syntax errors

---

**Last Updated**: September 2025
**Validated**: Series A announcement accepted by Crunchbase ✅
**Support**: rick@cyberhopeai.com