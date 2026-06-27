import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pb-20 pt-12 text-white">
      <div className="w-full max-w-5xl">
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Join NdaY’
          </h1>
          <p className="mt-4 text-lg font-medium text-white/80 drop-shadow-md">
            Become part of a national digital ecosystem.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Card 1: Why Join */}
          <section className="glass-card flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10">
            <h2 className="mb-6 flex items-center text-2xl font-semibold drop-shadow-sm">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                ✦
              </span>
              Why Join?
            </h2>
            <ul className="space-y-4 text-base text-white/80">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-white/60">•</span>
                Access to multiple ecosystems and digital tools
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-white/60">•</span>
                Participate in community-driven platforms
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-white/60">•</span>
                Unlock exclusive opportunities and services
              </li>
            </ul>
          </section>

          {/* Card 2: Membership Process */}
          <section className="glass-card flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10">
            <h2 className="mb-6 flex items-center text-2xl font-semibold drop-shadow-sm">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                ⚙
              </span>
              Process
            </h2>
            <ol className="space-y-4 text-base text-white/80">
              <li className="flex items-center">
                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">1</span>
                Application
              </li>
              <li className="flex items-center">
                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">2</span>
                Payment
              </li>
              <li className="flex items-center">
                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">3</span>
                Treasurer validation
              </li>
              <li className="flex items-center">
                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">4</span>
                Board approval
              </li>
              <li className="flex items-center">
                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">5</span>
                Activation
              </li>
            </ol>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/auth/register" 
            className="nav-link active rounded-full px-10 py-4 text-lg font-bold tracking-wide shadow-lg transition-transform hover:scale-105"
          >
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}
