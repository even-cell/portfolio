'use client';
import { PortfolioImage } from './portfolio-image';
import { AnimatedProjectLink } from './animated-project-link';
import { projects } from './projects';
export function NextProjects({ current = 'shangrantang' }: { current?: string }) {
  const currentIndex = projects.findIndex(work => work.id === current);
  const orderedWorks = [...projects.slice(currentIndex + 1), ...projects.slice(0, Math.max(currentIndex, 0))].slice(0, 3);
  return <section className="next-projects" aria-labelledby="next-title">
    <div className="next-heading"><h2 id="next-title">NEXT</h2></div>
    <div className="next-grid" aria-label="更多作品">
      {orderedWorks.map(work => {
        const name = 'name' in work ? work.name : work.subtitle;
        return <AnimatedProjectLink key={work.id} href={`/works/${work.id}`} ariaLabel={`查看${name}详情`} className="next-card">
          <div className="next-image"><PortfolioImage src={work.image} alt={name} loading="lazy" draggable={false} style={{ objectPosition: work.position, objectFit: work.fit as 'cover' | 'contain' }} /></div>
          <div className="sr-only"><span>{name}</span><small>查看项目 ↗</small></div>
        </AnimatedProjectLink>;
      })}
    </div>
  </section>;
}
