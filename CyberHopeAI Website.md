# CyberHopeAI Website

A modern, production-ready Next.js 14+ website for CyberHopeAI built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling (no custom CSS files)
- **Responsive design** (mobile-first approach)
- **Dark theme** with professional B2B/enterprise look
- **SEO optimized** with proper meta tags
- **Accessibility compliant** (WCAG 2.1)
- **Static generation** (SSG/ISR) where possible
- **AI Agent compatible** with clean, readable code structure

## 📁 Project Structure

```
cyberhopeai-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── investors/         # Investor relations page
│   ├── mission/           # Mission page
│   ├── technology/        # Technology page
│   ├── thesis/            # Investment thesis page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap configuration
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   └── robots.txt         # SEO robots file
├── .env.local             # Environment variables
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Vercel Deployment (Recommended)

1. **Connect to GitHub:**
   - Push code to GitHub repository
   - Connect repository to Vercel

2. **Deploy:**
   - Vercel will automatically deploy on push to main branch
   - Environment variables can be set in Vercel dashboard

3. **Environment Variables:**
   - Copy `.env.local` variables to Vercel dashboard
   - Add production API URLs and keys

### Alternative Deployment Options

- **Netlify:** Compatible with static export
- **AWS Amplify:** Full-stack deployment
- **Docker:** Containerized deployment

## 🎨 Design System

### Colors
- **Primary:** `#38bdf8` (Sky Blue)
- **Background:** `#0D0F13` (Dark)
- **Text:** `#ffffff` (White)
- **Accent:** Various shades of gray and blue

### Typography
- **Font:** Space Grotesk (Google Fonts)
- **Sizes:** Responsive scaling from mobile to desktop

### Components
- **Buttons:** Hover effects and transitions
- **Forms:** Accessible with proper validation
- **Navigation:** Mobile-responsive with hamburger menu

## 📱 Pages Overview

1. **Home (/)** - Hero section with company overview
2. **About (/about)** - Company story and core principles
3. **Technology (/technology)** - Precognition OS details
4. **Mission (/mission)** - Company mission and values
5. **Investors (/investors)** - Investment opportunities
6. **Thesis (/thesis)** - Investment thesis and vision
7. **Contact (/contact)** - Contact form and information

## 🔧 API Routes

### Contact Form (`/api/contact`)
- **Method:** POST
- **Body:** JSON with name, organization, email, interest, message
- **Response:** Success/error status
- **Validation:** Email format and required fields

## 🚀 Performance Optimizations

- **Static Generation:** Most pages are statically generated
- **Image Optimization:** Next.js automatic image optimization
- **Font Loading:** Optimized Google Fonts loading
- **Code Splitting:** Automatic code splitting by Next.js
- **Minification:** Production builds are minified

## ♿ Accessibility Features

- **Semantic HTML:** Proper heading hierarchy and landmarks
- **ARIA Labels:** Screen reader support
- **Keyboard Navigation:** Full keyboard accessibility
- **Color Contrast:** WCAG 2.1 compliant contrast ratios
- **Focus Management:** Visible focus indicators

## 🔍 SEO Features

- **Meta Tags:** Comprehensive meta tags for all pages
- **Open Graph:** Social media sharing optimization
- **Sitemap:** Automatic sitemap generation
- **Robots.txt:** Search engine crawling instructions
- **Structured Data:** Schema markup ready

## 🤖 AI Agent Compatibility

- **Pure React Components:** No proprietary page builders
- **Inline Tailwind Classes:** Easy for AI to modify
- **Standard HTML Structure:** Semantic and predictable
- **No Complex Animations:** Simple, maintainable code
- **Git-Friendly:** Clean file structure and naming

## 🔐 Security Considerations

- **Environment Variables:** Sensitive data in .env files
- **API Validation:** Input validation on all endpoints
- **CORS:** Proper cross-origin request handling
- **Headers:** Security headers in production

## 📝 Development Guidelines

### Code Style
- **TypeScript:** Strict type checking enabled
- **ESLint:** Code linting and formatting
- **Prettier:** Consistent code formatting
- **Components:** Functional components with hooks

### Best Practices
- **Mobile-First:** Design for mobile, enhance for desktop
- **Performance:** Optimize images and minimize JavaScript
- **Accessibility:** Test with screen readers
- **SEO:** Validate meta tags and structured data

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors:**
   - Check TypeScript types
   - Verify import paths
   - Update dependencies

2. **Styling Issues:**
   - Clear browser cache
   - Check Tailwind configuration
   - Verify CSS import order

3. **API Issues:**
   - Check environment variables
   - Verify API route paths
   - Test with curl or Postman

## 📞 Support

For technical support or questions about this implementation:
- Review the code structure and comments
- Check Next.js 14 documentation
- Verify Tailwind CSS configuration

## 📄 License

This project is proprietary to CyberHopeAI. All rights reserved.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
