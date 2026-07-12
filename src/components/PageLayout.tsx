import { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

// 內頁共用版型：導覽列 + 標題區 + 內容 + 頁尾
export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col selection:bg-black selection:text-white">
      <Nav />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 pt-16 pb-24">
        <h1
          className="font-display text-5xl sm:text-6xl text-black animate-fade-rise"
          style={{ letterSpacing: '-1.5px' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base sm:text-lg text-[#6F6F6F] mt-5 max-w-2xl leading-relaxed animate-fade-rise-delay">
            {subtitle}
          </p>
        )}
        <div className="mt-12 animate-fade-rise-delay-2">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
