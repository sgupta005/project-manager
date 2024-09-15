import { Avatar, AvatarFallback, AvatarImage } from '@/ui/shadcn/ui/avatar';
import { Card } from '@/ui/shadcn/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { Organisation } from '@/types/definitions';
import { useNavigate } from 'react-router-dom';
import { userOrganisationStore } from './store';

function SelectOrganisation({
  organisations,
}: {
  organisations: [Organisation];
}) {
  const navigate = useNavigate();
  const setCurrentOrganisation = userOrganisationStore(
    (state) => state.setCurrentOrganisation
  );
  function handleSelectOrganisation(organisation: Organisation) {
    setCurrentOrganisation(organisation);
    navigate('/');
  }
  return (
    <>
      {organisations?.map((org: Organisation) => (
        <Card
          onClick={() => handleSelectOrganisation(org)}
          key={org.name}
          className="flex flex-col xl:flex-row text-lg cursor-pointer gap-4 justify-center items-center h-40 xl:w-96 xl:h-32 hover:bg-accent"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p>{org.name}</p>
            {org.updatedAt && (
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(org.updatedAt), {
                  addSuffix: true,
                })}
              </p>
            )}
          </div>
        </Card>
      ))}
    </>
  );
}

export default SelectOrganisation;
