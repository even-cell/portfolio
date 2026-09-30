import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomCursor } from '../../custom-cursor';
import { AnimatedProjectLink } from '../../animated-project-link';
import { NextProjects } from '../../next-projects';
import { ProjectVideo } from '../../project-video';
import { ResetDetailScroll } from '../shangrantang/reset-detail-scroll';
const projects = {
  nero: { name: '耐热 NÉRO', title: '打造当代精酿啤酒的年轻新风尚', image: 'nero-craft-beer.jpg', meta: '包装设计 · 2026' },
  synesthesia: { name: '中国美术学院', title: '艺术通感的视听交互', image: 'synesthesia-cover-1920.webp', meta: '' },
};
type Props = { params: Promise<{ slug: string }> };
function getProject(slug: string) { return Object.prototype.hasOwnProperty.call(projects, slug) ? projects[slug as keyof typeof projects] : undefined; }
export function generateStaticParams() { return Object.keys(projects).map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.name}｜张译文 EVEN ZHANG`, description: project.title };
}
export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <main id="top" className="project-detail"><ResetDetailScroll /><CustomCursor />
    <header className="site-header"><AnimatedProjectLink href="/" className="identity" ariaLabel="返回首页" transition>EVEN ZHANG 张译文</AnimatedProjectLink><nav aria-label="主导航"><AnimatedProjectLink href="/#works" className="" ariaLabel="返回全部作品" transition>WORKS</AnimatedProjectLink><AnimatedProjectLink href="/#contact" className="" ariaLabel="联系" transition>CONTACT</AnimatedProjectLink></nav></header>
    {slug === 'synesthesia' ? <div className="detail-transition">
      <section className="detail-hero" aria-label="艺术通感项目封面">
        <div className="detail-hero-frame"><img src={`/projects/${project.image}`} srcSet="/projects/synesthesia-cover-960.webp 960w, /projects/synesthesia-cover-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), 100vw" alt={project.title} fetchPriority="high" /></div>
      </section>
      <section className="detail-intro" aria-labelledby="detail-intro-title">
        <p className="detail-info-label">INFO</p>
        <h2 id="detail-intro-title">
          为中国美术学院首届「通感·博雅」国际学术论坛设计视觉系统。以流动的彩色线条与文字构成通感图形，将艺术与感知的交汇延展至海报、会场空间、导视及论坛物料，呈现艺术通感的视听交互。
        </h2>
        <div className="detail-facts">
          <div><span>YEAR</span><strong>2023</strong></div>
          <div><span>CLIENT</span><strong>中国美术学院</strong></div>
          <div><span>SERVICES</span><strong>活动视觉、物料设计</strong></div>
          <div><span>CATEGORY</span><strong>学术论坛</strong></div>
        </div>
      </section>
    </div> : <>
    <section className="simple-project-cover" aria-label={`${project.name}项目封面`}><img src={`/projects/${project.image}`} alt={project.title} /></section>
    <section className="simple-project-info"><p>{project.name}</p><h1>{project.title}</h1>{project.meta && <span>{project.meta}</span>}</section>
    </>}
    {slug === 'synesthesia' && <>
      <ProjectVideo />
      <section className="synesthesia-gallery" aria-label="艺术通感项目图片">
        {[5079, 5079, 5079, 5079, 5080, 7128, 5080, 5080, 5079, 5717, 5079, 5717, 5080, 2529].map((height, index) => {
          const number = String(index + 1).padStart(2, '0');
          return <img key={number}
            src={`/projects/synesthesia/${number}-1920.webp`}
            srcSet={`/projects/synesthesia/${number}-960.webp 960w, /projects/synesthesia/${number}-1920.webp 1920w`}
            sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
            width={1920} height={Math.round(height * 1920 / 3780)}
            alt={`通感·博雅国际学术论坛视觉设计 · ${number}`}
            loading="lazy" decoding="async" />;
        })}
      </section>
    </>}
    <NextProjects current={slug} />
    <footer className="detail-footer"><AnimatedProjectLink href="/#works" className="" ariaLabel="返回全部作品" transition>← 返回全部作品</AnimatedProjectLink><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
