"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect("/dashboard")
}

export async function signup(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string
    const role = formData.get("role") as string

    if (!email || !password || !fullName || !role) {
        return { error: "Missing required fields" }
    }

    const supabase = await createClient()

    const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
                role: role
            }
        }
    })

    if (signUpError) {
        return { error: signUpError.message }
    }

    return { success: true }
}

export async function signout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect("/auth/login")
}
