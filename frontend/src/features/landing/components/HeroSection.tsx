import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-44 pt-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary/70">
              <span className="block ">Streamline your workflow</span>
              <span className="block ">Just get it done</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The powerful project management tool for teams with everything you
              need built right in
            </p>
          </div>

          <Link to="/organisation">
            <Button
              size="lg"
              className="mt-4 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </Link>

          <div className="pt-16 md:pt-28 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card/50">
              <img
                src="/dashboard.png"
                alt="Projexio Dashboard"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
