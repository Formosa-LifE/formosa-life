import PageLayout from '../components/PageLayout';
import { about } from '../data/site';

export default function About() {
  return (
    <PageLayout title={about.title}>
      <div className="max-w-3xl font-body text-[#3a3a3a] leading-loose text-base sm:text-lg space-y-6">
        {about.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </PageLayout>
  );
}
