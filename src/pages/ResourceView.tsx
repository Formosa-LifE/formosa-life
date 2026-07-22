import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { resourceCategories } from '../data/site';

// 內嵌頁：把某個資源分類的 Google 試算表嵌進站內，底部分頁可切換冊別
export default function ResourceView() {
  const { slug } = useParams();
  const cat = resourceCategories.find((c) => c.slug === slug);

  if (!cat || !cat.embedUrl) {
    return (
      <PageLayout title="找不到資源">
        <p className="font-body text-[#6F6F6F]">
          這個資源不存在。<Link to="/resources" className="underline">回養分</Link>
        </p>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${cat.emoji} ${cat.title}`} subtitle={cat.description}>
      <div className="mb-4 font-body text-sm">
        <Link to="/resources" className="text-[#6F6F6F] hover:text-black">← 回養分</Link>
        <span className="mx-2 text-black/20">|</span>
        <a
          href={cat.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6F6F6F] hover:text-black"
        >
          在新分頁開啟 ↗
        </a>
      </div>

      <div className="w-full rounded-2xl border border-black/10 overflow-hidden bg-white">
        <iframe
          src={cat.embedUrl}
          title={cat.title}
          className="w-full"
          style={{ height: 'min(78vh, 900px)', border: '0' }}
          loading="lazy"
        />
      </div>

      <p className="font-body text-xs text-[#6F6F6F] mt-6 leading-relaxed">
        ※ 用表格底部的分頁切換不同冊別；內容會隨教學進度更新。資源僅供學習使用，轉載請註明出處。
      </p>
    </PageLayout>
  );
}
