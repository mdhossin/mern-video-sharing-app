import React from "react";
import { VideoCard } from "../../components";
import { videodata } from "../../fakedata";
import { Container, Wrapper } from "./styles";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        {videodata.map((video, index) => (
          <VideoCard video={video} key={`index-${index}`} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;
