'use client';

import { useEffect, useRef } from 'react';

const images = ['/images/hero-trail/lake-gray.webp', '/images/hero-trail/lake-blue.webp'];

export function HeroImageTrail() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const hero = layer?.parentElement;
    if (!layer || !hero) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(any-pointer: fine)');
    const cards = Array.from(layer.querySelectorAll('img'));
    const animations = new Map<HTMLImageElement, Animation>();
    let last: { x: number; y: number } | null = null;
    let lastTime = 0;
    let sequence = 0;

    const reset = () => { last = null; };
    const clear = () => {
      reset();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches || !finePointer.matches) return;
      const now = performance.now();
      if (last && (Math.hypot(event.clientX - last.x, event.clientY - last.y) < 70 || now - lastTime < 65)) return;
      const bounds = hero.getBoundingClientRect();
      const card = cards[sequence % cards.length];
      animations.get(card)?.cancel();
      card.style.left = `${event.clientX - bounds.left}px`;
      card.style.top = `${event.clientY - bounds.top}px`;
      card.style.zIndex = String(sequence + 1);
      const angle = sequence % 2 === 0 ? -9 : 8;
      const animation = card.animate([
        { opacity: 0, transform: `translate(-50%, -50%) scale(.72) rotate(${angle - 5}deg)`, offset: 0 },
        { opacity: 1, transform: `translate(-50%, -50%) scale(1) rotate(${angle}deg)`, offset: .16 },
        { opacity: 1, transform: `translate(-50%, -54%) scale(1) rotate(${angle}deg)`, offset: .5 },
        { opacity: 0, transform: `translate(-50%, -68%) scale(.88) rotate(${angle + 4}deg)`, offset: 1 },
      ], { duration: 1050, easing: 'ease-out' });
      animations.set(card, animation);
      animation.onfinish = () => { if (animations.get(card) === animation) animations.delete(card); };
      last = { x: event.clientX, y: event.clientY };
      lastTime = now;
      sequence += 1;
    };

    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', clear, { passive: true });
    window.addEventListener('blur', clear);
    reducedMotion.addEventListener('change', clear);
    return () => {
      clear();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', clear);
      window.removeEventListener('blur', clear);
      reducedMotion.removeEventListener('change', clear);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-image-trail" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <img key={index} src={images[index % 2]} alt="" width={480} height={480} draggable={false} />
      ))}
    </div>
  );
}
