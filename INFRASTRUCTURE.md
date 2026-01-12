# CyberHope Infrastructure Documentation

> Last Updated: January 2026

## Overview

This document outlines the hosting, DNS, and deployment infrastructure for CyberHope websites. This "triangle" setup provides low-cost, scalable website hosting with version control and automated deployments.

---

## cyberhope.ai (Main Website)

| Component | Details |
|-----------|---------|
| **Domain Registrar** | GoDaddy |
| **Nameservers** | `ns73.domaincontrol.com`, `ns74.domaincontrol.com` (GoDaddy) |
| **DNS Management** | GoDaddy |
| **A Record (IP)** | `75.2.60.5` (Vercel) |
| **Source Code** | GitHub: https://github.com/cyberhope-ai/cyberhope.ai-website |
| **Website Hosting** | Vercel (auto-deploys from GitHub) |

### Deployment Flow
```
GitHub Repository → Vercel (auto-build & deploy) → GoDaddy DNS → Live Site
```

---

## cyberhopeai.com (Parent Domain)

| Component | Details |
|-----------|---------|
| **Domain Registrar** | GoDaddy (original) |
| **Nameservers** | Google Domains / Squarespace* |
| **A Record (IP)** | `76.76.21.21` (Vercel) |

*Note: Squarespace acquired Google Domains, so `ns-cloud-a1.googledomains.com` etc. are now managed via Squarespace interface.

---

## skilldna.cyberhopeai.com (SkillDNA Subdomain)

| Component | Details |
|-----------|---------|
| **DNS Management** | Squarespace (via parent domain cyberhopeai.com) |
| **CNAME Record** | `cname.manus.space` |
| **IPs (via Manus/Cloudflare)** | `104.19.168.112`, `104.19.169.112` |
| **Website Hosting** | Manus |

---

## Visual Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        GoDaddy                              │
│                   (Original Registrar)                      │
└─────────────────┬───────────────────────┬───────────────────┘
                  │                       │
                  ▼                       ▼
┌─────────────────────────┐   ┌─────────────────────────────┐
│     cyberhope.ai        │   │      cyberhopeai.com        │
│   DNS: GoDaddy          │   │   DNS: Squarespace/Google   │
│   IP: 75.2.60.5         │   │   IP: 76.76.21.21           │
└───────────┬─────────────┘   └─────────────┬───────────────┘
            │                               │
            ▼                               ▼
┌─────────────────────────┐   ┌─────────────────────────────┐
│        Vercel           │   │  skilldna.cyberhopeai.com   │
│   (GitHub auto-deploy)  │   │  CNAME: cname.manus.space   │
│                         │   │  Host: Manus                │
└───────────┬─────────────┘   └─────────────────────────────┘
            │
            ▼
┌─────────────────────────┐
│        GitHub           │
│ cyberhope-ai/           │
│ cyberhope.ai-website    │
└─────────────────────────┘
```

---

## Cost Breakdown

| Service | Cost |
|---------|------|
| GoDaddy domains | ~$12-20/year each |
| GitHub | Free |
| Vercel | Free tier (100GB bandwidth/month) |
| Squarespace DNS | Included with domain |
| Manus | Varies by plan |

**Total approximate cost:** ~$12-40/year for domain(s) only

---

## How to Add a New Website

### Option 1: New Repository + Vercel (Recommended for static/Next.js sites)

1. Create new GitHub repository under `cyberhope-ai` organization
2. Push your website code
3. Connect repository to Vercel:
   - Go to https://vercel.com
   - Import project from GitHub
   - Vercel auto-detects framework and deploys
4. Add custom domain in Vercel dashboard
5. Update DNS at registrar:
   - A Record: Point to Vercel IP (typically `76.76.21.21`)
   - Or CNAME: Point to `cname.vercel-dns.com`

### Option 2: Subdomain via CNAME

1. Add subdomain in DNS management (GoDaddy or Squarespace)
2. Create CNAME record pointing to hosting provider
3. Configure hosting provider to accept the subdomain

---

## Important Accounts & Logins

| Service | Purpose | URL |
|---------|---------|-----|
| GoDaddy | Domain registrar & DNS for cyberhope.ai | https://godaddy.com |
| Squarespace | DNS management for cyberhopeai.com | https://squarespace.com |
| GitHub | Source code repositories | https://github.com/cyberhope-ai |
| Vercel | Website hosting & deployment | https://vercel.com |
| Manus | SkillDNA hosting | https://manus.app |

---

## Troubleshooting

### DNS Not Resolving
- DNS changes can take up to 48 hours to propagate (usually faster)
- Check with: `dig yourdomain.com +short`
- Verify nameservers: `dig yourdomain.com NS +short`

### Vercel Deployment Failed
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct build scripts
- Verify all dependencies are listed

### SSL Certificate Issues
- Vercel provides free SSL automatically
- If issues, try removing and re-adding domain in Vercel

---

## Useful Commands

```bash
# Check DNS A record
dig cyberhope.ai +short

# Check nameservers
dig cyberhope.ai NS +short

# Check CNAME record
dig subdomain.domain.com CNAME +short

# Full DNS trace
dig +trace cyberhope.ai
```

---

## Contact & Support

- GitHub Issues: https://github.com/cyberhope-ai/cyberhope.ai-website/issues
- Vercel Support: https://vercel.com/support
- GoDaddy Support: https://godaddy.com/help

---

*This documentation is maintained in the GitHub repository to ensure it stays with the codebase.*
