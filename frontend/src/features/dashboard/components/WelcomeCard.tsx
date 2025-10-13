import { Sparkles, CheckCircle2, Users, FolderKanban } from 'lucide-react';
import CreateProject from '@/features/projects/components/CreateProject';
import { Button } from '@/components/ui/button';
import useCurrentUser from '@/features/auth/hooks/useCurrentUser';

export default function WelcomeCard() {
  const { user } = useCurrentUser();

  const userName = user?.firstName || user?.name || 'there';

  const quickTips = [
    {
      icon: FolderKanban,
      text: 'Create projects to organize your work',
    },
    {
      icon: CheckCircle2,
      text: 'Add tasks and assign them to team members',
    },
    {
      icon: Users,
      text: 'Invite your team to collaborate',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 rounded-lg p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-primary/10 rounded-full">
          <Sparkles className="size-6 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Projexio, {userName}!
          </h2>
          <p className="text-gray-600">
            Let's get started by creating your first project. Projects help you
            organize tasks and collaborate with your team effectively.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {quickTips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3 p-1  rounded-lg ">
            <tip.icon className="size-5 text-green-700 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">{tip.text}</p>
          </div>
        ))}
      </div>

      <CreateProject>
        <Button size="lg" className="w-full md:w-auto">
          <Sparkles className="size-4 mr-2" />
          Create Your First Project
        </Button>
      </CreateProject>
    </div>
  );
}
