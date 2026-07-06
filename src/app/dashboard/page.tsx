import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardRouteController() {
    // Next 15 awaits cookies inside createClient
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/auth/login");
    }

    // Role is injected securely into user_metadata during signup inside auth.ts
    const role = user.user_metadata?.role;

    switch (role) {
        case "CUSTOMER":
            redirect("/customer/dashboard");
        case "PROVIDER":
            redirect("/provider/dashboard");
        case "ADMIN":
            redirect("/admin/analytics");
        default:
            redirect("/auth/onboarding");
    }
}
