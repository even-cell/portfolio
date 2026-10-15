"use client";

import { useState, type ReactNode } from 'react';

export function AnimatedProjectLink({ href, ariaLabel, className = 'project-card', transition = false, children }: { href: string; ariaLabel: string; className?: string; transition?: boolean; children: ReactNode }) {
  void transition;
  const [touching, setTouching] = useState(false);
  const clearTouch = () => setTouching(false);
  return <a className={className} href={href} aria-label={ariaLabel}
    data-touching={touching ? 'true' : undefined}
    onPointerDown={(event) => { if (event.pointerType !== 'mouse') setTouching(true); }}
    onPointerUp={clearTouch}
    onPointerCancel={clearTouch}
    onPointerLeave={clearTouch}
    onBlur={clearTouch}
    onClick={clearTouch}
  >{children}</a>;
}
