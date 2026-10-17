'use client';

import { useEffect } from 'react';

export function ImageProtection() {
  useEffect(() => {
    const isImage = (target: EventTarget | null) => target instanceof Element && Boolean(target.closest('img, .protected-image, .detail-image, .detail-hero-frame, .simple-project-cover, .project-card, .next-image, .contact-wordmark'));
    const preventImageAction = (event: Event) => {
      if (isImage(event.target)) event.preventDefault();
    };

    document.addEventListener('contextmenu', preventImageAction);
    document.addEventListener('dragstart', preventImageAction);
    return () => {
      document.removeEventListener('contextmenu', preventImageAction);
      document.removeEventListener('dragstart', preventImageAction);
    };
  }, []);

  return null;
}
