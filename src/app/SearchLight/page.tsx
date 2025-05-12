// src/app/SearchLight/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchLight() {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/SearchResults?query=${encodeURIComponent(query)}`);
    }

    return(
        <div className="w-full max-w-[1440px] h-[1024px] min-h-screen mx-auto relative bg-white overflow-hidden px-4 py-8">
            {/* Background */}
            <div className="w-[1440px] h-[1024px] left-0 top-0 absolute bg-neutral-800 backdrop-blur-xl" /> 
    
    
            {/* Search Bar */}
            <div className="w-[calc(100vw-100px)] max-w-[1340px] h-[869px] left-[50px] top-[122px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-xl" />
            <div className="w-[calc(100vw-152px)] max-w-[1288px] h-[820px] left-[76px] top-[146px] absolute bg-gradient-to-l from-zinc-400/30 to-zinc-400/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-2xl" />
            <form onSubmit={handleSearch}>
                <div className="flex w-[calc(100vw-152px)] max-w-[1288px] h-20 left-[76px] top-[145.83px] absolute bg-gradient-to-l from-white/40 to-zinc-400/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-lg">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search…"
                        className="flex-grow outline-none bg-transparent text-white ml-23"
                    />
                    <button className="justify-end mr-23">click to search</button>
                </div>
            </form>
            <div className="w-12 h-12 left-[99px] top-[164px] absolute overflow-hidden">
                <div className="w-9 h-9 left-[6px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Icon-Neutral-On-Neutral" />
            </div>
            <div data-size="48" className="w-16 h-8 left-[1282.06px] top-[198.31px] absolute origin-top-left -rotate-45 overflow-hidden">
                <div className="w-10 h-10 left-[14.14px] top-[14.14px] absolute outline outline-4 outline-offset-[-2px] outline-Icon-Neutral-On-Neutral" />
            </div>
            <div className="left-[140px] top-[516px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[596px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[675px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[277px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[357px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[754px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[834px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div className="left-[140px] top-[436px] absolute justify-start text-white text-4xl font-normal font-['Aktiv_Grotesk']">Example Topic</div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[516px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[833px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[436px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[753px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[357px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[674px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[278px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>
            <div data-status="Inactive" className="w-72 h-12 left-[861px] top-[595px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="left-[61px] top-[6px] absolute justify-start text-white text-3xl font-light font-['Aktiv_Grotesk']">Add to Terminal </div>
                <div data-size="48" className="w-12 h-12 left-[9px] top-[1px] absolute overflow-hidden">
                    <div className="w-7 h-7 left-[10px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                </div>
            </div>

            {/* Navigation Bar */}
            <div data-state="inactive" className="w-[calc(100vw-100px)] max-w-[1340px] h-12 mx-auto mp-43 mb-8 relative">
                <div className="h-12 left-0 top-0 relative bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
                <div className="w-28 left-[879.42px] top-[12px] absolute text-center justify-start text-white text-base font-medium font-['Aktiv_Grotesk']">What We Do</div>
                <div className="w-24 left-[1063px] top-[12px] absolute text-center justify-start text-white text-base font-medium font-['Aktiv_Grotesk']">Contact</div>
                <div className="w-7 h-7 left-[1268px] top-[11px] absolute">
                    <div className="w-4 h-4 left-[4.50px] top-[4.50px] absolute bg-Schemes-Background" />
                </div>
                <div data-size="48" className="w-8 h-8 left-[26px] top-[9px] absolute overflow-hidden">
                    <div className="w-6 h-7 left-[4.12px] top-[2.75px] absolute outline outline-4 outline-offset-[-2px] outline-Icon-Brand-On-Brand" />
                </div>
                <div className="w-64 h-9 left-[92.12px] top-[7px] absolute justify-center text-white text-2xl font-medium font-['Aktiv_Grotesk']">hundred.news</div>
            </div>
        </div>
    );
}