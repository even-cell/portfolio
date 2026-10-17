import { SiteHeader } from '../../site-header';
import { ContactSection } from '../../contact-section';
import { ProjectInfo } from '../../project-info';
import type { Metadata } from 'next';
import { CustomCursor } from '../../custom-cursor';
import { ResetDetailScroll } from './reset-detail-scroll';
import { NextProjects } from '../../next-projects';

export const metadata: Metadata = {
  title: '尚然堂｜张译文 EVEN ZHANG',
  description: '尚然堂草本养生产品包装与视觉系统设计。',
  openGraph: {
    title: '尚然堂｜张译文 EVEN ZHANG',
    description: '让传统草本进入当代生活方式。',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: '尚然堂｜张译文 EVEN ZHANG',
    description: '让传统草本进入当代生活方式。',
    images: [],
  },
};

const gallery = [
  { src: '/projects/shangrantang/process-06.jpg', alt: '尚然堂品牌背景与项目介绍', layout: 'document' },
  { src: '/projects/shangrantang/process-07.jpg', alt: '尚然堂需求分析与设计目标', layout: 'document' },
  { src: '/projects/shangrantang/process-08.jpg', alt: '尚然堂核心策略与包装视觉系统', layout: 'document' },
  { src: '/projects/shangrantang/detail-05.png', alt: '尚然堂清润肺胃和顺汤视觉设计', layout: 'document' },
  { src: '/projects/shangrantang/detail-01.png', alt: '尚然堂轻盈安身祛湿汤视觉设计', layout: 'document' },
  { src: '/projects/shangrantang-purple.jpg', alt: '尚然堂轻盈安身祛湿汤包装展开设计', layout: 'document' },
  { src: '/projects/shangrantang/detail-02.png', alt: '尚然堂盈润补血养阴汤视觉设计', layout: 'document' },
  { src: '/projects/shangrantang/package-pink-fold.jpg', alt: '尚然堂盈润补血养阴汤包装展开设计', layout: 'document' },
  { src: '/projects/shangrantang/detail-03.png', alt: '尚然堂醒脾助长汤视觉设计', layout: 'document' },
  { src: '/projects/shangrantang/package-four-sides.jpg', alt: '尚然堂醒脾助长汤系列包装展示', layout: 'document' },
  { src: '/projects/shangrantang/detail-04.png', alt: '尚然堂温补肾阳汤视觉设计', layout: 'document' },
];

export default function ShangrantangProject() {
  return (
    <main id="top" className="project-detail">
      <ResetDetailScroll />
      <CustomCursor />
      <SiteHeader />

      <div className="detail-transition">
        <section className="detail-hero" aria-label="尚然堂项目封面">
          <div className="detail-hero-frame">
            <img src="/projects/shangrantang-purple.jpg" alt="尚然堂草本产品包装展开设计" />
          </div>
        </section>

        <ProjectInfo name="尚然堂" title="让传统草本进入当代生活方式"
          description="尚然堂希望让传统草本养生进入更轻盈的当代生活。项目以东方药材的自然形态为线索，通过克制的排版、低饱和色彩与细腻材质，建立兼具专业可信度与日常亲和力的包装视觉系统。"
          year="2026" services="包装设计、品牌视觉" category="草本养生" />
      </div>

      <section className="detail-gallery" aria-label="尚然堂项目图片">
        {gallery.map((image, index) => (
          <figure className={`detail-image ${image.layout}`} key={image.src}>
            <img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : 'eager'} />
          </figure>
        ))}
      </section>

      <NextProjects />
      <ContactSection />
    </main>
  );
}
