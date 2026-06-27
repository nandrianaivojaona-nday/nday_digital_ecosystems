import React from "react";
import Link from "next/link";
import PlatformCard from "../components/PlatformCard";

type Status = "online" | "offline" | "coming";
type PlatformCardProps = {
  name: string;
  desc: string;
  className?: string;
  url?: string;
  status?: Status;
  image?: string;
};
type Platform = {
  name: string;
  label: string;
  className: string;
  desc: string;
  url?: string;
  status: Status;
};
const platforms: Platform[] = [
  {
    name: "NdaY'Fako",
    label: "Waste Management",
    className: "fako",
    desc: "Waste management ecosystem connecting citizens, collectors, operators and municipalities.",
    status: "online",
    url: "https://nday-fako.web.app",
  },
  {
    name: "NdaY'Tantsaha",
    label: "Agriculture",
    className: "tantsaha",
    desc: "Agricultural ecosystem connecting farmers, markets and knowledge networks.",
    status: "coming",
  },
  {
    name: "NdaY'Tsidika",
    label: "Tourism",
    className: "tsidika",
    desc: "Tourism ecosystem enabling discovery and cultural experiences.",
    status: "coming",
  },
  {
    name: "NdaY'Hety",
    label: "Beauty & Personal Care",
    className: "hety",
    desc: "Beauty and personal care services connecting professionals and clients.",
    status: "offline",
  },
  {
    name: "NdaY'Lanona",
    label: "Events & Ceremonies",
    className: "lanona",
    desc: "Event ecosystem covering traditional, civil and modern ceremonies.",
    status: "coming",
  },
  {
    name: "NdaY'Radoko",
    label: "Health (IMCI Focus)",
    className: "radoko",
    desc: "Health ecosystem focused on integrated child care and community health services.",
    status: "offline",
  },
  {
    name: "NdaY'Ben'Tanàna",
    label: "Governance",
    className: "bentanana",
    desc: "Governance ecosystem supporting civic participation and public services.",
    status: "coming",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      

      {/* 2. APP IDENTITY HEADER (The Title & Subtitle) */}
      {/* We use pt-32 to start exactly where the nav bar ends */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <div className="border-l-4 border-white/20 pl-6 py-2">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
            NdaY’ Digital Ecosystems
          </h1>
          <p className="mt-4 text-lg font-medium text-white/80 drop-shadow-md md:text-2xl">
            Bridging Innovation and Community for a Sustainable Madagascar
          </p>
        </div>

        {/* 3. ECOSYSTEM GRID (Starts immediately after the title) */}
        <div className="mt-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-8 px-1">
            Explore Ecosystems
          </h2>
          <div className="platform-grid">
            {platforms.map((p, i) => (
              <PlatformCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}