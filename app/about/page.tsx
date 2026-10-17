import type { Metadata } from 'next';
import { SiteHeader } from '../site-header';
import { ContactSection } from '../contact-section';
import { CustomCursor } from '../custom-cursor';

export const metadata: Metadata = { title: 'ABOUT｜张译文 EVEN ZHANG', description: '张译文，一名专注于创造视觉体验、实现信息传达的设计师。' };

export default function About() {
  return <main id="top" className="about-page">
    <CustomCursor />
    <SiteHeader about />
    <section className="about-intro" aria-labelledby="about-title">
      <h1 id="about-title">张译文<span>EVEN ZHANG</span></h1>
      <div className="about-bio">
        <p>一名专注于创造视觉体验、<br className="about-break" />实现信息传达的设计师。</p>
        <div className="about-description"><p>从包装设计到活动视觉，以图形、文字与色彩，探索信息与感受之间的联系。</p><p>让设计清晰地表达，也留下独特的印象。</p></div>
      </div>
    </section>
    <ContactSection />
  </main>;
}
