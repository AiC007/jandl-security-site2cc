import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateOrganizationSchema } from '@/lib/schema';
import { COMPANY_INFO } from '@/lib/utils';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.website),
  title: {
    default: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`
  },
  description: "Professional security system installation and maintenance across Essex & Greater London. Burglar alarms, CCTV, fire alarms, access control. Same-day surveys, 24/7 support.",
  keywords: [
    "security systems",
    "burglar alarms",
    "CCTV installation", 
    "fire alarms",
    "access control",
    "Essex security",
    "Greater London security",
    "alarm monitoring",
    "security lighting",
    "emergency locksmith"
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: "Professional security systems across Essex & Greater London. Free surveys, same-day service, 24/7 emergency support.",
    url: COMPANY_INFO.website,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Security Systems Installation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: "Professional security systems across Essex & Greater London. Free surveys, same-day service, 24/7 emergency support.",
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: COMPANY_INFO.website,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
