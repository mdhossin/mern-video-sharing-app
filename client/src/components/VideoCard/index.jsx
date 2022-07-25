import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  ContentWraper,
  Logo,
  TitleContainer,
  LogoImage,
  Title,
  ViewsContent,
  Name,
  Views,
  Days,
  ViewsContainer,
} from "./styles";

const VideoCard = ({
  video: { img, name, title, profilePic, days, views },
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={img} />
        <ContentWraper>
          <Logo>
            <LogoImage src={profilePic} />
          </Logo>
          <TitleContainer>
            <Title>{title}</Title>

            <ViewsContent>
              <Name>{name}</Name>
              <ViewsContainer>
                <Views>{views}</Views>
                <Days>{days}</Days>
              </ViewsContainer>
            </ViewsContent>
          </TitleContainer>
        </ContentWraper>
      </ImageContainer>
    </Container>
  );
};

export default VideoCard;
