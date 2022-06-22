import { useEffect } from 'react';

import { useLaunchProfileQuery } from 'generated/graphql';

import LaunchProfile from './LaunchProfile';

interface Props {
  id: number;
}

const LaunchProfileContainer: React.FC<Props> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch({ id: String(id) });
  }, [id, refetch]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>ERROR</div>;

  if (!data) return <div>Select a flight from the panel</div>;

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
