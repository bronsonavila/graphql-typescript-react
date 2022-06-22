import { useState } from 'react';
import styled from 'styled-components';

import LaunchList from 'components/LaunchList';
import LaunchProfile from 'components/LaunchProfile';

const App = () => {
  const [id, setId] = useState(1);

  return (
    <Container>
      <LaunchList changeId={(id: number) => setId(id)} />
      <LaunchProfile id={id} />
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
