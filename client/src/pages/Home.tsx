import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import DemoReport from "@/components/landing/DemoReport";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import BenefitsSummary from "@/components/landing/BenefitsSummary";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <DemoReport />
        <FeaturesGrid />
        <BenefitsSummary />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
