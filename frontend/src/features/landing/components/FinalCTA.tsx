import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="relative pb-44 pt-24 md:pb-80 md:pt-44 overflow-hidden mx-auto max-w-5xl">
      {/* Content */}
      <div className="relative px-8  md:px-16  text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary/70">
            <span className="block">Start managing</span>
            <span className="block">your projects today</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams using Projexio to streamline their workflow
            and boost productivity
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/organisation">
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
          <a
            href="https://github.com/sgupta005/Projexio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Learn more →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
