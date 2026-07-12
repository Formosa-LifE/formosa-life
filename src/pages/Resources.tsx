import PageLayout from '../components/PageLayout';
import { resourceCategories } from '../data/site';

export default function Resources() {
  return (
    <PageLayout
      title="資源"
      subtitle="多年累積的教學資源，存放於 Google 雲端硬碟並持續更新。點選分類卡片即可瀏覽、下載最新檔案。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body">
        {resourceCategories.map((cat) => (
          <a
            key={cat.title}
            href={cat.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-black/10 p-8 hover:border-black hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white"
          >
            <div className="text-4xl">{cat.emoji}</div>
            <h2 className="font-display text-2xl text-black mt-5 group-hover:underline underline-offset-4">
              {cat.title}
            </h2>
            <p className="text-[#6F6F6F] text-sm mt-3 leading-relaxed">{cat.description}</p>
            <p className="text-xs text-black mt-6 flex items-center gap-1">
              前往雲端資料夾
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </p>
          </a>
        ))}
      </div>

      <p className="font-body text-xs text-[#6F6F6F] mt-10 leading-relaxed">
        ※ 資料夾內容會隨教學進度持續更新，歡迎隨時回訪。資源僅供學習使用，轉載請註明出處。
      </p>
    </PageLayout>
  );
}
