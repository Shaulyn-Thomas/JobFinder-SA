import { SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import {
  PROVINCES,
  OPPORTUNITY_TYPES,
  EDUCATION_LEVELS,
  type Province,
  type OpportunityType,
  type EducationLevel,
} from '@/data/opportunities';

export interface FilterState {
  province: Province | 'All Provinces';
  type: OpportunityType | 'All Types';
  education: EducationLevel | 'All Levels';
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
}

export function FilterBar({ filters, onChange, onClear }: FilterBarProps) {
  const [open, setOpen] = useState(false);

  const activeCount =
    (filters.province !== 'All Provinces' ? 1 : 0) +
    (filters.type !== 'All Types' ? 1 : 0) +
    (filters.education !== 'All Levels' ? 1 : 0);

  return (
    <div className="space-y-3">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-brand-600" />
          Filters
          {activeCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1.5 text-xs font-bold text-white">
              {activeCount}
            </span>
          )}
        </span>
        <span className="text-xs font-medium text-slate-400">
          {open ? 'Hide' : 'Show'}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="card animate-scale-in space-y-4 p-4">
          {/* Province */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Province
            </label>
            <select
              value={filters.province}
              onChange={(e) =>
                onChange({ ...filters, province: e.target.value as FilterState['province'] })
              }
              className="input-field"
            >
              <option value="All Provinces">All Provinces</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Opportunity Type
            </label>
            <div className="flex flex-wrap gap-2">
              {(['All Types', ...OPPORTUNITY_TYPES] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => onChange({ ...filters, type: t })}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                    filters.type === t
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Education Level
            </label>
            <select
              value={filters.education}
              onChange={(e) =>
                onChange({ ...filters, education: e.target.value as FilterState['education'] })
              }
              className="input-field"
            >
              <option value="All Levels">All Levels</option>
              {EDUCATION_LEVELS.map((ed) => (
                <option key={ed} value={ed}>
                  {ed}
                </option>
              ))}
            </select>
          </div>

          {/* Clear */}
          {activeCount > 0 && (
            <button
              onClick={onClear}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50"
            >
              <X className="h-4 w-4" />
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
