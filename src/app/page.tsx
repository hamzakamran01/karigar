import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="animate-slide-up-fade z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 mt-24">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          MehnatKash Enterprise 2.0 is Live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight">
          Supercharge your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Local Services
          </span>
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          The worlds first AI-native marketplace connecting vetted professionals with elite consumers. Transparent pricing, dynamic scheduling, and unmatched reliability.
        </p>

        <div className="flex gap-4 items-center pt-4">
          <Link
            href="/explore"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-primary px-8 font-medium text-primary-foreground focus:outline-none hover:bg-primary/90 transition shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
          >
            Find a Professional
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>

          <Link
            href="/provider/onboarding"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Feature Grids - Glassmorphism */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 z-10 pb-20">
        {[
          {
            title: "AI Matchmaking",
            description: "Our proprietary AI engine guarantees you get the right expert at the fairest market price in milliseconds.",
            icon: "🧠"
          },
          {
            title: "Zero-Trust Security",
            description: "Payments are held in secure escrow. Every provider undergoes an exhaustive multi-tier verification process.",
            icon: "🛡️"
          },
          {
            title: "Live Command Center",
            description: "Track your provider on a map, chat via encrypted channels, and review metrics in real-time.",
            icon: "⚡"
          }
        ].map((feature, idx) => (
          <div key={idx} className="glass-panel p-8 flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
