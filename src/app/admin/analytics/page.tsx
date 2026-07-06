import Link from "next/link";
import { Activity, ShieldAlert, DollarSign, Users, Target, Search } from "lucide-react";

export default function AdminAnalytics() {
    return (
        <div className="flex bg-background min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 hidden lg:flex flex-col p-6 sticky top-0 h-screen bg-background/50 backdrop-blur-3xl">
                <div className="font-bold text-xl font-[family-name:var(--font-heading)] text-white mb-10">MK<span className="text-red-500">.Admin</span></div>
                <nav className="space-y-2 flex-1">
                    <Link href="/admin/analytics" className="flex items-center gap-3 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg font-medium border border-red-500/20"><Activity className="w-5 h-5" /> God Mode HQ</Link>
                    <Link href="/admin/disputes" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><ShieldAlert className="w-5 h-5" /> AI Dispute Desk</Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><Users className="w-5 h-5" /> User Management</Link>
                </nav>
            </aside>

            <main className="flex-1 p-6 md:p-10 space-y-8 h-screen overflow-y-auto">
                <header className="flex justify-between items-end pb-6 border-b border-white/10">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">Global System Health <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse ml-2" /></h1>
                        <p className="text-muted-foreground mt-1">Platform monitoring and AI sentiment tracking.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-black/50 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-bold text-white">99.99% Uptime</span>
                        </div>
                    </div>
                </header>

                {/* Global Financials */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { title: "Total Escrow Volume", value: "$1.4M", desc: "+4.5% (30d)", icon: DollarSign, color: "text-green-400" },
                        { title: "Active Providers", value: "24,510", desc: "98% AI KYC Cleared", icon: Users, color: "text-blue-400" },
                        { title: "Total Bookings", value: "142k", desc: "+12k today", icon: Activity, color: "text-purple-400" },
                        { title: "Open Disputes", value: "4", desc: "Requires manual review", icon: ShieldAlert, color: "text-red-400" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between h-32 hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start">
                                <span className="text-sm text-muted-foreground font-medium">{stat.title}</span>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{stat.desc}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* AI Sentiment & Dispute Queue */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">

                    <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border-l-4 border-l-red-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] pointer-events-none" />
                        <div className="relative z-10 flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">AI Moderation Queue</h2>
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/30 font-bold">1 URGENT</span>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-black/40 border border-red-500/30 p-4 rounded-xl flex flex-col md:flex-row justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-lg">Dispute #TXN-902</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Customer reported property damage. AI Sentiment: <span className="text-red-400 font-bold">Hostile (82%)</span></p>
                                    <div className="mt-2 text-xs p-2 bg-white/5 rounded border border-white/10 text-muted-foreground">
                                        AI Summary: Customer claims Elite Plumbing burst a pipe during repair. Photos uploaded. Substantial language detected.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 shrink-0">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-red-500/20 hover:bg-red-600 transition">Freeze Accounts</button>
                                    <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition">Review Case</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <h2 className="text-lg font-bold text-white mb-4">KYC Approvals</h2>
                        <p className="text-muted-foreground text-sm mb-6">3 providers rejected by OCR AI. Manual override requested.</p>

                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center border border-white/5 bg-black/20 p-3 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=reject${i}`} alt="Avatar" className="w-8 h-8 rounded-full bg-white/10" />
                                        <span className="text-sm text-white font-medium">Provider_{i}</span>
                                    </div>
                                    <button className="text-xs font-bold text-primary hover:underline">Audt</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
