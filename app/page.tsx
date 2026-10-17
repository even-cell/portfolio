import { SiteHeader } from './site-header';
import { ContactSection } from './contact-section';
import { CustomCursor } from './custom-cursor';
import { AnimatedProjectLink } from './animated-project-link';

const projects = [
  { image: '/projects/shangrantang-purple.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计' },
  { image: '/projects/fora-cover-1920.webp?v=2', position: 'center', fit: 'cover', title: ['打造当代精酿啤酒的', '年轻新风尚'], subtitle: 'FÓRA弗若', meta: '包装设计' },
  { image: '/projects/synesthesia-stage-cover-1920.webp', position: 'center', fit: 'cover', title: ['艺术通感的视听交互'], subtitle: '中国美术学院', meta: '活动设计' },
  { image: '/projects/primva-cover.webp?v=2', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计' },
  { image: '/projects/doctor-roo-cover.webp?v=2', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计' },
  { image: '/projects/project-6.jpg', position: 'center', fit: 'cover', title: ['让传统草本进入', '当代生活方式'], subtitle: '尚然堂', meta: '包装设计' },
  { image: '/projects/project-7.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 07', meta: '敬请期待' },
  { image: '/projects/roof/15-1920.webp', position: 'center', fit: 'cover', title: ['音乐可以认真听'], subtitle: '屋顶唱片', meta: '品牌视觉' },
  { image: '/projects/project-09-title-gw-2.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 09', meta: '敬请期待' },
  { image: '/projects/project-4.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 10', meta: '敬请期待' },
  { image: '/projects/project-5.jpg', position: 'center', fit: 'cover', title: ['作品待更新'], subtitle: '项目 11', meta: '敬请期待' },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardContent = (
    <>
      <img
        src={project.image}
        srcSet={index === 7 ? "/projects/roof/15-960.webp 960w, /projects/roof/15-1920.webp 1920w" : index === 1 ? "/projects/fora-cover-960.webp?v=2 960w, /projects/fora-cover-1920.webp?v=2 1920w" : index === 2 ? "/projects/synesthesia-stage-cover-960.webp 960w, /projects/synesthesia-stage-cover-1920.webp 1920w" : undefined}
        sizes={index === 7 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 1 ? "(max-width: 700px) calc(100vw - 24px), calc((100vw - 84px) / 2)" : index === 2 ? "(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" : undefined}
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

  if (index === 8) {
    return <AnimatedProjectLink href="/works/project-09" ariaLabel="查看项目 09">{cardContent}</AnimatedProjectLink>;
  }

  if (index === 7) {
    return <AnimatedProjectLink href="/works/roof" ariaLabel="查看屋顶唱片项目">{cardContent}</AnimatedProjectLink>;
  }

  if (index < 3) {
    return <AnimatedProjectLink href={['/works/shangrantang', '/works/nero', '/works/synesthesia'][index]} ariaLabel={`查看${project.subtitle}项目`}>{cardContent}</AnimatedProjectLink>;
  }

  return <AnimatedProjectLink href="#contact" ariaLabel={`查看${project.subtitle}包装设计项目`}>{cardContent}</AnimatedProjectLink>;
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
