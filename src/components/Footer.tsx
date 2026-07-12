import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="relative z-10 font-body text-sm text-[#6F6F6F] text-center py-10 border-t border-black/5 mt-auto">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.tagline}
      </p>
      <p className="mt-1">
        <a href={`mailto:${site.email}`} className="hover:text-black transition-colors">
          {site.email}
        </a>
      </p>
    </footer>
  );
}
