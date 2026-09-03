'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'covering' | 'covered' | 'revealing';

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const phaseRef = useRef<Phase>('idle');
  const waitingForRoute = useRef(false);
  const timer = useRef<number | null>(null);

  const updatePhase = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  useEffect(() => {
    const navigate = (event: Event) => {
      if (phaseRef.current !== 'idle') return;
      const href = (event as CustomEvent<{ href: string }>).detail.href;
      updatePhase('covering');
      timer.current = window.setTimeout(() => {
        updatePhase('covered');
        waitingForRoute.current = true;
        router.push(href, { scroll: true });
      }, 640);
    };

    window.addEventListener('portfolio:navigate', navigate);
    return () => {
      window.removeEventListener('portfolio:navigate', navigate);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [router]);

  useEffect(() => {
    if (!waitingForRoute.current) return;
    waitingForRoute.current = false;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => updatePhase('revealing'));
    });
  }, [pathname]);

  return (
    <span
      className={`project-page-wipe ${phase}`}
      aria-hidden="true"
      onTransitionEnd={() => {
        if (phaseRef.current === 'revealing') updatePhase('idle');
      }}
    />
  );
}
