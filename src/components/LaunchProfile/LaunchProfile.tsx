import styled from 'styled-components';

import { LaunchProfileQuery } from 'generated/graphql';

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
    <Container>
      <Status>
        <span>Flight {data.launch.flight_number}: </span>
        {data.launch.launch_success ? (
          <Success>Success</Success>
        ) : (
          <Failed>Failed</Failed>
        )}
      </Status>
      <Title>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </Title>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <ImageList>
          {data.launch.links.flickr_images.map((image, i) =>
            image ? (
              <Image
                src={image}
                key={image}
                alt={`${data.launch?.mission_name} ${i}`}
              />
            ) : null
          )}
        </ImageList>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  max-height: 100%;
  overflow: hidden auto;
  padding-left: 20px;
  padding-right: 20px;
  width: calc(100vw - 300px);
`;
const Failed = styled.span`
  color: #ff695e;
`;
const Image = styled.img`
  width: 100%;
`;
const ImageList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
  padding-bottom: 100px;
`;
const Status = styled.div`
  margin-top: 40px;
`;
const Success = styled.span`
  color: #2cb84b;
`;
const Title = styled.h1`
  margin-bottom: 4px;
  margin-top: 0;
`;

export default LaunchProfile;
