import type { ImgHTMLAttributes } from 'react';
import imageManifest from './optimized-images.json';
import heroManifest from './hero-images.json';

const images = imageManifest as Record<string, { mobile: string; desktop: string }>;

export function PortfolioImage({ hero = false, ...props }: ImgHTMLAttributes<HTMLImageElement> & { hero?: boolean }) {
  const source = typeof props.src === 'string' ? props.src.split('?')[0] : '';
  const heroImage = (heroManifest as Record<string, { src: string; srcSet: string; sizes: string }>)[source];
  if (hero && heroImage) return <img {...props} {...heroImage} decoding="async" />;
  const variants = images[source];
  if (!variants) return <img {...props} />;
  return <picture style={{ display: 'contents' }}>
    <source media="(max-width: 700px)" srcSet={variants.mobile} />
    <img {...props} src={variants.desktop} srcSet={undefined} sizes={undefined} decoding="async" />
  </picture>;
}
