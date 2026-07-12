import PageLayout from '../components/PageLayout';
import { site, contact } from '../data/site';

export default function Contact() {
  return (
    <PageLayout title="交流" subtitle={contact.intro}>
      <div className="font-body flex flex-col sm:flex-row gap-4 max-w-3xl">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full px-10 py-4 text-base bg-black text-white text-center hover:scale-[1.03] transition-transform duration-300"
        >
          寫信給我
        </a>
        {contact.googleFormUrl && (
          <a
            href={contact.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-10 py-4 text-base border border-black text-black text-center hover:bg-black hover:text-white transition-colors duration-300"
          >
            填寫交流表單
          </a>
        )}
      </div>

      <p className="font-body text-sm text-[#6F6F6F] mt-10 max-w-2xl leading-relaxed">
        電子信箱：
        <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-black">
          {site.email}
        </a>
      </p>
    </PageLayout>
  );
}
