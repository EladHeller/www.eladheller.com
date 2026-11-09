import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eladheller.com'),
  title: {
    default: 'אלעד הלר | פרויקטים וכתיבה',
    template: '%s | אלעד הלר',
  },
  description: 'פרויקטים בתוכנה, כלים לניתוח נתונים, אוטומציות וכתיבה על בעיות מעניינות בפיתוח.',
  keywords: ['תכנות', 'פיתוח', 'ווב', 'javascript', 'react', 'next.js', 'טכנולוגיה'],
  authors: [{ name: 'אלעד הלר' }],
  creator: 'אלעד הלר',
  publisher: 'אלעד הלר',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.eladheller.com',
    siteName: 'אלעד הלר | פרויקטים וכתיבה',
    title: 'אלעד הלר | פרויקטים וכתיבה',
    description: 'פרויקטים בתוכנה, כלים לניתוח נתונים, אוטומציות וכתיבה על בעיות מעניינות בפיתוח.',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'אלעד הלר | פרויקטים וכתיבה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אלעד הלר | פרויקטים וכתיבה',
    description: 'פרויקטים בתוכנה, כלים לניתוח נתונים, אוטומציות וכתיבה על בעיות מעניינות בפיתוח.',
    images: ['/preview.png'],
    creator: '@eladheller',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
