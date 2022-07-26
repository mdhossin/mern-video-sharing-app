import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  Content,
  Title,
  DescWrapper,
  Name,
  ViewsWrapper,
  Views,
  Days,
} from "./styles";

const RelatedVideo = ({
  video: { name, profilePic, title, days, views, img },
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <DescWrapper>
          <Name>{name}</Name>
          <ViewsWrapper>
            <Views>{views} •</Views>
            <Days>{days}</Days>
          </ViewsWrapper>
        </DescWrapper>
      </Content>
    </Container>
  );
};

export default RelatedVideo;
