import Link from "next/link";
import { TrendingUp, Users, CheckCircle, Clock } from "lucide-react";

export default function ProviderDashboard() {
    return (
        <div className="flex bg-background min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 hidden lg:flex flex-col p-6 sticky top-0 h-screen bg-background/50 backdrop-blur-3xl">
                <div className="font-bold text-xl font-[family-name:var(--font-heading)] text-white mb-10">MK<span className="text-blue-500">.Pro</span></div>
                <nav className="space-y-2 flex-1">
                    <Link href="/provider/dashboard" className="flex items-center gap-3 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg font-medium border border-blue-500/20"><TrendingUp className="w-5 h-5" /> Command Center</Link>
                    <Link href="/provider/schedule" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><Clock className="w-5 h-5" /> Schedule & Routes</Link>
                    <Link href="/provider/services" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><CheckCircle className="w-5 h-5" /> Service Catalog</Link>
                </nav>
            </aside>

            <main className="flex-1 p-6 md:p-10 space-y-8 h-screen overflow-y-auto">
                <header className="flex justify-between items-end pb-6 border-b border-white/10">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Pro Analytics</h1>
                        <p className="text-muted-foreground mt-1">Hello, David. You are in the top 5% of providers this week.</p>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
                        <span className="relative flex h-3 w-3 mx-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-white pr-2">Accepting Jobs</span>
                    </div>
                </header>

                {/* Global KPIs */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 border-t-2 border-t-blue-500">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium">Monthly Revenue</span>
                        </div>
                        <div className="text-4xl font-bold text-white">$14,250</div>
                        <p className="text-xs text-green-400 font-medium mt-2">+12.5% from last month</p>
                    </div>

                    <div className="glass-panel p-6 border-t-2 border-t-purple-500">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">Jobs Completed</span>
                        </div>
                        <div className="text-4xl font-bold text-white">42</div>
                        <p className="text-xs text-muted-foreground mt-2">100% Client Satisfaction</p>
                    </div>

                    <div className="glass-panel p-6 border-t-2 border-t-orange-500">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-medium">Profile Views</span>
                        </div>
                        <div className="text-4xl font-bold text-white">1,204</div>
                        <p className="text-xs text-muted-foreground mt-2">Driven by AI Matchmaking</p>
                    </div>
                </section>

                {/* Next Job Focus */}
                <section className="space-y-4 pt-6">
                    <h2 className="text-xl font-semibold text-white">Dispatch Queue</h2>

                    <div className="bg-gradient-to-r from-blue-900/40 to-blue-600/10 border border-blue-500/30 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                        <div className="flex-1 relative z-10">
                            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2 block">Action Required</span>
                            <h3 className="text-2xl font-bold text-white">Emergency Plumbing Repair</h3>
                            <p className="text-muted-foreground text-sm mt-1">Client: Sarah Jenkins • Distance: 2.4 miles</p>
                        </div>

                        <div className="flex gap-3 relative z-10 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition">
                                Acknowledge & Route
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
