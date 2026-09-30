'use client';
import { useEffect, useRef } from 'react';
export function ProjectVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let visible = false;
    const update = () => {
      if (visible && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .15 });
    observer.observe(video);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); video.pause(); };
  }, []);
  return <section className="project-video" aria-label="艺术通感的视听交互作品视频"><video ref={ref} autoPlay muted loop playsInline controls preload="metadata" poster="/projects/synesthesia-video-poster.jpg" aria-label="艺术通感的视听交互，点击音量按钮开启声音"><source src="/projects/synesthesia-web.mp4" type="video/mp4" />您的浏览器不支持播放此视频。</video></section>;
}
