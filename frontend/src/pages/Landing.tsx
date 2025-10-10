import AdditionalFeatures from '@/features/landing/components/AdditionalFeatures';
import EssentialFeatures from '@/features/landing/components/EssentialFeatures';
import FinalCTA from '@/features/landing/components/FinalCTA';
import HeroSection from '@/features/landing/components/HeroSection';
import LandingNavigation from '@/features/landing/components/LandingNavigation';

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavigation />
      <main>
        <HeroSection />
        <EssentialFeatures />
        <AdditionalFeatures />
        <FinalCTA />
      </main>
    </div>
  );
}

export default Landing;
