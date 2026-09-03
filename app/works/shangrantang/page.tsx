import type { Metadata } from 'next';
import { CustomCursor } from '../../custom-cursor';
import { AnimatedProjectLink } from '../../animated-project-link';
import { ResetDetailScroll } from './reset-detail-scroll';

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
      <header className="site-header detail-header">
        <AnimatedProjectLink href="/" className="identity" ariaLabel="返回首页" transition>视觉设计师_张译文</AnimatedProjectLink>
        <nav aria-label="主导航">
          <AnimatedProjectLink href="/#works" className="" ariaLabel="返回首页作品区域" transition>作品</AnimatedProjectLink>
          <AnimatedProjectLink href="/#contact" className="" ariaLabel="返回首页联系区域" transition>联系</AnimatedProjectLink>
        </nav>
      </header>

      <div className="detail-transition">
        <section className="detail-hero" aria-label="尚然堂项目封面">
          <div className="detail-hero-frame">
            <img src="/projects/shangrantang-purple.jpg" alt="尚然堂草本产品包装展开设计" />
          </div>
        </section>

        <section className="detail-intro" aria-labelledby="detail-intro-title">
          <p className="detail-info-label">INFO</p>
          <h2 id="detail-intro-title">
            尚然堂希望让传统草本养生进入更轻盈的当代生活。项目以东方药材的自然形态为线索，通过克制的排版、低饱和色彩与细腻材质，建立兼具专业可信度与日常亲和力的包装视觉系统。
          </h2>
          <div className="detail-facts">
            <div><span>YEAR</span><strong>2026</strong></div>
            <div><span>CLIENT</span><strong>尚然堂</strong></div>
            <div><span>SERVICES</span><strong>品牌视觉、包装设计</strong></div>
            <div><span>CATEGORY</span><strong>草本养生</strong></div>
          </div>
        </section>
      </div>

      <section className="detail-gallery" aria-label="尚然堂项目图片">
        {gallery.map((image, index) => (
          <figure className={`detail-image ${image.layout}`} key={image.src}>
            <img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : 'eager'} />
          </figure>
        ))}
      </section>

      <footer className="detail-footer">
        <AnimatedProjectLink href="/#works" className="" ariaLabel="返回全部作品" transition>← 返回全部作品</AnimatedProjectLink>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
