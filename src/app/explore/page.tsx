import Link from "next/link";
import { Search, MapPin, Star, Filter } from "lucide-react";

export default function ExplorePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Search Header */}
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 h-20 flex items-center gap-4">
                    <Link href="/" className="font-bold text-xl font-[family-name:var(--font-heading)] text-white tracking-tight mr-4">
                        MK<span className="text-primary">.Enterprise</span>
                    </Link>

                    <div className="flex-1 max-w-2xl relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="What service do you need? (e.g. Emergency Plumber)"
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-full pl-11 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <button className="hidden md:flex items-center gap-2 px-4 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                        <Filter className="h-4 w-4" />
                        Filters
                    </button>
                </div>
            </header>

            {/* Main Content (Split View) */}
            <main className="flex-1 flex overflow-hidden lg:flex-row flex-col-reverse h-[calc(100vh-80px)]">

                {/* Directory List */}
                <section className="w-full lg:w-[45%] xl:w-[40%] flex flex-col h-full bg-background border-r border-white/10 overflow-y-auto custom-scrollbar">
                    <div className="p-4 md:p-6 space-y-6">

                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-2xl font-semibold text-white">Top Providers Nearby</h2>
                                <p className="text-muted-foreground mt-1">2,410 verified experts in your area</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Mock Provider Cards (To be mapped from Prisma) */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="glass-panel p-5 flex gap-5 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <div className="w-24 h-24 rounded-xl bg-muted overflow-hidden shrink-0 bg-[url('https://api.dicebear.com/7.x/notionists/svg?seed=provider'+i)] bg-cover" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-white truncate text-lg group-hover:text-primary transition-colors">Elite Electrical Co.</h3>
                                            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs font-bold text-white">4.9</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                                            <MapPin className="h-3 w-3" /> 2.4 miles away • Responsive
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium border border-primary/20">Master Electrician</span>
                                            <span className="px-2 py-1 rounded bg-white/10 text-muted-foreground text-xs font-medium border border-white/5">Emergency Repairs</span>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex flex-col justify-between items-end">
                                        <span className="text-lg font-bold text-white">$120<span className="text-sm font-normal text-muted-foreground">/hr</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dynamic Map Area */}
                <section className="flex-1 h-[40vh] lg:h-full relative bg-muted/20">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center animate-pulse border border-primary/50 blur-[2px]">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <p className="text-muted-foreground mt-4 font-medium backdrop-blur-md px-4 py-1 rounded-full bg-background/50 border border-white/10">Interactive Map initializing...</p>
                        <p className="text-xs text-muted-foreground mt-1 max-w-sm text-center">Google Maps / Mapbox GL Integration will mount here showing real-time clustered provider tracking.</p>
                    </div>
                </section>

            </main>
        </div>
    );
}
