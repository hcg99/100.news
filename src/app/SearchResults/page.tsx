'use client';  // This ensures the page runs client-side

import { useSearchParams } from 'next/navigation';  // To access the search params
import { useEffect, useState } from 'react';
import { fetchRssArticles } from '../utils/rss';  // Adjust the import path as needed
import type { Article } from '../utils/rss';  // Define the Article type
import { format } from 'date-fns';  // For formatting dates

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';  // Default to empty string if no query
  const [articles, setArticles] = useState<Article[]>([]);

  // Ensure this runs on the client side only
  useEffect(() => {
    if (query) {
      fetchRssArticles({ keyword: query, sortBy: 'publishedAt' }).then(setArticles);
    }
  }, [query]);

  if (!query) {
    return <div>Loading...</div>; // Optional loading state if there's no query
  }

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
            {/* Add your "Add to Terminal" button here */}
          </div>

          {/* Articles Section */}
          <div className="space-y-4">
            {articles.length > 0 ? (
              articles.map((article, idx) => (
                <div
                  key={`${article.url}-${idx}`}
                  className="w-full h-24 bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg flex items-center px-8 hover:bg-zinc-400/50"
                >
                  <button
                    className="flex flex-row justify-between items-center w-full min-w-[120px]"
                    onClick={() => {
                      window.open(article.url, '_blank'); // Open article in a new tab
                    }}
                    type="button"
                  >
                    {/* Left side: Article source and published date */}
                    <div className="flex flex-col">
                      <span className="text-white text-xl font-normal font-['Aktiv_Grotesk']">{article.source.name}</span>
                      <span className="text-white text-base font-light font-['Aktiv_Grotesk'] leading-tight">
                        {format(new Date(article.publishedAt), "HH:mm - d MMMM yyyy")}
                      </span>
                    </div>
                    {/* Right side: Article title */}
                    <div className="flex-1 flex items-center ml-8">
                      <span className="text-white text-2xl font-bold font-['Aktiv_Grotesk']">{article.title}</span>
                    </div>
                  </button>
                </div>
              ))
            ) : (
              <div>No articles found.</div>  // Fallback message
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
