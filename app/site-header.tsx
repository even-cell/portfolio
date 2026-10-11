'use client';

import { useEffect, useRef, useState } from 'react';

export function SiteHeader({ home = false, about = false }: { home?: boolean; about?: boolean }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', dismiss); document.removeEventListener('keydown', escape); };
  }, [open]);
  return <header ref={headerRef} className={`site-header${open ? ' menu-open' : ''}`}>
    <a href={home ? '#top' : '/'} className="identity" aria-label="回到首页"><span>EVEN ZHANG</span><span>张译文</span></a>
    <button ref={buttonRef} className="nav-toggle" type="button" aria-label={open ? '关闭导航' : '打开导航'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
    <nav id="site-navigation" aria-label="主导航" onClick={() => setOpen(false)}>
      <a href={home ? '#works' : '/#works'}>WORKS</a>
      <a href="/about" aria-current={about ? 'page' : undefined}>ABOUT</a>
      <a href="#contact">CONTACT</a>
    </nav>
  </header>;
}
