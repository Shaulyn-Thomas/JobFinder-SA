import { Search, Briefcase, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { PageId } from '@/types';
import { SAMPLE_OPPORTUNITIES } from '@/data/opportunities';
import { OpportunityCard } from '@/components/OpportunityCard';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSearch: (query: string) => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export function HomePage({ onNavigate, onSearch, isSaved, onToggleSave }: HomePageProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const featured = SAMPLE_OPPORTUNITIES.slice(0, 3);

  const stats = [
    { icon: Briefcase, label: 'Jobs', value: '8+' },
    { icon: GraduationCap, label: 'Learnerships', value: '6+' },
    { icon: Users, label: 'Internships', value: '6+' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white" />
          <div className="absolute -bottom-32 left-10 h-48 w-48 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            Sample opportunities available now
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Find your first job in <br className="hidden sm:block" />
            <span className="text-accent-300">South Africa</span>
          </h1>
          <p className="mt-3 max-w-lg text-base text-brand-50/90 sm:text-lg">
            Entry-level jobs, learnerships and internships — all in one place.
            No account needed, just search and save what you like.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by job title, company or field..."
                className="w-full rounded-xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 shadow-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
            </div>
            <button type="submit" className="btn-primary bg-accent-500 hover:bg-accent-600 shadow-lg">
              Search
            </button>
          </form>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm"
              >
                <Icon className="mx-auto h-5 w-5 text-accent-300" />
                <p className="mt-1 text-lg font-extrabold">{value}</p>
                <p className="text-xs text-brand-50/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Featured opportunities</h2>
            <p className="text-sm text-slate-500">Hand-picked sample listings to get you started</p>
          </div>
          <button
            onClick={() => onNavigate('search')}
            className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              isSaved={isSaved(opp.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        {/* How it works */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-bold text-slate-900">How it works</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { step: '1', title: 'Search', desc: 'Browse jobs, learnerships and internships across all 9 provinces.' },
              { step: '2', title: 'Filter', desc: 'Narrow down by location, type and education level to find your match.' },
              { step: '3', title: 'Save', desc: 'Bookmark opportunities you like and find them anytime in Saved.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
