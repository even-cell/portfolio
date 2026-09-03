'use client';

import { useLayoutEffect } from 'react';

export function ResetDetailScroll() {
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return null;
}
