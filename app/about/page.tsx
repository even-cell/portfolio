import type { Metadata } from 'next';
import { SiteHeader } from '../site-header';
import { ContactSection } from '../contact-section';
import { CustomCursor } from '../custom-cursor';

export const metadata: Metadata = { title: 'ABOUT｜张译文 EVEN ZHANG', description: '张译文，4年品牌视觉与包装设计经验，主导项目30余个，参与项目50余个。' };

export default function About() {
  return <main id="top" className="about-page">
    <CustomCursor />
    <SiteHeader about />
    <section className="about-intro" aria-labelledby="about-title">
      <h1 id="about-title">张译文<span>EVEN ZHANG</span></h1>
      <div className="about-bio">
        <div className="about-profile-heading">
          <h2>专注品牌视觉<br />与包装设计</h2>
          <dl className="about-metrics">
            <div><dt>4<span>年</span></dt><dd>设计经验<span lang="en">YEARS OF EXPERIENCE</span></dd></div>
            <div><dt>30<span>+</span></dt><dd>主导项目<span lang="en">PROJECTS LED</span></dd></div>
            <div><dt>50<span>+</span></dt><dd>参与项目<span lang="en">PROJECTS CONTRIBUTED TO</span></dd></div>
          </dl>
          <p className="about-sectors">涉及领域：<br />新消费、食品餐饮、文化艺术、酒店及教育等等。</p>
        </div>
        <div className="about-description">
          <div className="about-copy-zh" lang="zh-CN">
            <p>4年经验。专注品牌视觉与包装设计，主导项目30余个，参与项目50余个。</p>
            <p>擅长将品牌定位与产品卖点转化为清晰、有辨识度的视觉语言，构建统一且可延展的品牌与系列包装体系。</p>
            <p>具备从调研、创意提案、设计执行到三维表现及制作跟进的项目经验，能够独立推进设计，并协同团队与供应商完成多触点应用落地。</p>
          </div>
          <div className="about-copy-en" lang="en">
            <p>With four years of experience in brand identity and packaging design, I have led over 30 projects and contributed to more than 50.</p>
            <p>I translate brand positioning and key product benefits into clear, distinctive visual language, building cohesive, scalable brand identities and packaging systems across product ranges.</p>
            <p>My experience spans research, creative proposals, design execution, 3D visualization, and production follow-through. I work independently to move projects forward and collaborate with teams and suppliers to bring designs to life across multiple touchpoints.</p>
            <p>Sectors include emerging consumer brands, food and beverage, arts and culture, hospitality, education, and more.</p>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </main>;
}
