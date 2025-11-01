import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eladheller.com'),
  title: {
    default: 'למדתי היום | בלוג מאת אלעד הלר',
    template: '%s | למדתי היום',
  },
  description: 'בלוג על תכנות, טכנולוגיה וכל מה שמעניין אותי',
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
    siteName: 'למדתי היום | בלוג מאת אלעד הלר',
    title: 'למדתי היום | בלוג מאת אלעד הלר',
    description: 'בלוג על תכנות, טכנולוגיה וכל מה שמעניין אותי',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'למדתי היום | בלוג מאת אלעד הלר',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'למדתי היום | בלוג מאת אלעד הלר',
    description: 'בלוג על תכנות, טכנולוגיה וכל מה שמעניין אותי',
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
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-900`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
