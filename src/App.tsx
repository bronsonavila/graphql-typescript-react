import styled from 'styled-components';

import LaunchList from 'components/LaunchList';
import LaunchProfile from 'components/LaunchProfile';

const App = () => {
  return (
    <Container>
      <LaunchList />
      <LaunchProfile />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

export default App;
