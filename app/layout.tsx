import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ImageProtection } from './image-protection';
import { PageTransition } from './page-transition';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '张译文 EVEN ZHANG｜设计师作品集',
  description: '张译文（Even Zhang）的个人设计作品集，关注视觉、体验与空间。',
  openGraph: {
    title: '张译文 EVEN ZHANG｜设计师作品集',
    description: '关注视觉、体验与空间的个人设计作品集。',
    type: 'website',
    images: [{ url: '/og-even-zhang.png', width: 1200, height: 628, alt: 'EVEN ZHANG DESIGN PORTFOLIO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '张译文 EVEN ZHANG｜设计师作品集',
    description: '关注视觉、体验与空间的个人设计作品集。',
    images: ['/og-even-zhang.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImageProtection />
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
