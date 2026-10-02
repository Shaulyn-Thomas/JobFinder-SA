import { Briefcase, Home, Bookmark, Search } from 'lucide-react';
import type { PageId } from '@/types';

interface NavbarProps {
  active: PageId;
  onNavigate: (page: PageId) => void;
  savedCount: number;
}

export function Navbar({ active, onNavigate, savedCount }: NavbarProps) {
  const items: { id: PageId; label: string; icon: typeof Home }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'saved', label: 'Saved', icon: Bookmark },
  ];

  return (
    <>
      {/* Desktop / mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
              <Briefcase className="h-5 w-5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              JobFinder <span className="text-brand-600">SA</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 sm:flex">
            {items.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  active === id
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
                {id === 'saved' && savedCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-500 px-1.5 text-xs font-bold text-white">
                    {savedCount}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-5xl items-stretch justify-around">
          {items.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`relative flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors ${
                active === id ? 'text-brand-600' : 'text-slate-400'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`h-5 w-5 ${active === id ? 'fill-brand-50' : ''}`}
                  strokeWidth={active === id ? 2.5 : 2}
                />
                {id === 'saved' && savedCount > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white">
                    {savedCount}
                  </span>
                )}
              </div>
              {label}
              {active === id && (
                <span className="absolute top-0 h-0.5 w-8 rounded-full bg-brand-600" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
