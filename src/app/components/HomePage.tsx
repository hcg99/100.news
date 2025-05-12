// src/app/components/HomePage.tsx

'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

interface Article {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    source: {
      name: string;
    };
}
  
  interface FilterOptions {
    keyword: string;
    sortBy: 'publishedAt' | 'relevancy';
}

export default function Home() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [filter, setFilter] = useState<FilterOptions>({
      keyword: '',
      sortBy: 'publishedAt'
    });
    const [loading, setLoading] = useState(false);
  
    const fetchArticles = async () => {
      if (!filter.keyword) return;
      
      setLoading(true);
      try {
        const response = await fetch(`/api/news?keyword=${encodeURIComponent(filter.keyword)}&sortBy=${filter.sortBy}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      fetchArticles();
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">RSS News Aggregator</h1>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={filter.keyword}
                onChange={(e) => setFilter(prev => ({ ...prev, keyword: e.target.value }))}
                placeholder="Enter keywords to search..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search
            </button>
          </div>
          
          <div className="mt-4">
            <select
              value={filter.sortBy}
              onChange={(e) => setFilter(prev => ({ ...prev, sortBy: e.target.value as FilterOptions['sortBy'] }))}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="publishedAt">Most Recent</option>
              <option value="relevancy">Most Relevant</option>
            </select>
          </div>
        </form>
  
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.url} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      {article.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.source.name}</span>
                    <time>{format(new Date(article.publishedAt), 'MMM d, yyyy h:mm a')}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
  
        {!loading && articles.length === 0 && filter.keyword && (
          <p className="text-center text-gray-600">No articles found. Try different keywords.</p>
        )}
      </div>
    );
 }