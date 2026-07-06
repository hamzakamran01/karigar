"use client"

import { useState } from "react"
import { signup } from "@/app/actions/auth"
import Link from "next/link"

export default function RegisterPage() {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [role, setRole] = useState<"CUSTOMER" | "PROVIDER">("CUSTOMER")
    const [success, setSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        formData.append("role", role)
        const res = await signup(formData)

        if (res?.error) {
            setError(res.error)
            setIsLoading(false)
        } else if (res?.success) {
            setSuccess(true)
            setIsLoading(false)
        }
    }

    if (success) {
        return (
            <div className="flex min-h-screen items-center justify-center p-4 bg-background relative overflow-hidden">
                <div className="z-10 w-full max-w-md glass-panel p-8 space-y-6 text-center animate-slide-up-fade">
                    <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white">Check Your Email</h1>
                    <p className="text-muted-foreground">We sent a verification link to your email. Click it to activate your enterprise account.</p>
                    <div className="pt-2">
                        <Link href="/auth/login" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                            Return to Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/20 blur-[120px] pointer-events-none" />

            <div className="z-10 w-full max-w-lg glass-panel p-8 space-y-8 animate-slide-up-fade">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white">Join MehnatKash</h1>
                    <p className="text-sm text-muted-foreground mt-2">Sign up as a customer or service provider.</p>
                </div>

                <div className="flex gap-4 p-1 bg-white/5 border border-white/10 rounded-xl">
                    <button
                        type="button"
                        onClick={() => setRole("CUSTOMER")}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${role === "CUSTOMER" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-white"}`}
                    >
                        Customer
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("PROVIDER")}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${role === "PROVIDER" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-white"}`}
                    >
                        Service Provider
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Full Name</label>
                        <input
                            name="fullName"
                            type="text"
                            required
                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account? <Link href="/auth/login" className="text-white hover:text-primary transition-colors font-medium">Sign in.</Link>
                </div>
            </div>
        </div>
    )
}
