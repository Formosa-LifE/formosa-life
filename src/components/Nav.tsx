import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { site } from '../data/site';

const links = [
  { to: '/', label: '首頁' },
  { to: '/resources', label: '資源' },
  { to: '/essays', label: '隨筆' },
  { to: '/about', label: '關於' },
  { to: '/contact', label: '交流' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 font-body">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="font-display text-3xl tracking-tight text-black">
          {site.name}
          <sup className="text-sm font-body">®</sup>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-medium transition-colors'
                  : 'text-[#6F6F6F] hover:text-black transition-colors'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/resources"
            className="hidden md:inline-block rounded-full px-6 py-2.5 text-sm bg-black text-white hover:scale-[1.03] transition-transform duration-300"
          >
            開啟成長
          </Link>
          {/* 手機版選單按鈕 */}
          <button
            className="md:hidden text-2xl leading-none px-2"
            onClick={() => setOpen(!open)}
            aria-label="開啟選單"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* 手機版選單 */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-5 pb-6 bg-white/90 backdrop-blur text-base">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-black font-medium' : 'text-[#6F6F6F]'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
