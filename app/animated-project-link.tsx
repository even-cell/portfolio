'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// All homepage cards share one listener; only the previous and next card update.
const touchCards = new Map<HTMLAnchorElement, (selected: boolean) => void>();
let selectedCard: HTMLAnchorElement | null = null;

function selectCard(event: PointerEvent) {
  if (event.pointerType === 'mouse' || !(event.target instanceof Element)) return;
  const card = event.target.closest('.project-card');
  if (!card) return;
  const next = card instanceof HTMLAnchorElement && touchCards.has(card) ? card : null;
  if (next === selectedCard) return;
  if (selectedCard) touchCards.get(selectedCard)?.(false);
  selectedCard = next;
  if (selectedCard) touchCards.get(selectedCard)?.(true);
}

export function AnimatedProjectLink({ href, ariaLabel, className = 'project-card', children }: { href: string; ariaLabel: string; className?: string; children: ReactNode }) {
  const [touching, setTouching] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const link = linkRef.current;
    if (!link || !link.classList.contains('project-card')) return;
    if (touchCards.size === 0) document.addEventListener('pointerdown', selectCard, { passive: true });
    touchCards.set(link, setTouching);
    return () => {
      touchCards.delete(link);
      if (selectedCard === link) selectedCard = null;
      if (touchCards.size === 0) document.removeEventListener('pointerdown', selectCard);
    };
  }, []);
  return <a ref={linkRef} className={className} href={href} aria-label={ariaLabel}
    data-touching={touching ? 'true' : undefined}
  >{children}</a>;
}
