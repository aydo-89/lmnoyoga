import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from './components/Navigation';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'LMNO',
    template: '%s — LMNO',
  },
  description:
    'Yoga, sound healing, and mindful movement.',
  keywords: [
    'yoga',
    'kundalini yoga',
    'kriya yoga',
    'sound bath',
    'sound healing',
    'wellness',
    'meditation',
    'Twin Cities yoga',
    'Minneapolis yoga',
  ],
  authors: [{ name: 'Liane' }],
  creator: 'Liane',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lmnoyoga.com',
    siteName: 'LMNO',
    title: 'LMNO',
    description: 'Yoga, sound healing, and mindful movement.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="antialiased bg-[#0a0a0a] text-[#f4f4f4]">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
