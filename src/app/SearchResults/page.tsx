// src/app/SearchResults/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchRssArticles } from '../utils/rss'; // adjust path as needed
import type { Article } from '../utils/rss';
import { format } from 'date-fns'; // Add this import for date formatting

export default function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        if (query) {
            fetchRssArticles({ keyword: query, sortBy: 'publishedAt' }).then(setArticles);
        }
    }, [query]);

    return(
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
                        <div data-status="Inactive" className="w-72 h-12 relative">
                            <div className="w-72 h-12 bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                            <div className="absolute left-[61px] top-[6px] text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal</div>
                            <div data-size="48" className="w-12 h-12 absolute left-[9px] top-[1px] overflow-hidden">
                                <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
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
                                        console.log("1");
                                        console.log(article.url);
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