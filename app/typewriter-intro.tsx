'use client';

import { useEffect, useState } from 'react';

const intro = '你好，我是张译文，一名专注于创造视觉体验、实现信息传达的设计师。';
const characters = Array.from(intro);

export function TypewriterIntro() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) { setVisible(characters.length); return; }
    let frame = 0;
    const start = performance.now();
    const finish = () => { cancelAnimationFrame(frame); setVisible(characters.length); };
    const tick = (now: number) => {
      const count = Math.min(characters.length, Math.max(0, Math.floor((now - start - 450) / 75) + 1));
      setVisible(count);
      if (count < characters.length) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    // Ensure the complete introduction remains visible even if animation frames are suspended.
    const fallback = window.setTimeout(finish, 450 + characters.length * 75 + 200);
    preference.addEventListener('change', finish);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(fallback); preference.removeEventListener('change', finish); };
  }, []);

  return <h1 id="intro-title" aria-label={intro}><span aria-hidden="true">{characters.map((character, index) => (
    <span key={index} style={{ visibility: index < visible ? 'visible' : 'hidden' }}>{character}</span>
  ))}</span></h1>;
}
