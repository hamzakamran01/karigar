"use client"

import { useState } from "react"
import { login } from "@/app/actions/auth"
import Link from "next/link"

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const res = await login(formData)

        if (res?.error) {
            setError(res.error)
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

            <div className="z-10 w-full max-w-md glass-panel p-8 space-y-8 animate-slide-up-fade">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white">Welcome Back</h1>
                    <p className="text-sm text-muted-foreground mt-2">Sign in to your enterprise account.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
                            {error}
                        </div>
                    )}

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
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-white">Password</label>
                            <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                        </div>
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
                        className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Authenticating..." : "Sign In"}
                    </button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Don't have an account? <Link href="/auth/register" className="text-white hover:text-primary transition-colors font-medium">Create one now.</Link>
                </div>
            </div>
        </div>
    )
}
