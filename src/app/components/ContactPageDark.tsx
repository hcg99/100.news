// src/app/components/ContactPageDark.tsx

export default function ContactPageDark() {
    return (
        <div className="w-[1440px] h-[1024px] relative bg-white overflow-hidden">
            <div className="w-[1440px] h-[1024px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[575px] h-[729px] left-[433px] top-[141px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
            <div className="w-[497px] h-16 left-[472px] top-[321px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
            <div className="w-[497px] h-16 left-[472px] top-[450px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
            <div className="w-[497px] h-64 left-[472px] top-[573px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
            <div className="w-72 h-20 left-[582px] top-[907px] absolute bg-gradient-to-br from-neutral-400/30 to-stone-900/30 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
            <div className="left-[678px] top-[924px] absolute justify-start text-white text-4xl font-medium font-['Aktiv_Grotesk']">Send</div>
            <div className="w-96 h-12 left-[469px] top-[165px] absolute justify-start text-white text-6xl font-semibold font-['Aktiv_Grotesk']">Get in Touch.</div>
            <div className="w-24 h-8 left-[477px] top-[270px] absolute justify-end text-white text-base font-normal font-['Aktiv_Grotesk']">Full Name</div>
            <div className="w-24 h-8 left-[477px] top-[401px] absolute justify-end text-white text-base font-normal font-['Aktiv_Grotesk']">Email</div>
            <div className="w-48 h-8 left-[477px] top-[523px] absolute justify-end text-white text-base font-normal font-['Aktiv_Grotesk']">Message</div>
            <div data-state="inactive" className="w-[1340px] h-12 left-[50px] top-[43px] absolute">
                <div className="w-[1340px] h-12 left-0 top-0 absolute bg-gradient-to-br from-white/20 to-neutral-600/20 rounded-[30px] shadow-[0px_8px_20px_2px_rgba(0,0,0,0.25)] backdrop-blur-lg" />
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
