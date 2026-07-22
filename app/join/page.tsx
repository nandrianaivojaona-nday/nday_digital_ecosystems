import Link from "next/link";
import Chapter from "@/components/ui/Chapter";

export default function JoinPage() {
  return (
    <Chapter
      id="join"
      title="Join NdaY’"
      description="Become part of a national digital ecosystem."
      align="center"
      className="pb-24"
    >
      <div className="flex w-full justify-center">
        <div className="w-full max-w-3xl space-y-12">
          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Why Join */}
            <div className="glass-card rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
              <h2 className="mb-6 flex items-center text-2xl font-semibold text-white">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                  ✦
                </span>
                Why Join?
              </h2>
              <ul className="space-y-4 text-sm text-white/80">
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
            </div>

            {/* Process */}
            <div className="glass-card rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
              <h2 className="mb-6 flex items-center text-2xl font-semibold text-white">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                  ⚙
                </span>
                Process
              </h2>
              <ol className="space-y-4 text-sm text-white/80">
                <li className="flex items-center">
                  <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    1
                  </span>
                  Application
                </li>
                <li className="flex items-center">
                  <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    2
                  </span>
                  Payment
                </li>
                <li className="flex items-center">
                  <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    3
                  </span>
                  Treasurer validation
                </li>
                <li className="flex items-center">
                  <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    4
                  </span>
                  Board approval
                </li>
                <li className="flex items-center">
                  <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-white">
                    5
                  </span>
                  Activation
                </li>
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-8 py-4 text-base font-bold text-cyan-200 transition hover:bg-cyan-500/30"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </Chapter>
  );
}