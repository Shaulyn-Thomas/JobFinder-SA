import { Bookmark, Briefcase, Search } from 'lucide-react';
import { SAMPLE_OPPORTUNITIES } from '@/data/opportunities';
import { OpportunityCard } from '@/components/OpportunityCard';
import type { PageId } from '@/types';

interface SavedPageProps {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
  onNavigate: (page: PageId) => void;
}

export function SavedPage({ savedIds, isSaved, onToggleSave, onNavigate }: SavedPageProps) {
  const saved = SAMPLE_OPPORTUNITIES.filter((opp) => savedIds.includes(opp.id));

  return (
    <div className="mx-auto max-w-5xl animate-fade-in px-4 py-6">
      <div className="flex items-center gap-2">
        <Bookmark className="h-6 w-6 text-brand-600" />
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Saved Opportunities
        </h1>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        {saved.length > 0
          ? `${saved.length} ${saved.length === 1 ? 'opportunity' : 'opportunities'} bookmarked`
          : 'Opportunities you save will appear here'}
      </p>

      {saved.length > 0 ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              isSaved={isSaved(opp.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Briefcase className="h-8 w-8 text-slate-300" />
          </div>
          <p className="mt-4 text-base font-semibold text-slate-700">Nothing saved yet</p>
          <p className="mt-1 max-w-xs text-sm text-slate-500">
            Tap the bookmark icon on any opportunity to save it here for later.
          </p>
          <button
            onClick={() => onNavigate('search')}
            className="btn-primary mt-5"
          >
            <Search className="h-4 w-4" />
            Browse opportunities
          </button>
        </div>
      )}
    </div>
  );
}
