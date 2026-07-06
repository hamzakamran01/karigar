import Link from "next/link";
import { Clock, MapPin, Calendar, CreditCard, ChevronRight, Zap } from "lucide-react";

export default function CustomerDashboard() {
    return (
        <div className="flex bg-background min-h-screen">
            {/* Sidebar (Collapsed on mobile, can be extracted to layout) */}
            <aside className="w-64 border-r border-white/10 hidden lg:flex flex-col p-6 sticky top-0 h-screen bg-background/50 backdrop-blur-3xl">
                <div className="font-bold text-xl font-[family-name:var(--font-heading)] text-white mb-10">MK<span className="text-primary">.Client</span></div>
                <nav className="space-y-2 flex-1">
                    <Link href="/customer/dashboard" className="flex items-center gap-3 px-3 py-2 bg-primary/20 text-primary rounded-lg font-medium border border-primary/20"><Calendar className="w-5 h-5" /> My Bookings</Link>
                    <Link href="/explore" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><MapPin className="w-5 h-5" /> Find Services</Link>
                    <Link href="/customer/wallet" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition"><CreditCard className="w-5 h-5" /> Escrow Wallet</Link>
                </nav>
                <div className="pt-4 border-t border-white/10">
                    <form action="/api/auth/signout" method="POST">
                        <button className="text-sm text-destructive hover:font-bold transition-all w-full text-left px-3 py-2">Secure Logout</button>
                    </form>
                </div>
            </aside>

            <main className="flex-1 p-6 md:p-10 space-y-8 h-screen overflow-y-auto">
                <header className="flex justify-between items-end pb-6 border-b border-white/10">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Active Requests</h1>
                        <p className="text-muted-foreground mt-1">Manage your ongoing and upcoming service bookings.</p>
                    </div>
                    <Link href="/explore" className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition shadow-lg shadow-primary/20">
                        <Zap className="w-4 h-4" /> Book New Service
                    </Link>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                        In Progress
                    </h2>

                    <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-yellow-400 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-[50px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Provider En Route</span>
                                    <span className="text-muted-foreground text-sm flex items-center gap-1"><Clock className="w-3 h-3" /> ETA: 12 minutes</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Emergency Plumbing Repair</h3>
                                <p className="text-muted-foreground mt-1 flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Enterprise Blvd, Floor 4</p>
                            </div>

                            <div className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=provider1" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-primary/50 bg-muted" />
                                <div>
                                    <p className="font-semibold text-white">David Johnson</p>
                                    <p className="text-xs text-muted-foreground">Elite Verified Provider</p>
                                </div>
                                <button className="ml-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-white transition group">
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4 pt-4">
                    <h2 className="text-xl font-semibold text-white text-muted-foreground">Upcoming</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-white/20 transition-colors">
                            <div>
                                <h4 className="font-semibold text-lg text-white">Office Electrical Audit</h4>
                                <p className="text-sm text-muted-foreground">Scheduled for: Tomorrow, 09:00 AM</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-bold text-white">$450.00</span>
                                <span className="text-xs text-primary font-medium border border-primary/20 bg-primary/10 px-2 py-0.5 rounded">Escrow Secured</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
