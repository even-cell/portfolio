'use client';

import { useLayoutEffect } from 'react';

export function ResetDetailScroll() {
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    return () => { window.history.scrollRestoration = previousRestoration; };
  }, []);

  return null;
}
