"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, GripVertical, Settings, Trash2, ArrowLeft } from "lucide-react"

export default function ServiceCatalogEditor() {
    const [services, setServices] = useState([
        { id: "1", title: "Emergency Leak Repair", price: 150, unit: "fixed", isActive: true },
        { id: "2", title: "Standard Pipe Inspection", price: 80, unit: "per hour", isActive: true },
        { id: "3", title: "Water Heater Installation", price: 400, unit: "fixed", isActive: false },
    ])

    return (
        <div className="flex bg-background min-h-screen">

            <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-8 h-screen overflow-y-auto w-full relative">
                <header className="flex flex-col md:flex-row justify-between md:items-end gap-4 pb-6 border-b border-white/10 mt-10 md:mt-0">
                    <div>
                        <Link href="/provider/dashboard" className="text-muted-foreground hover:text-white flex items-center gap-1 text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Dashboard</Link>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Service Catalog</h1>
                        <p className="text-muted-foreground mt-1">Manage the services you offer, set dynamic pricing, and control visibility.</p>
                    </div>

                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-500/20 whitespace-nowrap">
                        <Plus className="w-5 h-5" /> Add New Service
                    </button>
                </header>

                <section>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex bg-black/40 border-b border-white/10 p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            <div className="w-10"></div>
                            <div className="flex-1">Service Details</div>
                            <div className="w-32 text-right">Pricing</div>
                            <div className="w-24 text-center">Status</div>
                            <div className="w-20 text-right">Actions</div>
                        </div>

                        <div className="divide-y divide-white/5">
                            {services.map((svc) => (
                                <div key={svc.id} className="flex items-center p-4 hover:bg-white/5 transition-colors group cursor-grab active:cursor-grabbing">
                                    <div className="w-10 flex justify-center text-muted-foreground group-hover:text-white transition-colors">
                                        <GripVertical className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white">{svc.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-0.5">Customizable parameters • Standard Service Area</p>
                                    </div>
                                    <div className="w-32 text-right">
                                        <div className="font-bold text-white">${svc.price.toFixed(2)}</div>
                                        <div className="text-xs text-muted-foreground">{svc.unit}</div>
                                    </div>
                                    <div className="w-24 text-center">
                                        <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold ${svc.isActive ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-white/10 text-muted-foreground border border-white/20"}`}>
                                            {svc.isActive ? "ACTIVE" : "DRAFT"}
                                        </span>
                                    </div>
                                    <div className="w-20 text-right flex justify-end gap-2">
                                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors">
                                            <Settings className="w-4 h-4" />
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {services.length === 0 && (
                            <div className="p-12 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                    <Plus className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No services yet</h3>
                                <p className="text-muted-foreground mb-6">Create your first service to start receiving AI-matched booking requests.</p>
                                <button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-lg transition-colors border border-white/10">Create Service</button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
