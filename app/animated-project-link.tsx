import { type ReactNode } from 'react';

export function AnimatedProjectLink({ href, ariaLabel, className = 'project-card', transition = false, children }: { href: string; ariaLabel: string; className?: string; transition?: boolean; children: ReactNode }) {
  void transition;
  return <a className={className} href={href} aria-label={ariaLabel}>{children}</a>;
}
