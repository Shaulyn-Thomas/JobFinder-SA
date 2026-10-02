import { useState, useMemo } from 'react';
import { Search, X, Inbox } from 'lucide-react';
import { SAMPLE_OPPORTUNITIES } from '@/data/opportunities';
import { OpportunityCard } from '@/components/OpportunityCard';
import { FilterBar, type FilterState } from '@/components/FilterBar';

interface SearchPageProps {
  initialQuery: string;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

const defaultFilters: FilterState = {
  province: 'All Provinces',
  type: 'All Types',
  education: 'All Levels',
};

export function SearchPage({ initialQuery, isSaved, onToggleSave }: SearchPageProps) {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_OPPORTUNITIES.filter((opp) => {
      if (q) {
        const haystack = `${opp.title} ${opp.company} ${opp.field} ${opp.location} ${opp.description}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.province !== 'All Provinces' && opp.province !== filters.province) return false;
      if (filters.type !== 'All Types' && opp.type !== filters.type) return false;
      if (filters.education !== 'All Levels' && opp.education !== filters.education) return false;
      return true;
    });
  }, [query, filters]);

  const hasActiveFilters =
    query.trim() !== '' ||
    filters.province !== 'All Provinces' ||
    filters.type !== 'All Types' ||
    filters.education !== 'All Levels';

  return (
    <div className="mx-auto max-w-5xl animate-fade-in px-4 py-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
        Search Opportunities
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Browse {SAMPLE_OPPORTUNITIES.length} sample jobs, learnerships and internships.
      </p>

      {/* Search input */}
      <div className="mt-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, company or field..."
            className="input-field pl-11"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mt-4">
        <FilterBar
          filters={filters}
          onChange={setFilters}
          onClear={() => setFilters(defaultFilters)}
        />
      </div>

      {/* Results count */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">
          {results.length} {results.length === 1 ? 'result' : 'results'}
        </p>
        {hasActiveFilters && results.length !== SAMPLE_OPPORTUNITIES.length && (
          <button
            onClick={() => {
              setQuery('');
              setFilters(defaultFilters);
            }}
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            Reset all
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((opp) => (
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
          <Inbox className="h-12 w-12 text-slate-300" />
          <p className="mt-4 text-base font-semibold text-slate-700">No opportunities found</p>
          <p className="mt-1 text-sm text-slate-500">
            Try adjusting your search or clearing some filters.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setFilters(defaultFilters);
            }}
            className="btn-ghost mt-4 border border-slate-200"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
