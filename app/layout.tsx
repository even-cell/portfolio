import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ImageProtection } from './image-protection';
import { SmoothScroll } from './smooth-scroll';
import { PageTransition } from './page-transition';
import 'lenis/dist/lenis.css';
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
  title: 'EVEN ZHANG 张译文｜DESIGNER',
  description: '张译文（Even Zhang）的个人设计作品集，关注视觉、体验与空间。',
  openGraph: {
    title: 'EVEN ZHANG 张译文｜DESIGNER',
    description: '关注视觉、体验与空间的个人设计作品集。',
    type: 'website',
    images: [{ url: '/og-even-zhang.png', width: 1200, height: 628, alt: 'EVEN ZHANG DESIGN PORTFOLIO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVEN ZHANG 张译文｜DESIGNER',
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
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=JSON.parse(sessionStorage.getItem('portfolio-page-transition')||'null');sessionStorage.removeItem('portfolio-page-transition');if(t&&t.path===location.pathname&&Date.now()-t.time<15000&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.pageArrival='true'}catch(e){}` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImageProtection />
        <SmoothScroll />
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
