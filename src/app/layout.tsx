import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, siteMetadata } from '@/lib';
import { Header } from '@/features/layout/header/Header';
import { Footer } from '@/features/layout/footer/Footer';
import { ModalProvider } from '@/providers/welcomeModalProvider';
import { DelayedModal } from '@/components/modals';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: siteMetadata.siteName,
    template: '%s | TAMERDigital',
  },
  openGraph: {
    type: 'website',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    images: [
      {
        url: `${siteMetadata.siteUrl}/default-og-image.webp`,
        width: 1200,
        height: 630,
        alt: siteMetadata.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteMetadata.twitterHandle,
    images: [`${siteMetadata.siteUrl}/default-og-image.webp`],
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  metadataBase: new URL(siteMetadata.siteUrl),
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${bodyFont.className} antialiased transition-all duration-300`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
      >
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <DelayedModal />
        </ModalProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
