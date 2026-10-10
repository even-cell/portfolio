export function ContactSection() {
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <section className="contact-row">
        <h2 id="contact-title">Contact</h2>
        <dl className="contact-details">
          <div><dt>WeChat</dt><dd>alake1960</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:herecomeseven@gmail.com">herecomeseven@gmail.com</a></dd></div>
        </dl>
      </section>
      <section className="contact-row contact-notice" aria-labelledby="notice-title">
        <h2 id="notice-title">Notice</h2>
        <p lang="en">All works displayed on this website are for personal portfolio and informational purposes only. All intellectual property rights belong to their respective owners. Unauthorized reproduction, redistribution, or commercial use is prohibited.</p>
      </section>
      <div className="contact-legal">
        <p>© 2026 EVEN ZHANG. All Rights Reserved.</p>
        <p>本网站作品仅用于个人展示与交流，相关知识产权归各权利人所有，未经授权不得转载或用于商业用途。</p>
      </div>
      <a href="#top" className="contact-wordmark" aria-label="Even Zhang · 返回顶部">
        <img src="/branding/even-zhang.svg" width="1870" height="341" alt="Even Zhang" />
      </a>
    </footer>
  );
}
