"use client"

import { useState } from "react"
import { CheckCircle2, Building, ShieldCheck, MapPin, Search } from "lucide-react"

export default function ProviderOnboarding() {
    const [step, setStep] = useState(1)

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault()
        if (step < 4) setStep(step + 1)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Dynamic Backgrounds */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full max-w-4xl glass-panel p-8 md:p-12 z-10 animate-slide-up-fade">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Progress Sidebar */}
                    <div className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                        <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">Setup Profile</h2>
                        <p className="text-sm text-muted-foreground mb-8">AI-Powered Zero Trust onboarding protects our marketplace.</p>

                        <div className="space-y-6">
                            {[
                                { id: 1, name: "Business Details", icon: Building },
                                { id: 2, name: "Service Zones", icon: MapPin },
                                { id: 3, name: "Identity Verification", icon: ShieldCheck },
                                { id: 4, name: "Final Review", icon: CheckCircle2 }
                            ].map((s) => (
                                <div key={s.id} className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold transition-colors ${step > s.id ? 'bg-green-500 border-green-500 text-white' :
                                            step === s.id ? 'bg-blue-600/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' :
                                                'bg-transparent border-white/20 text-muted-foreground'
                                        }`}>
                                        {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
                                    </div>
                                    <span className={`text-sm font-medium ${step >= s.id ? 'text-white' : 'text-muted-foreground'}`}>
                                        {s.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="flex-1 min-h-[400px] flex flex-col justify-center">

                        {step === 1 && (
                            <form onSubmit={handleNext} className="space-y-6 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Business Identity</h3>
                                    <p className="text-muted-foreground text-sm">Tell us about your professional services agency.</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Legal Business Name or Full Name</label>
                                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50" placeholder="Acme Services LLC" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Years of Experience</label>
                                    <input required type="number" min="0" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50" placeholder="e.g 5" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Short Bio</label>
                                    <textarea rows={3} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 resize-none" placeholder="Describe your expertise..." />
                                </div>

                                <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">Continue to Location</button>
                            </form>
                        )}

                        {step === 2 && (
                            <form onSubmit={handleNext} className="space-y-6 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Service Geolocation</h3>
                                    <p className="text-muted-foreground text-sm">Our AI routes jobs based on your territory.</p>
                                </div>

                                <div className="bg-black/30 border border-white/5 rounded-xl p-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                                    <div className="relative z-10 flex flex-col items-center justify-center py-8">
                                        <MapPin className="w-12 h-12 text-blue-500 mb-2 animate-bounce" />
                                        <p className="text-white font-medium text-center">Interactive Map Plugin Placeholder</p>
                                        <p className="text-muted-foreground text-sm text-center mt-1">Select your radius of operation</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="space-y-2 flex-1">
                                        <label className="text-sm font-medium text-white">City Operations</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50" placeholder="San Francisco" />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <label className="text-sm font-medium text-white">Max Radius (Miles)</label>
                                        <input required type="number" min="1" max="100" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50" defaultValue="15" />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">Back</button>
                                    <button type="submit" className="flex-1 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">Verify Identity</button>
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <form onSubmit={handleNext} className="space-y-6 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Zero-Trust KYC</h3>
                                    <p className="text-muted-foreground text-sm">Upload a government ID. Our OCR engine verifies it in seconds.</p>
                                </div>

                                <div className="border-2 border-dashed border-white/20 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                                    <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
                                    <h4 className="text-white font-medium">Click to Upload Document</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Driver's License, Passport, or State ID</p>
                                </div>

                                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-yellow-200/80">Your data is instantly encrypted and processed strictly for background verification using our internal AI endpoints. We do not store raw images.</p>
                                </div>

                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">Back</button>
                                    <button type="submit" className="flex-1 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">Submit to AI Parsing</button>
                                </div>
                            </form>
                        )}

                        {step === 4 && (
                            <div className="space-y-6 text-center py-8 animate-slide-up-fade">
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Profile Under AI Review</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto">Your verification documents have been parsed successfully. Our systems are checking criminal background databases and matching your face data.</p>

                                <div className="pt-8">
                                    <Link href="/provider/dashboard" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all inline-block">
                                        Enter Provider Dashboard
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
