// src/app/components/HomePageLight2.tsx

'use client';
import { useRouter } from 'next/navigation';

export default function HomePageLight() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto bg-white overflow-x-hidden px-4 py-8">
      {/* Navigation Bar */}
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-between bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg px-8 py-3 mb-8">
        <div className="flex items-center gap-4">
          <img src="/icons/Box.svg" alt="Box" className="w-8 h-8" />
          <span className="text-neutral-700 text-2xl font-medium font-['Aktiv_Grotesk']">hundred.news</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-neutral-700 text-base font-medium font-['Aktiv_Grotesk'] cursor-pointer">What We Do</span>
          <span className="text-neutral-700 text-base font-medium font-['Aktiv_Grotesk'] cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mx-auto mb-10">
        <form
          className="flex items-center bg-gradient-to-br from-white/30 to-zinc-600/30 rounded-[30px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg px-4 py-2"
          onSubmit={e => {
            e.preventDefault();
            router.push('/SearchLight');
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 rounded-l-[30px] bg-white/80 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-r-[30px] hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Live Terminal Section */}
      <section className="w-full max-w-5xl mx-auto mb-10">
        <div className="bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg p-8">
          <h2 className="text-white text-4xl font-medium font-['Aktiv_Grotesk'] mb-6">Live Terminal</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg p-4 flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white text-xl font-medium font-['Aktiv_Grotesk']">Topic</span>
                  <span className="text-white text-base font-['Aktiv_Grotesk']">13mins ago</span>
                </div>
                <div>
                  <span className="text-white text-xl font-medium font-['Aktiv_Grotesk']">Headline of article</span>
                  <br />
                  <span className="text-white text-base font-light font-['Aktiv_Grotesk']">Publication Name</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="w-full max-w-5xl mx-auto mb-10">
        <h3 className="text-neutral-700 text-3xl font-medium font-['Aktiv_Grotesk'] mb-4">Topics</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/30 to-zinc-500/30 rounded-[30px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg flex items-center justify-center h-40"
            >
              <span className="text-neutral-700 text-2xl font-medium font-['Aktiv_Grotesk']">Topic Name</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}