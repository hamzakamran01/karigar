"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowUpRight, ArrowDownLeft, Clock, Search, HelpCircle, CheckCircle2 } from "lucide-react"

export default function CustomerWallet() {
    const [transactions] = useState([
        { id: "TXN-001", type: "ESCROW_HOLD", amount: 450.00, status: "LOCKED", date: "Today, 10:45 AM", provider: "Elite Electrical Co." },
        { id: "TXN-002", type: "WITHDRAWAL", amount: 120.00, status: "COMPLETED", date: "Yesterday, 02:15 PM", provider: "Dave's Plumbing" },
        { id: "TXN-003", type: "DEPOSIT", amount: 500.00, status: "COMPLETED", date: "Oct 12, 09:00 AM", provider: "Card ending in 4242" },
    ])

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 h-20 flex items-center">
                    <Link href="/customer/dashboard" className="font-bold text-xl font-[family-name:var(--font-heading)] text-white tracking-tight mr-4">
                        MK<span className="text-primary">.Client</span>
                    </Link>
                    <div className="ml-auto flex items-center gap-4">
                        <span className="text-sm font-medium text-white px-3 py-1.5 bg-white/10 rounded-full border border-white/5 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-400" /> Secure Connection
                        </span>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto p-4 md:p-8 space-y-8 animate-slide-up-fade">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Wallet Balance Card */}
                    <div className="w-full md:w-[400px] glass-panel p-8 relative overflow-hidden shrink-0 shadow-[0_20px_50px_-20px_rgba(139,92,246,0.3)] border-t border-t-primary/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                <Shield className="w-5 h-5 text-primary" />
                                <span className="font-medium">Escrow Wallet Balance</span>
                                <HelpCircle className="w-4 h-4 ml-auto text-muted-foreground/50 hover:text-white cursor-pointer" />
                            </div>

                            <div className="text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
                                $1,250<span className="text-3xl text-muted-foreground">.00</span>
                            </div>

                            <div className="mt-6 p-4 bg-black/40 rounded-xl border border-white/5 backdrop-blur-md">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Currently Locked</span>
                                    <span className="text-yellow-400 font-bold">$450.00</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                                    <div className="w-[35%] h-full bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                </div>
                                <p className="text-xs text-muted-foreground mt-3 text-center">Funds are held securely by Stripe until you scan the provider's QR Code.</p>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/10 py-3 rounded-xl font-medium transition-all">Add Funds</button>
                                <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 py-3 rounded-xl font-medium transition-all">Withdraw</button>
                            </div>
                        </div>
                    </div>

                    {/* Ledger & Transactions */}
                    <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Transaction Ledger</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input type="text" placeholder="Search transactions..." className="bg-black/40 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-primary/50" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {transactions.map((txn) => (
                                <div key={txn.id} className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.type === 'ESCROW_HOLD' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/20' :
                                                txn.type === 'DEPOSIT' ? 'bg-green-400/20 text-green-400 border border-green-400/20' :
                                                    'bg-blue-400/20 text-blue-400 border border-blue-400/20'
                                            }`}>
                                            {txn.type === 'ESCROW_HOLD' ? <Clock className="w-5 h-5" /> : txn.type === 'DEPOSIT' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{txn.type === 'ESCROW_HOLD' ? 'Escrow Locked' : txn.type === 'DEPOSIT' ? 'Card Deposit' : 'Service Payment'}</p>
                                            <p className="text-sm text-muted-foreground">{txn.provider} • {txn.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`block font-bold ${txn.type === 'DEPOSIT' ? 'text-green-400' : 'text-white'}`}>
                                            {txn.type === 'DEPOSIT' ? '+' : '-'}${txn.amount.toFixed(2)}
                                        </span>
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${txn.status === 'LOCKED' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-green-400/10 text-green-400'
                                            }`}>
                                            {txn.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
