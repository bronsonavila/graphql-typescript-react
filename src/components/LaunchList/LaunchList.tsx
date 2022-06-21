import styled from 'styled-components';

import { LaunchListQuery } from 'generated/graphql';

interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => (
  <Container>
    <h3>Launches</h3>
    <List>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <ListItem key={i}>
                {launch.mission_name} ({launch.launch_year})
              </ListItem>
            )
        )}
    </List>
  </Container>
);

const Container = styled.div`
  background-color: #ececec;
  height: 100vh;
  overflow: hidden auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 300px;
`;
const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  border-top: 1px solid #919191;
  cursor: pointer;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export default LaunchList;
