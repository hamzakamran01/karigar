import Link from "next/link";
import { MapPin, Star, Filter } from "lucide-react";
import { AiMatchmaker } from "@/components/ui/ai-matchmaker";

export default function ExplorePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Search Header */}
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="font-bold text-xl font-[family-name:var(--font-heading)] text-white tracking-tight">
                        MK<span className="text-primary">.Enterprise</span>
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Link href="/customer/dashboard" className="text-sm font-medium text-white hover:text-primary transition-colors">Dashboard</Link>
                        <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/50 text-xs font-bold">Me</div>
                    </div>
                </div>
            </header>

            {/* Main Content (Split View) */}
            <main className="flex-1 flex overflow-hidden lg:flex-row flex-col h-[calc(100vh-80px)]">

                {/* Directory List & AI Search */}
                <section className="w-full lg:w-[45%] xl:w-[40%] flex flex-col h-full bg-background border-r border-white/10 overflow-y-auto custom-scrollbar">
                    <div className="p-4 md:p-8 space-y-8">

                        {/* AI Matchmaker Injection */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Describe Your Issue</h2>
                            <AiMatchmaker />
                        </div>

                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Manual Search Directory</h3>
                            </div>
                            <button className="text-sm flex items-center gap-1 text-muted-foreground hover:text-white transition">
                                <Filter className="w-4 h-4" /> Filter
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Mock Provider Cards */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="glass-panel p-5 flex gap-5 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <div className="w-20 h-20 rounded-xl bg-muted overflow-hidden shrink-0 bg-[url('https://api.dicebear.com/7.x/notionists/svg?seed=provider'+i)] bg-cover border border-white/10" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-white truncate text-lg group-hover:text-primary transition-colors">Elite Network Engineers</h3>
                                            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs font-bold text-white">4.9</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                                            <MapPin className="h-3 w-3" /> 1.2 miles away • Response avg: 5m
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dynamic Map Area */}
                <section className="flex-1 h-[50vh] lg:h-full relative bg-muted/20">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center animate-pulse border border-primary/50 blur-[2px] relative z-10">
                            <MapPin className="h-6 w-6" />
                        </div>

                        {/* Live routing visual simulation */}
                        <svg className="absolute w-[300px] h-[300px] text-primary/30" stroke="currentColor" fill="none">
                            <path d="M 50,250 C 100,100 200,300 250,50" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_10s_linear_infinite]" />
                        </svg>

                        <p className="text-muted-foreground mt-4 font-medium backdrop-blur-md px-6 py-2 rounded-full bg-background/80 border border-white/10 z-10 shadow-xl shadow-black/50">
                            Live Geolocation Tracking Available upon Booking
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
