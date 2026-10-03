'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (reducedMotion.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.085,
        wheelMultiplier: 1,
        syncTouch: false,
        anchors: true,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
      });
    };
    configure();
    reducedMotion.addEventListener('change', configure);
    return () => {
      reducedMotion.removeEventListener('change', configure);
      lenis?.destroy();
    };
  }, [pathname]);

  return null;
}
