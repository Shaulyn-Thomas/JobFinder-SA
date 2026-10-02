import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { SearchPage } from '@/pages/SearchPage';
import { SavedPage } from '@/pages/SavedPage';
import { useSavedOpportunities } from '@/hooks/useSavedOpportunities';
import type { PageId } from '@/types';

function App() {
  const [page, setPage] = useState<PageId>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { savedIds, toggleSave, isSaved } = useSavedOpportunities();

  const handleNavigate = (target: PageId) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar active={page} onNavigate={handleNavigate} savedCount={savedIds.length} />

      <main className="flex-1 pb-20 sm:pb-6">
        {page === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSearch={handleSearch}
            isSaved={isSaved}
            onToggleSave={toggleSave}
          />
        )}
        {page === 'search' && (
          <SearchPage
            initialQuery={searchQuery}
            isSaved={isSaved}
            onToggleSave={toggleSave}
          />
        )}
        {page === 'saved' && (
          <SavedPage
            savedIds={savedIds}
            isSaved={isSaved}
            onToggleSave={toggleSave}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <footer className="hidden border-t border-slate-200 bg-white py-4 sm:block">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-slate-400">
          JobFinder SA — Sample prototype. All opportunities shown are sample data for demonstration.
        </div>
      </footer>
    </div>
  );
}

export default App;
