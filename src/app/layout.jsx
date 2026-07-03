import { Montserrat, Inter, Syne, Albert_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-albert-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Edition Studio — Premium Video Production & Editing',
  description: 'Edition Studio is a creative powerhouse with 1.7M+ followers. We combine elite post-production artistry with growth strategy to deliver high-impact, scroll-stopping content for brands and creators.',
  keywords: 'video editing, VFX, color grading, motion graphics, Edition Studio, creative agency',
  icons: {
    icon: 'https://res.cloudinary.com/dsmuedwc4/image/upload/v1781097624/8xu9bffzypcnvu9bxvc1mrionbi_ltvlon.png',
  },
  openGraph: {
    title: 'Edition Studio — Premium Video Production & Editing',
    description: 'Elite video editing & production studio. 2,992+ projects delivered. Trusted by leading brands.',
    images: ['https://res.cloudinary.com/dsmuedwc4/image/upload/v1781097640/wil1p7ffmsglt9u8osbu9jtlnby_kcv8dp.jpg'],
    type: 'website',
    url: 'https://editionstudio.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edition Studio — Premium Video Production & Editing',
    description: 'Elite video editing & production studio. 2,992+ projects delivered.',
    images: ['https://res.cloudinary.com/dsmuedwc4/image/upload/v1781097641/zqwjalxuwhcee1sfo5tvslt6sgm_lnkofk.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${inter.variable} ${syne.variable} ${albertSans.variable} font-inter bg-bg-primary text-white antialiased`}>
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
