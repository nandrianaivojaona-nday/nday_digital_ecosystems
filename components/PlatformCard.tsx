"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

export type Status = "online" | "offline" | "coming";

type PlatformCardProps = {
  name: string;
  desc: string;
  className?: string;
  url?: string;
  status?: Status;
  label?: string;      // e.g. "Waste Management"
  image?: string;      // optional explicit flyer override
};

/* ================= COMPONENT ================= */

export default function PlatformCard({
  name,
  desc,
  className,
  url,
  status = "coming",
  label,
  image,
}: PlatformCardProps) {
  const isClickable = status === "online" && !!url;

  /* ================= STATUS ================= */

  const statusLabel = {
    online: "Live",
    offline: "Offline",
    coming: "Coming Soon",
  }[status];

  const statusClass = {
    online: "bg-emerald-500/90 text-white",
    offline: "bg-red-500/80 text-white",
    coming: "bg-white/20 text-white",
  }[status];

  /* ================= STYLE ================= */

  const inlineStyle = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  /* ================= CARD ================= */

  const Card = (
    <motion.div
      whileHover={{ y: isClickable ? -6 : 0 }}
      className={`platform-card ${className ?? ""} ${
        !isClickable ? "opacity-70 cursor-not-allowed" : ""
      }`}
      style={inlineStyle}
    >
      {/* LOGO */}
      <div className="card-logo" />

      {/* TOP BAR */}
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          {label || "Platform"}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusClass}`}
        >
          {statusLabel}
        </span>
      </div>

      {/* CONTENT */}
      <div className="mt-auto flex flex-col gap-2.5">
        <h2 className="text-xl font-semibold leading-tight text-white">
          {name}
        </h2>

        <p className="text-sm leading-relaxed text-white/85">
          {desc}
        </p>
      </div>
    </motion.div>
  );

  /* ================= LINK WRAPPER ================= */

  if (isClickable) {
    return (
      <Link
        href={url!}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {Card}
      </Link>
    );
  }

  return Card;
}