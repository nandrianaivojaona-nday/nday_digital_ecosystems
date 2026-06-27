"use client";

import { motion } from "framer-motion";
import PlatformCard from "@/components/PlatformCard";

type Status = "online" | "offline" | "coming";

type Platform = {
  name: string;
  className: string;
  label: string;
  desc: string;
  url?: string;
  status: Status;
};

const platforms: Platform[] = [
  {
    name: "NdaY'Fako",
    label: "Waste Management",
    className: "fako",
    desc: "Waste management ecosystem connecting citizens, collectors and municipalities.",
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

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 text-white">
      <div className="mx-auto w-full max-w-6xl space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 text-center md:p-12"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            NdaY’ Digital Ecosystem
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg">
            Connecting people, empowering communities, elevating life.
          </p>
        </motion.section>

        <section className="text-center">
          <h2 className="mb-10 text-3xl font-semibold">The Ecosystem</h2>
          <div className="platform-grid">
            {platforms.map((platform, index) => (
              <PlatformCard key={index} {...platform} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
