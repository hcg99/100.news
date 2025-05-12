// src/app/SearchResults/page.tsx
'use client';  // This is needed to specify this as a Client Component

import { Suspense } from 'react';  // Import Suspense from React
import { useSearchParams } from 'next/navigation';  // Hook for accessing search params
import { useEffect, useState } from 'react';
import { fetchRssArticles } from '../utils/rss'; // adjust path as needed for fetching RSS data
import type { Article } from '../utils/rss'; // Define the Article type for data
import { format } from 'date-fns';  // For formatting date strings

function SearchResultsContent() {
  const searchParams = useSearchParams();  // Get the query params from the URL
  const query = searchParams.get('query') || '';  // Extract the query param (if available)
  const [articles, setArticles] = useState<Article[]>([]);  // State to store articles

  useEffect(() => {
    // Fetch articles based on the query parameter
    if (query) {
      fetchRssArticles({ keyword: query, sortBy: 'publishedAt' }).then(setArticles);
    }
  }, [query]);  // Re-fetch articles when the query changes

  return (
    <div className="min-h-screen w-full relative bg-white">
      <div className="fixed inset-0 opacity-75 bg-black backdrop-blur-xl" />
      <div className="relative min-h-screen w-full px-[50px] py-[50px]">
        <div className="w-full min-h-screen bg-gradient-to-br from-white/50 to-neutral-600/25 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg p-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-96">
              <div className="text-white text-5xl font-semibold font-['Aktiv_Grotesk']">
                {query}
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="space-y-4">
            {articles.map((article, idx) => (
              <div
                key={`${article.url}-${idx}`}
                className="w-full h-24 bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg flex items-center px-8 hover:bg-zinc-400/50"
              >
                <button
                  className="flex flex-row justify-between items-center w-full min-w-[120px]"
                  onClick={() => {
                    window.open(article.url, '_blank');
                  }}
                  type="button"
                >
                  {/* Left side */}
                  <div className="flex flex-col">
                    <span className="text-white text-xl font-normal font-['Aktiv_Grotesk']">{article.source.name}</span>
                    <span className="text-white text-base font-light font-['Aktiv_Grotesk'] leading-tight">
                      {format(new Date(article.publishedAt), "HH:mm - d MMMM yyyy")}
                    </span>
                  </div>
                  {/* Right side */}
                  <div className="flex-1 flex items-center ml-8">
                    <span className="text-white text-2xl font-bold font-['Aktiv_Grotesk']">{article.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>  {/* Add Suspense to wait for data */}
      <SearchResultsContent />
    </Suspense>
  );
}
