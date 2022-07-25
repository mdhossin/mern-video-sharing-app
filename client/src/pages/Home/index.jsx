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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi
        quas odit temporibus, eius velit exercitationem culpa at vitae nisi
        error quis ut, eveniet alias accusamus. Recusandae amet eaque
        voluptatum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi
        quas odit temporibus, eius velit exercitationem culpa at vitae nisi
        error quis ut, eveniet alias accusamus. Recusandae amet eaque
        voluptatum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi
        quas odit temporibus, eius velit exercitationem culpa at vitae nisi
        error quis ut, eveniet alias accusamus. Recusandae amet eaque
        voluptatum?
      </p>
    </Container>
  );
};

export default Home;
