import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'LMN Yoga | Yoga, Sound Baths & Wellness with Liane',
    template: '%s | LMN Yoga',
  },
  description:
    'Transform your practice with expert-led yoga classes, sound bath healing, and personalized wellness sessions in the Twin Cities. Specializing in Kundalini, Kriya, and restorative practices.',
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
    siteName: 'LMN Yoga',
    title: 'LMN Yoga | Yoga, Sound Baths & Wellness',
    description:
      'Transform your practice with expert-led yoga classes, sound bath healing, and personalized wellness sessions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LMN Yoga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMN Yoga | Yoga, Sound Baths & Wellness',
    description:
      'Transform your practice with expert-led yoga classes, sound bath healing, and personalized wellness sessions.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
