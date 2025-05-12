// src/app/utils/rss.ts

'use client';



export interface Article {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    source: {
      name: string;
    };
}
  
export interface FilterOptions {
    keyword: string;
    sortBy: 'publishedAt' | 'relevancy';
}

// This is the function you should export and use elsewhere
export async function fetchRssArticles({ keyword, sortBy }: FilterOptions): Promise<Article[]> {
    if (!keyword) return [];
    try {
      const response = await fetch(`/api/news?keyword=${encodeURIComponent(keyword)}&sortBy=${sortBy}`);
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('Error fetching articles:', error);
      return [];
    }
}