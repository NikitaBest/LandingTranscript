import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import DemoReport from "@/components/landing/DemoReport";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import BenefitsSummary from "@/components/landing/BenefitsSummary";
// import Pricing from "@/components/landing/Pricing"; // Временно скрыто
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-hidden">
      {/* Global Tech Grid Background - Fixed */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-60" />
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <Benefits />
          <HowItWorks />
          <DemoReport />
          <FeaturesGrid />
          <BenefitsSummary />
          {/* <Pricing /> */}
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
