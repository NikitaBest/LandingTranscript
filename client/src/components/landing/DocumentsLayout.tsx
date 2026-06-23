import type { ReactNode } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function DocumentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-60" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24 md:pt-28 pb-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
