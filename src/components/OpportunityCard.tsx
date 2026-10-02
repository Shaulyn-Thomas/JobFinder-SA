import { MapPin, Building2, Calendar, GraduationCap, Briefcase, Clock, Banknote, Bookmark } from 'lucide-react';
import type { Opportunity } from '@/data/opportunities';
import { typeStyles } from '@/utils/styleHelpers';

interface OpportunityCardProps {
  opportunity: Opportunity;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function daysUntil(iso: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(iso);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function OpportunityCard({ opportunity, isSaved, onToggleSave }: OpportunityCardProps) {
  const days = daysUntil(opportunity.closingDate);
  const closingLabel =
    days < 0
      ? 'Closed'
      : days === 0
        ? 'Closes today'
        : days <= 7
          ? `${days} day${days === 1 ? '' : 's'} left`
          : formatDate(opportunity.closingDate);

  const closingColor =
    days < 0
      ? 'text-slate-400'
      : days <= 7
        ? 'text-red-600'
        : 'text-slate-500';

  const style = typeStyles[opportunity.type];

  return (
    <article className="card group p-4 transition-all hover:shadow-md sm:p-5 animate-slide-up">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {opportunity.company.charAt(0)}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold leading-snug text-slate-900">
              {opportunity.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
              <Building2 className="h-3.5 w-3.5" />
              {opportunity.company}
            </p>
          </div>
        </div>

        <button
          onClick={() => onToggleSave(opportunity.id)}
          aria-label={isSaved ? 'Unsave opportunity' : 'Save opportunity'}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all active:scale-90 ${
            isSaved
              ? 'bg-brand-50 text-brand-600'
              : 'text-slate-300 hover:bg-slate-100 hover:text-slate-500'
          }`}
        >
          <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-brand-600' : ''}`} />
        </button>
      </div>

      {/* Tags row */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="chip" style={{ backgroundColor: style.bg, color: style.text }}>
          <Briefcase className="h-3 w-3" />
          {opportunity.type}
        </span>
        <span className="chip bg-slate-100 text-slate-600">
          <MapPin className="h-3 w-3" />
          {opportunity.location}
        </span>
        <span className="chip bg-slate-100 text-slate-600">
          <GraduationCap className="h-3 w-3" />
          {opportunity.education}
        </span>
      </div>

      {/* Details grid */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {opportunity.salary && (
          <div className="flex items-center gap-1.5 text-slate-600">
            <Banknote className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{opportunity.salary}</span>
          </div>
        )}
        {opportunity.duration && (
          <div className="flex items-center gap-1.5 text-slate-600">
            <Clock className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{opportunity.duration}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span className={`font-semibold ${closingColor}`}>{closingLabel}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {opportunity.field}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
        {opportunity.description}
      </p>

      {/* Sample badge */}
      {opportunity.isSample && (
        <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Sample opportunity
        </div>
      )}
    </article>
  );
}
