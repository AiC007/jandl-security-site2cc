# J&L Security Website

Professional security systems installation and maintenance across Essex & Greater London.

## 🚀 Overview

A modern, high-performance website built with Next.js 15 and optimized for local SEO. Features comprehensive service pages, location-specific content, and lead generation forms.

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
jandl-security-site/
├── app/                    # Next.js App Router pages
│   ├── [service]/[location]/  # Dynamic service-location pages (50 pages)
│   ├── api/               # API routes (form submissions)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faqs/              # FAQs page
│   ├── locations/         # Locations page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.txt/        # Robots.txt route
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # Reusable React components
├── lib/                   # Utility functions and data
├── public/               # Static assets
├── content/              # Content files (for CMS)
└── data/                 # Form submissions storage
```

## 🎯 Key Features

### Local SEO Optimization
- **56 total pages**: 6 core pages + 50 service-location combinations
- **Structured data**: Organization, LocalBusiness, Service, FAQ schemas
- **Location-specific content**: Unique content for each area
- **Internal linking**: Related services and nearby areas
- **Mobile-first responsive design**

### Service-Location Pages
Targeting buyer-intent keywords like:
- `burglar-alarm-installation-ilford`
- `fire-alarm-servicing-chelmsford`
- `cctv-installation-romford`

### Lead Generation
- **Quick quote forms** with spam protection
- **WhatsApp integration** with pre-filled messages
- **Phone call CTAs** throughout the site
- **Emergency callout banners**

### Performance
- **Lighthouse 95+ desktop / 85+ mobile** target
- **Image optimization** (WebP/AVIF)
- **Security headers** and best practices
- **Static generation** for fast loading

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone [repository-url]
cd jandl-security-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Environment Variables

Create `.env.local` and configure:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://jandlsecurity.co.uk
NOTIFICATION_EMAIL=info@jandlsecurity.co.uk
```

## 📝 Content Management

### Adding Services
Edit `lib/data.ts` to add new services:

```typescript
export const services: Service[] = [
  {
    id: 'new-service',
    name: 'New Service',
    slug: 'new-service',
    // ... other properties
  }
];
```

### Adding Locations
Update location data in `lib/data.ts`:

```typescript
export const locations: Location[] = [
  {
    id: 'new-location',
    name: 'New Location',
    slug: 'new-location',
    // ... other properties
  }
];
```

### Generating New Service-Location Pages
Add combinations to `serviceLocationMatrix` in `lib/data.ts` and they'll be automatically generated.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Manual Deploy
```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Setup
- Set up Google Analytics 4 tracking
- Configure email service for form submissions
- Update contact information in `lib/utils.ts`

## 📊 SEO Features

### Implemented
- ✅ Comprehensive meta tags and Open Graph
- ✅ Structured data (JSON-LD) on all pages  
- ✅ XML sitemap with all 56 pages
- ✅ Robots.txt with proper directives
- ✅ Human.txt and LLMs.txt
- ✅ Canonical URLs throughout
- ✅ Mobile-first responsive design
- ✅ Performance optimization
- ✅ Security headers

### Next Steps
- [ ] Connect Google Search Console
- [ ] Set up Google My Business integration
- [ ] Add review schema markup
- [ ] Implement local business directory submissions

## 🔧 Customization

### Branding
- Update company info in `lib/utils.ts`
- Replace favicon and logo images in `public/`
- Customize colors in `tailwind.config.ts`

### Contact Forms
Quote form submissions are emailed via Resend from `app/api/quote/route.ts` (see the comment block there for the environment variables).

### Analytics
Google Analytics 4 is integrated. Add your tracking ID to environment variables.

## 📞 Support & Maintenance

### Form Submissions
Check `data/forms/` directory for quote requests. Consider integrating with:
- Email notifications (SendGrid, AWS SES)
- CRM systems (HubSpot, Salesforce)
- Slack/Discord webhooks

### Performance Monitoring
- Use Vercel Analytics for performance insights
- Monitor Core Web Vitals
- Regular Lighthouse audits

### Content Updates
- Service information: Edit `lib/data.ts`
- Company details: Update `lib/utils.ts`
- Page content: Edit individual page files

## 📈 Local SEO Strategy

This site implements a comprehensive local SEO strategy:

1. **Service-Location Matrix**: 50 pages targeting high-value buyer keywords
2. **Local Content**: Specific landmarks, transport links, and area knowledge
3. **Internal Linking**: Strategic linking between related services and locations
4. **Structured Data**: Rich snippets for better search visibility
5. **Mobile Optimization**: Perfect for local search on mobile devices
6. **Fast Loading**: Critical for local search rankings
7. **Contact Information**: Consistent NAP (Name, Address, Phone) across all pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for J&L Security Ltd.

---

**J&L Security** - Professional security systems across Essex & Greater London since 2011.

📞 01708 123456 | 📧 info@jandlsecurity.co.uk | 🌐 jandlsecurity.co.uk