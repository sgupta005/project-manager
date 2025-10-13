import { useParams } from 'react-router-dom';
import useGetUserTasks from '../../tasks/hooks/useGetUserTasks';
import { LoadingSpinner } from '@/ui/LoadingSpinner';
import Analytics from './Analytics';
import UpcomingTasks from './UpcomingTasks';
import ProjectsList from './ProjectsList';
import TeamMembers from './TeamMembers';
import WelcomeCard from './WelcomeCard';
import useGetOrganisationAnalytics from '../hooks/useGetOrganisationAnalytics';
import useGetAllProjects from '@/features/projects/hooks/useGetAllProjects';

export default function DashboardLayout({ userId }: { userId: string }) {
  const { orgId } = useParams<{
    orgId: string;
  }>();
  const { tasks, isGettingTasks } = useGetUserTasks(orgId || '', userId);
  const { analytics, isGettingAnalytics } = useGetOrganisationAnalytics(
    orgId || ''
  );
  const { projects, isGettingProjects } = useGetAllProjects(orgId || '');

  if (isGettingTasks || isGettingAnalytics || isGettingProjects) {
    return <LoadingSpinner />;
  }

  // Check if this is a completely empty dashboard (first-time user)
  const isEmptyDashboard =
    (!projects || projects.length === 0) && (!tasks || tasks.length === 0);

  return (
    <div className="space-y-6 px-6 pb-6">
      {!isEmptyDashboard && <Analytics analytics={analytics} />}
      {isEmptyDashboard && <WelcomeCard />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingTasks tasks={tasks} />
        <ProjectsList />
      </div>

      <TeamMembers />
    </div>
  );
}
