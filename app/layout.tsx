// app/layout.tsx (SERVER COMPONENT)

import "./globals.css";
import ClientLayout from "./ClientLayout";
import NdaYLogo from "@/components/NdaYLogo";
import version from "@/lib/version";
import Link from "next/link";


export const metadata = {
  title: "NdaY’ Digital Ecosystems",
  description: "Bridging Innovation and Community",
  icons: {
    icon: "/assets/logo/nday-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>


      <footer className="fixed bottom-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-t border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <NdaYLogo size={42} />

            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">
                NdaY' Digital Public Infrastructure Ecosystems
              </p>

              <p className="text-xs text-white/60">
                v{version.version} • Build {version.build} • © {new Date().getFullYear()} NdaY' Individual Enterprise
              </p>
            </div>

          </div>

          <div className="hidden md:flex gap-5 text-xs text-white/60">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>
      </footer>
    </html>
  );
}