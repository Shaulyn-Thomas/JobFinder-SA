import type { OpportunityType } from '@/data/opportunities';

export const typeStyles: Record<
  OpportunityType,
  { bg: string; text: string; border: string }
> = {
  Job: {
    bg: '#dbeafe',
    text: '#1e40af',
    border: '#bfdbfe',
  },
  Learnership: {
    bg: '#dcfce7',
    text: '#166534',
    border: '#bbf7d0',
  },
  Internship: {
    bg: '#fae8ff',
    text: '#86198f',
    border: '#f5d0fe',
  },
};
