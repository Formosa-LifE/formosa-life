import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { resourceCategories, ResourceCategory } from '../data/site';

const cardClass =
  'group block rounded-3xl border border-black/10 p-8 hover:border-black hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white';

function CardInner({ cat }: { cat: ResourceCategory }) {
  return (
    <>
      <div className="text-4xl">{cat.emoji}</div>
      <h2 className="font-display text-2xl text-black mt-5 group-hover:underline underline-offset-4">
        {cat.title}
      </h2>
      <p className="text-[#6F6F6F] text-sm mt-3 leading-relaxed">{cat.description}</p>
      <p className="text-xs text-black mt-6 flex items-center gap-1">
        {cat.linkLabel ?? '前往雲端資料夾'}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </p>
    </>
  );
}

export default function Resources() {
  return (
    <PageLayout
      title="養分"
      subtitle="累積的學習與教學資源，希望可以成為學習者成長的養分。點選分類卡片即可瀏覽。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body">
        {resourceCategories.map((cat) =>
          cat.slug ? (
            // 內嵌頁：留在站內
            <Link key={cat.title} to={`/resources/${cat.slug}`} className={cardClass}>
              <CardInner cat={cat} />
            </Link>
          ) : (
            // 外連（雲端資料夾或站內工具）
            <a
              key={cat.title}
              href={cat.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <CardInner cat={cat} />
            </a>
          )
        )}
      </div>

      <p className="font-body text-xs text-[#6F6F6F] mt-10 leading-relaxed">
        ※ 內容會隨學習與教學持續更新，歡迎隨時回訪、交流與回饋。資源僅供學習使用，轉載請註明出處。
      </p>
    </PageLayout>
  );
}
