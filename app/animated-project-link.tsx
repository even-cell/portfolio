'use client';

import { type MouseEvent, type ReactNode, useState } from 'react';

export function AnimatedProjectLink({ href, ariaLabel, className = 'project-card', transition = false, children }: { href: string; ariaLabel: string; className?: string; transition?: boolean; children: ReactNode }) {
  const [leaving, setLeaving] = useState(false);

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!transition || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (leaving) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.assign(href);
      return;
    }
    setLeaving(true);
    window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: { href } }));
  };

  return (
    <>
      <a className={`${className}${leaving ? ' transition-leaving' : ''}`} href={href} aria-label={ariaLabel} onClick={navigate}>{children}</a>
    </>
  );
}
