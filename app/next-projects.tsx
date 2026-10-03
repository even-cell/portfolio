'use client';
import { AnimatedProjectLink } from './animated-project-link';
const works = [
  { id: 'shangrantang', name: '尚然堂', image: 'shangrantang-purple.jpg', href: '/works/shangrantang' },
  { id: 'nero', name: '耐热 NÉRO', image: 'nero-craft-beer.jpg', href: '/works/nero' },
  { id: 'synesthesia', name: '中国美术学院', image: 'synesthesia-cover-960.webp', href: '/works/synesthesia' },
  { id: 'mango', name: '果汁包装设计', image: 'mango-drink-clean.jpg', href: '' },
  { id: 'project-5', name: '包装设计 / 05', image: 'project-5.jpg', href: '' },
  { id: 'project-6', name: '视觉设计 / 06', image: 'project-6.jpg', href: '' },
];
export function NextProjects({ current = 'shangrantang' }: { current?: string }) {
  const currentIndex = works.findIndex(work => work.id === current);
  const orderedWorks = [...works.slice(currentIndex + 1), ...works.slice(0, Math.max(currentIndex, 0))].slice(0, 3);
  return <section className="next-projects" aria-labelledby="next-title">
    <div className="next-heading"><h2 id="next-title">NEXT</h2></div>
    <div className="next-grid" aria-label="更多作品">
      {orderedWorks.map(work => {
        const content = <><div className="next-image"><img src={`/projects/${work.image}`} alt={work.name} loading="lazy" draggable={false} /></div><div className="next-caption"><span>{work.name}</span><small>{work.href ? '查看项目 ↗' : '即将上线'}</small></div></>;
        return work.href ? <AnimatedProjectLink key={work.id} href={work.href} ariaLabel={`查看${work.name}详情`} className="next-card" transition>{content}</AnimatedProjectLink> : <article className="next-card next-pending" key={work.id}>{content}</article>;
      })}
    </div>
  </section>;
}
