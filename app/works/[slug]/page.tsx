import { SiteHeader } from '../../site-header';
import { ContactSection } from '../../contact-section';
import { ProjectInfo } from '../../project-info';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomCursor } from '../../custom-cursor';
import { AnimatedProjectLink } from '../../animated-project-link';
import { NextProjects } from '../../next-projects';
import { ProjectVideo } from '../../project-video';
import { ResetDetailScroll } from '../shangrantang/reset-detail-scroll';
const projects = {
  roof: { name: '屋顶唱片', title: '音乐可以认真听', image: 'roof/15-1920.webp', meta: '品牌视觉 · 2023' },
  nero: { name: '耐热 NÉRO', title: '打造当代精酿啤酒的年轻新风尚', image: 'fora-cover-1920.webp?v=2', meta: '包装设计 · 2026' },
  synesthesia: { name: '中国美术学院', title: '艺术通感的视听交互', image: 'synesthesia-stage-cover-1920.webp', meta: '' },
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
    <SiteHeader />
    {slug === 'roof' ? <>
      <section className="detail-hero" aria-label="屋顶唱片项目封面"><div className="detail-hero-frame"><img src="/projects/roof/15-1920.webp" srcSet="/projects/roof/15-960.webp 960w, /projects/roof/15-1920.webp 1920w" sizes="100vw" width={1920} height={1498} alt="屋顶唱片海报系列视觉" fetchPriority="high" /></div></section>
      <section className="simple-project-info"><p>{project.name}</p><h1>{project.title}</h1><span>{project.meta}</span></section>
      <section className="synesthesia-gallery" aria-label="屋顶唱片项目图片">
        {[1080, 1080, 1080, 1080, 1080, 1080, 1080, 1440, 1600, 1600, 1440, 1600, 1600, 1440, 1498].map((height, index) => {
          const number = String(index + 1).padStart(2, '0');
          return <img key={number} src={`/projects/roof/${number}-1920.webp`} srcSet={`/projects/roof/${number}-960.webp 960w, /projects/roof/${number}-1920.webp 1920w`} sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={height} alt={`屋顶唱片品牌视觉 · ${number}`} loading="lazy" decoding="async" />;
        })}
      </section>
    </> : slug === 'synesthesia' ? <div className="detail-transition">
      <section className="detail-hero" aria-label="通感博雅项目封面">
        <div className="detail-hero-frame"><img src="/projects/synesthesia-stage-cover-1920.webp" srcSet="/projects/synesthesia-stage-cover-960.webp 960w, /projects/synesthesia-stage-cover-1920.webp 1920w" sizes="100vw" alt="通感博雅论坛视觉设计会场展示" width={1920} height={1320} fetchPriority="high" /></div>
      </section>
      <ProjectInfo name={project.name} title={project.title}
        description="为中国美术学院首届「通感·博雅」国际学术论坛设计视觉系统。以流动的彩色线条与文字构成通感图形，将艺术与感知的交汇延展至海报、会场空间、导视及论坛物料，呈现艺术通感的视听交互。"
        year="2023" services="活动视觉、物料设计" category="学术论坛" />
    </div> : <>
    <section className="simple-project-cover" aria-label={`${project.name}项目封面`}><img src={`/projects/${project.image}`} alt={project.title} fetchPriority="high" /></section>
    <section className="simple-project-info"><p>{project.name}</p><h1>{project.title}</h1>{project.meta && <span>{project.meta}</span>}</section>
    </>}
    {slug === 'synesthesia' && <>
      <ProjectVideo />
      <section className="synesthesia-gallery" aria-label="艺术通感项目图片">
        {[5079, 5079, 5079, 5079, 5080, 7128, 5080, 5080, 5079, 5717, 5079, 5717, 5080, 5080, 5079].map((height, index) => {
          const number = String(index + 1).padStart(2, '0');
          const version = [8, 13, 14, 15].includes(index + 1) ? '?v=2' : '';
          return <img key={number}
            src={`/projects/synesthesia-refresh/${number}-1920.webp${version}`}
            srcSet={`/projects/synesthesia-refresh/${number}-960.webp${version} 960w, /projects/synesthesia-refresh/${number}-1920.webp${version} 1920w`}
            sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
            width={1920} height={Math.round(height * 1920 / 3780)}
            alt={`通感·博雅国际学术论坛视觉设计 · ${number}`}
            loading="lazy" decoding="async" />;
        })}
      </section>
    </>}
    <NextProjects current={slug} />
    <ContactSection />
  </main>;
}
