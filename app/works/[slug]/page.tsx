import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomCursor } from '../../custom-cursor';
import { AnimatedProjectLink } from '../../animated-project-link';
import { NextProjects } from '../../next-projects';
import { ProjectVideo } from '../../project-video';
import { ResetDetailScroll } from '../shangrantang/reset-detail-scroll';
const projects = {
  nero: { name: '耐热 NÉRO', title: '打造当代精酿啤酒的年轻新风尚', image: 'nero-craft-beer.jpg', meta: '包装设计 · 2026' },
  synesthesia: { name: '中国美术学院', title: '艺术通感的视听交互', image: 'caa-synesthesia.jpg', meta: '' },
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
    <header className="site-header"><AnimatedProjectLink href="/" className="identity" ariaLabel="返回首页" transition>视觉设计师_张译文</AnimatedProjectLink><nav aria-label="主导航"><AnimatedProjectLink href="/#works" className="" ariaLabel="返回全部作品" transition>作品</AnimatedProjectLink><AnimatedProjectLink href="/#contact" className="" ariaLabel="联系" transition>联系</AnimatedProjectLink></nav></header>
    <section className="simple-project-cover" aria-label={`${project.name}项目封面`}><img src={`/projects/${project.image}`} alt={project.title} /></section>
    <section className="simple-project-info"><p>{project.name}</p><h1>{project.title}</h1>{project.meta && <span>{project.meta}</span>}</section>
    {slug === 'synesthesia' && <ProjectVideo />}
    <NextProjects current={slug} />
    <footer className="detail-footer"><AnimatedProjectLink href="/#works" className="" ariaLabel="返回全部作品" transition>← 返回全部作品</AnimatedProjectLink><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
