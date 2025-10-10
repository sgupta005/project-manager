import { Layers, List, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  image,
  reverse,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8 md:gap-12`}
    >
      {/* Image */}
      <div className="flex-1 w-full">
        <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 bg-card/50 backdrop-blur-sm group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={image}
            alt={title}
            className="w-full h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg  border border-purple-500/20">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function EssentialFeatures() {
  const features = [
    {
      icon: <Layers className="w-6 h-6 " />,
      title: 'Board view',
      description:
        'Visualize your workflow. Move tasks between stages for clear progress tracking and better team collaboration.',
      image: '/kanban_view.png',
      reverse: false,
    },
    {
      icon: <List className="w-6 h-6 " />,
      title: 'Table view',
      description:
        'See it all at once. Prioritize and manage your tasks in a simple, organized table layout.',
      image: '/table_view.png',
      reverse: true,
    },
    {
      icon: <Calendar className="w-6 h-6 " />,
      title: 'Calendar view',
      description:
        'Plan your days. Never miss a deadline with tasks scheduled on your calendar.',
      image: '/calendar_view.png',
      reverse: false,
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            App Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary/70">
            <span className="block">Essential features</span>
            <span className="block ">for running your team</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
