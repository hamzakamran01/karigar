"use client"

import { useState } from "react"
import { Sparkles, MapPin, FastForward, CheckCircle2 } from "lucide-react"

export function AiMatchmaker() {
    const [query, setQuery] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [results, setResults] = useState<any>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        setIsSearching(true)

        // Simulate AI Parsing intent (e.g calling OpenAI API via Server Action)
        setTimeout(() => {
            setIsSearching(false)
            setResults({
                intent: "Plumbing Repair",
                urgency: "HIGH",
                location: "New York, NY",
                matchCount: 3,
                confidence: "98%"
            })
        }, 1500)
    }

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">

            <form
                onSubmit={handleSearch}
                className={`w-full relative transition-all duration-500 ease-out ${results ? 'translate-y-[-20px]' : 'translate-y-0'}`}
            >
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl pointer-events-none" />
                <div className="relative flex items-center bg-black/50 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-2xl shadow-2xl overflow-hidden focus-within:border-primary/50 transition-colors">
                    <Sparkles className={`w-6 h-6 text-primary transition-transform ${isSearching ? 'animate-spin' : ''}`} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Describe your issue... (e.g 'My pipe just burst and water is everywhere')"
                        className="flex-1 bg-transparent border-none text-white px-4 h-14 focus:outline-none placeholder:text-muted-foreground/70"
                    />
                    <button
                        type="submit"
                        disabled={isSearching}
                        className="bg-primary text-primary-foreground font-bold px-6 h-12 rounded-xl hover:bg-primary/90 transition shadow-lg shadow-primary/25 disabled:opacity-50"
                    >
                        Find Expert
                    </button>
                </div>
            </form>

            {/* AI Processing Skeleton */}
            {isSearching && (
                <div className="w-full mt-6 space-y-4 animate-fade-in pl-4 border-l-2 border-primary/50">
                    <div className="flex gap-2 items-center text-sm font-medium text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Parsing Natural Language...
                    </div>
                    <div className="flex gap-2 items-center text-sm font-medium text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-white/20" /> Identifying Nearest Available Experts
                    </div>
                </div>
            )}

            {/* Results Output */}
            {results && (
                <div className="w-full mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 animate-slide-up-fade">
                    <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                        <div>
                            <h4 className="text-muted-foreground text-sm uppercase tracking-wider font-bold mb-1">AI Detected Intent</h4>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                {results.intent}
                                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-md">EMERGENCY</span>
                            </h3>
                        </div>
                        <div className="text-right">
                            <span className="text-primary font-bold text-2xl">{results.confidence}</span>
                            <p className="text-xs text-muted-foreground">Confidence Score</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm font-medium text-white">We found 3 Elite experts ready to deploy instantly:</p>

                        <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[url('https://api.dicebear.com/7.x/notionists/svg?seed=david')] bg-cover border-2 border-primary" />
                                <div>
                                    <h4 className="font-bold text-white flex items-center gap-1">David's Plumbing <CheckCircle2 className="w-4 h-4 text-green-400" /></h4>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> 2 miles away</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                <FastForward className="w-4 h-4" /> Instant Book
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
