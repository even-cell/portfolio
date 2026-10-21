import { PortfolioImage } from './portfolio-image';
import { SiteHeader } from './site-header';
import { ContactSection } from './contact-section';
import { CustomCursor } from './custom-cursor';
import { AnimatedProjectLink } from './animated-project-link';

import { projects } from './projects';

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardContent = (
    <>
      <PortfolioImage
        src={project.image}
        srcSet={index === 8 ? "/projects/summer-fans-cover-960.webp 960w, /projects/summer-fans-cover-1920.webp 1920w" : index === 9 ? "/projects/poster-cover-960.webp 960w, /projects/poster-cover-1920.webp 1920w" : index === 10 ? "/projects/grey-wild-cover-960.webp 960w, /projects/grey-wild-cover-1920.webp 1920w" : index === 7 ? "/projects/roof/15-960.webp 960w, /projects/roof/15-1920.webp 1920w" : index === 1 ? "/projects/fora-five-cans-960.webp 960w, /projects/fora-five-cans-1920.webp 1920w" : index === 2 ? "/projects/synesthesia-stage-cover-960.webp 960w, /projects/synesthesia-stage-cover-1920.webp 1920w" : undefined}
        sizes={index === 8 ? "(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" : index === 9 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 10 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 3 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 7 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 1 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 2 ? "(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" : undefined}
        alt={`${project.subtitle}项目预览`}
        loading={index > 2 ? 'lazy' : 'eager'}
        style={{ objectPosition: project.position, objectFit: project.fit as 'cover' | 'contain' }}
      />
      <span className="project-overlay">
        <span className="project-copy">
          <strong>{project.title.map((line) => <span key={line}>{line}</span>)}</strong>
          <span>{project.subtitle}</span>
        </span>
        <small>{project.meta}</small>
      </span>
    </>
  );

  return <AnimatedProjectLink href={`/works/${project.id}`} ariaLabel={`查看${'name' in project ? project.name : project.subtitle}项目`}>{cardContent}</AnimatedProjectLink>;
}

export default function Home() {
  return (
    <main id="top">
      <CustomCursor />
      <SiteHeader home />

      <section className="hero" aria-labelledby="intro-title">
        <h1 id="intro-title"><span>你好，欢迎来到这里 •ᴗ•</span>我是张译文，一名专注于创造视觉体验、实现信息传达的设计师。</h1>
        <a href="#works" className="scroll-indicator" aria-label="向下浏览作品"><span /></a>
      </section>

      <section id="works" className="works" aria-label="精选作品">
        <div className="works-heading"><h2>作品</h2></div>
        <div className="project-stack">
          <div className="project-row project-row-pair">
            <ProjectCard project={projects[0]} index={0} />
            <ProjectCard project={projects[1]} index={1} />
          </div>
          <div className="project-row project-row-wide">
            <ProjectCard project={projects[2]} index={2} />
          </div>
          <div className="project-row project-row-pair">
            <ProjectCard project={projects[3]} index={3} />
            <ProjectCard project={projects[4]} index={4} />
          </div>
          <div className="project-row project-row-wide">
            <ProjectCard project={projects[5]} index={5} />
          </div>
          <div className="project-row project-row-pair">
            <ProjectCard project={projects[6]} index={6} />
            <ProjectCard project={projects[7]} index={7} />
          </div>
          <div className="project-row project-row-wide">
            <ProjectCard project={projects[8]} index={8} />
          </div>
          <div className="project-row project-row-pair">
            <ProjectCard project={projects[9]} index={9} />
            <ProjectCard project={projects[10]} index={10} />
          </div>
          <div className="project-row project-row-wide">
            <div className="work-in-progress" aria-label="作品持续更新中">
              <p>MORE<br />TO COME</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
