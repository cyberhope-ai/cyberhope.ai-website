# CyberHope.ai Official Website

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://app.netlify.com/sites/cyberhope-ai-website/deploys)

**Enterprise AI platform leveraging Google Cloud infrastructure for scalable, secure technology solutions.**

[🌐 Live Website](https://cyberhope.ai) • [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start) • [🤝 Contributing](#contributing)

</div>

---

## 🎯 Overview

The **CyberHope.ai Official Website** serves as the primary marketing and information platform for the CyberHope ecosystem. Built with modern web technologies, it delivers a professional, responsive, and engaging experience that showcases our AI-powered solutions, technologies, and real-world applications.

### ✨ Key Highlights

- **Enterprise-Grade Performance**: Optimized for speed, SEO, and accessibility
- **Modern Architecture**: Next.js 14 with App Router and TypeScript
- **Content Management**: Integrated Sanity CMS for dynamic content
- **Professional Design**: Responsive UI/UX with Tailwind CSS and Framer Motion
- **Production Ready**: Deployed on Netlify with CI/CD integration

---

## 🛠 Technology Stack

### **Core Framework**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - User interface library

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### **Content Management**
- **[Sanity CMS](https://www.sanity.io/)** - Headless content management
- **[Sanity Studio](https://www.sanity.io/studio)** - Visual content editor
- **[@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url)** - Image optimization

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

### **Deployment & Hosting**
- **[Netlify](https://www.netlify.com/)** - Deployment platform
- **[Netlify Functions](https://www.netlify.com/products/functions/)** - Serverless functions
- **[Netlify Forms](https://www.netlify.com/products/forms/)** - Form handling

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js 18+** (LTS recommended) - [Download](https://nodejs.org/)
- **npm or yarn** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyberhope-ai/cyberhope.ai-website.git
   cd cyberhope.ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NODE_ENV=development
   
   # Sanity CMS Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   SANITY_API_TOKEN=your_api_token
   
   # Optional: Analytics & Monitoring
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

---

## 📁 Project Structure

```
cyberhope.ai-website/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   ├── contact/                  # Contact page
│   ├── studio/                   # Sanity Studio
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── sections/                 # Page sections
│   ├── nav.tsx                   # Navigation
│   └── theme-provider.tsx        # Theme context
├── lib/                          # Utility libraries
│   ├── sanity.ts                 # Sanity client config
│   ├── sanity-queries.ts         # GROQ queries
│   └── utils.ts                  # Helper functions
├── hooks/                        # Custom React hooks
├── public/                       # Static assets
├── sanity/                       # Sanity CMS schemas
├── styles/                       # Additional styles
├── netlify/                      # Netlify functions
├── netlify.toml                  # Netlify configuration
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

### Development Workflow

1. **Feature Development**
   ```bash
   # Create a new feature branch
   git checkout -b feature/your-feature-name
   
   # Make your changes
   # Test locally with npm run dev
   
   # Build and test production build
   npm run build
   npm run start
   ```

2. **Code Quality**
   ```bash
   # Run linting
   npm run lint
   
   # Fix linting issues
   npm run lint --fix
   
   # Type checking
   npm run type-check
   ```

3. **Content Management**
   - Access Sanity Studio at `/studio`
   - Manage content, images, and site settings
   - Preview changes in real-time

---

## 🚀 Deployment

### Production Deployment (Netlify)

The website is automatically deployed to Netlify when changes are pushed to the main branch.

1. **Automatic Deployment**
   - Push to `main` branch triggers deployment
   - Build command: `npm install next-sanity sanity && npm run build`
   - Publish directory: `.next`

2. **Manual Deployment**
   ```bash
   # Build the project
   npm run build
   
   # Deploy to Netlify (requires Netlify CLI)
   netlify deploy --prod --dir=.next
   ```

3. **Environment Variables**
   
   Configure the following in Netlify:
   ```env
   NEXT_PUBLIC_SITE_URL=https://cyberhope.ai
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   SANITY_API_TOKEN=your_api_token
   ```

### Local Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 🎨 Features

### **Core Features**
- ✅ **Responsive Design** - Mobile-first, adaptive layouts
- ✅ **SEO Optimized** - Meta tags, structured data, sitemaps
- ✅ **Performance** - Core Web Vitals optimized
- ✅ **Accessibility** - WCAG 2.1 AA compliant
- ✅ **Dark Mode** - System preference aware

### **Content Features**
- ✅ **Dynamic Content** - Sanity CMS integration
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Form Handling** - Netlify Forms integration
- ✅ **Contact System** - Professional inquiry handling

### **Technical Features**
- ✅ **TypeScript** - Full type safety
- ✅ **Modern CSS** - Tailwind CSS utilities
- ✅ **Animations** - Framer Motion effects
- ✅ **Code Quality** - ESLint and Prettier

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Performance**: Check Core Web Vitals
- [ ] **Accessibility**: Screen reader compatibility
- [ ] **Forms**: Contact form submission
- [ ] **Navigation**: All links work correctly
- [ ] **Content**: Sanity CMS content loads properly

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Sanity Connection Issues**
   ```bash
   # Verify environment variables
   echo $NEXT_PUBLIC_SANITY_PROJECT_ID
   
   # Check Sanity studio access
   npm run studio
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind CSS
   npm run build:css
   
   # Clear browser cache
   # Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
   ```

4. **TypeScript Errors**
   ```bash
   # Run type checking
   npm run type-check
   
   # Check tsconfig.json configuration
   ```

### Getting Help

- 📧 **Technical Support**: [dev@cyberhope.ai](mailto:dev@cyberhope.ai)
- 📚 **Documentation**: [Internal Wiki](https://wiki.cyberhope.ai)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/cyberhope-ai/cyberhope.ai-website/issues)

---

## 🤝 Contributing

We welcome contributions from the development team. Please follow our contribution guidelines:

### Development Process

1. **Fork & Clone**
   ```bash
   git clone https://github.com/cyberhope-ai/cyberhope.ai-website.git
   cd cyberhope.ai-website
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Follow existing code style
   - Add TypeScript types
   - Update documentation as needed

4. **Test Thoroughly**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

5. **Submit Pull Request**
   - Clear description of changes
   - Link to relevant issues
   - Include screenshots for UI changes

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Follow configured rules
- **Prettier**: Code formatting
- **Naming**: Use descriptive, consistent names
- **Comments**: Document complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

<div align="center">

**CyberHope.ai Development Team**

🌐 **Website**: [https://cyberhope.ai](https://cyberhope.ai)  
📧 **Email**: [info@cyberhope.ai](mailto:info@cyberhope.ai)  
💼 **LinkedIn**: [CyberHope AI](https://www.linkedin.com/company/cyberhope-ai)  
🐙 **GitHub**: [cyberhope-ai](https://github.com/cyberhope-ai)

---

**Built with ❤️ by the CyberHope.ai Team**

*Empowering the future through AI innovation*

</div>
