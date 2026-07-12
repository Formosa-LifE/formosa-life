import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../data/site';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let isTransitioning = false;

    // 處理瀏覽器自動播放限制
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Auto-play was prevented:', error);
      }
    };

    const loopLogic = () => {
      if (video && video.duration && !isTransitioning) {
        const time = video.currentTime;
        const duration = video.duration;

        let targetOpacity = 1;

        // 開頭 0.5 秒淡入
        if (time < 0.5) {
          targetOpacity = time / 0.5;
        }
        // 結尾 0.5 秒淡出
        else if (time > duration - 0.5) {
          targetOpacity = Math.max(0, (duration - time) / 0.5);
        }

        video.style.opacity = targetOpacity.toString();
      }
      animationFrameId = requestAnimationFrame(loopLogic);
    };

    const onEnded = () => {
      isTransitioning = true;
      video.style.opacity = '0';

      // 等 100ms 後重播，做出無縫循環
      setTimeout(() => {
        video.currentTime = 0;
        playVideo();
        isTransitioning = false;
      }, 100);
    };

    video.addEventListener('ended', onEnded);

    video.currentTime = 0;
    playVideo();
    animationFrameId = requestAnimationFrame(loopLogic);

    return () => {
      video.removeEventListener('ended', onEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white flex flex-col">
      {/* 背景影片層 */}
      <div
        className="absolute left-0 right-0 z-0 pointer-events-none"
        style={{ top: '300px', bottom: '0' }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={site.heroVideo}
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <Nav />

      {/* 主視覺 */}
      <main
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 mx-auto w-full flex-1"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal text-black animate-fade-rise"
          style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
        >
          每一個<span className="text-[#6F6F6F] italic">分享,</span>
          <br className="hidden sm:block" />
          都是一種 <span className="text-[#6F6F6F] italic">傳承.</span>
        </h1>

        <p className="font-body text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
          我們為好學的心靈築起棲息地，透過學習與教學的分享，陪伴您在探索的道路上，
          <br className="hidden sm:block" />
          綻放美麗的花朵，享受成長的喜悅。
        </p>

        <Link
          to="/resources"
          className="font-body rounded-full px-14 py-5 text-base mt-12 bg-black text-white hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.2)] animate-fade-rise-delay-2 cursor-pointer"
        >
          開啟成長
        </Link>
      </main>

      <Footer />
    </div>
  );
}
