import { CustomCursor } from './custom-cursor';
import { AnimatedProjectLink } from './animated-project-link';

const projects = [
  { image: '/projects/shangrantang-purple.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/nero-craft-beer.jpg', position: 'center', fit: 'cover', title: ['打造当代精酿啤酒的', '年轻新风尚'], subtitle: '耐热NÉRO', meta: '包装设计·2026' },
  { image: '/projects/onana-strawberry.jpg', position: 'center', fit: 'cover', title: ['童趣IP与插画为烘焙品牌', '带来咸甜的香气'], subtitle: 'Onana', meta: '包装设计·2026' },
  { image: '/projects/mango-drink-clean.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/project-5.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
  { image: '/projects/project-6.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计·2026' },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardContent = (
    <>
      <img
        src={project.image}
        alt={`${project.subtitle}包装设计项目预览`}
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

  if (index === 0) {
    return <AnimatedProjectLink href="/works/shangrantang" ariaLabel="查看尚然堂包装设计项目" transition>{cardContent}</AnimatedProjectLink>;
  }

  return <a className="project-card" href="#contact" aria-label={`查看${project.subtitle}包装设计项目`}>{cardContent}</a>;
}

export default function Home() {
  return (
    <main id="top">
      <CustomCursor />
      <header className="site-header">
        <a href="#top" className="identity" aria-label="回到首页">视觉设计师_张译文</a>
        <nav aria-label="主导航"><a href="#works">作品</a><a href="#contact">联系</a></nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <h1 id="intro-title">你好，我是张译文，一名专注于创造视觉体验、实现信息传达的设计师。</h1>
        <a href="#works" className="scroll-indicator" aria-label="向下浏览作品"><span /></a>
      </section>

      <section id="works" className="works" aria-label="精选作品">
        <div className="works-heading"><h2>作品</h2><span>SELECTED WORKS</span></div>
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
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <p className="eyebrow">联系</p>
        <h2 id="contact-title">让我们一起，<br />创造新的可能。</h2>
        <div className="contact-links">
          <a href="mailto:hello@evenzhang.com">HELLO@EVENZHANG.COM ↗</a>
          <span>WECHAT · EVENZHANG</span><span>HANGZHOU · CHINA</span>
        </div>
        <footer><span>© 2026 EVEN ZHANG</span><a href="#top">返回顶部 ↑</a></footer>
      </section>
    </main>
  );
}
