import { SiteHeader } from '../../site-header';
import { ContactSection } from '../../contact-section';
import { ProjectInfo } from '../../project-info';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomCursor } from '../../custom-cursor';
import { NextProjects } from '../../next-projects';
import { ProjectVideo } from '../../project-video';
import { ResetDetailScroll } from '../shangrantang/reset-detail-scroll';
const projects = {
  shanghuayuan: { name: '上花源', title: '上花源', image: 'shanghuayuan-cover.webp', meta: '品牌视觉' },
  'hangzhou-xinhua': { name: '杭州市新华书店', title: '碧波微漾，倒影成“書”', image: 'hangzhou-xinhua-cover.webp', meta: '品牌&空间视觉' },
  'project-10': { name: '海报项目合集', title: '海报项目合集', image: 'poster-cover-1920.webp', meta: '平面设计' },
  'grey-wild': { name: '其它作品', title: '其它作品', image: 'grey-wild-cover-1920.webp', meta: '包装设计' },
  'doctor-roo': { name: '袋鼠医生', title: '蒸汽眼罩包装设计', image: 'doctor-roo-cover-15.webp', meta: '包装设计' },
  primva: { name: '臻·果维', title: '轻松、可口的基础营养补给', image: 'primva-peach-cover-v2.webp', meta: '包装设计' },
  'project-09': { name: 'LxU以乘', title: '传递清凉的心意', image: 'summer-fans-cover-1920.webp', meta: '' },
  roof: { name: '屋顶唱片', title: '音乐可以认真听', image: 'roof/15-1920.webp', meta: '品牌视觉 · 2023' },
  nero: { name: 'FÓRA弗若', title: '打造当代精酿啤酒的年轻新风尚', image: 'fora-five-cans-1920.webp', meta: '包装设计 · 2026' },
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
    {slug === 'shanghuayuan' || slug === 'hangzhou-xinhua' ? <>
      <section className="detail-hero" aria-label={`${project.name}项目封面`}><div className="detail-hero-frame"><img src={`/projects/${project.image}`} alt={`${project.name}品牌视觉`} fetchPriority="high" /></div></section>
      <section className="simple-project-info">{slug === 'hangzhou-xinhua' ? <><p>{project.name}</p><h1>{project.title}</h1><span>{project.meta}</span></> : <><p>{project.meta}</p><h1>{project.name}</h1></>}</section>
    </> : slug === 'project-09' ? <>
      <section className="detail-hero" aria-label="项目 09 封面"><div className="detail-hero-frame"><img src="/projects/summer-fans-cover-1920.webp" srcSet="/projects/summer-fans-cover-960.webp 960w, /projects/summer-fans-cover-1920.webp 1920w" sizes="100vw" width={1920} height={1080} alt="夏至赠扇设计封面" fetchPriority="high" /></div></section>
      <ProjectInfo name={project.name} title={project.title}
        description="项目以「夏至赠扇」的传统习俗为灵感，将消暑纳福的美好寓意融入当代视觉表达，以清凉的心意传递温暖的情感关怀。通过轻盈明快的色彩、字体设计与趣味插画，让传统文化在日常生活中焕发新的活力，为人们送上积极而真挚的鼓励。"
        year="2022" services="品牌传播、文创设计" category="文化创意" />
    </> : slug === 'project-10' ? <>
      <section className="detail-hero" aria-label="海报项目合集封面"><div className="detail-hero-frame"><img src="/projects/poster-cover-1920.webp" srcSet="/projects/poster-cover-960.webp 960w, /projects/poster-cover-1920.webp 1920w" sizes="100vw" width={1920} height={1920} alt="海报设计封面" fetchPriority="high" /></div></section>
      <ProjectInfo name="综合" title="#海报设计合集"
        description="本合集汇集不同主题的海报设计，以字体、图形与色彩探索多样的视觉表达。通过构图与信息层级的组织，让内容在清晰传达的同时形成鲜明的视觉节奏，并在静态与动态形式中延展海报的表现力。"
        year="—" services="海报设计" category="综合" />
    </> : slug === 'grey-wild' ? <>
      <section className="detail-hero" aria-label="其它作品封面"><div className="detail-hero-frame"><img src="/projects/grey-wild-cover-1920.webp" srcSet="/projects/grey-wild-cover-960.webp 960w, /projects/grey-wild-cover-1920.webp 1920w" sizes="100vw" width={1920} height={1280} alt="灰野地咖啡豆包装设计" fetchPriority="high" /></div></section>
      <ProjectInfo name="综合" title="#其它作品"
        description="本合集收录不同主题与形式的设计作品，呈现对图形、字体、色彩与版式的持续探索。从概念表达至具体应用，结合内容与媒介的特点，寻找兼具辨识度与趣味性的视觉语言。"
        year="—" services="平面设计" category="综合" />
    </> : slug === 'doctor-roo' ? <>
      <section className="detail-hero" aria-label="袋鼠医生项目封面"><div className="detail-hero-frame"><img src="/projects/doctor-roo-cover-15.webp" width={3781} height={3781} alt="袋鼠医生蒸汽眼罩包装设计" fetchPriority="high" /></div></section>
      <ProjectInfo name={project.name} title={project.title}
        description="袋鼠医生希望将专业护理融入轻松、舒适的日常生活。本次蒸汽眼罩包装以年轻化、生活化为方向，通过明快的系列配色、趣味插画与字体设计，建立统一且具有差异化的产品视觉系统。清晰的信息层级帮助识别不同香型，以亲切的视觉语言传递温暖而富有活力的护理体验。"
        year="—" services="包装设计、字体设计" category="日常护理" />
      <section className="synesthesia-gallery" aria-label="袋鼠医生包装设计项目图片">
        {[{"id": "01", "height": 2580}, {"id": "02", "height": 2580}, {"id": "03", "height": 2580}, {"id": "04", "height": 2580}, {"id": "05", "height": 2580}, {"id": "06", "height": 2580}, {"id": "07", "height": 2580}, {"id": "08", "height": 2580}, {"id": "09", "height": 2579}, {"id": "10", "height": 2580}, {"id": "11", "height": 2579}, {"id": "12", "height": 2580}, {"id": "13", "height": 2580}].map(({ id, height }) => <div className="protected-image" key={id}><img
          src={`/projects/doctor-roo/${id}${['01', '02'].includes(id) ? '-v2' : ''}-1920.webp`}
          srcSet={`/projects/doctor-roo/${id}${['01', '02'].includes(id) ? '-v2' : ''}-960.webp 960w, /projects/doctor-roo/${id}${['01', '02'].includes(id) ? '-v2' : ''}-1920.webp 1920w`}
          sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
          width={1920} height={height} alt={`袋鼠医生蒸汽眼罩包装设计 · ${id}`}
          loading="lazy" decoding="async" /></div>)}
      </section>
    </> : slug === 'primva' ? <>
      <section className="detail-hero" aria-label="臻·果维项目封面"><div className="detail-hero-frame"><img src="/projects/primva-peach-cover-v2.webp" sizes="100vw" width={1454} height={968} alt="臻·果维桃子味营养饮品包装与水果组合" fetchPriority="high" /></div></section>
      <ProjectInfo name={project.name} title={project.title}
        description="臻·果维希望将好喝的果汁与日常基础营养补给结合，让健康习惯变得轻松、可口。项目以鲜明的水果图形与明快配色传递风味和新鲜感，通过清晰的文字层级呈现营养信息，在系列统一性与口味差异之间建立平衡，让产品兼具食欲感与日常亲和力。"
        year="—" services="包装设计、品牌视觉" category="营养饮品" />
      <section className="synesthesia-gallery" aria-label="臻·果维包装设计项目图片">
        {[{"id": "01", "height": 2580}, {"id": "02", "height": 2580}, {"id": "03", "height": 2580}, {"id": "04", "height": 2580}, {"id": "05", "height": 2580}, {"id": "06", "height": 2580}, {"id": "07", "height": 2580}, {"id": "08", "height": 2580}, {"id": "09", "height": 2580}, {"id": "10", "height": 2580}, {"id": "11", "height": 2580}, {"id": "12", "height": 2580}, {"id": "13", "height": 2580}, {"id": "14", "height": 2580}].map(({ id, height }) => <div className="protected-image" key={id}><img
          src={`/projects/primva/${id}-1920.webp`}
          srcSet={`/projects/primva/${id}-960.webp 960w, /projects/primva/${id}-1920.webp 1920w`}
          sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
          width={1920} height={height} alt={`臻·果维包装设计 · ${id}`}
          loading="lazy" decoding="async" /></div>)}
      </section>
    </> : slug === 'roof' ? <>
      <section className="detail-hero" aria-label="屋顶唱片项目封面"><div className="detail-hero-frame"><img src="/projects/roof/15-1920.webp" srcSet="/projects/roof/15-960.webp 960w, /projects/roof/15-1920.webp 1920w" sizes="100vw" width={1920} height={1498} alt="屋顶唱片海报系列视觉" fetchPriority="high" /></div></section>
      <ProjectInfo name={project.name} title={project.title}
        description="屋顶唱片是一家围绕实体唱片与聆听体验展开的音乐店铺。项目以「音乐可以认真听」为核心，将唱片的圆形意象融入图形与文字编排，以富有节奏的版式建立鲜明的品牌识别，并延展至海报及店铺物料，传递专注、开放的音乐态度。"
        year="2023" services="品牌视觉、物料设计" category="音乐文化" />
      <section className="synesthesia-gallery" aria-label="屋顶唱片项目图片">
        {[1080, 1080, 1080, 1080, 1080, 1080, 1080, 1440, 1600, 1600, 1440, 1600, 1600, 1440, 1498].map((height, index) => {
          const number = String(index + 1).padStart(2, '0');
          return <div className="protected-image" key={number}><img src={`/projects/roof/${number}-1920.webp`} srcSet={`/projects/roof/${number}-960.webp 960w, /projects/roof/${number}-1920.webp 1920w`} sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={height} alt={`屋顶唱片品牌视觉 · ${number}`} loading="lazy" decoding="async" /></div>;
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
    <ProjectInfo name={project.name} title={project.title}
      description="FÓRA弗若以年轻、自由的视觉表达呈现精酿啤酒的多样风味。项目通过高对比配色、抽象图形与醒目的字体编排，将不同口味转化为各具个性的包装画面，并以统一的信息结构串联系列产品，在货架与日常饮用场景中建立鲜明的品牌辨识度。"
      year="2026" services="包装设计、品牌视觉" category="精酿啤酒" />
    </>}
    {slug === 'synesthesia' && <>
      <ProjectVideo />
      <section className="synesthesia-gallery" aria-label="艺术通感项目图片">
        {[5079, 5079, 5079, 5079, 5080, 7128, 5080, 5080, 5079, 5717, 5079, 5717, 5080, 5080, 5079].map((height, index) => {
          const number = String(index + 1).padStart(2, '0');
          const version = [8, 13, 14, 15].includes(index + 1) ? '?v=2' : '';
          return <div className="protected-image" key={number}><img
            src={`/projects/synesthesia-refresh/${number}-1920.webp${version}`}
            srcSet={`/projects/synesthesia-refresh/${number}-960.webp${version} 960w, /projects/synesthesia-refresh/${number}-1920.webp${version} 1920w`}
            sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
            width={1920} height={Math.round(height * 1920 / 3780)}
            alt={`通感·博雅国际学术论坛视觉设计 · ${number}`}
            loading="lazy" decoding="async" /></div>;
        })}
      </section>
    </>}
    {slug === 'nero' && <section className="synesthesia-gallery" aria-label="FÓRA弗若包装设计项目图片">
        {[{"id": "01", "height": 1260}, {"id": "02", "height": 1260}, {"id": "03", "height": 1260}, {"id": "04", "height": 1260}, {"id": "05", "height": 1260}, {"id": "06", "height": 1260}, {"id": "07", "height": 1260}, {"id": "08", "height": 1260}, {"id": "09", "height": 3779}, {"id": "10", "height": 1260}, {"id": "11", "height": 1260}, {"id": "12", "height": 1260}, {"id": "13", "height": 1260}, {"id": "14", "height": 1260}, {"id": "15", "height": 1260}, {"id": "16", "height": 1260}, {"id": "17", "height": 1260}, {"id": "18", "height": 1260}, {"id": "19", "height": 1260}, {"id": "20", "height": 1260}, {"id": "21", "height": 1260}].map(({ id, height }) => <div className="protected-image" key={id}><img
          src={`/projects/fora/${id}-1920.webp`}
          srcSet={`/projects/fora/${id}-960.webp 960w, /projects/fora/${id}-1920.webp 1920w`}
          sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)"
          width={1920} height={height} alt={`FÓRA弗若包装设计 · ${id}`}
          loading="lazy" decoding="async" /></div>)}
      </section>}
    {slug === 'project-09' && <section className="synesthesia-gallery" aria-label="夏至赠扇项目图片">
      <div className="protected-image"><img src="/projects/summer-fans/01.webp" width={3781} height={4088} alt="夏至赠扇 · 示意_画板 1.jpg" loading="lazy" decoding="async" /></div>
      <div className="summer-fans-animation-row">
      <div className="protected-image"><img src="/projects/summer-fans/02.webp" width={750} height={1230} alt="夏至赠扇 · IMG_0245.GIF" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/03.webp" width={750} height={1230} alt="夏至赠扇 · IMG_0246.GIF" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/04.webp" width={750} height={1230} alt="夏至赠扇 · IMG_0247.GIF" loading="lazy" decoding="async" /></div>
      </div>
      <div className="protected-image"><img src="/projects/summer-fans/05.webp" width={1200} height={1800} alt="夏至赠扇 · 扇子1.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/06.webp" width={1200} height={1800} alt="夏至赠扇 · 扇子3.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/07.webp" width={1200} height={800} alt="夏至赠扇 · 扇子4.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/08.webp" width={1200} height={800} alt="夏至赠扇 · 扇子5.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/09.webp" width={1200} height={1800} alt="夏至赠扇 · 扇子2.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/10.webp" width={1200} height={1200} alt="夏至赠扇 · 扇子9.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/12.webp" width={1500} height={1000} alt="夏至赠扇 · 扇子6.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/13.webp" width={1200} height={800} alt="夏至赠扇 · 扇子7.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/11.webp" width={1200} height={669} alt="夏至赠扇 · 扇子8.jpg" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/summer-fans/14-v2.webp" width={3781} height={2481} alt="夏至赠扇 · 示意-10.jpg" loading="lazy" decoding="async" /></div>
    </section>}
    {slug === 'project-10' && <section className="synesthesia-gallery" aria-label="海报设计作品集">
      <div className="protected-image"><img src="/projects/posters/02-1920.webp" srcSet="/projects/posters/02-960.webp 960w, /projects/posters/02-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 02" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/04-1920.webp" srcSet="/projects/posters/04-960.webp 960w, /projects/posters/04-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 04" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/01-1920.webp" srcSet="/projects/posters/01-960.webp 960w, /projects/posters/01-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 01" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/03-1920.webp" srcSet="/projects/posters/03-960.webp 960w, /projects/posters/03-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 03" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/05-1920.webp" srcSet="/projects/posters/05-960.webp 960w, /projects/posters/05-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 05" loading="lazy" decoding="async" /></div>
      <div className="protected-image" style={{ maxWidth: 601, marginInline: 'auto', marginBottom: 'clamp(48px, 8vw, 120px)', width: '100%' }}><img src="/projects/posters/06.webp" width={601} height={850} alt="海报设计作品 06 · 动态海报" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/07-1920.webp" srcSet="/projects/posters/07-960.webp 960w, /projects/posters/07-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 07" loading="lazy" decoding="async" /></div>
      <div className="protected-image" style={{ maxWidth: 601, marginInline: 'auto', marginBottom: 'clamp(48px, 8vw, 120px)', width: '100%' }}><img src="/projects/posters/08.webp" width={600} height={848} alt="海报设计作品 08 · 动态海报" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/posters/09-1920.webp" srcSet="/projects/posters/09-960.webp 960w, /projects/posters/09-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="海报设计作品 09" loading="lazy" decoding="async" /></div>
    </section>}
    {slug === 'grey-wild' && <section className="synesthesia-gallery" aria-label="其它设计作品集">
      <div className="protected-image"><img src="/projects/other/other1-v2-1920.webp" srcSet="/projects/other/other1-v2-960.webp 960w, /projects/other/other1-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 1" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/other/other2-v2-1920.webp" srcSet="/projects/other/other2-v2-960.webp 960w, /projects/other/other2-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 2" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/other/other3-v2-1920.webp" srcSet="/projects/other/other3-v2-960.webp 960w, /projects/other/other3-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 3" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/other/other4-v2-1920.webp" srcSet="/projects/other/other4-v2-960.webp 960w, /projects/other/other4-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 4" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/other/other5-v2-1920.webp" srcSet="/projects/other/other5-v2-960.webp 960w, /projects/other/other5-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 5" loading="lazy" decoding="async" /></div>
      <div className="protected-image"><img src="/projects/other/other6-v2-1920.webp" srcSet="/projects/other/other6-v2-960.webp 960w, /projects/other/other6-v2-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 24px), calc(100vw - 72px)" width={1920} height={1162} alt="其它设计作品 6" loading="lazy" decoding="async" /></div>
    </section>}
    <NextProjects current={slug} />
    <ContactSection />
  </main>;
}
