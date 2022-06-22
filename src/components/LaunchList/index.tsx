import { useLaunchListQuery } from 'generated/graphql';

import LaunchList, { LaunchListProps } from './LaunchList';

const LaunchListContainer: React.FC<LaunchListProps> = (props) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>ERROR</div>;

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
