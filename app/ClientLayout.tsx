"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔹 Handle scroll (for shrinking header)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Observe header height dynamically
  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    });

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen isolate">
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm">
        <img
          src="/assets/backgrounds/nday-core.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* 🔝 HEADER */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 z-50 w-full border-b border-white/10 
        bg-black/40 backdrop-blur-2xl transition-all duration-300`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10
          ${isScrolled ? "py-2" : "py-4"}`}
        >
          {/* LOGO */}
          <Link href="/" className="site-logo shrink-0">
            <img
              src="/assets/logo/nday-logo.png"
              alt="NdaY' Logo"
              className={`drop-shadow-sm transition-all duration-300 ${
                isScrolled ? "w-27.5" : "w-32"
              }`}
            />
          </Link>

          {/* TITLE */}
          <div
            className={`hidden min-w-0 flex-1 border-l-4 border-white/14 pl-6 lg:block transition-all duration-300
            ${isScrolled ? "py-1" : "py-2"}`}
          >
            <h1
              className={`font-bold tracking-tight text-white drop-shadow-lg transition-all duration-300
              ${isScrolled ? "text-2xl" : "text-3xl xl:text-4xl"}`}
            >
              Digital Ecosystems
            </h1>
            <p className="mt-1 text-xs font-medium text-white/80 drop-shadow-md xl:text-sm">
              Bridging Innovation and Community for a Sustainable Madagascar
            </p>
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/partner">Partner / Sponsor</NavLink>
          </nav>

          {/* CTA */}
          <Link
            href="/join"
            className="nav-link active hidden px-6 font-bold md:flex"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* 📄 MAIN CONTENT */}
      <main
        style={{ paddingTop: headerHeight }}
        className="relative z-10 min-h-screen pb-8"
      >
        {children}
      </main>
    </div>
  );
}