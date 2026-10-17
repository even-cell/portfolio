'use client';

import { useEffect, useRef } from 'react';

/** Keep native document navigation and history restoration across browsers. */
export function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;
    let navigationTimer: number | undefined;
    let recoveryTimer: number | undefined;
    let leaving = false;
    const reset = () => {
      window.clearTimeout(navigationTimer);
      window.clearTimeout(recoveryTimer);
      leaving = false;
      curtain.classList.remove('is-covering');
      delete document.documentElement.dataset.pageArrival;
      try { sessionStorage.removeItem('portfolio-page-transition'); } catch { /* Storage is optional. */ }
    };
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute('download') || (link.target && link.target.toLowerCase() !== '_self') || link.relList.contains('external')) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || !/^https?:$/.test(destination.protocol)) return;
      // Animate only site pages; same-document anchors and assets remain native.
      if (!/^\/(?:about\/?|works\/[^/.]+\/?)?$/.test(destination.pathname)) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      event.preventDefault();
      if (leaving) return;
      leaving = true;
      delete document.documentElement.dataset.pageArrival;
      curtain.classList.remove('is-covering');
      // Establish the offscreen start even when a second link is clicked during reveal.
      void curtain.offsetHeight;
      curtain.classList.add('is-covering');
      navigationTimer = window.setTimeout(() => {
        // Never leave the current document covered if navigation is cancelled.
        recoveryTimer = window.setTimeout(reset, 1800);
        try {
          sessionStorage.setItem('portfolio-page-transition', JSON.stringify({ path: destination.pathname, time: Date.now() }));
        } catch { /* Native navigation still works without storage. */ }
        window.location.assign(destination.href);
      }, 240);
    };
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) reset();
    };
    const onPageHide = () => {
      window.clearTimeout(navigationTimer);
      window.clearTimeout(recoveryTimer);
      leaving = false;
      curtain.classList.remove('is-covering');
      delete document.documentElement.dataset.pageArrival;
    };
    const finishArrival = (event: AnimationEvent) => {
      if (event.animationName === 'page-content-arrive' && !leaving) {
        // Release temporary animation layers after both incoming animations finish.
        delete document.documentElement.dataset.pageArrival;
      }
    };
    document.addEventListener('animationend', finishArrival);
    document.addEventListener('click', navigate);
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      reset();
      document.removeEventListener('animationend', finishArrival);
      document.removeEventListener('click', navigate);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, []);

  return <div ref={curtainRef} className="page-curtain" aria-hidden="true" />;
}
