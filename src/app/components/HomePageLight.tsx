// src/app/components/HomePageLight.tsx

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchRssArticles } from '../utils/rss';
import type { Article } from '../utils/rss';
import { format } from 'date-fns';

export default function HomePageLight() {
  const router = useRouter();
  const [topicLabels, setTopicLabels] = useState(Array(6).fill('Topic Name'));
  const [articles, setArticles] = useState<Article[]>([]);

  const handleTopicClick = (idx: number) => {
    const input = prompt('Enter topic name:');
    if (input && input.trim() !== '') {
      setTopicLabels(labels => {
        const newLabels = [...labels];
        newLabels[idx] = input;
        return newLabels;
      });
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      // Get all non-default topic names
      const activeTopics = topicLabels.filter(label => label !== 'Topic Name');
      
      if (activeTopics.length > 0) {
        // Fetch articles for each topic
        const allArticles = await Promise.all(
          activeTopics.map(topic => fetchRssArticles({ keyword: topic, sortBy: 'publishedAt' }))
        );
        
        // Flatten and sort articles by publishedAt
        const flattenedArticles = allArticles
          .flat()
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .slice(0, 8); // Limit to 8 most recent articles
        
        setArticles(flattenedArticles);
      }
    };

    fetchArticles();
    // Set up interval to refresh articles every minute
    const interval = setInterval(fetchArticles, 60000);
    return () => clearInterval(interval);
  }, [topicLabels]);

  return (
    <div className="w-full max-w-[1440px] min-h-[1200px] mx-auto relative bg-white overflow-hidden px-4 py-8">
     
      {/* navigation bar */}
      <div data-state="inactive" className="w-[calc(100vw-100px)] max-w-[1340px] h-12 mx-auto mp-[43px] mb-8 relative">
          <div className="relative h-12 left-0 top-0  bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
          <div className="w-28 left-[879.42px] top-[12px] absolute text-center justify-start text-neutral-700 text-base font-medium font-['Aktiv_Grotesk']">What We Do</div>
          <div className="w-24 left-[1063px] top-[12px] absolute text-center justify-start text-neutral-700 text-base font-medium font-['Aktiv_Grotesk']">Contact</div>
          <div className="w-7 h-7 left-[1268px] top-[11px] absolute">
              <div className="w-4 h-4 left-[4.50px] top-[4.50px] absolute bg-Icon-Brand-Secondary" />
          </div>
          <div data-size="48" className="w-8 h-8 left-[26px] top-[9px] absolute overflow-hidden">
              <img src="/icons/Box.svg" alt="Box" className="w-6 h-7 left-[4.12px] top-[2.75px] absolute" />
          </div>
          <div className="w-64 h-9 left-[92.12px] top-[7px] absolute justify-center text-neutral-700 text-2xl font-medium font-['Aktiv_Grotesk']">hundred.news</div>
      </div>

      {/* search bar */}
      <div data-state="Inactive" className="w-[calc(100vw-100px)] max-w-[1340px] h-20 mx-auto mb-8 relative">
          <div className="z-1 w-full h-20 bg-gradient-to-br from-white/30 to-zinc-600/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
          <div className="z-2 w-[calc(100%-52px)] max-w-[1288px] h-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-zinc-400/30 to-zinc-400/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
          <button 
            className="z-3 w-[calc(100%-52px)] max-w-[1288px] h-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-zinc-400/30 to-zinc-400/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-lg hover:bg-zinc-400/50 transition-all duration-300"
            onClick={() => router.push('/SearchLight')}
          >
          </button>
          <div data-size="48" className="w-7 h-7 left-[1264px] top-[23px] absolute overflow-hidden">
              <div className="w-5 h-5 left-[3.50px] top-[3.50px] absolute outline outline-4 outline-offset-[-2px] outline-Icon-Neutral-On-Neutral" />
          </div>
      </div>

      {/* Main Content: Topic Boxes + Live Terminal */}
      <div className="flex gap-8 justify-center">
        {/* Topics */}
        <section className="w-1/3 max-w-5xl mx-auto mb-10 ml-8">
          <div className="grid gap-4 grid-cols-2">
            {topicLabels.map((label, i) => (
              <button
                key={i}
                className="h-30 bg-gradient-to-br from-white/30 to-zinc-500/30 rounded-[20px] shadow-[0_4px_12px_0_rgba(0,0,0,0.10)] backdrop-blur-lg flex items-center justify-center w-full text-neutral-700 text-lg font-medium font-['Aktiv_Grotesk' hover:bg-zinc-300/50 transition-all duration-300]"
                onClick={() => handleTopicClick(i)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* live terminal */}
        <div className="w-2/3 h-[900px] mr-[18px] flex flex-col bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg">
          <div className="w-full text-center mt-5 mb-4">
            <h2 className="text-white text-4xl font-medium font-['Aktiv_Grotesk']">Live Terminal</h2>
          </div>
                
          <div className="flex-1 px-6">
            {articles.map((article, index) => (
              <div key={`${article.url}-${index}`} data-state="Inactive" className="w-full mb-4">
                <button
                  onClick={() => window.open(article.url, '_blank')}
                  className="w-full relative bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg hover:bg-zinc-400/50 transition-all duration-300"
                >
                  <div className="flex items-center px-6 py-3">
                    <div className="w-20 flex-shrink-0 text-white text-xl font-medium font-['Aktiv_Grotesk']">
                      {topicLabels.find(label => article.title.toLowerCase().includes(label.toLowerCase())) || 'General'}
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="text-white text-lg font-medium font-['Aktiv_Grotesk'] line-clamp-2">{article.title}</div>
                      <div className="italic text-white text-base font-light font-['Aktiv_Grotesk'] mt-1">{article.source.name}</div>
                    </div>
                    <div className="w-24 flex-shrink-0 text-right text-white text-base font-['Aktiv_Grotesk'] whitespace-nowrap">
                      {format(new Date(article.publishedAt), "HH:mm")}
                    </div>
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