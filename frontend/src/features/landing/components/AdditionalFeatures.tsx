import {
  Filter,
  Tag,
  FileSpreadsheet,
  LayoutDashboard,
  BarChart3,
  Users,
} from 'lucide-react';

interface AdditionalFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AdditionalFeatureCard({
  icon,
  title,
  description,
}: AdditionalFeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50  transition-all duration-300 hover:shadow-lg ">
      <div className="relative space-y-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border  group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold ">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AdditionalFeatures() {
  const features = [
    {
      icon: <Filter className="w-6 h-6 " />,
      title: 'Filter by views',
      description:
        'Customize your view by filtering tasks by status, assignee, or date.',
    },
    {
      icon: <Tag className="w-6 h-6 " />,
      title: 'Kanban Board',
      description:
        'Visualize your workflow with an intuitive drag-and-drop board.',
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 " />,
      title: 'Your Tasks',
      description: 'View all your assigned tasks in one place.',
    },
    {
      icon: <Users className="w-6 h-6 " />,
      title: 'Team',
      description: 'Collaborate with your team and track their progress.',
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 " />,
      title: 'Dashboard',
      description: 'View dashboard to visualize goals and team progress.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 " />,
      title: 'Member & Project Report',
      description:
        'View daily task completion rates by member and overdue tasks by project.',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0  " />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            App Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary/70">
            <span className="block">And many</span>
            <span className="block ">more other ones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In addition to these features, Projexio offers many other
            functionalities to help your team succeed.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AdditionalFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
