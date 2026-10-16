"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';

export function AnimatedProjectLink({ href, ariaLabel, className = 'project-card', transition = false, children }: { href: string; ariaLabel: string; className?: string; transition?: boolean; children: ReactNode }) {
  void transition;
  const [touching, setTouching] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const selectCard = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' || !(event.target instanceof Element)) return;
      const card = event.target.closest('.project-card');
      if (card) setTouching(card === linkRef.current);
    };
    document.addEventListener('pointerdown', selectCard, { passive: true });
    return () => document.removeEventListener('pointerdown', selectCard);
  }, []);
  return <a ref={linkRef} className={className} href={href} aria-label={ariaLabel}
    data-touching={touching ? 'true' : undefined}
  >{children}</a>;
}
