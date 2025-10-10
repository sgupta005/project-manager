import { Github } from 'lucide-react';
import Logo from '@/ui/Logo';

export default function LandingNavigation() {
  return (
    <nav className="fixed top-10 md:top-14 left-1/2 -translate-x-1/2 z-50 bg-muted shadow-lg opacity-95 rounded-lg">
      <div className="flex items-center justify-between min-w-[300px] md:min-w-xl py-3 px-6">
        <div className="flex gap-2 items-center">
          <Logo className="size-7 rounded-[3px]" />
          <p>Projexio</p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/sgupta005/Projexio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
