import { ContactSection } from './contact-section';
import { CustomCursor } from './custom-cursor';
import { AnimatedProjectLink } from './animated-project-link';

const intro = '你好，我是张译文，一名专注于创造视觉体验、实现信息传达的设计师。';

const projects = [
  { image: '/projects/shangrantang-purple.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/nero-craft-beer.jpg', position: 'center', fit: 'cover', title: ['打造当代精酿啤酒的', '年轻新风尚'], subtitle: '耐热NÉRO', meta: '包装设计·2026' },
  { image: '/projects/synesthesia-forum-cover-1920.webp', position: 'center', fit: 'cover', title: ['艺术通感的视听交互'], subtitle: '中国美术学院', meta: '活动设计2023' },
  { image: '/projects/primva-cover.webp?v=2', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/doctor-roo-cover.webp?v=2', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/project-6.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/project-7.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 07', meta: '敬请期待' },
  { image: '/projects/project-8.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 08', meta: '敬请期待' },
  { image: '/projects/onana-strawberry.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 09', meta: '敬请期待' },
  { image: '/projects/project-4.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 10', meta: '敬请期待' },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardContent = (
    <>
      <img
        src={project.image}
        srcSet={index === 2 ? "/projects/synesthesia-forum-cover-960.webp 960w, /projects/synesthesia-forum-cover-1920.webp 1920w" : undefined}
        sizes={index === 2 ? "(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" : undefined}
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

  if (index < 3) {
    return <AnimatedProjectLink href={['/works/shangrantang', '/works/nero', '/works/synesthesia'][index]} ariaLabel={`查看${project.subtitle}项目`} transition>{cardContent}</AnimatedProjectLink>;
  }

  return <a className="project-card" href="#contact" aria-label={`查看${project.subtitle}包装设计项目`}>{cardContent}</a>;
}

export default function Home() {
  return (
    <main id="top">
      <CustomCursor />
      <header className="site-header">
        <a href="#top" className="identity" aria-label="回到首页"><span>EVEN ZHANG</span><span>张译文</span></a>
        <nav aria-label="主导航"><a href="#works">WORKS</a><a href="#contact">CONTACT</a></nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <h1 id="intro-title">{intro}</h1>
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
