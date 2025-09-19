export default function sitemap() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cyberhopeai.com'
  const pages = [
    '/',
    '/about',
    '/mission',
    '/technology',
    '/invest',
    '/thesis',
    '/request',
    '/contact',
    '/press',
    '/press/series-a',
  ]
  return pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'weekly', priority: p === '/' ? 1.0 : 0.7 }))
}

