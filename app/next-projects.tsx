'use client';
import { useEffect, useRef } from 'react';
import { AnimatedProjectLink } from './animated-project-link';
const works = [
  { id: 'shangrantang', name: '尚然堂', image: 'shangrantang-purple.jpg', href: '/works/shangrantang' },
  { id: 'nero', name: '耐热 NÉRO', image: 'nero-craft-beer.jpg', href: '/works/nero' },
  { id: 'synesthesia', name: '中国美术学院', image: 'caa-synesthesia.jpg', href: '/works/synesthesia' },
  { id: 'mango', name: '果汁包装设计', image: 'mango-drink-clean.jpg', href: '' },
  { id: 'project-5', name: '包装设计 / 05', image: 'project-5.jpg', href: '' },
  { id: 'project-6', name: '视觉设计 / 06', image: 'project-6.jpg', href: '' },
];
export function NextProjects({ current = 'shangrantang' }: { current?: string }) {
  const currentIndex = works.findIndex(work => work.id === current);
  const orderedWorks = [...works.slice(currentIndex + 1), ...works.slice(0, Math.max(currentIndex, 0))];
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || !window.matchMedia('(pointer: fine)').matches) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? el.clientWidth : 1;
      const distance = delta * unit;
      const max = el.scrollWidth - el.clientWidth;
      if (!distance || max <= 0 || (distance < 0 && el.scrollLeft <= 1) || (distance > 0 && el.scrollLeft >= max - 1)) return;
      event.preventDefault();
      el.scrollLeft = Math.max(0, Math.min(max, el.scrollLeft + distance));
    };
    el.addEventListener('wheel', wheel, { passive: false });
    return () => el.removeEventListener('wheel', wheel);
  }, []);
  const browse = (direction: number) => {
    track.current?.scrollBy({ left: direction * track.current.clientWidth * .7, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <section className="next-projects" aria-labelledby="next-title">
    <div className="next-heading"><h2 id="next-title">NEXT</h2><div className="next-controls"><button type="button" aria-label="浏览前面的作品" onClick={() => browse(-1)}>←</button><button type="button" aria-label="浏览后面的作品" onClick={() => browse(1)}>→</button></div></div>
    <div id="next-track" className="next-track" ref={track} tabIndex={0} aria-label="更多作品，可使用滚轮横向浏览">
      {orderedWorks.map(work => {
        const content = <><div className="next-image"><img src={`/projects/${work.image}`} alt={work.name} loading="lazy" draggable={false} /></div><div className="next-caption"><span>{work.name}</span><small>{work.href ? '查看项目 ↗' : '即将上线'}</small></div></>;
        return work.href ? <AnimatedProjectLink key={work.id} href={work.href} ariaLabel={`查看${work.name}详情`} className="next-card" transition>{content}</AnimatedProjectLink> : <article className="next-card next-pending" key={work.id}>{content}</article>;
      })}
    </div>
  </section>;
}
