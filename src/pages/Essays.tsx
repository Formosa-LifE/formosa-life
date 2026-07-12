import PageLayout from '../components/PageLayout';
import { essays } from '../data/site';

export default function Essays() {
  return (
    <PageLayout title="隨筆" subtitle="關於教學、學習與生活的隨想。">
      <div className="flex flex-col gap-14 max-w-3xl font-body">
        {essays.map((essay) => (
          <article key={essay.title} className="border-b border-black/5 pb-14 last:border-0">
            <time className="text-xs text-[#6F6F6F] tracking-wide">{essay.date}</time>
            <h2 className="font-display text-3xl text-black mt-2">{essay.title}</h2>
            <div className="mt-5 text-[#3a3a3a] leading-loose text-base space-y-4">
              {essay.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
